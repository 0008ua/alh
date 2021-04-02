import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Booking, Payment } from '../../interface';
import { ScheduleActions, ScheduleActionTypes } from '../actions/schedule.actions';

export const scheduleFeatureKey = 'schedule';

export interface ScheduleState {
  bookings: Booking[];
  // analyticsBookings: Booking[];
  payments: Payment[];
}

export const initialState: ScheduleState = {
  bookings: [],
  payments: [],
  // analyticsBookings: [],
};

export function reducer(state = initialState, action: ScheduleActions): ScheduleState {
  switch (action.type) {
    case ScheduleActionTypes.GetBookingsSuccess: {
      return { ...state, bookings: action.payload };
    }
    // case ScheduleActionTypes.GetAnalyticsBookingsSuccess: {
    //   return { ...state, analyticsBookings: action.payload };
    // }
    case ScheduleActionTypes.GetPaymentsSuccess: {
      return { ...state, payments: action.payload };
    }
    default:
      return state;
  }
}

const featureSelector = createFeatureSelector<ScheduleState>(scheduleFeatureKey);

export const getBookings = createSelector(featureSelector, (state) => state.bookings);
// export const getAnalyticsBookings = createSelector(featureSelector, (state) => state.analyticsBookings);
export const getPayments = createSelector(featureSelector, (state) => state.payments);
