import { Component, OnChanges, OnInit } from '@angular/core';
import { SheduleService } from '../../shedule/shedule.service';
import * as fns from 'date-fns';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { getBookings, getPayments } from 'src/app/store/reducers/shedule.reducer';
import { Booking, BookingQuery, DateRangeLimits, Payment, PaymentQuery, Room } from 'src/app/interface';
import { GetBookings, GetPayments } from 'src/app/store/actions/shedule.actions';
import { getCompany } from 'src/app/store/reducers/user.reducer';
import { combineLatest, of } from 'rxjs';
import { mergeMap, skip } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit, OnChanges {
  date: string = this.sheduleService.convertDateToShort(new Date());
  maxDate: string = this.sheduleService.convertDateToShort(fns.add(new Date(), { years: 1 }));
  dateRangeLimits: DateRangeLimits = this.sheduleService.createDateRangeLimits(this.sheduleService.convertISOToDate(this.date));

  bookings: Booking[];
  payments: Payment[];
  room: Partial<Room>;
  rooms: Partial<Room>[];
  calculatedData: {
    rooms?: any;
  } = {rooms: []};

  constructor(
    private sheduleService: SheduleService,
    private store: Store<State>,
    private route: ActivatedRoute,
  ) { }
  ngOnChanges() {
    console.log('asdasd');
  }
  ngOnInit() {
    const getCompany$ = this.store.select(getCompany);
    const getBookings$ = this.store.select(getBookings);
    const getPayments$ = this.store.select(getPayments);


    getCompany$.pipe(
        mergeMap((company) => {
          console.log('company summary', company);

          if (company) {
            console.log('combineLatest');

            this.rooms = [...company.rooms];
            this.rooms.unshift({ _id: null, name: 'All' });
            this.room = this.rooms[0];
            return combineLatest([getBookings$, getPayments$]);
          }
          return of([null, null]);
        }),
        skip(1),
    )
        .subscribe(
            ([bookings, payments]) => {
              if (bookings && payments) {
                console.log('bookings summary', bookings);
                console.log('payments summary', payments);
                this.bookings = bookings;
                this.payments = payments;
                this.calcData();
              }
            },
            (err) => console.log('load data err', err),
        );

    // returning from another tab doesn't emit ionViewWillEnter() on child routes
    // ionViewWillEnter() emitted on parent component
    this.route.url
        .subscribe((_) => {
          console.log('url');
          this.filter();
        });
  }

  // ionViewWillEnter() {
  //   this.filter();
  // }

  calcData() {
    console.log('calc');
    this.calculatedData.rooms = [];
    let totalSoldAll = 0;
    let totalRoomDaysAll = 0;
    let totalPaymentsAll = 0;
    const daysInMonth = fns.getDaysInMonth(this.sheduleService.convertISOToDate(this.date)) - 1;

    this.rooms.forEach((room) => {
      if (!room._id) {
        // first room is 'All' rooms
        this.calculatedData.rooms.push(room);
        return;
      }
      this.calculatedData.rooms.push(room);

      const position = this.calculatedData.rooms.length - 1;
      console.log('position', position);
      let totalSold = 0;
      let totalRoomDays = 0;
      let totalPayments = 0;

      this.payments.forEach((payment) => {
        if (room._id !== payment.room_id) {
          return;
        }
        totalPayments += payment.amount;
      });

      this.bookings.forEach((booking) => {
        if (room._id !== booking.room_id) {
          return;
        }
        const bookingTotalDays = fns.differenceInCalendarDays(
            this.sheduleService.convertISOToDate(booking.dates.to),
            this.sheduleService.convertISOToDate(booking.dates.from),
        );
        const bookingPricePerDay = (booking.price - booking.discount) / bookingTotalDays;

        let startDate: string;
        let endDate: string;
        let bookingDaysInCurrentMonth = 0;

        if (fns.isEqual(
            this.sheduleService.convertISOToDate(booking.dates.from),
            this.sheduleService.convertISOToDate(this.dateRangeLimits.upper),
        )) {
          bookingDaysInCurrentMonth = 1;
        } else if (fns.isEqual(
            this.sheduleService.convertISOToDate(booking.dates.to),
            this.sheduleService.convertISOToDate(this.dateRangeLimits.lower),
        )) {
          bookingDaysInCurrentMonth = 0;
        } else {
          if (fns.isAfter(
              this.sheduleService.convertISOToDate(booking.dates.from),
              this.sheduleService.convertISOToDate(this.dateRangeLimits.lower),
          ) || fns.isEqual(
              this.sheduleService.convertISOToDate(booking.dates.from),
              this.sheduleService.convertISOToDate(this.dateRangeLimits.lower),
          )) {
            startDate = booking.dates.from;
          } else {
            startDate = this.dateRangeLimits.lower;
          }
          if (fns.isBefore(
              this.sheduleService.convertISOToDate(booking.dates.to),
              this.sheduleService.convertISOToDate(this.dateRangeLimits.upper),
          ) || fns.isEqual(
              this.sheduleService.convertISOToDate(booking.dates.to),
              this.sheduleService.convertISOToDate(this.dateRangeLimits.upper),
          )) {
            endDate = booking.dates.to;
          } else {
            endDate = this.dateRangeLimits.upper;
          }
          bookingDaysInCurrentMonth = fns.differenceInCalendarDays(
              this.sheduleService.convertISOToDate(endDate),
              this.sheduleService.convertISOToDate(startDate),
          );
          totalSold += bookingDaysInCurrentMonth * bookingPricePerDay;
          totalRoomDays += bookingDaysInCurrentMonth;
        }
      });
      // add analytics.totalSold to current room
      this.calculatedData.rooms[position] = {
        ...this.calculatedData.rooms[position],
        analytics: {
          totalSold,
          totalRoomDays,
          daysInMonth,
          totalPayments,
        }};
      console.log('this.calculatedData.rooms[position]', this.calculatedData.rooms[position]);
      totalSoldAll += totalSold;
      totalRoomDaysAll += totalRoomDays;
      totalPaymentsAll += totalPayments;
    });

    // add analytics.totalSold to 'All' room which is at position 0
    this.calculatedData.rooms[0] = {
      ...this.calculatedData.rooms[0],
      analytics: {
        totalSold: totalSoldAll,
        totalRoomDays: totalRoomDaysAll / this.calculatedData.rooms.length,
        daysInMonth,
        totalPayments: totalPaymentsAll,
      }};
    console.log('this.calculatedData.rooms', this.calculatedData.rooms);
  }

  filter() {
    const bookingQuery: BookingQuery = this.createBookingQuery();
    const paymentQuery: PaymentQuery = this.createPaymentQuery();
    this.store.dispatch(new GetBookings(bookingQuery));
    this.store.dispatch(new GetPayments(paymentQuery));
  }

  createBookingQuery(): BookingQuery {
    this.dateRangeLimits = this.sheduleService.createDateRangeLimits(this.sheduleService.convertISOToDate(this.date));
    return <BookingQuery>{
      dateRangeLimits: this.dateRangeLimits,
      // room_id: this.room?._id,
      bookingStep: {
        val: 'cancelled',
        expr: '$ne',
      },
      // sort: {
      //   field: this.sortField,
      //   order: this.sortOrder,
      // },
    };
  }

  createPaymentQuery(): PaymentQuery {
    this.dateRangeLimits = this.sheduleService.createDateRangeLimits(this.sheduleService.convertISOToDate(this.date));
    return <PaymentQuery>{
      dateRangeLimits: this.dateRangeLimits,
      // room_id: this.room?._id,
      // bookingStep: {
      //   val: 'cancelled',
      //   expr: '$ne',
      // },
      // sort: {
      //   field: this.sortField,
      //   order: this.sortOrder,
      // },
    };
  }
}
