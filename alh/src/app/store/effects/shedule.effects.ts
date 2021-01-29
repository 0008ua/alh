import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { SheduleActionTypes, GetBookings, GetBookingsSuccess, GetPaymentsSuccess, GetPayments } from '../actions/shedule.actions';

import { SheduleService } from '../../modules/shedule/shedule.service';

@Injectable()
export class SheduleEffects {
  @Effect()
  getBookings: Observable<Action> = this.actions$.pipe(
      ofType(SheduleActionTypes.GetBookings),
      switchMap((action: GetBookings) => {
        return this.sheduleService.getBookings(action.payload).pipe(
            map((bookings) => new GetBookingsSuccess(bookings)),
        );
      }),
  );

  // @Effect()
  // getAnalyticsBookings: Observable<Action> = this.actions$.pipe(
  //     ofType(SheduleActionTypes.GetAnalyticsBookings),
  //     switchMap((action: GetAnalyticsBookings) => {
  //       return this.sheduleService.getBookings(action.payload).pipe(
  //           map((bookings) => new GetAnalyticsBookingsSuccess(bookings)),
  //       );
  //     }),
  // );

  @Effect()
  getPayments: Observable<Action> = this.actions$.pipe(
      ofType(SheduleActionTypes.GetPayments),
      switchMap((action: GetPayments) => {
        return this.sheduleService.getPayments(action.payload).pipe(
            map((payments) => new GetPaymentsSuccess(payments)),
        );
      }),
  );

  constructor(
    private actions$: Actions,
    private sheduleService: SheduleService,
  ) { }
}
