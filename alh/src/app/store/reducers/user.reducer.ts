import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Company, User } from '../../interface';
import { UserActions, UserActionTypes } from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface UserState {
  user: User | null;
  company: Company | null,
  loading: boolean;
  redirectionUrl: string | null;
  lang: string;
  defaultLang: string;
}

export const initialState: UserState = {
  user: null,
  company: null,
  loading: false,
  redirectionUrl: null,
  lang: 'en',
  defaultLang: 'uk',
};

export function reducer(state = initialState, action: UserActions): UserState {
  // console.log('screen reducer');

  switch (action.type) {
    case UserActionTypes.LoadLangSuccess:
      return { ...state, lang: action.payload };
    // fires and then effect fires on same action to fetch data
    // here is only for set loading to true (e. g. to show spinner)
    case UserActionTypes.GetUser:
      return { ...state, loading: true };

    case UserActionTypes.GetCompanyByUser:
      return { ...state };

    case UserActionTypes.CompanyAuthenticated:
      return { ...state, company: action.payload.company, loading: false };

    case UserActionTypes.Authenticated:
      return { ...state, user: { ...action.payload.user }, redirectionUrl: null, loading: false };

    case UserActionTypes.NotAuthenticated:
      return { ...state, user: initialState.user, company: initialState.company, redirectionUrl: '/user/login', loading: false };

    case UserActionTypes.Redirection:
      return { ...state, redirectionUrl: action.payload.redirectionUrl };

    case UserActionTypes.AuthError:
      return { ...state, user: initialState.user, company: initialState.company, redirectionUrl: '/user/login', loading: false };

    default:
      return state;
  }
}

const featureSelector = createFeatureSelector<UserState>(userFeatureKey);

export const getCompany = createSelector(featureSelector, (state) => state.company);
export const getUser = createSelector(featureSelector, (state) => state.user);
export const redirectionUrl = createSelector(featureSelector, (state) => state.redirectionUrl);
export const getLang = createSelector(featureSelector, (state) => state.lang);
