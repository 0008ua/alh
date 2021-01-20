import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fns from 'date-fns';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetBookings } from 'src/app/store/actions/shedule.actions';
import { State } from 'src/app/store/reducers';
import { getBookings } from 'src/app/store/reducers/shedule.reducer';
import { getCompany } from 'src/app/store/reducers/user.reducer';

import { Knobs, Room, RangeLimits, Booking } from '../../interface';
import { SheduleService } from '../shedule/shedule.service';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.page.html',
  styleUrls: ['./shedule.page.scss'],
})
export class ShedulePage implements OnInit {
  pickedMonth = this.sheduleService.convertDateToShort(new Date());
  maxPickedMonth = this.sheduleService.convertDateToShort(fns.add(new Date(), { years: 1 }));
  range: string[] = [];
  selectedRange: string[] = [];
  selectedRangeKnobs: Knobs;
  rangeKnobs: Knobs;

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
    private sheduleService: SheduleService,
  ) { }

  ngOnInit() {
    const date = new Date();
    this.createRange(date);
    this.createSelectedRange(this.knobs);

    // this.store.select(getBookings)
    //     .subscribe(
    //         (bookings) => {
    //           this.bookings = bookings;
    //           console.log('bookings', bookings);
    //         },
    //         (err) => console.log('load rooms err', err),
    //     );

    this.store.select(getCompany)
        .subscribe(
            (company) => {
              if (company) {
                this.rooms = company.rooms;
              }
              console.log('rooms', this.rooms);
            },
            (err) => console.log('load rooms err', err),
        );

    // this.store.select('shedule')
    //     .subscribe(
    //         (payload) => {
    //           this.companyWithBookings = payload.companyWithBookings;
    //           console.log('this.companyWithBookings', this.companyWithBookings);
    //           // this.rooms = this.companyWithBookings.map((el) => el.rooms);
    //         },
    //         (err) => console.log('load rooms err', err),
    //     );
  }

  ionViewWillEnter() {
    // this.store.dispatch(new GetRoomsByDateRange({
    //   dateRange: this.createRangeLimits(),
    //   query: new Map([['bookingStep', { expr: '$ne', val: 'cancelled' }]]),
    // }));
    this.store.dispatch(new GetBookings({
      dateRange: this.createRangeLimits(),
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

  // getBookings(room_id: string, date: string): Observable<Booking[]> {
  //   return this.store.select('shedule').pipe(
  //       map((payload) => {
  //         return payload.companyWithBookings
  //             .find((item) => {
  //               return item.rooms._id === room_id;
  //             })
  //             ?.bookings
  //             ?.map((booking: Booking) => {
  //               if (fns.isEqual(new Date(date), new Date(booking.dates.from))) {
  //                 return { ...booking, info: 'start' };
  //               } else if (fns.isEqual(new Date(date), new Date(booking.dates.to))) {
  //                 return { ...booking, info: 'end' };
  //               } else if (
  //                 fns.isAfter(new Date(date), new Date(booking.dates.from)) &&
  //                 fns.isBefore(new Date(date), new Date(booking.dates.to))
  //               ) {
  //                 return { ...booking, info: 'ahead' };
  //               } else {
  //                 return;
  //               }
  //             })
  //             .filter((booking) => booking)
  //             .sort((a, b) => {
  //               return new Date(a.dates.from).getTime() - new Date(b.dates.from).getTime();
  //             })
  //             .map((booking) => {
  //               return booking;
  //             });
  //       }),
  //   );
  // }

  onMonthChange() {
    const date = new Date(this.pickedMonth);
    this.createRange(date);
    this.createSelectedRange({ lower: 0, upper: 9 });
    // this.store.dispatch(new GetRoomsByDateRange({
    //   dateRange: this.createRangeLimits(),
    //   query: new Map([['bookingStep', {expr: '$ne', val: 'cancelled'}]]),
    // }));

    this.store.dispatch(new GetBookings({
      dateRange: this.createRangeLimits(),
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

  onRangeChange(e) {
    /*  check initiator of changes
      by user or by this method
      changing one of knobs initiates change another */
    if (this.knobChangedProgrammatically) {
      this.knobChangedProgrammatically = false;
      return;
    }
    const lower = this.range[this.knobs.lower];
    const upper = this.range[this.knobs.upper];

    if (this.knobs.lower !== this.selectedRangeKnobs.lower) {
      console.log('take lower', lower);
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
      console.log('take upper', upper);
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

  createRangeLimits(): RangeLimits {
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
        .map((el) => this.sheduleService.convertDateToShort(el));
    this.rangeKnobs = {
      lower: 0,
      upper: this.range.length - 1,
    };
  }

  private createSelectedRange(knobs: Knobs): void {
    this.selectedRange = fns.eachDayOfInterval({
      start: this.sheduleService.convertShortToDate(this.range[knobs.lower]),
      end: this.sheduleService.convertShortToDate(this.range[knobs.upper]),
    })
        .map((el) => this.sheduleService.convertDateToShort(el));
    this.selectedRangeKnobs = {
      lower: knobs.lower,
      upper: knobs.upper,
    };
  }
}
