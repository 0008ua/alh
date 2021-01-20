(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-details-booking-details-module"],{

/***/ "27Q1":
/*!*************************************************************************!*\
  !*** ./src/app/modules/shedule/booking-details/booking-details.page.ts ***!
  \*************************************************************************/
/*! exports provided: BookingDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailsPage", function() { return BookingDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_booking_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./booking-details.page.html */ "kPF2");
/* harmony import */ var _booking_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-details.page.scss */ "86sJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shedule_shedule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shedule/shedule.service */ "mrZj");







let BookingDetailsPage = class BookingDetailsPage {
    constructor(route, sheduleService) {
        this.route = route;
        this.sheduleService = sheduleService;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((paramMap) => this.sheduleService.getBookingById(paramMap.get('bookingId'))))
            .subscribe((booking) => {
            console.log('booking', booking);
            this.booking = booking;
        });
    }
};
BookingDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _shedule_shedule_service__WEBPACK_IMPORTED_MODULE_6__["SheduleService"] }
];
BookingDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-booking-details',
        template: _raw_loader_booking_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_booking_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BookingDetailsPage);



/***/ }),

/***/ "86sJ":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shedule/booking-details/booking-details.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nLWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "XkRf":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shedule/booking-details/booking-details.module.ts ***!
  \***************************************************************************/
/*! exports provided: BookingDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailsPageModule", function() { return BookingDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _booking_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking-details-routing.module */ "gnH/");
/* harmony import */ var _booking_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking-details.page */ "27Q1");







let BookingDetailsPageModule = class BookingDetailsPageModule {
};
BookingDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _booking_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingDetailsPageRoutingModule"],
        ],
        declarations: [_booking_details_page__WEBPACK_IMPORTED_MODULE_6__["BookingDetailsPage"]],
    })
], BookingDetailsPageModule);



/***/ }),

/***/ "gnH/":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/shedule/booking-details/booking-details-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: BookingDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailsPageRoutingModule", function() { return BookingDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _booking_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking-details.page */ "27Q1");




const routes = [
    {
        path: '',
        component: _booking_details_page__WEBPACK_IMPORTED_MODULE_3__["BookingDetailsPage"],
    },
];
let BookingDetailsPageRoutingModule = class BookingDetailsPageRoutingModule {
};
BookingDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookingDetailsPageRoutingModule);



/***/ }),

/***/ "kPF2":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shedule/booking-details/booking-details.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n            <ion-back-button [defaultHref]=\"'/shedule'\">\n            </ion-back-button>\n      <!-- <ion-button routerLink=\"/shedule\">\n        <ion-icon name=\"arrow-back-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n    <ion-buttons slot=\"primary\">\n      <ion-button [routerLink]=\"'/shedule/edit/' + booking?._id\">\n        <ion-icon name=\"pencil-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>booking-details {{booking?.guestName}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>{{booking | json}}</div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=booking-details-booking-details-module.js.map