(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\it\alh\alh\src\main.ts */"zUnb");


/***/ }),

/***/ "4dfA":
/*!**************************************************!*\
  !*** ./src/app/store/actions/shedule.actions.ts ***!
  \**************************************************/
/*! exports provided: SheduleActionTypes, GetBookings, GetBookingsSuccess, GetPayments, GetPaymentsSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheduleActionTypes", function() { return SheduleActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBookings", function() { return GetBookings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBookingsSuccess", function() { return GetBookingsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPayments", function() { return GetPayments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPaymentsSuccess", function() { return GetPaymentsSuccess; });
var SheduleActionTypes;
(function (SheduleActionTypes) {
    SheduleActionTypes["GetBookings"] = "[Shedule] Get Bookings";
    SheduleActionTypes["GetBookingsSuccess"] = "[Shedule] Get Bookings Success";
    // GetAnalyticsBookings = '[Shedule] Get Analytics Bookings',
    // GetAnalyticsBookingsSuccess = '[Shedule] Get Analytics Bookings Success',
    SheduleActionTypes["GetPayments"] = "[Shedule] Get Payments";
    SheduleActionTypes["GetPaymentsSuccess"] = "[Shedule] Get Payments Success";
})(SheduleActionTypes || (SheduleActionTypes = {}));
class GetBookings {
    constructor(payload) {
        this.payload = payload;
        this.type = SheduleActionTypes.GetBookings;
    }
}
class GetBookingsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = SheduleActionTypes.GetBookingsSuccess;
    }
}
// export class GetAnalyticsBookings implements Action {
//   readonly type = SheduleActionTypes.GetAnalyticsBookings;
//   constructor(public payload: BookingQuery) { }
// }
// export class GetAnalyticsBookingsSuccess implements Action {
//   readonly type = SheduleActionTypes.GetAnalyticsBookingsSuccess;
//   constructor(public payload: Booking[]) { }
// }
class GetPayments {
    constructor(payload) {
        this.payload = payload;
        this.type = SheduleActionTypes.GetPayments;
    }
}
class GetPaymentsSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = SheduleActionTypes.GetPaymentsSuccess;
    }
}


/***/ }),

/***/ "7BuE":
/*!**********************************************!*\
  !*** ./src/app/store/store-toast.service.ts ***!
  \**********************************************/
/*! exports provided: EntityToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityToastService", function() { return EntityToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/data */ "hlQ1");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actions/user.actions */ "mYIz");







/** Report ngrx-data success/error actions as toast messages **/
let EntityToastService = class EntityToastService {
    constructor(actions$, toastController) {
        this.toastController = toastController;
        actions$
            .pipe(Object(_ngrx_data__WEBPACK_IMPORTED_MODULE_4__["ofEntityOp"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((ea) => ea.payload.entityOp.endsWith(_ngrx_data__WEBPACK_IMPORTED_MODULE_4__["OP_SUCCESS"]) || ea.payload.entityOp.endsWith(_ngrx_data__WEBPACK_IMPORTED_MODULE_4__["OP_ERROR"])))
            .subscribe((action) => this.presentToast(`${action.payload.entityName} action - ${action.payload.entityOp}`));
        actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_ngrx_data__WEBPACK_IMPORTED_MODULE_4__["EntityCacheAction"].SAVE_ENTITIES_SUCCESS, _ngrx_data__WEBPACK_IMPORTED_MODULE_4__["EntityCacheAction"].SAVE_ENTITIES_ERROR))
            .subscribe((action) => this.presentToast(`SaveEntities ${action.type} - url: ${action.payload.url}`));
        actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_6__["UserActionTypes"].LoginFail))
            .subscribe((action) => this.presentToast(`Wrong credentials`));
        actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_6__["UserActionTypes"].UpdateUserFail))
            .subscribe((action) => this.presentToast(`Update error`));
    }
    presentToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                duration: 2000,
            });
            toast.present();
        });
    }
};
EntityToastService.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
EntityToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], EntityToastService);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var src_app_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/interface */ "PQ5l");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    host: '/',
    // host: 'https://10.0.2.2:8084/',
    production: false,
    paymentMethodsMap: new Map(src_app_interface__WEBPACK_IMPORTED_MODULE_0__["paymentMethods"]),
    bookingStepsMap: new Map(src_app_interface__WEBPACK_IMPORTED_MODULE_0__["bookingSteps"]),
    bookingStepExprsMap: new Map(src_app_interface__WEBPACK_IMPORTED_MODULE_0__["bookingStepExprs"]),
    sortOrdersMap: new Map(src_app_interface__WEBPACK_IMPORTED_MODULE_0__["sortOrders"]),
    sortFieldsMap: new Map(src_app_interface__WEBPACK_IMPORTED_MODULE_0__["sortFields"]),
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "I02m":
/*!*************************************************************************!*\
  !*** ./src/app/modules/user/http-interceptor.-refresh-token.service.ts ***!
  \*************************************************************************/
/*! exports provided: HttpInterceptorRefreshTokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorRefreshTokenService", function() { return HttpInterceptorRefreshTokenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "d6tv");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/actions/user.actions */ "mYIz");









let HttpInterceptorRefreshTokenService = class HttpInterceptorRefreshTokenService {
    constructor(store, userService, http) {
        this.store = store;
        this.userService = userService;
        this.http = http;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].host;
        this.refreshInProgress = false;
    }
    intercept(req, next) {
        return this.userService.getToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((token) => {
            if (token) {
                req = req.clone({
                    headers: req.headers.set('Authorization', token),
                });
            }
            return next.handle(req);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            // catched - some error
            // console.log('some error catched', err);
            if (err.status === 401 && !this.refreshInProgress) {
                // catched access token error
                // console.log('access token error - catched', err);
                this.refreshInProgress = true;
                return this.userService.deviceInfo().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((deviceInfo) => {
                    const httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                            'Content-Type': 'application/json',
                        }),
                        observe: 'response',
                    };
                    // try to get tokens pair using refresh token
                    // console.log('try get tokens pair using refresh token');
                    return this.http.post(this.host + 'api/user/auth/generate-tokens', { deviceInfo }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
                        // can't get new pair using refresh token
                        // logout and throw error
                        // console.log('error - wrong refresh token', err);
                        this.refreshInProgress = false;
                        this.store.dispatch(new src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_8__["LogoutOnFront"]());
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
                    }));
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((refreshResult) => {
                    // got new access token result
                    // console.log('got new access token result');
                    if (refreshResult.status === 200) {
                        // access token result status is 200,
                        // got new access token, try to connect protected with new access token
                        const token = refreshResult.body;
                        this.store.dispatch(new src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_8__["LoginSuccess"]({ token }));
                        // console.log('status 200, got access token, try to connect protected with new access token');
                        req = req.clone({
                            headers: req.headers.set('Authorization', refreshResult.body),
                        });
                        this.refreshInProgress = false;
                        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((res) => {
                            console.log('res', res);
                        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
                            // fail to connect protected with new access token
                            // throw error, logout
                            this.store.dispatch(new src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_8__["LogoutOnFront"]());
                            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
                        }));
                    }
                    else {
                        this.refreshInProgress = false;
                        // access token result status is not 200
                        // throw custom error, logout
                        // console.log('status is not 200 then throw custom error');
                        this.store.dispatch(new src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_8__["LogoutOnFront"]());
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(new Error('get new tokens pair error, status not 200'));
                    }
                }));
            }
            else if (err.status === 401 && this.refreshInProgress) {
                // console.log('401 error during refreshing (api/user/refresh-token)', err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }
            else {
                // not 401 error throw it
                // console.log('not 401 error throw it', err);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
            }
        }));
    }
};
HttpInterceptorRefreshTokenService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpInterceptorRefreshTokenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], HttpInterceptorRefreshTokenService);

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


/***/ }),

/***/ "NFwV":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: defaultDataServiceConfig, AppStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDataServiceConfig", function() { return defaultDataServiceConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreModule", function() { return AppStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/data */ "hlQ1");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers */ "tg95");
/* harmony import */ var _operator_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./operator-data.service */ "k9CW");
/* harmony import */ var _entity_metadata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./entity-metadata */ "hB12");
/* harmony import */ var _store_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store-toast.service */ "7BuE");
/* harmony import */ var _effects_shedule_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./effects/shedule.effects */ "r93s");
/* harmony import */ var _effects_user_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./effects/user.effects */ "ePcv");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/environments/environment */ "AytR");













