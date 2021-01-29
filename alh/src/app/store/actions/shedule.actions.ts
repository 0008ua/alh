import { Action } from '@ngrx/store';
import { Booking, BookingQuery, Payment, PaymentQuery } from '../../interface';

export enum SheduleActionTypes {
  GetBookings = '[Shedule] Get Bookings',
  GetBookingsSuccess = '[Shedule] Get Bookings Success',
  // GetAnalyticsBookings = '[Shedule] Get Analytics Bookings',
  // GetAnalyticsBookingsSuccess = '[Shedule] Get Analytics Bookings Success',
  GetPayments = '[Shedule] Get Payments',
  GetPaymentsSuccess = '[Shedule] Get Payments Success',
}

export class GetBookings implements Action {
  readonly type = SheduleActionTypes.GetBookings;
  constructor(public payload: BookingQuery) { }
}

export class GetBookingsSuccess implements Action {
  readonly type = SheduleActionTypes.GetBookingsSuccess;
  constructor(public payload: Booking[]) { }
}

// export class GetAnalyticsBookings implements Action {
//   readonly type = SheduleActionTypes.GetAnalyticsBookings;
//   constructor(public payload: BookingQuery) { }
// }

// export class GetAnalyticsBookingsSuccess implements Action {
//   readonly type = SheduleActionTypes.GetAnalyticsBookingsSuccess;
//   constructor(public payload: Booking[]) { }
// }

export class GetPayments implements Action {
  readonly type = SheduleActionTypes.GetPayments;
  constructor(public payload: PaymentQuery) { }
}

export class GetPaymentsSuccess implements Action {
  readonly type = SheduleActionTypes.GetPaymentsSuccess;
  constructor(public payload: Payment[]) { }
}

export type SheduleActions =
  GetBookings
  | GetBookingsSuccess
  | GetPayments
  | GetPaymentsSuccess
  // | GetAnalyticsBookings
  // | GetAnalyticsBookingsSuccess
  ;
