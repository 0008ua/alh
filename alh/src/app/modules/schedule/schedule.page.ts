import { Component, ElementRef, EventEmitter, HostListener, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import * as fns from 'date-fns';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { GetBookings } from 'src/app/store/actions/schedule.actions';
import { GetUser } from 'src/app/store/actions/user.actions';
import { State } from 'src/app/store/reducers';
import { getBookings } from 'src/app/store/reducers/schedule.reducer';
import { getCompany } from 'src/app/store/reducers/user.reducer';

import { Knobs, Room, DateRangeLimits, Booking } from '../../interface';
import { ScheduleService } from '../schedule/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
  // @ViewChild('ionRange', { static: false })
  // public ionRange: any;
  // mouseDown$: ReplaySubject<MouseEvent>;
  // mouseMove$: ReplaySubject<MouseEvent>;
  // mouseUp$: Subject<MouseEvent>;

  // rangeChange$: BehaviorSubject<any>
  // stream$: Observable<any>;


  pickedMonth = this.scheduleService.convertDateToShort(new Date());
  maxPickedMonth = this.scheduleService.convertDateToShort(fns.add(new Date(), { years: 1 }));
  range: string[] = [];
  selectedRange: string[] = [];
  selectedRangeKnobs: Knobs;
  rangeKnobs: Knobs;
  lang: string;
  updated = true;
  monthNames: any;


  daysInSelectedArray = 10;
  knobs: Knobs = {
    lower: 0,
    upper: this.daysInSelectedArray - 1,
  };

  bookings: Booking[];
  rooms: Room[];
  // companyWithBookings: CompanyWithBookings[];
  knobChangedProgrammatically = false;

  constructor(
    public store: Store<State>,
    private scheduleService: ScheduleService,
    public translate: TranslateService,

  ) { }

  // @HostListener('mousedown', ['$event'])
  // onMouseDown(e: MouseEvent) {
  //   if (e.target === this.ionRange.el) {
  //     this.mouseDown$.next(e);
  //   }
  // }

  // @HostListener('mousemove', ['$event'])
  // onMove(e: MouseEvent) {
  //   if (e.target === this.ionRange.el) {
  //     this.mouseMove$.next(e);
  //   }
  // }

  // @HostListener('mouseup', ['$event'])
  // onMouseUp(e: MouseEvent) {
  //   this.mouseUp$.next(e);
  // }

  ngOnInit() {
    const date = new Date();
    this.createRange(date);
    this.createSelectedRange(this.knobs);

    this.translate.stream('elements.datePicker.monthNames')
        .subscribe((monthNames) => {
        // reload ion-datetime translation
          this.updated = false;
          this.monthNames = monthNames;
          setTimeout(() => this.updated = true, 1);
        });

    this.store.select(getCompany)
        .subscribe(
            (company) => {
              if (company) {
                this.rooms = company.rooms;
              }
            },
            (err) => console.log('load rooms err', err),
        );

    this.lang = this.translate.currentLang;
    // this.store.select(getLang)
    //     .subscribe((lang) => {
    //       this.lang = lang;
    //     });
  }

  ionViewWillEnter() {
    this.store.dispatch(new GetUser());

    this.store.dispatch(new GetBookings({
      dateRangeLimits: this.createRangeLimits(),
      bookingStep: {
        expr: '$ne',
        val: 'cancelled',
      },
    }));

    // reload ion-datetime translation
    this.updated = false;
    setTimeout(() => this.updated = true, 1);

    // this.mouseDown$ = new ReplaySubject(1);
    // this.mouseMove$ = new ReplaySubject(1);
    // this.mouseUp$ = new Subject();
    // this.rangeChange$ = new BehaviorSubject({ lower: 1, upper: 10 });
    // this.stream$ = this.mouseDown$;

    // this.stream$.pipe(
    //     tap((x) => console.log('x', x.target)),
    //     switchMap((e) => this.mouseMove$),
    // )
    //     .subscribe((e) => {

    //       if (this.knobChangedProgrammatically) {
    //         this.knobChangedProgrammatically = false;
    //         return;
    //       }
    //       if (this.knobs.lower !== this.selectedRangeKnobs.lower) {
    //         if (this.knobs.lower < 0) {
    //           this.knobs = {
    //             lower: 0,
    //             upper: this.daysInSelectedArray - 1,
    //           };
    //         } else if (this.knobs.lower > this.rangeKnobs.upper - this.daysInSelectedArray - 1) {
    //           this.knobs = {
    //             lower: this.rangeKnobs.upper - this.daysInSelectedArray + 1,
    //             upper: this.rangeKnobs.upper,
    //           };
    //         } else {
    //           this.knobs = {
    //             lower: this.knobs.lower,
    //             upper: this.knobs.lower + this.daysInSelectedArray - 1,
    //           };
    //         }
    //       } else {
    //         if (this.knobs.upper > this.rangeKnobs.upper) {
    //           this.knobs = {
    //             lower: this.rangeKnobs.upper - this.daysInSelectedArray - 1,
    //             upper: this.rangeKnobs.upper,
    //           };
    //         } else if (this.knobs.upper < this.daysInSelectedArray) {
    //           this.knobs = {
    //             lower: 0,
    //             upper: this.daysInSelectedArray - 1,
    //           };
    //         } else {
    //           this.knobs = {
    //             lower: this.knobs.upper - this.daysInSelectedArray + 1,
    //             upper: this.knobs.upper,
    //           };
    //         }
    //       }
    //       this.createSelectedRange(this.knobs);
    //       this.knobChangedProgrammatically = true;
    //     });
  }

  getBookings(room_id: string, date: string): Observable<Booking[]> {
    return this.store.select(getBookings).pipe(
        map((bookings) => {
          return bookings
              .filter((booking: Booking) => {
                return booking.room_id === room_id;
              })
          // ?.bookings
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

  onMonthChange() {
    const date = new Date(this.pickedMonth);
    this.createRange(date);
    this.createSelectedRange({ lower: 0, upper: 9 });

    this.store.dispatch(new GetBookings({
      dateRangeLimits: this.createRangeLimits(),
      // room_id: '5fe1c0b762da9e35244e4db4',
      bookingStep: {
        expr: '$ne',
        val: 'cancelled',
      },
      // sort: {field: 'dates.from', order: 1},
      // skip: 1,
      // limit: 10,
    }));
  }

  onRangeChange(e: CustomEvent) {
    /*  check initiator of changes
      by user or by this method
      changing one of knobs initiates change another */
    // this.rangeChange$.next(e);
    if (this.knobChangedProgrammatically) {
      this.knobChangedProgrammatically = false;
      return;
    }

    if (this.knobs.lower !== this.selectedRangeKnobs.lower) {
      if (this.knobs.lower < 0) {
        this.knobs = {
          lower: 0,
          upper: this.daysInSelectedArray - 1,
        };
      } else if (this.knobs.lower > this.rangeKnobs.upper - this.daysInSelectedArray - 1) {
        this.knobs = {
          lower: this.rangeKnobs.upper - this.daysInSelectedArray + 1,
          upper: this.rangeKnobs.upper,
        };
      } else {
        this.knobs = {
          lower: this.knobs.lower,
          upper: this.knobs.lower + this.daysInSelectedArray - 1,
        };
      }
    } else {
      if (this.knobs.upper > this.rangeKnobs.upper) {
        this.knobs = {
          lower: this.rangeKnobs.upper - this.daysInSelectedArray - 1,
          upper: this.rangeKnobs.upper,
        };
      } else if (this.knobs.upper < this.daysInSelectedArray) {
        this.knobs = {
          lower: 0,
          upper: this.daysInSelectedArray - 1,
        };
      } else {
        this.knobs = {
          lower: this.knobs.upper - this.daysInSelectedArray + 1,
          upper: this.knobs.upper,
        };
      }
    }
    this.createSelectedRange(this.knobs);
    this.knobChangedProgrammatically = true;
  }

  createRangeLimits(): DateRangeLimits {
    return {
      lower: this.range[0],
      upper: this.range[this.range.length - 1],
    };
  }

  private createRange(date: Date): void {
    const daysInMonth = fns.getDaysInMonth(date);
    const startOfMonth = fns.startOfMonth(date);
    const endOfMonth = fns.add(startOfMonth, { days: daysInMonth - 1 });
    this.range = fns.eachDayOfInterval({ start: startOfMonth, end: endOfMonth })
        .map((el) => this.scheduleService.convertDateToShort(el));
    this.rangeKnobs = {
      lower: 0,
      upper: this.range.length - 1,
    };
  }

  private createSelectedRange(knobs: Knobs): void {
    this.selectedRange = fns.eachDayOfInterval({
      start: this.scheduleService.convertShortToDate(this.range[knobs.lower]),
      end: this.scheduleService.convertShortToDate(this.range[knobs.upper]),
    })
        .map((el) => this.scheduleService.convertDateToShort(el));
    this.selectedRangeKnobs = {
      lower: knobs.lower,
      upper: knobs.upper,
    };
  }

  switchLanguage() {
    this.lang === 'en' ? this.lang = 'uk' : this.lang = 'en';
    this.translate.use(this.lang);
  }
}