const defaultDataServiceConfig = {
    root: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].host + 'api/store',
    timeout: 3000,
    entityHttpResourceUrls: {
        Operator: {
            entityResourceUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].host + 'api/store/operator/',
            collectionResourceUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].host + 'api/store/operators/',
        },
        Room: {
            entityResourceUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].host + 'api/store/room/',
            collectionResourceUrl: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].host + 'api/store/rooms/',
        },
    },
};
let AppStoreModule = class AppStoreModule {
    constructor(entityDataService, operatorDataService, entityToastService) {
        entityDataService.registerService('Operator', operatorDataService);
    }
};
AppStoreModule.ctorParameters = () => [
    { type: _ngrx_data__WEBPACK_IMPORTED_MODULE_2__["EntityDataService"] },
    { type: _operator_data_service__WEBPACK_IMPORTED_MODULE_7__["OperatorDataService"] },
    { type: _store_toast_service__WEBPACK_IMPORTED_MODULE_9__["EntityToastService"] }
];
AppStoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_6__["reducers"], {
                metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_6__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                },
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_3__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([_effects_shedule_effects__WEBPACK_IMPORTED_MODULE_10__["SheduleEffects"], _effects_user_effects__WEBPACK_IMPORTED_MODULE_11__["UserEffects"]]),
            _ngrx_data__WEBPACK_IMPORTED_MODULE_2__["EntityDataModule"].forRoot({ entityMetadata: _entity_metadata__WEBPACK_IMPORTED_MODULE_8__["entityMetadata"] }),
        ],
        providers: [
            _operator_data_service__WEBPACK_IMPORTED_MODULE_7__["OperatorDataService"],
            { provide: _ngrx_data__WEBPACK_IMPORTED_MODULE_2__["DefaultDataServiceConfig"], useValue: defaultDataServiceConfig },
        ],
    })
], AppStoreModule);



/***/ }),

/***/ "PQ5l":
/*!******************************!*\
  !*** ./src/app/interface.ts ***!
  \******************************/
/*! exports provided: paymentMethods, bookingSteps, bookingStepExprs, sortOrders, sortFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentMethods", function() { return paymentMethods; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookingSteps", function() { return bookingSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookingStepExprs", function() { return bookingStepExprs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortOrders", function() { return sortOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortFields", function() { return sortFields; });
const paymentMethods = [
    ['cash', 'Cash'],
    ['card', 'Card'],
];
const bookingSteps = [
    [null, 'All'],
    ['preorder', 'Preorder'],
    ['reserved', 'Reserved'],
    ['paid', 'Paid'],
    ['cancelled', 'Cancelled'],
];
const bookingStepExprs = [
    ['$eq', 'Equal'],
    ['$ne', 'Not Equal'],
];
const sortOrders = [
    [1, 'Ascending'],
    [-1, 'Descending'],
];
const sortFields = [
    ['bookingStep', 'Booking Step'],
    ['dates.from', 'Date from'],
    ['dates.to', 'Date to'],
    ['price', 'Price'],
];


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _modules_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/user/user.service */ "d6tv");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/actions/user.actions */ "mYIz");
/* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/reducers/user.reducer */ "mgGq");












let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, userService, router, store, renderer) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.userService = userService;
        this.router = router;
        this.store = store;
        this.renderer = renderer;
        this.initializeApp();
    }
    ngOnInit() {
        /* Test -- Refresh token */
        /*     this.userService.protected()
            .subscribe(
                (protectedResult) => console.log('protectedResult', protectedResult),
                (err) => console.log('protectedError', err),
            ); */
        // Manualy set light theme mode
        this.renderer.setAttribute(document.body, 'color-theme', 'light');
        this.store.dispatch(new _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_10__["GetUser"]());
        this.store.select(_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_11__["getUser"])
            .subscribe((user) => {
            this.user = user;
        });
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _modules_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  \n<ion-router-outlet></ion-router-outlet>\n\n</ion-app>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _store_store_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/store.module */ "NFwV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _modules_user_http_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/user/http-interceptor.service */ "eHPl");
/* harmony import */ var _modules_user_http_interceptor_refresh_token_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/user/http-interceptor.-refresh-token.service */ "I02m");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production }),
            // StoreModule.forRoot(reducers, {
            //   metaReducers,
            //   runtimeChecks: {
            //     strictStateImmutability: true,
            //     strictActionImmutability: true,
            //   },
            // }),
            // EffectsModule.forRoot([SheduleEffects, UserEffects]),
            // StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
            _store_store_module__WEBPACK_IMPORTED_MODULE_9__["AppStoreModule"],
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _modules_user_http_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["HttpInterceptorService"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _modules_user_http_interceptor_refresh_token_service__WEBPACK_IMPORTED_MODULE_14__["HttpInterceptorRefreshTokenService"], multi: true },
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__["CookieService"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "d6tv":
/*!**********************************************!*\
  !*** ./src/app/modules/user/user.service.ts ***!
  \**********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/actions/user.actions */ "mYIz");
/* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/reducers/user.reducer */ "mgGq");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "AytR");






const { Storage, Device } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];








