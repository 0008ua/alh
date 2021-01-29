(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["summary-summary-module"],{

/***/ "RgAd":
/*!*************************************************************!*\
  !*** ./src/app/modules/analytics/summary/summary.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdW1tYXJ5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "kHg+":
/*!*********************************************************************!*\
  !*** ./src/app/modules/analytics/summary/summary-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SummaryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageRoutingModule", function() { return SummaryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./summary.page */ "vN97");




const routes = [
    {
        path: '',
        component: _summary_page__WEBPACK_IMPORTED_MODULE_3__["SummaryPage"],
    },
];
let SummaryPageRoutingModule = class SummaryPageRoutingModule {
};
SummaryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SummaryPageRoutingModule);



/***/ }),

/***/ "qBPx":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/analytics/summary/summary.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Summary</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button contentId=\"analytics-content\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size-md=\"6\" offset-md=\"3\">\n          <ion-item lines=\"none\">\n            <ion-label>Choose period</ion-label>\n            <ion-datetime pickerFormat=\"MMMM-YYYY\" displayFormat=\"MMMM YYYY\" [max]=\"maxDate\" placeholder=\"Select Month\"\n              [(ngModel)]=\"date\" (ionChange)=\"filter()\"></ion-datetime>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"6\" offset-md=\"3\">\n        <ion-item-group>\n          <ion-item-divider>\n            <ion-toggle slot=\"start\" color=\"primary\" #totalSold checked></ion-toggle>\n            <ion-label><h2>Total sold</h2></ion-label>\n            <ion-text slot=\"end\" color=\"primary\">{{calculatedData.rooms[0]?.analytics?.totalSold}}</ion-text>\n          </ion-item-divider>\n          <ng-container *ngIf=\"totalSold.checked\">\n            <ion-item *ngFor=\"let room of calculatedData.rooms | slice:1\" lines=\"none\">\n              <ion-label><p>{{room.name}}</p></ion-label>\n              <ion-text slot=\"end\" color=\"primary\">{{room.analytics.totalSold}}</ion-text>\n            </ion-item>\n          </ng-container>\n        </ion-item-group>\n\n        <ion-item-group>\n          <ion-item-divider>\n            <ion-toggle slot=\"start\" color=\"primary\" #totalPaid></ion-toggle>\n            <ion-label lines=\"none\"><h2>Total paid</h2></ion-label>\n            <ion-text slot=\"end\" color=\"primary\">{{calculatedData.rooms[0]?.analytics?.totalPayments}}</ion-text>\n          </ion-item-divider>\n          <ng-container *ngIf=\"totalPaid.checked\">\n            <ion-item *ngFor=\"let room of calculatedData.rooms | slice:1\" lines=\"none\">\n              <ion-label><p>{{room.name}}</p></ion-label>\n              <ion-text slot=\"end\" color=\"primary\">{{room.analytics.totalPayments}}</ion-text>\n            </ion-item>\n          </ng-container>\n        </ion-item-group>\n\n        <!-- <ion-item-group>\n          <ion-item-divider>\n            <ion-toggle slot=\"start\" color=\"primary\" #expectedPayments></ion-toggle>\n            <ion-label lines=\"none\">Expected payments</ion-label>\n            <ion-text slot=\"end\" color=\"primary\">Value</ion-text>\n          </ion-item-divider>\n          <ng-container *ngIf=\"expectedPayments.checked\">\n            <ion-item *ngFor=\"let room of calculatedData.rooms | slice:1\" lines=\"none\">\n              <ion-label>{{room.name}}</ion-label>\n              <ion-text slot=\"end\" color=\"primary\">{{room.analytics.totalSold}}</ion-text>\n            </ion-item>\n          </ng-container>\n        </ion-item-group> -->\n\n        <ion-item-group>\n          <ion-item-divider>\n            <ion-toggle slot=\"start\" color=\"primary\" #occupancy></ion-toggle>\n            <ion-label lines=\"none\"><h2>Occupancy</h2>\n              <ion-progress-bar color=\"primary\"\n                [value]=\"calculatedData.rooms[0]?.analytics?.totalRoomDays / calculatedData.rooms[0]?.analytics?.daysInMonth\">\n              </ion-progress-bar>\n            </ion-label>\n            <ion-text slot=\"end\" color=\"primary\">\n              {{calculatedData.rooms[0]?.analytics?.totalRoomDays / calculatedData.rooms[0]?.analytics?.daysInMonth |\n              percent: '2.0-0'}}\n            </ion-text>\n\n\n          </ion-item-divider>\n          <ng-container *ngIf=\"occupancy.checked\">\n            <ion-item *ngFor=\"let room of calculatedData.rooms | slice:1\" lines=\"none\">\n              <ion-label><p>{{room.name}}</p>\n                <ion-progress-bar color=\"primary\" [value]=\"room.analytics.totalRoomDays / room.analytics.daysInMonth\">\n                </ion-progress-bar>\n              </ion-label>\n\n              <ion-text slot=\"end\" color=\"primary\">{{room.analytics.totalRoomDays / room.analytics.daysInMonth |\n                percent: '2.0-0'}}\n              </ion-text>\n            </ion-item>\n          </ng-container>\n        </ion-item-group>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "vN97":
/*!***********************************************************!*\
  !*** ./src/app/modules/analytics/summary/summary.page.ts ***!
  \***********************************************************/
