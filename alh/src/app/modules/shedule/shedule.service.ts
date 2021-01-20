import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

import { from, Observable, ReplaySubject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { State } from '../../store/reducers';
import { Booking, BookingQuery, CompanyWithBookings, DateRange, RangeLimits, Room, User } from '../../interface';
import { environment } from 'src/environments/environment';

import * as fns from 'date-fns';

@Injectable({
  providedIn: 'root',
})

export class SheduleService {
  // tslint:disable-next-line: variable-name
  _rooms$: ReplaySubject<any> = new ReplaySubject(1);
  rooms$: Observable<any>;
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

  // '2020-12-01' => Tue Dec 01 2020 00:00:00 GMT-1000
  convertShortToDate(short: string): Date {
    return fns.parseISO(short);
  }

  // '2020-12-01T00:00:00.000Z' => Tue Dec 01 2020 00:00:00 GMT-1000
  convertISOToDate(ISO: string): Date {
    return fns.parseISO(ISO.substring(0, 10));
  }

  convertISOToShort(ISO: string): string {
    return ISO.substring(0, 10);
  }

  // Tue Dec 01 2020 00:00:00 GMT-1000 => '2020-12-01'
  convertDateToShort(date: Date): string {
    return fns.formatISO(date, { representation: 'date' });
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

  // getRoomsByDateRange(
  //     payload: { dateRange: RangeLimits,
  //     query?: Map<keyof Booking, any> }): Observable<CompanyWithBookings[]> {
  //   let params = new HttpParams()
  //       .set('lower', payload.dateRange.lower)
  //       .set('upper', payload.dateRange.upper);
  //   if (payload.query) {
  //     payload.query.forEach((val, key) => {
  //       console.log('value', val);
  //       console.log('key', key);
  //       params = params.set('query', JSON.stringify({field: key, filter: val}));
  //     });
  //   }


  //   console.log('params', params);
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     }),
  //     params,
  //   };
  //   return this.http.get<CompanyWithBookings[]>(
  //       this.environment.host + 'api/reservation/get-rooms-by-date-range',
  //       httpOptions,
  //   );
  // }
  /* end of new */

  // shiftToServerTime(localDate: number): number {
  //   /*
  //       new Date(year, month, shiftDays || day) - creates local date with local time 00:00:00.0000 and with GMT(+3 hours)
  //       then server shift to UTC and undestand it as 'date before' 21:00:00.0000

  //       .setMinutes(-(new Date().getTimezoneOffset())) - set local time with shifting of 3 hours to 03:00:00.0000 with GMT(+3 hours)
  //       then server shift to UTC and undestand it as 'current date' 00:00:00.0000
  //     */
  //   return new Date(localDate).setMinutes(-(new Date().getTimezoneOffset()));
  // }

  // shiftFromServerTime(serverDate: number): number {
  //   return new Date(serverDate).setMinutes((new Date().getTimezoneOffset()));
  // }

  // localDateToYMD(date: Date, shiftDays?: number): Date {
  //   /*
  //       new Date(year, month, shiftDays || day) - creates local date with local time 00:00:00.0000 and with GMT(+3 hours)
  //       server shift to UTC and undestand it as 'date before' 21:00:00.0000
  //     */
  //   const day = date.getDate(); // local day
  //   const month = date.getMonth(); // local month
  //   const year = date.getFullYear(); // local year

  //   return new Date(year, month, shiftDays || day);
  // }

  // localDateToUTCYMD(date: Date, shiftDays?: number): any {
  //   /*
  //       new Date(year, month, shiftDays || day) - creates local date with local time 00:00:00.0000 and with GMT(+3 hours)
  //       server shift to UTC and undestand it as 'date before' 21:00:00.0000
  //     */
  //   const day = date.getDate(); // local day
  //   const month = date.getMonth(); // local month
  //   const year = date.getFullYear(); // local year
  //   return new Date(new Date(year, month, shiftDays || day).setMinutes(-(new Date().getTimezoneOffset())));
  // }

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

  // convertRoomDatesIsoToNumber(room: Room): Room {
  //   return {
  //     ...room, bookings: room.bookings.map((booking: Booking) => {
  //       return {
  //         ...booking,
  //         dates: {
  //           from: this.shiftToServerTime(new Date(booking.dates.from).getTime()) as number,
  //           to: this.shiftToServerTime(new Date(booking.dates.to).getTime()) as number,
  //         },
  //         payments: booking.payments.map((payment) => {
  //           return {
  //             ...payment,
  //             date: this.shiftToServerTime(new Date(payment.date).getTime()) as number,
  //           };
  //         }),
  //       };
  //     }),
  //   };
  // }

  // /*
  //   Custom converter to ISO date with local shift
  //   server date 00:00 becomes local 03:00
  //   on server 1600387200000 (2020-09-18T00:00:00.000Z) -> on local 2020-09-18T03:00:00+03:00
  // */
  // toISOString(date: Date) {
  //   const tzo = -date.getTimezoneOffset();
  //   const dif = tzo >= 0 ? '+' : '-';
  //   const pad = function(num) {
  //     const norm = Math.floor(Math.abs(num));
  //     return (norm < 10 ? '0' : '') + norm;
  //   };
  //   return date.getFullYear() +
  //     '-' + pad(date.getMonth() + 1) +
  //     '-' + pad(date.getDate()) +
  //     'T' + pad(date.getHours()) +
  //     ':' + pad(date.getMinutes()) +
  //     ':' + pad(date.getSeconds()) +
  //     dif + pad(tzo / 60) +
  //     ':' + pad(tzo % 60);
  // }

  // // .toString() .toDateString() - local
  // // .getTime() - UTC
  // /*
  //   Convert all dates of room object to ISO dates,
  //   server date shift -3 and then shift to local +3 => server date 00:00 becomes local 00:00
  //   on server 1600387200000 (2020-09-18T00:00:00.000Z) -> on local 2020-09-18T00:00:00+03:00
  // */
  // convertBookingDatesNumberToIso(booking: Booking): Booking {
  //   // return {
  //   //   ...room, bookings: room.bookings.map((booking: Booking) => {
  //   return {
  //     ...booking,
  //     dates: {
  //       from: this.toISOString(
  //           new Date(this.shiftFromServerTime(booking.dates.from as number),
  //           )) as string,
  //       to: this.toISOString(
  //           new Date(this.shiftFromServerTime(booking.dates.to as number),
  //           )) as string,
  //     },
  //     payments: booking.payments.map((payment) => {
  //       return {
  //         ...payment,
  //         date: this.toISOString(
  //             new Date(this.shiftFromServerTime(payment.date as number),
  //             )) as string,
  //       };
  //     }),
  //   };
  // }

  // convertRoomDatesNumberToIso(room: Room): Room {
  //   return {
  //     ...room, bookings: room.bookings.map((booking: Booking) => {
  //       return {
  //         ...booking,
  //         dates: {
  //           from: this.toISOString(
  //               new Date(this.shiftFromServerTime(booking.dates.from as number),
  //               )) as string,
  //           to: this.toISOString(
  //               new Date(this.shiftFromServerTime(booking.dates.to as number),
  //               )) as string,
  //         },
  //         payments: booking.payments.map((payment) => {
  //           return {
  //             ...payment,
  //             date: this.toISOString(
  //                 new Date(this.shiftFromServerTime(payment.date as number),
  //                 )) as string,
  //           };
  //         }),
  //       };
  //     }),
  //   };
  // }

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

  // setDate(body: any) {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     }),
  //   };
  //   return this.http.post<any>(
  //       this.environment.host + 'api/reservation/set-date',
  //       body,
  //       httpOptions,
  //   );
  // }
}
