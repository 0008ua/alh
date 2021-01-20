import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Booking, CompanyWithBookings } from '../../interface';
import { SheduleActions, SheduleActionTypes } from '../actions/shedule.actions';

export const sheduleFeatureKey = 'shedule';

export interface SheduleState {
  // companyWithBookings: CompanyWithBookings[];
  bookings: Booking[];
}

export const initialState: SheduleState = {
  // companyWithBookings: [],
  bookings: [],
};

export function reducer(state = initialState, action: SheduleActions): SheduleState {
  switch (action.type) {
    // case SheduleActionTypes.GetRoomsByDateRangeSuccess: {
    //   return { ...state, companyWithBookings: action.payload.companyWithBookings };
    // }
    case SheduleActionTypes.GetBookingsSuccess: {
      return { ...state, bookings: action.payload };
    }
    default:
      return state;
  }
}

const featureSelector = createFeatureSelector<SheduleState>(sheduleFeatureKey);

export const getBookings = createSelector(featureSelector, (state) => state.bookings);
