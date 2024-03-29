import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, FormGroupDirective, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Observable, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Booking, Room, UpdateOn, User } from 'src/app/interface';
import * as fromInterface from 'src/app/interface';

import { environment } from 'src/environments/environment';
import { ScheduleService } from '../../schedule/schedule.service';
import * as fns from 'date-fns';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { getUser } from 'src/app/store/reducers/user.reducer';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.page.html',
  styleUrls: ['./booking-form.page.scss'],
})
export class BookingFormPage implements OnInit {
  user: User;
  room: Room;
  booking: Booking;
  date: string;
  bookingForm: FormGroup;

  calculatedData: {
    days?: number;
    bookingPrice?: number;
    totalPaid?: number;
    balance?: number;
    bookingStep?: string;
    pricePerNight?: number;
  } = {};
  isCancelled = false;

  updated = true;
  monthNames: any;
  bookingSteps = fromInterface.bookingSteps;
  paymentMethods = fromInterface.paymentMethods;
  editPayment: null | number = null;
  availableTo: null | string = null;
  fromPlusOneDay: string;
  mode: 'new' | 'edit';
  @ViewChild('bookingFormDirective', { static: false }) bookingFormDirective: FormGroupDirective;

  constructor(
    private route: ActivatedRoute,
    private scheduleService: ScheduleService,
    private navController: NavController,
    private router: Router,
    private alertController: AlertController,
    private store: Store<State>,
    private translate: TranslateService,
  ) { }


  ngOnInit() {
    this.bookingForm = new FormGroup({
      _id: new FormControl(
          '', {
            updateOn: 'change',
          }),
      guestName: new FormControl(
          'Guest',
          {
            updateOn: 'change',
            validators: [ // from a-z, A-Z, 0-9, а-я, А-Я and single characters іІїЇєЄ_@#$%№  \'(js)   "   \\-(regex), minLength 2?, max 40
              Validators.pattern('^[a-zA-Z0-9а-яА-ЯіІїЇєЄ_@#$%№\'"\\-]+$'),
              Validators.minLength(2),
              Validators.maxLength(40),
              Validators.required,
            ],
          }),
      guestPhone: new FormControl(
          '380500000000',
          {
            updateOn: 'change',
            validators: [
              Validators.required,
              Validators.pattern('^((\\+[0-9]{3})|[0-9]{3}|0)[0-9]{9}$'),
              Validators.minLength(9),
              Validators.maxLength(13),
            ],
          },
      ),
      guestEmail: new FormControl(
          '', {
            updateOn: 'change',
            validators: [
              Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
            ],
          }),
      // price: new FormControl(
      //     0, {
      //       updateOn: 'change',
      //       validators: [
      //         Validators.required,
      //         Validators.pattern('[0-9]*'),
      //       ],
      //     }),
      discount: new FormControl(
          0, {
            updateOn: 'change',
            validators: [
              Validators.required,
              Validators.pattern('[0-9]*'),
              Validators.max(this.calculatedData.bookingPrice ? this.calculatedData.bookingPrice : null),
            ],
          }),
      // bookingStep: new FormControl(
      //     'preorder', {
      //       updateOn: 'change',
      //       validators: [
      //         Validators.required,
      //         Validators.pattern('^preorder|waiting\\-for\\-payment|reserved|cancelled$'),
      //       ],
      //     }),
      dates: new FormGroup({
        from: new FormControl(
            0, {
              updateOn: 'change',
              validators: [
                Validators.required,
              ],
            }),
        to: new FormControl(
            0, {
              updateOn: 'change',
              validators: [
                Validators.required,
              ],
            }),
      }),
      payments: new FormArray([]),
    });

    this.route.paramMap.pipe(
        switchMap((paramMap): Observable<Room> => {
          if (paramMap.get('bookingId')) {
          // edit booking
            this.mode = 'edit';
            return this.scheduleService.getBookingById(paramMap.get('bookingId')).pipe(
                switchMap((booking) => {
                  this.isCancelled = booking.bookingStep === 'cancelled';
                  this.booking = this.scheduleService.convertBookingDatesIsoToShort(booking);
                  this.booking.payments.forEach((_) => this.addPaymentsArrayControl());
                  this.bookingForm.patchValue(this.booking);
                  return this.scheduleService.getRoomById(booking.room_id);
                }),
            );
          } else if (paramMap.get('roomId')) {
          // new booking
            this.mode = 'new';
            this.date = paramMap.get('date');
            return this.scheduleService.getRoomById(paramMap.get('roomId'));
          } else {
            return throwError('error parameter');
          }
        }),
        switchMap((room: Room) => {
          this.room = room;
          if (this.mode === 'edit') {
            return this.scheduleService.getAvailableDateTo(this.booking.room_id, this.booking.dates.to as string);
          } else if (this.mode === 'new') {
            this.fromPlusOneDay = this.scheduleService.convertDateToShort(
                fns.add(this.scheduleService.convertShortToDate(this.date), { days: 1 }),
            );
            this.bookingForm.get('dates').get('from').setValue(this.date);
            this.bookingForm.get('dates').get('to').setValue(this.fromPlusOneDay);
            return this.scheduleService.getAvailableDateTo(this.room._id, this.date);
          } else {
            return throwError('error get room');
          }
        },
        ),
        switchMap(
            (availableTo) => {
              if (availableTo) {
                this.availableTo = this.scheduleService.convertISOToShort(availableTo);
              } else {
                this.availableTo = this.scheduleService.convertDateToShort(fns.add(new Date(), { days: 30 }));
              }
              this.calcData();
              return this.bookingForm.valueChanges;
            }),
    ).subscribe((_) => this.calcData(),
        (err) => console.log('error', err),
    );

    this.store.select(getUser)
        .subscribe((user) => {
          this.user = user;
        });

    this.translate.stream('elements.datePicker.monthNames')
        .subscribe((monthNames) => {
        // reload select translation
          this.updated = false;
          this.monthNames = monthNames;
          setTimeout(() => this.updated = true, 1);
        });
  }

