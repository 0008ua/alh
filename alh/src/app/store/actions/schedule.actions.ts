import { Action } from '@ngrx/store';
import { Booking, BookingQuery, Payment, PaymentQuery } from '../../interface';

export enum ScheduleActionTypes {
  GetBookings = '[Schedule] Get Bookings',
  GetBookingsSuccess = '[Schedule] Get Bookings Success',
  // GetAnalyticsBookings = '[Schedule] Get Analytics Bookings',
  // GetAnalyticsBookingsSuccess = '[Schedule] Get Analytics Bookings Success',
  GetPayments = '[Schedule] Get Payments',
  GetPaymentsSuccess = '[Schedule] Get Payments Success',
}

export class GetBookings implements Action {
  readonly type = ScheduleActionTypes.GetBookings;
  constructor(public payload: BookingQuery) { }
}

export class GetBookingsSuccess implements Action {
  readonly type = ScheduleActionTypes.GetBookingsSuccess;
  constructor(public payload: Booking[]) { }
}

// export class GetAnalyticsBookings implements Action {
//   readonly type = ScheduleActionTypes.GetAnalyticsBookings;
//   constructor(public payload: BookingQuery) { }
// }

// export class GetAnalyticsBookingsSuccess implements Action {
//   readonly type = ScheduleActionTypes.GetAnalyticsBookingsSuccess;
//   constructor(public payload: Booking[]) { }
// }

export class GetPayments implements Action {
  readonly type = ScheduleActionTypes.GetPayments;
  constructor(public payload: PaymentQuery) { }
}

export class GetPaymentsSuccess implements Action {
  readonly type = ScheduleActionTypes.GetPaymentsSuccess;
  constructor(public payload: Payment[]) { }
}

export type ScheduleActions =
  GetBookings
  | GetBookingsSuccess
  | GetPayments
  | GetPaymentsSuccess
  // | GetAnalyticsBookings
  // | GetAnalyticsBookingsSuccess
  ;
