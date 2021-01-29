(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "9nZL":
/*!********************************************!*\
  !*** ./src/app/modules/user/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "d6tv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let AuthGuard = class AuthGuard {
    constructor(userService, router, store) {
        this.userService = userService;
        this.router = router;
        this.store = store;
    }
    // Prevents fetching lazy loading modules
    canLoad(route, segments) {
        return this.store.select('user').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((storeState) => {
            if (!storeState.user) {
                this.router.navigateByUrl('/user/login');
                return false;
            }
            return true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
    }
    // If lazy loadnig module already fetched and user logged out
    // this guard prevents to activate module
    canActivate(route, state) {
        return this.store.select('user').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((storeState) => {
            if (!storeState.user) {
                this.router.navigateByUrl('/user/login');
                return false;
            }
            return true;
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthGuard);



/***/ }),

/***/ "AHrv":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar *ngIf=\"user\" slot=\"bottom\">\n    <ion-tab-button tab=\"shedule\">\n      <ion-label>Shedule</ion-label>\n      <ion-icon name=\"calendar-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"analytics\">\n      <ion-label>Analytics</ion-label>\n      <ion-icon name=\"analytics-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"dashboard\">\n      <ion-label>Dashboard</ion-label>\n      <ion-icon name=\"file-tray-full-outline\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>");

/***/ }),

/***/ "MJr+":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "AHrv");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "PkIa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");





let TabsPage = class TabsPage {
    constructor(store) {
        this.store = store;
        this.user = null;
    }
    ngOnInit() {
        this.store.select('user')
            .subscribe((storeState) => {
            this.user = storeState.user;
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabsPage);



/***/ }),

/***/ "PkIa":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "hO9l":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "kB8F");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "MJr+");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]],
    })
], TabsPageModule);



/***/ }),

/***/ "kB8F":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modules_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/user/auth.guard */ "9nZL");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs.page */ "MJr+");





const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_4__["TabsPage"],
        children: [
            {
                path: '',
                redirectTo: 'shedule',
                pathMatch: 'full',
                canLoad: [_modules_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                canActivate: [_modules_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'shedule',
                loadChildren: () => Promise.all(/*! import() | modules-shedule-shedule-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-shedule-shedule-module")]).then(__webpack_require__.bind(null, /*! ../modules/shedule/shedule.module */ "9ziR")).then((m) => m.ShedulePageModule),
                canLoad: [_modules_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                canActivate: [_modules_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'user',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-user-user-module */ "modules-user-user-module").then(__webpack_require__.bind(null, /*! ../modules/user/user.module */ "9N29")).then((m) => m.UserPageModule),
            },
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() | modules-dashboard-dashboard-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ../modules/dashboard/dashboard.module */ "XoyV")).then((m) => m.DashboardPageModule),
                canLoad: [_modules_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                canActivate: [_modules_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: 'analytics',
                loadChildren: () => __webpack_require__.e(/*! import() | modules-analytics-analytics-module */ "modules-analytics-analytics-module").then(__webpack_require__.bind(null, /*! ../modules/analytics/analytics.module */ "FYdh")).then((m) => m.AnalyticsPageModule),
                canLoad: [_modules_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                canActivate: [_modules_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
            },
            {
                path: '**',
                redirectTo: '',
                pathMatch: 'full',
            },
        ],
    },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map