  ionViewWillEnter() {
    this.updated = false;
    setTimeout(() => this.updated = true, 1);
  }

  calcData() {
    this.calculatedData.days = fns.differenceInCalendarDays(
        this.scheduleService.convertShortToDate(this.bookingForm.get('dates').get('to').value),
        this.scheduleService.convertShortToDate(this.bookingForm.get('dates').get('from').value),
    );
    this.calculatedData.bookingPrice = this.booking?.price ? this.booking.price : this.room.price * this.calculatedData.days;
    this.calculatedData.pricePerNight =
      this.calculatedData.bookingPrice / this.calculatedData.days;
    let amount = 0;
    this.bookingForm.get('payments')['controls'].forEach((control) => {
      amount += control.get('amount').value;
    });
    this.calculatedData.totalPaid = amount;
    this.calculatedData.balance = this.calculatedData.totalPaid - this.calculatedData.bookingPrice +
      (+this.bookingForm.get('discount').value);

    if (this.isCancelled) {
      this.calculatedData.bookingStep = 'cancelled';
    } else if (this.calculatedData.balance >= 0) {
      this.calculatedData.bookingStep = 'paid';
    } else if (this.calculatedData.totalPaid > 0) {
      this.calculatedData.bookingStep = 'reserved';
    } else {
      this.calculatedData.bookingStep = 'preorder';
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Cancel reservation',
      subHeader: 'Reservation will be cancelled and dessapears from schedule',
      message: 'Are you shure?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        // cssClass: 'secondary',
        handler: (blah) => {
          // console.log('Confirm Cancel: blah');
        },
      }, {
        text: 'Ok',
        handler: () => {
          this.isCancelled = true;
          this.calcData();
          this.onFormSubmit();
        },
      }],
    });
    await alert.present();
  }

  get paymentsFormGroup() {
    return {
      _id: new FormControl(
          '',
          {
            updateOn: 'change',
          },
      ),
      date: new FormControl(
          this.scheduleService.convertDateToShort(new Date()),
          {
            updateOn: 'change',
            validators: [
              Validators.required,
            ],
          },
      ),
      amount: new FormControl(
          200,
          {
            updateOn: 'change',
            validators: [
              Validators.required,
              Validators.pattern('[0-9]*'),
            ],
          },
      ),
      paymentMethod: new FormControl(
          'cash',
          {
            updateOn: 'change',
            validators: [
              Validators.required,
              Validators.pattern('^card|cash$'),
            ],
          },
      ),
    };
  }

  getPaymentsArrayControlAt(i): AbstractControl {
    const arrayControl = this.bookingForm.get('payments') as FormArray;
    return arrayControl.at(i);
  }

  addPaymentsArrayControl() {
    const control = this.bookingForm.get('payments') as FormArray;
    control.push(new FormGroup({ ...this.paymentsFormGroup }));
  }

  addPaymentsArrayControlToBegin() {
    const control = this.bookingForm.get('payments') as FormArray;
    control.push(new FormGroup(this.paymentsFormGroup));
    const newControl = { ...control.at(control.controls.length - 1).value };
    for (let i = control.controls.length - 1; i > 0; i--) {
      control.at(i).setValue({ ...control.at(i - 1).value });
    }
    control.at(0).setValue(newControl);
  }


  editPayments(position: number | null) {
    this.editPayment = position;
  }

  private initControl(formState: any = null, options?: { validators?: ValidatorFn[], updateOn?: UpdateOn }) {
    return new FormControl(formState, options);
  }

  addControl(
      formField: string,
      data?: { formState?: any, options?: { validators?: ValidatorFn[], updateOn?: UpdateOn } },
  ) {
    this.bookingForm.addControl(formField, this.initControl(data.formState, data.options));
  }

  addArrayControl(
      formField: string,
      data?: { formState?: any, options?: { validators?: ValidatorFn[], updateOn?: UpdateOn } },
  ) {
    const control = this.bookingForm.get(formField) as FormArray;
    control.push(this.initControl(data.formState, data.options));
  }

  removeArrayControl(formField: string, position: number) {
    const control = this.bookingForm.get(formField) as FormArray;
    control.removeAt(position);
  }

  onFormCancel() {
    this.resetForm();
    this.navController.back();
  }

  onFormSubmit() {
    let booking =
    {
      ...this.bookingForm.value,
      room_id: this.room._id,
      price: this.calculatedData.bookingPrice,
      bookingStep: this.calculatedData.bookingStep,
    };
    // prepare booking object to send to server
    // booking = this.scheduleService.convertBookingDatesIsoToNumber(booking);
    booking = this.scheduleService.convertBookingDatesIsoToShort(booking);

    this.scheduleService.upsertBooking(booking)
        .subscribe((result) => {
          this.resetForm();
          // const url = booking._id ? '/schedule/discover/' + booking._id : '/schedule/discover/' + result.upserted[0]._id;
          // if (booking._id) {
          // edit
          this.navController.back();
          // } else {
          // new
          //   this.router.navigateByUrl('/schedule/discover/' + result.upserted[0]._id);
          // }
        },
        (err) => console.log('error', err.error));
  }

  resetForm() {
    if (this.bookingFormDirective) {
      (this.bookingForm.get('payments') as FormArray).clear();
      this.bookingFormDirective.resetForm();
    }
  }
}