let UserService = class UserService {
    constructor(http, store, router, cookieService) {
        this.http = http;
        this.store = store;
        this.router = router;
        this.cookieService = cookieService;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].host;
        this.store.select(_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_12__["redirectionUrl"])
            .subscribe((url) => {
            if (url) {
                this.router.navigateByUrl(url);
                this.store.dispatch(new _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_11__["Redirection"]({ redirectionUrl: null }));
            }
        });
    }
    deviceInfo() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(Device.getInfo());
    }
    getCookie(name) {
        const cookie = this.cookieService.get(name);
        return cookie;
    }
    getUser() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(Storage.get({ key: 'token' }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])((token) => {
            const jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"]();
            if ((token === null || token === void 0 ? void 0 : token.value) && !jwtHelper.isTokenExpired(token.value)) {
                const user = jwtHelper.decodeToken(token.value);
                return user;
            }
            return null;
        }));
    }
    sendActivationCode(_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get(this.host + 'api/user/send-activation-code/' + _id, httpOptions);
    }
    activateUser(payload) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.put(this.host + 'api/user/activate-user/' + payload._id, { code: payload.code }, httpOptions);
    }
    updateUser(update) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.put(this.host + 'api/user/updateUser/' + update._id, update, httpOptions);
    }
    getCompanyByUser() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get(this.host + 'api/user/get-company-by-user', httpOptions);
    }
    logout() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.deviceInfo().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])((deviceInfo) => this.http.put(this.host + 'api/user/logout', { deviceInfo }, httpOptions)));
        // return this.http.get<null>(
        //     this.host + 'api/user/logout',
        //     httpOptions,
        // ).pipe(
        //     tap((_) => this.store.dispatch(new Logout())),
        // );
    }
    generateTokens() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get(this.host + 'api/user/auth/generate-tokens', httpOptions);
    }
    login(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.deviceInfo().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])((deviceInfo) => this.http.post(this.host + 'api/user/login', Object.assign(Object.assign({}, user), { deviceInfo }), httpOptions)));
    }
    createCompany(companySignup) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.post(this.host + 'api/user/create-company', companySignup, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])((token) => this.store.dispatch(new _store_actions_user_actions__WEBPACK_IMPORTED_MODULE_11__["LoginSuccess"]({ token, redirectionUrl: '/' }))));
    }
    createCompanyUser(user) {
        return this.getToken()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])((token) => {
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                }),
            };
            return this.http.post(this.host + 'api/user/create-company-user', user, httpOptions);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])((createCompanyUser) => console.log('createCompanyUser', createCompanyUser)));
    }
    removeToken() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(Storage.remove({ key: 'token' }));
    }
    setToken(token) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(Storage.set({ key: 'token', value: token }));
    }
    getToken() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(Storage.get({ key: 'token' })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])((token) => {
            if (token) {
                return token.value;
            }
            else {
                return null;
            }
        }));
    }
    /* forms */
    emailFormControl(formState = '') {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](formState, {
            updateOn: 'blur',
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ],
            asyncValidators: [
                this.checkEmailUnique(),
            ],
        });
    }
    /* async validators */
    checkCompanyNameUnique() {
        return (abstractControl) => {
            const companyName = abstractControl.value;
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                }),
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                    .set('companyName', companyName),
            };
            return this.http.get(this.host + 'api/user/is-company-name-unique', httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])((companyName) => console.log('companyName', companyName)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(err);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])((result) => {
                return result ? { notUnique: true } : null;
            }));
        };
    }
    checkLoginUnique() {
        return (abstractControl) => {
            const login = abstractControl.value;
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                }),
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                    .set('login', login),
            };
            return this.http.get(this.host + 'api/user/is-login-unique', httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(err);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])((result) => {
                return result ? { notUnique: true } : null;
            }));
        };
    }
    checkEmailUnique() {
        return (abstractControl) => {
            const email = abstractControl.value;
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                }),
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                    .set('email', email),
            };
            return this.http.get(this.host + 'api/user/is-email-unique', httpOptions)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["catchError"])((err) => {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(err);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["map"])((result) => {
                return result ? { notUnique: true } : null;
            }));
        };
    }
    // sync validator
    matchPassword(abstractControl) {
        const password = abstractControl.get('password').value;
        const passwordConfirm = abstractControl.get('passwordConfirm').value;
        if (password === passwordConfirm) {
            abstractControl.get('passwordConfirm').setErrors(null);
            return null;
        }
        else {
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
    getCompanyUsers(users_id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(Storage.get({ key: 'token' }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])((token) => {
            const httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                }),
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                    .set('users_id', JSON.stringify(users_id)),
            };
            return this.http.get(this.host + 'api/user/get-company-users', httpOptions);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["tap"])((getCompanyUsers) => console.log('getCompanyUsers', getCompanyUsers)));
    }
    addCompanyUser(_id) {
    }
    updateCompanyUser(_id) {
    }
    deleteCompanyUser(_id) {
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], UserService);



