import { Component, OnInit } from '@angular/core';
import { Booking, BookingQuery, Room, User } from 'src/app/interface';
import { Store } from '@ngrx/store';
import * as fns from 'date-fns';
import * as fromInterface from 'src/app/interface';
import { SheduleService } from '../../shedule/shedule.service';
import { State } from 'src/app/store/reducers';
// import { GetRoomsByDateRange } from 'src/app/store/actions/shedule.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getBookings } from 'src/app/store/reducers/shedule.reducer';
import { GetBookings } from 'src/app/store/actions/shedule.actions';
import { getCompany, getUser } from 'src/app/store/reducers/user.reducer';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.page.html',
  styleUrls: ['./management.page.scss'],
})
export class ManagementPage implements OnInit {
  user: User;
  bookings: Booking[];
  room: Partial<Room>;
  rooms: Partial<Room>[];


  bookingSteps = fromInterface.bookingSteps;
  bookingStep = 'cancelled';
  bookingStepExprs = fromInterface.bookingStepExprs;
  bookingStepExpr = '$eq';
  sortFields = fromInterface.sortFields;
  sortField = 'dates.from';
  sortOrders = fromInterface.sortOrders;
  sortOrder = 1;

  date = this.sheduleService.convertDateToShort(new Date());
  maxDate = this.sheduleService.convertDateToShort(fns.add(new Date(), { years: 1 }));

  updated = true;
  monthNames: any;

  constructor(
    private sheduleService: SheduleService,
    public store: Store<State>,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this.store.select(getCompany)
        .subscribe(
            (company) => {
              console.log('company', company);
              if (company) {
                const all = this.translate.instant('dif.all');
                this.rooms = [...company.rooms];
                this.rooms.unshift({ _id: null, name: all });
                this.room = this.rooms[0];
              }
            },
            (err) => console.log('load rooms err', err),
        );

    this.store.select(getUser)
        .subscribe((user) => this.user = user);


    this.store.select(getBookings)
        .subscribe((bookings) => {
          this.bookings = bookings;
        });

    this.translate.stream('elements.datePicker.monthNames')
        .subscribe((monthNames) => {
          // reload select translation
          this.updated = false;
          this.monthNames = monthNames;
          setTimeout(() => this.updated = true, 1);
        });

    // returning from another tab doesn't emit ionViewWillEnter() on child routes
    // ionViewWillEnter() emitted on parent component
    this.route.url
        .subscribe((_) => {
          if (this.room) {
            this.filter();
            // reload select translation
            this.updated = false;
            const all = this.translate.instant('dif.all');
            this.rooms[0].name = all;
            setTimeout(() => this.updated = true, 1);
          }
        });
  }


  ionViewWillEnter() {
  }

  async presentAlert(_id: string) {
    const alert = await this.alertController.create({
      // cssClass: 'my-custom-class',
      header: 'Delete reservation',
      subHeader: 'Reservation will be deleted',
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
          this.delete(_id);
          const bookingQuery: BookingQuery = this.createBookingQuery();
          this.store.dispatch(new GetBookings(bookingQuery));
        },
      }],
    });
    await alert.present();
  }

  createBookingQuery(): BookingQuery {
    return <BookingQuery>{
      dateRangeLimits: this.sheduleService.createDateRangeLimits(this.sheduleService.convertISOToDate(this.date)),
      room_id: this.room._id,
      bookingStep: this.bookingStep? {
        val: this.bookingStep,
        expr: this.bookingStepExpr,
      } : null,
      sort: {
        field: this.sortField,
        order: this.sortOrder,
      },
    };
  }

  filter() {
    const bookingQuery: BookingQuery = this.createBookingQuery();
    this.store.dispatch(new GetBookings(bookingQuery));
  }

  getBookings(room_id: string, date: string): Observable<Booking[]> {
    return this.store.select(getBookings).pipe(
        map((bookings) => {
          return bookings
              .filter((booking: Booking) => {
                return booking.room_id === room_id;
              })
              .map((booking: Booking) => {
                if (fns.isEqual(new Date(date), new Date(booking.dates.from))) {
                  return { ...booking, info: 'start' };
                } else if (fns.isEqual(new Date(date), new Date(booking.dates.to))) {
                  return { ...booking, info: 'end' };
                } else if (
                  fns.isAfter(new Date(date), new Date(booking.dates.from)) &&
              fns.isBefore(new Date(date), new Date(booking.dates.to))
                ) {
                  return { ...booking, info: 'ahead' };
                } else {
                  return;
                }
              })
              .filter((booking) => booking)
              .sort((a, b) => {
                return new Date(a.dates.from).getTime() - new Date(b.dates.from).getTime();
              })
              .map((booking) => {
                return booking;
              });
        }),
    );
  }

  viewBooking(booking_id: string) {
    // discover
    this.router.navigate(['/', 'shedule', 'edit', booking_id]);
  }

  delete(booking_id: string) {
    this.sheduleService.deleteBooking(booking_id)
        .subscribe(
            (_) => _,
            (err) => console.log('err delete', err),
        );
  }

  update(booking_id: string) {
    this.router.navigateByUrl('/shedule/edit/' + booking_id);
  }
}
