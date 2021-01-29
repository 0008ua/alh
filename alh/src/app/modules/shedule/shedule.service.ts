import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, ReplaySubject } from 'rxjs';

import { Store } from '@ngrx/store';

import { State } from '../../store/reducers';
import { Booking, BookingQuery, DateRangeLimits, Payment, PaymentQuery, Room, User } from '../../interface';
import { environment } from 'src/environments/environment';

import * as fns from 'date-fns';

@Injectable({
  providedIn: 'root',
})

export class SheduleService {
  user: User;
  environment = environment;

  constructor(
    private http: HttpClient,
    private store: Store<State>,

  ) {
    this.store.select('user')
        .subscribe((storeState) => {
          this.user = storeState.user;
        });
  }

  /* Date helpers */

  // deprecated use convertISOToDate
  // '2020-12-01' => Tue Dec 01 2020 00:00:00 GMT-1000
  convertShortToDate(short: string): Date {
    return fns.parseISO(short);
  }

  // '2020-12-01T00:00:00.000Z' => Tue Dec 01 2020 00:00:00 GMT-1000
  convertISOToDate(ISOorShort: string): Date {
    if (ISOorShort.length > 10) {
      // convert from ISO full format
      return fns.parseISO(ISOorShort.substring(0, 10));
    } else {
      // convert from short date format
      return fns.parseISO(ISOorShort);
    }
  }

  convertISOToShort(ISO: string): string {
    return ISO.substring(0, 10);
  }

  // Tue Dec 01 2020 00:00:00 GMT-1000 => '2020-12-01'
  convertDateToShort(date: Date): string {
    return fns.formatISO(date, { representation: 'date' });
  }

  convertBookingDatesIsoToShort(booking: Booking): Booking {
    return {
      ...booking,
      dates: {
        from: this.convertISOToShort(booking.dates.from),
        to: this.convertISOToShort(booking.dates.to),
      },
      payments: booking.payments.map((payment) => {
        return {
          ...payment,
          date: this.convertISOToShort(payment.date),
        };
      }),
    };
  }


  createDateRangeLimits(date: Date): DateRangeLimits {
    const daysInMonth = fns.getDaysInMonth(date);
    const startOfMonth = fns.startOfMonth(date);
    const endOfMonth = fns.add(startOfMonth, { days: daysInMonth - 1 });
    return {
      lower: this.convertDateToShort(startOfMonth),
      upper: this.convertDateToShort(endOfMonth),
    };
  }
  /* End of date helpers */


  /* new */

  getRoomById(id: string): Observable<Room> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<Room>(
        this.environment.host + 'api/reservation/get-room-by-id/' + id,
        httpOptions,
    );
  }

  getBookingById(id: string): Observable<Booking> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<Booking>(
        this.environment.host + 'api/reservation/get-booking-by-id/' + id,
        httpOptions,
    );
  }

  getAvailableDateTo(room_id: string, dateFrom: string): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': token.value,
      }),
      params: new HttpParams()
          .set('roomid', room_id)
          .set('datefrom', dateFrom),
    };
    return this.http.get<string>(
        this.environment.host + 'api/reservation/get-available-date-to',
        httpOptions,
    );
  }

  deleteBooking(_id: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.delete<void>(
        this.environment.host + 'api/reservation/delete-booking/' + _id,
        httpOptions,
    );
  }

  getBookings(bookingQuery: BookingQuery): Observable <Booking[]> {
    const params = new HttpParams()
        .set('bookingQuery', JSON.stringify(bookingQuery));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params,
    };
    return this.http.get<Booking[]>(
        this.environment.host + 'api/reservation/get-bookings',
        httpOptions,
    );
  }

  getPayments(paymentQuery: PaymentQuery): Observable<Payment[]> {
    const params = new HttpParams()
        .set('paymentQuery', JSON.stringify(paymentQuery));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params,
    };
    return this.http.get<Payment[]>(
        this.environment.host + 'api/reservation/get-payments',
        httpOptions,
    );
  }

  upsertBooking(booking: Booking) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.put<any>(
        this.environment.host + 'api/reservation/upsert-booking',
        booking,
        httpOptions,
    );
  }
}
