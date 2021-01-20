(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-module"],{

/***/ "XoyV":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-routing.module */ "vH6C");






let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"],
        ],
    })
], DashboardModule);



/***/ }),

/***/ "vH6C":
/*!***************************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/auth.guard */ "9nZL");




const routes = [
    {
        path: '',
        redirectTo: 'operator',
        pathMatch: 'full',
        canLoad: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'operator',
        loadChildren: () => Promise.all(/*! import() | operator-operator-module */[__webpack_require__.e("common"), __webpack_require__.e("operator-operator-module")]).then(__webpack_require__.bind(null, /*! ./operator/operator.module */ "Fl6X")).then((m) => m.OperatorPageModule),
        canLoad: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'room',
        loadChildren: () => Promise.all(/*! import() | room-room-module */[__webpack_require__.e("common"), __webpack_require__.e("room-room-module")]).then(__webpack_require__.bind(null, /*! ./room/room.module */ "8auw")).then((m) => m.RoomPageModule),
        canLoad: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'management',
        loadChildren: () => __webpack_require__.e(/*! import() | management-management-module */ "management-management-module").then(__webpack_require__.bind(null, /*! ./management/management.module */ "73M9")).then((m) => m.ManagementPageModule),
        canLoad: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        canActivate: [_user_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DashboardRoutingModule);



/***/ })

}]);
//# sourceMappingURL=modules-dashboard-dashboard-module.js.map