/*! exports provided: SummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPage", function() { return SummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_summary_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./summary.page.html */ "qBPx");
/* harmony import */ var _summary_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary.page.scss */ "RgAd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shedule_shedule_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shedule/shedule.service */ "mrZj");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_store_reducers_shedule_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/reducers/shedule.reducer */ "tJKL");
/* harmony import */ var src_app_store_actions_shedule_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/actions/shedule.actions */ "4dfA");
/* harmony import */ var src_app_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/store/reducers/user.reducer */ "mgGq");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");













let SummaryPage = class SummaryPage {
    constructor(sheduleService, store, route) {
        this.sheduleService = sheduleService;
        this.store = store;
        this.route = route;
        this.date = this.sheduleService.convertDateToShort(new Date());
        this.maxDate = this.sheduleService.convertDateToShort(date_fns__WEBPACK_IMPORTED_MODULE_5__["add"](new Date(), { years: 1 }));
        this.dateRangeLimits = this.sheduleService.createDateRangeLimits(this.sheduleService.convertISOToDate(this.date));
        this.calculatedData = { rooms: [] };
    }
    ngOnChanges() {
        console.log('asdasd');
    }
    ngOnInit() {
        const getCompany$ = this.store.select(src_app_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_9__["getCompany"]);
        const getBookings$ = this.store.select(src_app_store_reducers_shedule_reducer__WEBPACK_IMPORTED_MODULE_7__["getBookings"]);
        const getPayments$ = this.store.select(src_app_store_reducers_shedule_reducer__WEBPACK_IMPORTED_MODULE_7__["getPayments"]);
        getCompany$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["mergeMap"])((company) => {
            console.log('company summary', company);
            if (company) {
                console.log('combineLatest');
                this.rooms = [...company.rooms];
                this.rooms.unshift({ _id: null, name: 'All' });
                this.room = this.rooms[0];
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["combineLatest"])([getBookings$, getPayments$]);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["of"])([null, null]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["skip"])(1))
            .subscribe(([bookings, payments]) => {
            if (bookings && payments) {
                console.log('bookings summary', bookings);
                console.log('payments summary', payments);
                this.bookings = bookings;
                this.payments = payments;
                this.calcData();
            }
        }, (err) => console.log('load data err', err));
        // returning from another tab doesn't emit ionViewWillEnter() on child routes
        // ionViewWillEnter() emitted on parent component
        this.route.url
            .subscribe((_) => {
            console.log('url');
            this.filter();
        });
    }
    // ionViewWillEnter() {
    //   this.filter();
    // }
    calcData() {
        console.log('calc');
        this.calculatedData.rooms = [];
        let totalSoldAll = 0;
        let totalRoomDaysAll = 0;
        let totalPaymentsAll = 0;
        const daysInMonth = date_fns__WEBPACK_IMPORTED_MODULE_5__["getDaysInMonth"](this.sheduleService.convertISOToDate(this.date)) - 1;
        this.rooms.forEach((room) => {
            if (!room._id) {
                // first room is 'All' rooms
                this.calculatedData.rooms.push(room);
                return;
            }
            this.calculatedData.rooms.push(room);
            const position = this.calculatedData.rooms.length - 1;
            let totalSold = 0;
            let totalRoomDays = 0;
            let totalPayments = 0;
            this.payments.forEach((payment) => {
                if (room._id === payment.room_id) {
                    return;
                }
                totalPayments += payment.amount;
            });
            this.bookings.forEach((booking) => {
                if (room._id === booking.room_id) {
                    return;
                }
                const bookingTotalDays = date_fns__WEBPACK_IMPORTED_MODULE_5__["differenceInCalendarDays"](this.sheduleService.convertISOToDate(booking.dates.to), this.sheduleService.convertISOToDate(booking.dates.from));
                const bookingPricePerDay = (booking.price - booking.discount) / bookingTotalDays;
                let startDate;
                let endDate;
                let bookingDaysInCurrentMonth = 0;
                if (date_fns__WEBPACK_IMPORTED_MODULE_5__["isEqual"](this.sheduleService.convertISOToDate(booking.dates.from), this.sheduleService.convertISOToDate(this.dateRangeLimits.upper))) {
                    bookingDaysInCurrentMonth = 1;
                }
                else if (date_fns__WEBPACK_IMPORTED_MODULE_5__["isEqual"](this.sheduleService.convertISOToDate(booking.dates.to), this.sheduleService.convertISOToDate(this.dateRangeLimits.lower))) {
                    bookingDaysInCurrentMonth = 0;
                }
                else {
                    if (date_fns__WEBPACK_IMPORTED_MODULE_5__["isAfter"](this.sheduleService.convertISOToDate(booking.dates.from), this.sheduleService.convertISOToDate(this.dateRangeLimits.lower)) || date_fns__WEBPACK_IMPORTED_MODULE_5__["isEqual"](this.sheduleService.convertISOToDate(booking.dates.from), this.sheduleService.convertISOToDate(this.dateRangeLimits.lower))) {
                        startDate = booking.dates.from;
                    }
                    else {
                        startDate = this.dateRangeLimits.lower;
                    }
                    if (date_fns__WEBPACK_IMPORTED_MODULE_5__["isBefore"](this.sheduleService.convertISOToDate(booking.dates.to), this.sheduleService.convertISOToDate(this.dateRangeLimits.upper)) || date_fns__WEBPACK_IMPORTED_MODULE_5__["isEqual"](this.sheduleService.convertISOToDate(booking.dates.to), this.sheduleService.convertISOToDate(this.dateRangeLimits.upper))) {
                        endDate = booking.dates.to;
                    }
                    else {
                        endDate = this.dateRangeLimits.upper;
                    }
                    bookingDaysInCurrentMonth = date_fns__WEBPACK_IMPORTED_MODULE_5__["differenceInCalendarDays"](this.sheduleService.convertISOToDate(endDate), this.sheduleService.convertISOToDate(startDate));
                    totalSold += bookingDaysInCurrentMonth * bookingPricePerDay;
                    totalRoomDays += bookingDaysInCurrentMonth;
                }
            });
            // add analytics.totalSold to current room
            this.calculatedData.rooms[position] = Object.assign(Object.assign({}, this.calculatedData.rooms[position]), { analytics: {
                    totalSold,
                    totalRoomDays,
                    daysInMonth,
                    totalPayments,
                } });
            totalSoldAll += totalSold;
            totalRoomDaysAll += totalRoomDays;
            totalPaymentsAll += totalPayments;
        });
        // add analytics.totalSold to 'All' room which is at position 0
        this.calculatedData.rooms[0] = Object.assign(Object.assign({}, this.calculatedData.rooms[0]), { analytics: {
                totalSold: totalSoldAll,
                totalRoomDays: totalRoomDaysAll / this.calculatedData.rooms.length,
                daysInMonth,
                totalPayments: totalPaymentsAll,
            } });
        console.log('this.calculatedData.rooms', this.calculatedData.rooms);
    }
    filter() {
        const bookingQuery = this.createBookingQuery();
        const paymentQuery = this.createPaymentQuery();
        this.store.dispatch(new src_app_store_actions_shedule_actions__WEBPACK_IMPORTED_MODULE_8__["GetBookings"](bookingQuery));
        this.store.dispatch(new src_app_store_actions_shedule_actions__WEBPACK_IMPORTED_MODULE_8__["GetPayments"](paymentQuery));
    }
    createBookingQuery() {
        this.dateRangeLimits = this.sheduleService.createDateRangeLimits(this.sheduleService.convertISOToDate(this.date));
        return {
            dateRangeLimits: this.dateRangeLimits,
            // room_id: this.room?._id,
            bookingStep: {
                val: 'cancelled',
                expr: '$ne',
            },
        };
    }
    createPaymentQuery() {
        this.dateRangeLimits = this.sheduleService.createDateRangeLimits(this.sheduleService.convertISOToDate(this.date));
        return {
            dateRangeLimits: this.dateRangeLimits,
        };
    }
};
SummaryPage.ctorParameters = () => [
    { type: _shedule_shedule_service__WEBPACK_IMPORTED_MODULE_4__["SheduleService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"] }
];
SummaryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-summary',
        template: _raw_loader_summary_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_summary_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SummaryPage);



/***/ }),

/***/ "zWcS":
/*!*************************************************************!*\
  !*** ./src/app/modules/analytics/summary/summary.module.ts ***!
  \*************************************************************/
/*! exports provided: SummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function() { return SummaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary-routing.module */ "kHg+");
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summary.page */ "vN97");







let SummaryPageModule = class SummaryPageModule {
};
SummaryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__["SummaryPageRoutingModule"]
        ],
        declarations: [_summary_page__WEBPACK_IMPORTED_MODULE_6__["SummaryPage"]]
    })
], SummaryPageModule);



/***/ })

}]);
//# sourceMappingURL=summary-summary-module.js.map