/***/ }),

/***/ "eHPl":
/*!**********************************************************!*\
  !*** ./src/app/modules/user/http-interceptor.service.ts ***!
  \**********************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "d6tv");






let HttpInterceptorService = class HttpInterceptorService {
    constructor(store, userService) {
        this.store = store;
        this.userService = userService;
    }
    intercept(req, next) {
        // to modify request
        // req = req.clone();
        // return next.handle(req);
        // modify response
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                // console.log('event', event.headers.get('Content-language'));
                // event = event.clone({ body: this.modifyBody(event.body) });
            }
            return event;
        }));
    }
    modifyBody(body) {
        /*
        * write your logic to modify the body
        * */
        return body;
    }
};
HttpInterceptorService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
HttpInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], HttpInterceptorService);



/***/ }),

/***/ "ePcv":
/*!***********************************************!*\
  !*** ./src/app/store/effects/user.effects.ts ***!
  \***********************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/user.actions */ "mYIz");
/* harmony import */ var _modules_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/user/user.service */ "d6tv");







let UserEffects = class UserEffects {
    constructor(actions$, userService) {
        this.actions$ = actions$;
        this.userService = userService;
        this.getUser = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].GetUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((payload) => this.userService.getUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((user) => {
            let actions;
            if (user) {
                // User logged in
                actions = [new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["Authenticated"]({ user }), new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["GetCompanyByUser"]()];
            }
            else {
                // User not logged in
                actions = [new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["NotAuthenticated"]()];
            }
            if (payload) {
                actions.push(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["Redirection"]({ redirectionUrl: payload }));
            }
            return actions;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => [new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["AuthError"](), new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["Logout"]()]))));
        this.getCompanyByUser = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].GetCompanyByUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((payload) => this.userService.getCompanyByUser().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((company) => {
            if (company) {
                return new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["CompanyAuthenticated"]({ company });
            }
            else {
                // Did't get company -> Logout
                return new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["Logout"]();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => [new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["AuthError"](), new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["Logout"]()]))));
        this.activateUser = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].ActivateUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((payload) => this.userService.activateUser(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((token) => new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["LoginSuccess"]({ token })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateUserFail"](err))))));
        this.login = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].Login), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((payload) => this.userService.login(payload.user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((token) => new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["LoginSuccess"]({ token, redirectionUrl: '/' })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["LoginFail"](err))))));
        this.updateUser = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].UpdateUser), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((payload) => this.userService.updateUser(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((token) => new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["LoginSuccess"]({ token })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateUserFail"](err))))));
        this.loginSuccess = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].LoginSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((action) => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((payload) => this.userService.setToken(payload.token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((_) => new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["GetUser"](payload.redirectionUrl ? payload.redirectionUrl : null)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["AuthError"]())))));
        this.logout = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].Logout), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.userService.logout().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.userService.removeToken()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((_) => new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["GetUser"]('/user/login')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["AuthError"]())))));
        this.logoutOnFront = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["UserActionTypes"].LogoutOnFront), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.userService.removeToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((_) => new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["GetUser"]('/user/login')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["AuthError"]())))));
    }
};
UserEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _modules_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "getUser", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "getCompanyByUser", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "activateUser", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "login", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "updateUser", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "loginSuccess", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "logout", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "logoutOnFront", void 0);
UserEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserEffects);



/***/ }),

/***/ "hB12":
/*!******************************************!*\
  !*** ./src/app/store/entity-metadata.ts ***!
  \******************************************/
/*! exports provided: entityMetadata, entityConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entityMetadata", function() { return entityMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entityConfig", function() { return entityConfig; });
const entityMetadata = {
    Operator: {
        selectId: (operator) => operator._id,
        entityDispatcherOptions: {
            optimisticAdd: false,
            optimisticUpdate: false,
            optimisticDelete: false,
        },
    },
    Room: {
        selectId: (room) => room._id,
        entityDispatcherOptions: {
            optimisticAdd: false,
            optimisticUpdate: false,
            optimisticDelete: false,
        },
    },
};
const pluralNames = {
    Operator: 'Operators',
    Room: 'Rooms',
};
const entityConfig = {
    entityMetadata,
    pluralNames,
};


/***/ }),

/***/ "k9CW":
/*!************************************************!*\
  !*** ./src/app/store/operator-data.service.ts ***!
  \************************************************/
/*! exports provided: OperatorDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorDataService", function() { return OperatorDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/data */ "hlQ1");




