import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ScheduleActionTypes, GetBookings, GetBookingsSuccess, GetPaymentsSuccess, GetPayments } from '../actions/schedule.actions';

import { ScheduleService } from '../../modules/schedule/schedule.service';

@Injectable()
export class ScheduleEffects {
  @Effect()
  getBookings: Observable<Action> = this.actions$.pipe(
      ofType(ScheduleActionTypes.GetBookings),
      switchMap((action: GetBookings) => {
        return this.scheduleService.getBookings(action.payload).pipe(
            map((bookings) => new GetBookingsSuccess(bookings)),
        );
      }),
  );

  // @Effect()
  // getAnalyticsBookings: Observable<Action> = this.actions$.pipe(
  //     ofType(ScheduleActionTypes.GetAnalyticsBookings),
  //     switchMap((action: GetAnalyticsBookings) => {
  //       return this.scheduleService.getBookings(action.payload).pipe(
  //           map((bookings) => new GetAnalyticsBookingsSuccess(bookings)),
  //       );
  //     }),
  // );

  @Effect()
  getPayments: Observable<Action> = this.actions$.pipe(
      ofType(ScheduleActionTypes.GetPayments),
      switchMap((action: GetPayments) => {
        return this.scheduleService.getPayments(action.payload).pipe(
            map((payments) => new GetPaymentsSuccess(payments)),
        );
      }),
  );

  constructor(
    private actions$: Actions,
    private scheduleService: ScheduleService,
  ) { }
}
