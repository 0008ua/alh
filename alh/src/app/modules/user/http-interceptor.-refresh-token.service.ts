import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
  HttpResponse, HttpErrorResponse, HttpClient, HttpHeaders,
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { State } from '../../store/reducers';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';
import { Login, Logout, LogoutOnFront } from 'src/app/store/actions/user.actions';

@Injectable({
  providedIn: 'root',
})

export class HttpInterceptorRefreshTokenService implements HttpInterceptor {
  host = environment.host;
  refreshInProgress = false;

  constructor(
    private store: Store<State>,
    private userService: UserService,
    private http: HttpClient,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.userService.getToken().pipe(
        switchMap((token) => {
          if (token) {
            req = req.clone({
              headers: req.headers.set('Authorization', token),
            });
          }
          return next.handle(req);
        }),
        catchError((err: HttpErrorResponse) => {
          // catched - some error
          console.log('some error catched', err);
          if (err.status === 401 && !this.refreshInProgress) {
            // catched access token error
            console.log('access token error - catched', err);
            this.refreshInProgress = true;
            return this.userService.deviceInfo().pipe(
                switchMap((deviceInfo) => {
                  const httpOptions = {
                    headers: new HttpHeaders({
                      'Content-Type': 'application/json',
                    }),
                    observe: 'response' as 'response',
                  };
                    // try to get tokens pair using refresh token
                  console.log('try get tokens pair using refresh token');
                  return this.http.post<string>(
                      this.host + 'api/user/auth/generate-tokens',
                      {deviceInfo},
                      httpOptions,
                  ).pipe(
                      catchError((err: HttpErrorResponse) => {
                      // can't get new pair using refresh token
                      // logout and throw error
                        console.log('error - wrong refresh token', err);
                        this.refreshInProgress = false;
                        this.store.dispatch(new LogoutOnFront());
                        return throwError(err);
                      }),
                  );
                }),


                switchMap((refreshResult: HttpResponse<string>) => {
                  // got new access token result
                  console.log('got new access token result');
                  if (refreshResult.status === 200) {
                    // access token result status is 200,
                    // got new access token, try to connect protected with new access token
                    const token = refreshResult.body;
                    this.store.dispatch(new Login({ token }));
                    console.log('status 200, got access token, try to connect protected with new access token');
                    req = req.clone({
                      headers: req.headers.set('Authorization', refreshResult.body),
                    });
                    this.refreshInProgress = false;
                    return next.handle(req).pipe(
                        tap((res) => {
                          console.log('res', res);
                        }),
                        catchError((err) => {
                          // fail to connect protected with new access token
                          // throw error, logout
                          this.store.dispatch(new LogoutOnFront());
                          return throwError(err);
                        }),
                    );
                  } else {
                    this.refreshInProgress = false;
                    // access token result status is not 200
                    // throw custom error, logout
                    console.log('status is not 200 then throw custom error');
                    this.store.dispatch(new LogoutOnFront());
                    return throwError(new Error('get new tokens pair error, status not 200'));
                  }
                }),
                // catch((err) => )
            );
          } else if (err.status === 401 && this.refreshInProgress) {
            // console.log('401 error during refreshing (api/user/refresh-token)', err);
            return throwError(err);
          } else {
            // not 401 error throw it
            // console.log('not 401 error throw it', err);
            return throwError(err);
          }
        }),
    );
  }
}