let OperatorDataService = class OperatorDataService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_3__["DefaultDataService"] {
    constructor(http, httpUrlGenerator) {
        super('Operator', http, httpUrlGenerator);
    }
    getAll() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-language': 'en-US',
            }),
        };
        const urlPath = this.httpUrlGenerator.collectionResource('Operator', '');
        console.log('urlPath', urlPath);
        return this.http.get(urlPath, httpOptions);
    }
};
OperatorDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ngrx_data__WEBPACK_IMPORTED_MODULE_3__["HttpUrlGenerator"] }
];
OperatorDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], OperatorDataService);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "mYIz":
/*!***********************************************!*\
  !*** ./src/app/store/actions/user.actions.ts ***!
  \***********************************************/
/*! exports provided: UserActionTypes, GetUser, GetCompanyByUser, CompanyAuthenticated, Authenticated, NotAuthenticated, Redirection, AuthError, Login, LoginSuccess, LoginFail, Logout, LogoutOnFront, ActivateUser, UpdateUser, UpdateUserFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionTypes", function() { return UserActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUser", function() { return GetUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCompanyByUser", function() { return GetCompanyByUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyAuthenticated", function() { return CompanyAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authenticated", function() { return Authenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotAuthenticated", function() { return NotAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redirection", function() { return Redirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthError", function() { return AuthError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFail", function() { return LoginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutOnFront", function() { return LogoutOnFront; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateUser", function() { return ActivateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return UpdateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserFail", function() { return UpdateUserFail; });
var UserActionTypes;
(function (UserActionTypes) {
    UserActionTypes["GetUser"] = "[User] Get user";
    UserActionTypes["GetCompanyByUser"] = "[User] Get company by user";
    UserActionTypes["LogoutOnFront"] = "[User] LogoutOnFront";
    UserActionTypes["CompanyAuthenticated"] = "[User] Company Authenticated";
    UserActionTypes["Authenticated"] = "[User] Authenticated";
    UserActionTypes["NotAuthenticated"] = "[User] Not Authenticated";
    UserActionTypes["Redirection"] = "[User] Redirection";
    UserActionTypes["AuthError"] = "[User] Error";
    UserActionTypes["UpdateUser"] = "[User] Update user";
    UserActionTypes["UpdateUserSuccess"] = "[User] Update user success";
    UserActionTypes["UpdateUserFail"] = "[User] Update user fail";
    UserActionTypes["ActivateUser"] = "[User] Activate user";
    UserActionTypes["Login"] = "[User] Login";
    UserActionTypes["LoginSuccess"] = "[User] Login Success";
    UserActionTypes["LoginFail"] = "[User] Login Fail";
    UserActionTypes["Logout"] = "[User] Logout";
})(UserActionTypes || (UserActionTypes = {}));
// Get User AuthState
class GetUser {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.GetUser;
    }
}
class GetCompanyByUser {
    constructor() {
        this.type = UserActionTypes.GetCompanyByUser;
    }
}
class CompanyAuthenticated {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.CompanyAuthenticated;
    }
}
class Authenticated {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.Authenticated;
    }
}
class NotAuthenticated {
    constructor() {
        this.type = UserActionTypes.NotAuthenticated;
    }
}
class Redirection {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.Redirection;
    }
}
class AuthError {
    constructor() {
        this.type = UserActionTypes.AuthError;
    }
}
class Login {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.Login;
    }
}
class LoginSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.LoginSuccess;
    }
}
class LoginFail {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.LoginFail;
    }
}
class Logout {
    constructor() {
        this.type = UserActionTypes.Logout;
    }
}
class LogoutOnFront {
    constructor() {
        this.type = UserActionTypes.LogoutOnFront;
    }
}
class ActivateUser {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.ActivateUser;
    }
}
class UpdateUser {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UpdateUser;
    }
}
class UpdateUserFail {
    constructor(payload) {
        this.payload = payload;
        this.type = UserActionTypes.UpdateUserFail;
    }
}


/***/ }),

/***/ "mgGq":
/*!************************************************!*\
  !*** ./src/app/store/reducers/user.reducer.ts ***!
  \************************************************/
/*! exports provided: userFeatureKey, initialState, reducer, getCompany, getUser, redirectionUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFeatureKey", function() { return userFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompany", function() { return getCompany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectionUrl", function() { return redirectionUrl; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user.actions */ "mYIz");


