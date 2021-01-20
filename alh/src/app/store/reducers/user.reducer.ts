import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Company, User } from '../../interface';
import { UserActions, UserActionTypes } from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface UserState {
  user: User | null;
  company: Company | null,
  loading: boolean;
  redirectionUrl: string | null;
}

export const initialState: UserState = {
  user: null,
  company: null,
  loading: false,
  redirectionUrl: null,
  // {
  //   login: null,
  //   email: null,
  //   loading: false,
  // },
};

export function reducer(state = initialState, action: UserActions): UserState {
  // console.log('screen reducer');

  switch (action.type) {
    // fires and then effect fires on same action to fetch data
    // here is only for set loading to true (e. g. to show spinner)
    case UserActionTypes.getUser:
      return { ...state, loading: true };

    case UserActionTypes.getCompanyByUser:
      return { ...state };

    case UserActionTypes.companyAuthenticated:
      return { ...state, company: action.payload.company, loading: false };

    case UserActionTypes.authenticated:
      return { ...state, user: { ...action.payload.user }, redirectionUrl: null, loading: false };

    case UserActionTypes.notAuthenticated:
      return { ...state, user: initialState.user, company: initialState.company, redirectionUrl: '/user/login', loading: false };

    case UserActionTypes.redirection:
      return { ...state, redirectionUrl: action.payload.redirectionUrl };

      // case UserActionTypes.googleLogin:
      //   return { ...state, user: { ...state.user, loading: true } };

    case UserActionTypes.authError:
      return { ...state, user: initialState.user, company: initialState.company, redirectionUrl: '/user/login', loading: false };

    case UserActionTypes.UpdateUserSuccess:
      return { ...state };

    case UserActionTypes.UpdateUserFail:
      return { ...state };


      // case UserActionTypes.logout:
      //   return { ...state, user: { ...state.user, loading: true } };

    default:
      return state;
  }
}

const featureSelector = createFeatureSelector<UserState>(userFeatureKey);

export const getCompany = createSelector(featureSelector, (state) => state.company);
export const getUser = createSelector(featureSelector, (state) => state.user);
export const redirectionUrl = createSelector(featureSelector, (state) => state.redirectionUrl);
