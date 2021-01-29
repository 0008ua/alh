(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-module"],{

/***/ "161m":
/*!*****************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.page.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.page.html */ "k9e7");
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.page.scss */ "VHji");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/store/actions/user.actions */ "mYIz");
/* harmony import */ var src_app_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/reducers/user.reducer */ "mgGq");







let DashboardPage = class DashboardPage {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.select(src_app_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_6__["getUser"])
            .subscribe((user) => {
            this.user = user;
        });
    }
    onLogout() {
        this.store.dispatch(new src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_5__["Logout"]());
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardPage);



/***/ }),

/***/ "VHji":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "XoyV":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "vH6C");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "161m");







let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"],
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]],
    })
], DashboardPageModule);



/***/ }),

/***/ "k9e7":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/dashboard.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"end\" contentId=\"dashboard-content\">\n  <ion-header>\n    <ion-toolbar color=\"secondary\">\n      <ion-title>\n        <h2>{{user?.login}}</h2>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list lines=\"none\">\n      <ion-menu-toggle contentId=\"dashboard-content\">\n        <ion-item button routerLink=\"/dashboard/profile\" routerLinkActive=\"active-link\"\n          [routerLinkActiveOptions]=\"{exact: true}\">\n          <ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\n          <ion-label>Profile</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle *ngIf=\"user?.role === 'admin'\" contentId=\"dashboard-content\">\n        <ion-item button routerLink=\"/dashboard/operator\" routerLinkActive=\"active-link\"\n          [routerLinkActiveOptions]=\"{exact: true}\">\n          <ion-icon name=\"people-outline\" slot=\"start\"></ion-icon>\n          <ion-label>Operator</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle *ngIf=\"!user?.blocked\" contentId=\"dashboard-content\">\n        <ion-item button routerLink=\"/dashboard/room\" routerLinkActive=\"active-link\"\n          [routerLinkActiveOptions]=\"{exact: true}\">\n          <ion-icon name=\"business-outline\" slot=\"start\"></ion-icon>\n          <ion-label>Room</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <!-- <ion-menu-toggle contentId=\"main-content\">\n          <ion-item button routerLink=\"/dashboard/management\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <ion-icon name=\"file-tray-full-outline\" slot=\"start\"></ion-icon>\n            <ion-label>Management</ion-label>\n          </ion-item>\n        </ion-menu-toggle> -->\n      <ion-menu-toggle contentId=\"dashboard-content\">\n        <ion-item button (click)=\"onLogout()\">\n          <ion-icon name=\"exit\" slot=\"start\"></ion-icon>\n          <ion-label>Logout</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-router-outlet id=\"dashboard-content\"></ion-router-outlet>");

/***/ }),

/***/ "sQPl":
/*!**************************************************!*\
  !*** ./src/app/modules/user/auth-admin.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthAdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthAdminGuard", function() { return AuthAdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "d6tv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let AuthAdminGuard = class AuthAdminGuard {
    constructor(userService, router, store) {
        this.userService = userService;
        this.router = router;
        this.store = store;
    }
    // Prevents fetching lazy loading modules
    canLoad(route, segments) {
        return this.store.select('user').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((storeState) => {
            if (!storeState.user || storeState.user.role !== 'admin') {
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
            if (!storeState.user || storeState.user.role !== 'admin') {
                this.router.navigateByUrl('/user/login');
                return false;
            }
            return true;
        }));
    }
};
AuthAdminGuard.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
AuthAdminGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthAdminGuard);



/***/ }),

/***/ "vH6C":
/*!***************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function() { return DashboardPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_auth_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/auth-admin.guard */ "sQPl");
/* harmony import */ var _user_auth_blocked_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/auth-blocked.guard */ "E2UR");
/* harmony import */ var _user_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user/auth.guard */ "9nZL");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "161m");







const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"],
        children: [
            {
                path: '',
                redirectTo: 'operator',
                pathMatch: 'full',
            },
            {
                path: 'operator',
                loadChildren: () => Promise.all(/*! import() | operator-operator-module */[__webpack_require__.e("common"), __webpack_require__.e("operator-operator-module")]).then(__webpack_require__.bind(null, /*! ./operator/operator.module */ "Fl6X")).then((m) => m.OperatorPageModule),
                canLoad: [_user_auth_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AuthAdminGuard"]],
                canActivate: [_user_auth_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AuthAdminGuard"]],
            },
            {
                path: 'room',
                loadChildren: () => Promise.all(/*! import() | room-room-module */[__webpack_require__.e("common"), __webpack_require__.e("room-room-module")]).then(__webpack_require__.bind(null, /*! ./room/room.module */ "8auw")).then((m) => m.RoomPageModule),
                canLoad: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _user_auth_blocked_guard__WEBPACK_IMPORTED_MODULE_4__["AuthBlockedGuard"]],
                canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"], _user_auth_blocked_guard__WEBPACK_IMPORTED_MODULE_4__["AuthBlockedGuard"]],
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "L/5t")).then((m) => m.ProfilePageModule),
                canLoad: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=modules-dashboard-dashboard-module.js.map