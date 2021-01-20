import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { SheduleActionTypes, GetBookings, GetBookingsSuccess } from '../actions/shedule.actions';

import { SheduleService } from '../../modules/shedule/shedule.service';

@Injectable()
export class SheduleEffects {
  // @Effect()
  // getRoomsByDateRange: Observable<Action> = this.actions$.pipe(
  //     ofType(SheduleActionTypes.GetRoomsByDateRange),
  //     switchMap((action: GetRoomsByDateRange) => {
  //       return this.sheduleService.getRoomsByDateRange(action.payload).pipe(
  //           map((companyWithBookings) => new GetRoomsByDateRangeSuccess({ companyWithBookings })),
  //       );
  //     }),
  // );

  @Effect()
  getBookings: Observable<Action> = this.actions$.pipe(
      ofType(SheduleActionTypes.GetBookings),
      switchMap((action: GetBookings) => {
        return this.sheduleService.getBookings(action.payload).pipe(
            map((bookings) => new GetBookingsSuccess(bookings)),
        );
      }),
  );

  constructor(
    private actions$: Actions,
    private sheduleService: SheduleService,
  ) { }
}
