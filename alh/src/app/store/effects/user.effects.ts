import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, tap, mergeMap } from 'rxjs/operators';

import {
// UserActionTypes, GetUser, Authenticated, NotAuthenticated, AuthError, Redirection,
// CompanyAuthenticated, Logout, Login, GetCompanyByUser, UpdateUser, UpdateUserFail, UpdateUserSuccess,
} from '../actions/user.actions';

import * as fromUserActions from '../actions/user.actions';
import { UserService } from '../../modules/user/user.service';

@Injectable()
export class UserEffects {
  @Effect()
  getUser: Observable<Action | Action[]> = this.actions$.pipe(
      ofType(fromUserActions.UserActionTypes.getUser),
      map((action: fromUserActions.GetUser) => action.payload),
      switchMap((payload) => this.userService.getUser().pipe(
          switchMap((user) => {
            let actions: Action[];
            if (user) {
              // User logged in
              actions = [new fromUserActions.Authenticated({ user }), new fromUserActions.GetCompanyByUser()];
            } else {
              // User not logged in
              actions = [new fromUserActions.NotAuthenticated()];
            }
            if (payload) {
              actions.push(new fromUserActions.Redirection({ redirectionUrl: payload }));
            }
            return actions;
          }),
          catchError((err) => [new fromUserActions.AuthError(), new fromUserActions.Logout()]),
      )),
  );

  @Effect()
  activateUser: Observable<Action | Action[]> = this.actions$.pipe(
      ofType(fromUserActions.UserActionTypes.ActivateUser),
      map((action: fromUserActions.ActivateUser) => action.payload),
      switchMap((payload) => this.userService.activateUser(payload).pipe(
          mergeMap((token) => [new fromUserActions.Login({ token }), new fromUserActions.UpdateUserSuccess()]),
          catchError((err) => of(new fromUserActions.UpdateUserFail())),
      )),

  );

  @Effect()
  updateUser: Observable<Action | Action[]> = this.actions$.pipe(
      ofType(fromUserActions.UserActionTypes.UpdateUser),
      map((action: fromUserActions.UpdateUser) => action.payload),
      switchMap((payload) => this.userService.updateUser(payload).pipe(
          mergeMap((token) => [new fromUserActions.Login({ token }), new fromUserActions.UpdateUserSuccess()]),
          catchError((err) => of(new fromUserActions.UpdateUserFail())),
      )),
  );

  @Effect()
  getCompanyByUser: Observable<Action | Action[]> = this.actions$.pipe(
      ofType(fromUserActions.UserActionTypes.getCompanyByUser),
      switchMap((payload) => this.userService.getCompanyByUser().pipe(
          map((company) => {
            if (company) {
              return new fromUserActions.CompanyAuthenticated({ company });
            } else {
              // Did't get company -> Logout
              return new fromUserActions.Logout();
            }
          }),
          catchError((err) => [new fromUserActions.AuthError(), new fromUserActions.Logout()]),
      )),
  );

  // @Effect()
  // logout: Observable<Action | Action[]> = this.actions$.pipe(
  //     ofType(fromUserActions.UserActionTypes.logout),
  //     switchMap(() => this.userService.removeToken().pipe(
  //         map((_) => new fromUserActions.GetUser('/user/login')),
  //         catchError((err) => of(new fromUserActions.AuthError())),
  //     )),
  // );

  @Effect()
  logout: Observable<Action | Action[]> = this.actions$.pipe(
      ofType(fromUserActions.UserActionTypes.logout),
      switchMap(() => this.userService.logout().pipe(
          switchMap(() => this.userService.removeToken()),
          map((_) => new fromUserActions.GetUser('/user/login')),
          catchError((err) => of(new fromUserActions.AuthError())),
      )),
  );

  @Effect()
  logoutOnFront: Observable<Action | Action[]> = this.actions$.pipe(
    ofType(fromUserActions.UserActionTypes.logoutOnFront),
      switchMap(() => this.userService.removeToken().pipe(
          map((_) => new fromUserActions.GetUser('/user/login')),
          catchError((err) => of(new fromUserActions.AuthError())),
      )),
  );

  @Effect()
  login: Observable<Action | Action[]> = this.actions$.pipe(
      ofType(fromUserActions.UserActionTypes.login),
      map((action: fromUserActions.Login) => action.payload),
      switchMap((payload) => this.userService.setToken(payload.token).pipe(
          map((_) => new fromUserActions.GetUser(payload.redirectionUrl ? payload.redirectionUrl : null)),
          catchError((err) => of(new fromUserActions.AuthError())),
      )),
  );

  // // companyUsers entity
  // @Effect()
  // getCompanyUsers: Observable<Action | Action[]> = this.actions$.pipe(
  //     ofType(CompanyUserActionTypes.GetCompanyUsers),
  //     map((action: GetCompanyUsers) => action.payload),
  //     switchMap((payload) => this.userService.getCompanyUsers(payload.companyUsers_id).pipe(
  //         map((users) => {
  //           return new LoadCompanyUsers({ companyUsers: users });
  //         }),
  //     )),
  //     catchError((err) => of(new CompanyUsersError(err))),
  // );

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) { }
}