/* Test -- Refresh token */
/*   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      headers: req.headers.set('api-token', 'wrongToken'),
    });
    return next.handle(req).pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('some error catched', err);
          if (err.status === 401 && !this.refreshInProgress) {
            // access token error - catch
            console.log('access token error - catched', err);
            this.refreshInProgress = true;
            const httpOptions = {
              headers: new HttpHeaders({
                'Content-Type': 'application/json',
              }),
              observe: 'response' as 'response',
            };
            // try to refresh tokens pair using refresh token
            console.log('try to refresh tokens pair using refresh token');
            return this.http.get<string>(
                this.host + 'api/user/refresh-token',
                httpOptions,
            )
                .pipe(
                    catchError((err: HttpErrorResponse) => {
                      console.log('error - wrong refresh token', err);
                      this.refreshInProgress = false;
                      return throwError(err);
                    }),
                    switchMap((refreshResult: HttpResponse<string>) => {
                    // get new tokens pair
                      console.log('get new tokens pair');
                      if (refreshResult.status === 200) {
                      // status 200, got new tokens pair, try to connect protected with new access token
                        console.log('status 200, got new tokens pair, try to connect protected with new access token');
                        req = req.clone({
                          headers: req.headers.set('api-token', refreshResult.body),
                        });
                        this.refreshInProgress = false;
                        return next.handle(req).pipe(
                            catchError((res) => {
                              console.log('res', res);
                              return throwError(new Error('!!!get new tokens pair error, status not 200'));
                            }),
                        );
                      } else {
                        this.refreshInProgress = false;
                        // if status not 200 then throw custom error
                        console.log('status is not 200 then throw custom error');
                        return throwError(new Error('get new tokens pair error, status not 200'));
                      }
                    }),

                    catchError((err: HttpErrorResponse) => {
                      console.log('fail to connect protected with new access token', err);
                      this.refreshInProgress = false;
                      return throwError(err);
                    }),

                );
          } else if (err.status === 401 && this.refreshInProgress) {
            console.log('401 error during refreshing (api/user/refresh-token)', err);
            return throwError(err);
          } else {
          // just not 401 error throw it
            console.log('just not 401 error throw it', err);
            return throwError(err);
          }
        }),
    );
  }
} */


// return this.userService.getToken()
//     .pipe(
//         switchMap((token) => {
//           console.log('token', token);
//           if (token) {
//             req = req.clone({
//               headers: req.headers
//                   .set('Authorization', token),
//             //  .set('Access-Control-Request-Headers', 'Content-type')
//             //  .set('Access-Control-Request-Method', 'get, options'),
//             // withCredentials: true,
//             });
//           }
//           return next.handle(req);
//         }),
//         catchError((err: HttpErrorResponse) => {
//           console.log('interceptor - ', err);
//           if (err.status === 401 && err.error?.message !== 'Помилка refresh' && this.refreshTokenInProgress === false) {
//             this.refreshTokenInProgress = true;
//             const httpOptions = {
//               headers: new HttpHeaders({
//                 'Content-Type': 'application/json',
//               }),
//             };
//             return this.userService.deviceInfo().pipe(
//                 switchMap((deviceInfo) => {
//                   console.log('deviceInfo', deviceInfo);
//                   return this.http.post<string>(
//                       this.host + 'api/user/auth/generate-tokens',
//                       {deviceInfo},
//                       httpOptions,
//                   );
//                 } ),
//                 mergeMap((token) => {
//                   console.log('token generated', token);

//                   if (token) {
//                     console.log('is token', token);
//                     this.store.dispatch(new Login({ token }));
//                     req = req.clone({
//                       headers: req.headers
//                           .set('Authorization', token),
//                       //     .set('Access-Control-Request-Headers', 'Content-type')
//                       //     .set('Access-Control-Request-Method', 'get, options'),
//                       // withCredentials: true,
//                     });
//                     this.refreshTokenInProgress = false;
//                     return next.handle(req);
//                   } else {
//                     this.refreshTokenInProgress = false;
//                     return throwError(err);
//                   }
//                 } ),
//                 catchError((err: HttpErrorResponse) => {
//                   console.log('interceptor2 - ', err);
//                   this.refreshTokenInProgress = false;
//                   this.store.dispatch(new Logout());
//                   return throwError(err);
//                 }),
//             );
//           //     if (err.error.message == "Token is exp") {
//           //       //TODO: Token refreshing
//           //     } else {
//           //       //Logout from account or do some other stuff
//           //     }
//           } else {
//             this.refreshTokenInProgress = false;
//             console.log('interceptor3 - ', err);

//             return throwError(err);
//           }
//         }),
//     );
//   }
// }
