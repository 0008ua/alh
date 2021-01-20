(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-analytics-analytics-module"],{

/***/ "FYdh":
/*!*******************************************************!*\
  !*** ./src/app/modules/analytics/analytics.module.ts ***!
  \*******************************************************/
/*! exports provided: AnalyticsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsPageModule", function() { return AnalyticsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _analytics_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./analytics-routing.module */ "j0zO");
/* harmony import */ var _analytics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analytics.page */ "YGjb");







let AnalyticsPageModule = class AnalyticsPageModule {
};
AnalyticsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _analytics_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnalyticsPageRoutingModule"],
        ],
        declarations: [_analytics_page__WEBPACK_IMPORTED_MODULE_6__["AnalyticsPage"]],
    })
], AnalyticsPageModule);



/***/ }),

/***/ "L2mc":
/*!*******************************************************!*\
  !*** ./src/app/modules/analytics/analytics.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmFseXRpY3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "NKow":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/analytics/analytics.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  analitycs\n</p>");

/***/ }),

/***/ "YGjb":
/*!*****************************************************!*\
  !*** ./src/app/modules/analytics/analytics.page.ts ***!
  \*****************************************************/
/*! exports provided: AnalyticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsPage", function() { return AnalyticsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_analytics_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./analytics.page.html */ "NKow");
/* harmony import */ var _analytics_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.page.scss */ "L2mc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AnalyticsPage = class AnalyticsPage {
    constructor() { }
    ngOnInit() { }
};
AnalyticsPage.ctorParameters = () => [];
AnalyticsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-analytics',
        template: _raw_loader_analytics_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_analytics_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AnalyticsPage);



/***/ }),

/***/ "j0zO":
/*!***************************************************************!*\
  !*** ./src/app/modules/analytics/analytics-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: AnalyticsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsPageRoutingModule", function() { return AnalyticsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _analytics_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics.page */ "YGjb");




const routes = [
    {
        path: '',
        component: _analytics_page__WEBPACK_IMPORTED_MODULE_3__["AnalyticsPage"],
    },
];
let AnalyticsPageRoutingModule = class AnalyticsPageRoutingModule {
};
AnalyticsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AnalyticsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=modules-analytics-analytics-module.js.map