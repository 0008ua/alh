import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Booking, Payment } from '../../interface';
import { SheduleActions, SheduleActionTypes } from '../actions/shedule.actions';

export const sheduleFeatureKey = 'shedule';

export interface SheduleState {
  bookings: Booking[];
  // analyticsBookings: Booking[];
  payments: Payment[];
}

export const initialState: SheduleState = {
  bookings: [],
  payments: [],
  // analyticsBookings: [],
};

export function reducer(state = initialState, action: SheduleActions): SheduleState {
  switch (action.type) {
    case SheduleActionTypes.GetBookingsSuccess: {
      return { ...state, bookings: action.payload };
    }
    // case SheduleActionTypes.GetAnalyticsBookingsSuccess: {
    //   return { ...state, analyticsBookings: action.payload };
    // }
    case SheduleActionTypes.GetPaymentsSuccess: {
      return { ...state, payments: action.payload };
    }
    default:
      return state;
  }
}

const featureSelector = createFeatureSelector<SheduleState>(sheduleFeatureKey);

export const getBookings = createSelector(featureSelector, (state) => state.bookings);
// export const getAnalyticsBookings = createSelector(featureSelector, (state) => state.analyticsBookings);
export const getPayments = createSelector(featureSelector, (state) => state.payments);
