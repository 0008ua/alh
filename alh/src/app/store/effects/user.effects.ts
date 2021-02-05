import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, tap, mergeMap } from 'rxjs/operators';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import * as fromUserActions from '../actions/user.actions';
import { UserService } from '../../modules/user/user.service';

@Injectable()
export class UserEffects {
  @Effect()
  loadLang: Observable<Action> = this.actions$
      .pipe(
          ofType(fromUserActions.UserActionTypes.LoadLang),
          // map((action: LoadAppNav) => action.payload),
          switchMap((_) => this.translate.onLangChange),
          map((event: LangChangeEvent) => new fromUserActions.LoadLangSuccess(event.lang)),
          catchError((err) => of(new fromUserActions.LoadLangFail(err))),
      );

  @Effect()
  getUser: Observable<Action | Action[]> = this.actions$.pipe(
      ofType(fromUserActions.UserActionTypes.GetUser),
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
  getCompanyByUser: Observable<Action | Action[]> = this.actions$.pipe(
      ofType(fromUserActions.UserActionTypes.GetCompanyByUser),
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

  @Effect()
  activateUser: Observable<Action | Action[]> = this.actions$.pipe(
      ofType(fromUserActions.UserActionTypes.ActivateUser),
      map((action: fromUserActions.ActivateUser) => action.payload),
      switchMap((payload) => this.userService.activateUser(payload).pipe(
          map((token) => new fromUserActions.LoginSuccess({ token })),
          catchError((err) => of(new fromUserActions.UpdateUserFail(err))),
      )),
  );

  @Effect()
  login: Observable<Action | Action[]> = this.actions$.pipe(
      ofType(fromUserActions.UserActionTypes.Login),
      map((action: fromUserActions.Login) => action.payload),
      switchMap((payload) => this.userService.login(payload.user).pipe(
          map((token) => new fromUserActions.LoginSuccess({ token, redirectionUrl: '/' })),
          catchError((err) => of(new fromUserActions.LoginFail(err))),
      )),
  );

  @Effect()
  updateUser: Observable<Action | Action[]> = this.actions$.pipe(
      ofType(fromUserActions.UserActionTypes.UpdateUser),
      map((action: fromUserActions.UpdateUser) => action.payload),
      switchMap((payload) => this.userService.updateUser(payload).pipe(
          map((token) => new fromUserActions.LoginSuccess({ token })),
          catchError((err) => of(new fromUserActions.UpdateUserFail(err))),

      )),
  );

  @Effect()
  loginSuccess: Observable<Action | Action[]> = this.actions$.pipe(
      ofType(fromUserActions.UserActionTypes.LoginSuccess),
      map((action: fromUserActions.LoginSuccess) => action.payload),
      switchMap((payload) => this.userService.setToken(payload.token).pipe(
          map((_) => new fromUserActions.GetUser(payload.redirectionUrl ? payload.redirectionUrl : null)),
          catchError((err) => of(new fromUserActions.AuthError())),
      )),
  );

  @Effect()
  logout: Observable<Action | Action[]> = this.actions$.pipe(
      ofType(fromUserActions.UserActionTypes.Logout),
      switchMap(() => this.userService.logout().pipe(
          switchMap(() => this.userService.removeToken()),
          map((_) => new fromUserActions.GetUser('/user/login')),
          catchError((err) => of(new fromUserActions.AuthError())),
      )),
  );

  @Effect()
  logoutOnFront: Observable<Action | Action[]> = this.actions$.pipe(
      ofType(fromUserActions.UserActionTypes.LogoutOnFront),
      switchMap(() => this.userService.removeToken().pipe(
          map((_) => new fromUserActions.GetUser('/user/login')),
          catchError((err) => of(new fromUserActions.AuthError())),
      )),
  );


  constructor(
    private actions$: Actions,
    private userService: UserService,
    private translate: TranslateService,
  ) { }
}