const userFeatureKey = 'user';
const initialState = {
    user: null,
    company: null,
    loading: false,
    redirectionUrl: null,
};
function reducer(state = initialState, action) {
    // console.log('screen reducer');
    switch (action.type) {
        // fires and then effect fires on same action to fetch data
        // here is only for set loading to true (e. g. to show spinner)
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].GetUser:
            return Object.assign(Object.assign({}, state), { loading: true });
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].GetCompanyByUser:
            return Object.assign({}, state);
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].CompanyAuthenticated:
            return Object.assign(Object.assign({}, state), { company: action.payload.company, loading: false });
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].Authenticated:
            return Object.assign(Object.assign({}, state), { user: Object.assign({}, action.payload.user), redirectionUrl: null, loading: false });
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].NotAuthenticated:
            return Object.assign(Object.assign({}, state), { user: initialState.user, company: initialState.company, redirectionUrl: '/user/login', loading: false });
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].Redirection:
            return Object.assign(Object.assign({}, state), { redirectionUrl: action.payload.redirectionUrl });
        case _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["UserActionTypes"].AuthError:
            return Object.assign(Object.assign({}, state), { user: initialState.user, company: initialState.company, redirectionUrl: '/user/login', loading: false });
        default:
            return state;
    }
}
const featureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(userFeatureKey);
const getCompany = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, (state) => state.company);
const getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, (state) => state.user);
const redirectionUrl = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, (state) => state.redirectionUrl);


/***/ }),

/***/ "mrZj":
/*!****************************************************!*\
  !*** ./src/app/modules/shedule/shedule.service.ts ***!
  \****************************************************/
/*! exports provided: SheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheduleService", function() { return SheduleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "b/SL");






let SheduleService = class SheduleService {
    constructor(http, store) {
        this.http = http;
        this.store = store;
        this.environment = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"];
        this.store.select('user')
            .subscribe((storeState) => {
            this.user = storeState.user;
        });
    }
    /* Date helpers */
    // deprecated use convertISOToDate
    // '2020-12-01' => Tue Dec 01 2020 00:00:00 GMT-1000
    convertShortToDate(short) {
        return date_fns__WEBPACK_IMPORTED_MODULE_5__["parseISO"](short);
    }
    // '2020-12-01T00:00:00.000Z' => Tue Dec 01 2020 00:00:00 GMT-1000
    convertISOToDate(ISOorShort) {
        if (ISOorShort.length > 10) {
            // convert from ISO full format
            return date_fns__WEBPACK_IMPORTED_MODULE_5__["parseISO"](ISOorShort.substring(0, 10));
        }
        else {
            // convert from short date format
            return date_fns__WEBPACK_IMPORTED_MODULE_5__["parseISO"](ISOorShort);
        }
    }
    convertISOToShort(ISO) {
        return ISO.substring(0, 10);
    }
    // Tue Dec 01 2020 00:00:00 GMT-1000 => '2020-12-01'
    convertDateToShort(date) {
        return date_fns__WEBPACK_IMPORTED_MODULE_5__["formatISO"](date, { representation: 'date' });
    }
    convertBookingDatesIsoToShort(booking) {
        return Object.assign(Object.assign({}, booking), { dates: {
                from: this.convertISOToShort(booking.dates.from),
                to: this.convertISOToShort(booking.dates.to),
            }, payments: booking.payments.map((payment) => {
                return Object.assign(Object.assign({}, payment), { date: this.convertISOToShort(payment.date) });
            }) });
    }
    createDateRangeLimits(date) {
        const daysInMonth = date_fns__WEBPACK_IMPORTED_MODULE_5__["getDaysInMonth"](date);
        const startOfMonth = date_fns__WEBPACK_IMPORTED_MODULE_5__["startOfMonth"](date);
        const endOfMonth = date_fns__WEBPACK_IMPORTED_MODULE_5__["add"](startOfMonth, { days: daysInMonth - 1 });
        return {
            lower: this.convertDateToShort(startOfMonth),
            upper: this.convertDateToShort(endOfMonth),
        };
    }
    /* End of date helpers */
    /* new */
    getRoomById(id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get(this.environment.host + 'api/reservation/get-room-by-id/' + id, httpOptions);
    }
    getBookingById(id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get(this.environment.host + 'api/reservation/get-booking-by-id/' + id, httpOptions);
    }
    getAvailableDateTo(room_id, dateFrom) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('roomid', room_id)
                .set('datefrom', dateFrom),
        };
        return this.http.get(this.environment.host + 'api/reservation/get-available-date-to', httpOptions);
    }
    deleteBooking(_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.delete(this.environment.host + 'api/reservation/delete-booking/' + _id, httpOptions);
    }
    getBookings(bookingQuery) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('bookingQuery', JSON.stringify(bookingQuery));
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params,
        };
        return this.http.get(this.environment.host + 'api/reservation/get-bookings', httpOptions);
    }
    getPayments(paymentQuery) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('paymentQuery', JSON.stringify(paymentQuery));
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params,
        };
        return this.http.get(this.environment.host + 'api/reservation/get-payments', httpOptions);
    }
    upsertBooking(booking) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.put(this.environment.host + 'api/reservation/upsert-booking', booking, httpOptions);
    }
};
SheduleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
SheduleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], SheduleService);



