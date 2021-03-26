import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Plugins } from '@capacitor/core';
const { Storage, Device } = Plugins;

import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';

import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { catchError, delay, map, switchMap, tap, timeout } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { Company, CompanySignup, User } from '../../interface';
import { State } from '../../store/reducers';
import { Login, LoginSuccess, Logout, Redirection } from '../../store/actions/user.actions';
import { getUser, redirectionUrl } from '../../store/reducers/user.reducer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  host = environment.host;
  permissions = environment.permissions;
  user: User;
  // private action$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(
    private http: HttpClient,
    private store: Store<State>,
    private router: Router,
    private cookieService: CookieService,
  ) {
    this.store.select(redirectionUrl)
        .subscribe((url) => {
          if (url) {
            this.router.navigateByUrl(url);
            this.store.dispatch(new Redirection({redirectionUrl: null}));
          }
        });
  }

  // emitAction(action: boolean) {
  //   this.action$.next(action);
  // }

  // getAction() {
  //   return this.action$.asObservable();
  // }

  /*   condition
  if true than return calculated permission(true, false),
  if false than return calculated !permission(true, false),
   */
  displayGuard({component, item, condition = true}: { component: string; item: string, condition?: boolean }): Observable<boolean> {
    return this.store.select(getUser).pipe(
        map((user) => {
          console.log('this.permissions', this.permissions);
          console.log('item', item);
          console.log('component', component);
          console.log('this.permissions[component]', this.permissions[component]);
          if (
            (item in this.permissions[component]) &&
            (this.permissions[component][item].roles.indexOf(user.role) >= 0) &&
            (user.activated || !this.permissions[component][item].activated) &&
            (!user.blocked || !this.permissions[component][item].notBlocked)
          ) {
            return true && condition;
          } else {
            return !condition;
          }
        }),
    );
  }


  removeCompany(): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.delete<null>(
        this.host + 'api/user/remove-company/',
        httpOptions,
    );
  }

  deviceInfo() {
    return from(Device.getInfo());
  }

  getCookie(name: string) {
    const cookie = this.cookieService.get(name);
    return cookie;
  }

  getUser(): Observable< User|null > {
    return from(Storage.get({key: 'token'}))
        .pipe(
            map((token) => {
              const jwtHelper = new JwtHelperService();
              if (token?.value && !jwtHelper.isTokenExpired(token.value)) {
                const user = jwtHelper.decodeToken(token.value);
                return user;
              }
              return null;
            }),
        );
  }

  sendActivationCode(_id: string): Observable <null> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<null>(
        this.host + 'api/user/send-activation-code/' + _id,
        httpOptions,
    );
  }

  activateUser(payload: {_id: string, code: number}): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.put<string>(
        this.host + 'api/user/activate-user/' + payload._id,
        { code: payload.code },
        httpOptions,
    );
  }

  updateUser(update: Partial<User> & Required<{ _id: string }>): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.put<string>(
        this.host + 'api/user/updateUser/' + update._id,
        update,
        httpOptions,
    );
  }

  getCompanyByUser(): Observable<Company | null> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<Company>(
        this.host + 'api/user/get-company-by-user',
        httpOptions,
    );
  }

  logout(): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.deviceInfo().pipe(
        switchMap((deviceInfo) => this.http.put<void>(
            this.host + 'api/user/logout',
            { deviceInfo },
            httpOptions,
        )),
        // tap((_) => this.store.dispatch(new Logout())),
    );

    // return this.http.get<null>(
    //     this.host + 'api/user/logout',
    //     httpOptions,
    // ).pipe(
    //     tap((_) => this.store.dispatch(new Logout())),
    // );
  }

  generateTokens(): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get<string>(
        this.host + 'api/user/auth/generate-tokens',
        httpOptions,
    );
  }

  login(user: User): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.deviceInfo().pipe(
        switchMap((deviceInfo) => this.http.post<string>(
            this.host + 'api/user/login',
            {...user, deviceInfo},
            httpOptions,
        )),
        // map((token) => this.store.dispatch(new Login({token, redirectionUrl: '/'}))),
    );
  }

  createCompany(companySignup: CompanySignup): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<string>(
        this.host + 'api/user/create-company',
        companySignup,
        httpOptions,
    ).pipe(
        map((token) => this.store.dispatch(new LoginSuccess({ token, redirectionUrl: '/' }))),
    );
  }


  createCompanyUser(user: User): Observable<void> {
    return this.getToken()
        .pipe(
            switchMap((token) => {
              const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type': 'application/json',
                  // 'Authorization': token,
                }),
              };
              return this.http.post<null>(
                  this.host + 'api/user/create-company-user',
                  user,
                  httpOptions,
              );
            }),
            tap((createCompanyUser) => console.log('createCompanyUser', createCompanyUser)),
        );
  }

  removeToken(): Observable<void> {
    return from(Storage.remove({ key: 'token' }));
  }

  setToken(token: string): Observable<void> {
    return from(Storage.set({ key: 'token', value: token }));
  }

  getToken(): Observable<string> {
    return from(Storage.get({ key: 'token' })).pipe(
        map((token) => {
          if (token) {
            return token.value;
          } else {
            return null;
          }
        }),
    );
  }

  /* forms */
  emailFormControl(formState: any = '') {
    return new FormControl(
        formState,
        {
          updateOn: 'change',
          validators: [
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
            Validators.required,
          ],
          asyncValidators: [
            this.checkEmailUnique(),
          ],
        });
  }

  /* async validators */
  checkCompanyNameUnique(): AsyncValidatorFn {
    return (abstractControl: AbstractControl): Observable < ValidationErrors | null > => {
      const companyName = abstractControl.value;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params: new HttpParams()
            .set('companyName', companyName),
      };
      return of(null).pipe(
          delay(800),
          switchMap((_) => this.http.get<null>(
              this.host + 'api/user/is-company-name-unique',
              httpOptions,
          )),
          catchError((err) => {
            return of({ notunique: true });
          }),
          map((result) => {
            return result ? { notunique: true } : null;
          }));
    };
  }

  checkLoginUnique(): AsyncValidatorFn {
    return (abstractControl: AbstractControl): Observable<ValidationErrors | null> => {
      const login = abstractControl.value;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params: new HttpParams()
            .set('login', login),
      };
      return of(null).pipe(
          delay(800),
          switchMap((_) => this.http.get<null>(
              this.host + 'api/user/is-login-unique',
              httpOptions,
          )),
          catchError((err) => {
            return of({ notunique: true });
          }),
          map((result) => {
            return result ? { notunique: true } : null;
          }));
    };
  }

  checkEmailUnique(): AsyncValidatorFn {
    return (abstractControl: AbstractControl): Observable<ValidationErrors | null> => {
      const email = abstractControl.value;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        params: new HttpParams()
            .set('email', email),
      };
      return of(null).pipe(
          delay(800),
          switchMap((_) => this.http.get<null>(
              this.host + 'api/user/is-email-unique',
              httpOptions,
          )),
          catchError((err) => {
            return of({ notunique: true });
          }),
          map((result) => {
            return result ? { notunique: true } : null;
          }),
      );
    };
  }

  // sync validator
  matchPassword(abstractControl: AbstractControl): ValidationErrors | null {
    const password = abstractControl.get('password').value;
    const passwordConfirm = abstractControl.get('passwordConfirm').value;
    if (password === passwordConfirm) {
      abstractControl.get('passwordConfirm').setErrors(null);
      return null;
    } else {
      /**
       * set error to 'passwordConfirm' element
       */

      abstractControl.get('passwordConfirm').setErrors({ mismatch: true });
      /**
       * and don't set error (null) to formGroup
       */
      return null;
    }
  }

  // companyUsers entity
  getCompanyUsers(users_id: string[]): Observable<User[]> {
    return from(Storage.get({ key: 'token' }))
        .pipe(
            switchMap((token) => {
              const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type': 'application/json',
                  // 'Authorization': token.value,
                }),
                params: new HttpParams()
                    .set('users_id', JSON.stringify(users_id)),
              };
              return this.http.get<User[]>(
                  this.host + 'api/user/get-company-users',
                  httpOptions,
              );
            }),
            tap((getCompanyUsers) => console.log('getCompanyUsers', getCompanyUsers)),
        );
  }

  addCompanyUser(_id: string) {
  }

  updateCompanyUser(_id: string) {
  }

  deleteCompanyUser(_id: string) {
  }

  /* Test -- refresh token */
  // protected() {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     }),
  //   };
  //   return this.http.get<User[]>(
  //       this.host + 'api/user/protected',
  //       httpOptions,
  //   );
  // }
}
