import { Action } from '@ngrx/store';
import { Company, User } from '../../interface';

export enum UserActionTypes {
  getUser = '[User] Get user',
  getCompanyByUser = '[User] Get company by user',
  logout = '[User] Logout',
  logoutOnFront = '[User] LogoutOnFront',
  login = '[User] Login',
  companyAuthenticated = '[User] Company Authenticated',
  authenticated = '[User] Authenticated',
  notAuthenticated = '[User] Not Authenticated',
  redirection = '[User] Redirection',
  authError = '[User] Error',

  UpdateUser = '[User] Update user',
  UpdateUserSuccess = '[User] Update user success',
  UpdateUserFail = '[User] Update user fail',

  ActivateUser = '[User] Activate user',

}

// Get User AuthState
export class GetUser implements Action {
  readonly type = UserActionTypes.getUser;
  constructor(public payload?: string ) { }
}

export class GetCompanyByUser implements Action {
  readonly type = UserActionTypes.getCompanyByUser;
}

export class CompanyAuthenticated implements Action {
  readonly type = UserActionTypes.companyAuthenticated;
  constructor(public payload: { company: Company }) { }
}

export class Authenticated implements Action {
  readonly type = UserActionTypes.authenticated;
  constructor(public payload: { user: User }) { }
}

export class NotAuthenticated implements Action {
  readonly type = UserActionTypes.notAuthenticated;
  // constructor(public payload: { redirectionUrl: string }) { }
}

export class Redirection implements Action {
  readonly type = UserActionTypes.redirection;
  constructor(public payload?: { redirectionUrl: string }) { }
}

export class AuthError implements Action {
  readonly type = UserActionTypes.authError;
  // constructor(public payload?: any) { }
}

// // Google Login Actions
// export class GoogleLogin implements Action {
//   readonly type = UserActionTypes.googleLogin;
//   constructor(public payload?: any) { }
// }
export class Login implements Action {
  readonly type = UserActionTypes.login;
  constructor(public payload: { token: string, redirectionUrl?: string }) { }
}

export class Logout implements Action {
  readonly type = UserActionTypes.logout;
}

export class LogoutOnFront implements Action {
  readonly type = UserActionTypes.logoutOnFront;
}

export class ActivateUser implements Action {
  readonly type = UserActionTypes.ActivateUser;
  constructor(public payload: { _id: string, code: number }) { }
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.UpdateUser;
  constructor(public payload: Partial<User> & Required<{_id: string}>) { }
}

export class UpdateUserSuccess implements Action {
  readonly type = UserActionTypes.UpdateUserSuccess;
  // constructor(public payload: User) { }
}

export class UpdateUserFail implements Action {
  readonly type = UserActionTypes.UpdateUserFail;
}

export type UserActions
  = GetUser
  | GetCompanyByUser
  | CompanyAuthenticated
  | Authenticated
  | NotAuthenticated
  | Redirection
  | AuthError
  | Logout
  | LogoutOnFront
  | Login
  | UpdateUser
  | UpdateUserSuccess
  | UpdateUserFail;