/***/ }),

/***/ "r93s":
/*!**************************************************!*\
  !*** ./src/app/store/effects/shedule.effects.ts ***!
  \**************************************************/
/*! exports provided: SheduleEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheduleEffects", function() { return SheduleEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _actions_shedule_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/shedule.actions */ "4dfA");
/* harmony import */ var _modules_shedule_shedule_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/shedule/shedule.service */ "mrZj");






let SheduleEffects = class SheduleEffects {
    constructor(actions$, sheduleService) {
        this.actions$ = actions$;
        this.sheduleService = sheduleService;
        this.getBookings = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_shedule_actions__WEBPACK_IMPORTED_MODULE_4__["SheduleActionTypes"].GetBookings), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => {
            return this.sheduleService.getBookings(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((bookings) => new _actions_shedule_actions__WEBPACK_IMPORTED_MODULE_4__["GetBookingsSuccess"](bookings)));
        }));
        // @Effect()
        // getAnalyticsBookings: Observable<Action> = this.actions$.pipe(
        //     ofType(SheduleActionTypes.GetAnalyticsBookings),
        //     switchMap((action: GetAnalyticsBookings) => {
        //       return this.sheduleService.getBookings(action.payload).pipe(
        //           map((bookings) => new GetAnalyticsBookingsSuccess(bookings)),
        //       );
        //     }),
        // );
        this.getPayments = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_shedule_actions__WEBPACK_IMPORTED_MODULE_4__["SheduleActionTypes"].GetPayments), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((action) => {
            return this.sheduleService.getPayments(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((payments) => new _actions_shedule_actions__WEBPACK_IMPORTED_MODULE_4__["GetPaymentsSuccess"](payments)));
        }));
    }
};
SheduleEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: _modules_shedule_shedule_service__WEBPACK_IMPORTED_MODULE_5__["SheduleService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], SheduleEffects.prototype, "getBookings", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], SheduleEffects.prototype, "getPayments", void 0);
SheduleEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SheduleEffects);



/***/ }),

/***/ "tJKL":
/*!***************************************************!*\
  !*** ./src/app/store/reducers/shedule.reducer.ts ***!
  \***************************************************/
/*! exports provided: sheduleFeatureKey, initialState, reducer, getBookings, getPayments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheduleFeatureKey", function() { return sheduleFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBookings", function() { return getBookings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPayments", function() { return getPayments; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_shedule_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/shedule.actions */ "4dfA");


const sheduleFeatureKey = 'shedule';
const initialState = {
    bookings: [],
    payments: [],
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case _actions_shedule_actions__WEBPACK_IMPORTED_MODULE_1__["SheduleActionTypes"].GetBookingsSuccess: {
            return Object.assign(Object.assign({}, state), { bookings: action.payload });
        }
        // case SheduleActionTypes.GetAnalyticsBookingsSuccess: {
        //   return { ...state, analyticsBookings: action.payload };
        // }
        case _actions_shedule_actions__WEBPACK_IMPORTED_MODULE_1__["SheduleActionTypes"].GetPaymentsSuccess: {
            return Object.assign(Object.assign({}, state), { payments: action.payload });
        }
        default:
            return state;
    }
}
const featureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(sheduleFeatureKey);
const getBookings = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, (state) => state.bookings);
// export const getAnalyticsBookings = createSelector(featureSelector, (state) => state.analyticsBookings);
const getPayments = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(featureSelector, (state) => state.payments);


/***/ }),

/***/ "tg95":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _shedule_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shedule.reducer */ "tJKL");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.reducer */ "mgGq");



const reducers = {
    shedule: _shedule_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    user: _user_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    // {
    //   path: '',
    //   redirectTo: '/tabs/shedule',
    //   pathMatch: 'full',
    // },
    // {
    //   path: 'shedule',
    //   loadChildren: () => import('./shedule/shedule.module').then( (m) => m.ShedulePageModule),
    // },
    // {
    //   path: 'user',
    //   loadChildren: () => import('./user/user.module').then( (m) => m.UserPageModule),
    // },
    // {
    //   path: 'analytics',
    //   loadChildren: () => import('./analytics/analytics.module').then( (m) => m.AnalyticsPageModule),
    // },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "hO9l")).then((m) => m.TabsPageModule),
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map