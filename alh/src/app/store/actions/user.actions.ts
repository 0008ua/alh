import { Action } from '@ngrx/store';
import { Company, User } from '../../interface';

export enum UserActionTypes {
  GetUser = '[User] Get user',
  GetCompanyByUser = '[User] Get company by user',
  LogoutOnFront = '[User] LogoutOnFront',

  CompanyAuthenticated = '[User] Company Authenticated',
  Authenticated = '[User] Authenticated',
  NotAuthenticated = '[User] Not Authenticated',
  Redirection = '[User] Redirection',
  AuthError = '[User] Error',

  UpdateUser = '[User] Update user',
  UpdateUserSuccess = '[User] Update user success',
  UpdateUserFail = '[User] Update user fail',

  ActivateUser = '[User] Activate user',

  Login = '[User] Login',
  LoginSuccess = '[User] Login Success',
  LoginFail = '[User] Login Fail',

  Logout = '[User] Logout',
}

// Get User AuthState
export class GetUser implements Action {
  readonly type = UserActionTypes.GetUser;
  constructor(public payload?: string ) { }
}

export class GetCompanyByUser implements Action {
  readonly type = UserActionTypes.GetCompanyByUser;
}

export class CompanyAuthenticated implements Action {
  readonly type = UserActionTypes.CompanyAuthenticated;
  constructor(public payload: { company: Company }) { }
}

export class Authenticated implements Action {
  readonly type = UserActionTypes.Authenticated;
  constructor(public payload: { user: User }) { }
}

export class NotAuthenticated implements Action {
  readonly type = UserActionTypes.NotAuthenticated;
}

export class Redirection implements Action {
  readonly type = UserActionTypes.Redirection;
  constructor(public payload?: { redirectionUrl: string }) { }
}

export class AuthError implements Action {
  readonly type = UserActionTypes.AuthError;
}

export class Login implements Action {
  readonly type = UserActionTypes.Login;
  constructor(public payload: { user: User }) { }
}

export class LoginSuccess implements Action {
  readonly type = UserActionTypes.LoginSuccess;
  constructor(public payload: { token: string, redirectionUrl?: string }) { }
}

export class LoginFail implements Action {
  readonly type = UserActionTypes.LoginFail;
  constructor(public payload?: any) { }
}

export class Logout implements Action {
  readonly type = UserActionTypes.Logout;
}

export class LogoutOnFront implements Action {
  readonly type = UserActionTypes.LogoutOnFront;
}

export class ActivateUser implements Action {
  readonly type = UserActionTypes.ActivateUser;
  constructor(public payload: { _id: string, code: number }) { }
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.UpdateUser;
  constructor(public payload: Partial<User> & Required<{_id: string}>) { }
}
export class UpdateUserFail implements Action {
  readonly type = UserActionTypes.UpdateUserFail;
  constructor(public payload?: any) { }
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
  | LoginSuccess
  | LoginFail
  | UpdateUser
  | UpdateUserFail;
