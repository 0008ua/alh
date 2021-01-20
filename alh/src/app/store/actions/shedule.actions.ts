import { Action } from '@ngrx/store';
import { Booking, BookingQuery } from '../../interface';

export enum SheduleActionTypes {
  // GetRooms = '[Shedule] Get rooms Range',
  // GetRoomsSuccess = '[Shedule] Get rooms Success',
  // GetRoomsByDateRange = '[Shedule] Get Reservations By Dates Range',
  // GetRoomsByDateRangeSuccess = '[Shedule] Get Reservations By Dates Range Success',
  GetBookings = '[Shedule] Get Bookings',
  GetBookingsSuccess = '[Shedule] Get Bookings Success',
}

// export class GetRooms implements Action {
//   readonly type = SheduleActionTypes.GetRooms;
//   constructor(public payload: { company_id: string }) { }
// }

// export class GetRoomsSuccess implements Action {
//   readonly type = SheduleActionTypes.GetRoomsSuccess;
//   constructor(public payload: { rooms: Room[] }) { }
// }

// export class GetRoomsByDateRange implements Action {
//   readonly type = SheduleActionTypes.GetRoomsByDateRange;
//   constructor(public payload: { dateRange: RangeLimits, query?: Map<keyof Booking, { expr: string, val: any }> }) { }
// }

// export class GetRoomsByDateRangeSuccess implements Action {
//   readonly type = SheduleActionTypes.GetRoomsByDateRangeSuccess;
//   constructor(public payload: { companyWithBookings: CompanyWithBookings[] }) { }
// }

export class GetBookings implements Action {
  readonly type = SheduleActionTypes.GetBookings;
  constructor(public payload: BookingQuery) { }
}

export class GetBookingsSuccess implements Action {
  readonly type = SheduleActionTypes.GetBookingsSuccess;
  constructor(public payload: Booking[]) { }
}

export type SheduleActions =
  // GetRooms
  // | GetRoomsSuccess
  //  GetRoomsByDateRange
  // | GetRoomsByDateRangeSuccess
  GetBookings
  | GetBookingsSuccess;
