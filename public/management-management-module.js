(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["management-management-module"],{

/***/ "82qs":
/*!*******************************************************************!*\
  !*** ./src/app/modules/analytics/management/management.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFuYWdlbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0FBQ0YiLCJmaWxlIjoibWFuYWdlbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGFiZWwge1xyXG4gIG1hcmdpbjogMDtcclxufSJdfQ== */");

/***/ }),

/***/ "JnSv":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/analytics/management/management.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Management</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button contentId=\"analytics-content\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size-md=\"8\" offset-md=\"2\">\n          <ion-item color=\"primary\" lines=\"none\">\n            <ion-label>\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label>Choose period</ion-label>\n                    <ion-datetime pickerFormat=\"MMMM-YYYY\" displayFormat=\"MMMM YYYY\" [max]=\"maxDate\"\n                      placeholder=\"Select Month\" [(ngModel)]=\"date\" (ionChange)=\"filter()\"></ion-datetime>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-label>Sort</ion-label>\n                    <ion-select placeholder=\"Select One\" [(ngModel)]=\"sortField\" (ionChange)=\"filter()\">\n                      <ion-select-option *ngFor=\"let sortField of sortFields | keyvalue\" [value]=\"sortField.key\">\n                        {{sortField.value}}\n                      </ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-label>Sort order</ion-label>\n                    <ion-select placeholder=\"Select One\" [(ngModel)]=\"sortOrder\" (ionChange)=\"filter()\">\n                      <ion-select-option *ngFor=\"let sortOrder of sortOrders | keyvalue\" [value]=\"sortOrder.key\">\n                        {{sortOrder.value}}\n                      </ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label>Room</ion-label>\n                    <ion-select placeholder=\"Select One\" [(ngModel)]=\"room\" (ionChange)=\"filter()\">\n                      <ion-select-option *ngFor=\"let room of rooms\" [value]=\"room\">{{room.name}}\n                      </ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-label>Booking Step</ion-label>\n                    <ion-select placeholder=\"Select One\" [(ngModel)]=\"bookingStep\" (ionChange)=\"filter()\">\n                      <ion-select-option *ngFor=\"let bookingStep of bookingSteps | keyvalue\" [value]=\"bookingStep.key\">\n                        {{bookingStep.value}}\n                      </ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-label>Booking Step Equals</ion-label>\n                    <ion-select placeholder=\"Select One\" [(ngModel)]=\"bookingStepExpr\" [disabled]=\"!bookingStep\"\n                      (ionChange)=\"filter()\">\n                      <ion-select-option *ngFor=\"let bookingStepExpr of bookingStepExprs | keyvalue\"\n                        [value]=\"bookingStepExpr.key\">{{bookingStepExpr.value}}\n                      </ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                </ion-col>\n              </ion-row>\n            </ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"8\" offset-md=\"2\">\n        <ion-list>\n          <ion-list-header class=\"ion-no-padding\">\n            <ion-label>\n              <ion-item>\n                <ion-label>\n                  <ion-row>\n                    <ion-col class=\"ion-no-padding\" size=\"3\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label class=\"ion-text-center\">\n                          Step\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col class=\"ion-no-padding\" size=\"3\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label class=\"ion-text-center\">\n                          Date form\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col class=\"ion-no-padding\" size=\"3\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label class=\"ion-text-center\">\n                          Date to\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col class=\"ion-no-padding\" size=\"3\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label class=\"ion-text-center\">\n                          <ion-text color=\"tertiary\">\n                            Price\n                          </ion-text>\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-label>\n              </ion-item>\n            </ion-label>\n          </ion-list-header>\n          <ng-container *ngFor=\"let booking of bookings\">\n            <ion-item-sliding>\n              <ion-item lines=\"none\">\n                <ion-label>\n                  <ion-row>\n                    <ion-col class=\"ion-no-padding\" size=\"3\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label class=\"ion-text-center\">\n                          <ion-button [ngClass]=\"'status-color_' + booking.bookingStep\"\n                            (click)=\"viewBooking(booking._id)\" fill=\"clear\">{{booking.bookingStep}}</ion-button>\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col class=\"ion-no-padding\" size=\"3\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label class=\"ion-text-center\">\n                          {{booking.dates.from | date: 'dd MMM'}}\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col class=\"ion-no-padding\" size=\"3\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label class=\"ion-text-center\">\n                          {{booking.dates.to | date: 'dd MMM'}}\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col class=\"ion-no-padding\" size=\"3\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label class=\"ion-text-center\">\n                          <ion-text color=\"tertiary\">\n                            {{booking.price}}\n                          </ion-text>\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n                </ion-label>\n                <!-- <ion-note slot=\"end\">\n                  slide\n                </ion-note> -->\n              </ion-item>\n              <!-- <ion-item-options side=\"start\">\n                <ion-item-option (click)=\"update(operator._id)\">\n                  <ion-icon slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n                </ion-item-option>\n              </ion-item-options> -->\n              <ion-item-options *ngIf=\"!user?.blocked\" side=\"end\">\n                <ion-item-option color=\"danger\" (click)=\"presentAlert(booking._id)\">\n                  <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                </ion-item-option>\n              </ion-item-options>\n              <ion-item-options *ngIf=\"booking.bookingStep !== 'cancelled' && !user?.blocked\" side=\"start\">\n                <ion-item-option color=\"primary\" (click)=\"update(booking._id)\">\n                  <ion-icon slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n                </ion-item-option>\n              </ion-item-options>\n\n            </ion-item-sliding>\n          </ng-container>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "mQWx":
/*!***************************************************************************!*\
  !*** ./src/app/modules/analytics/management/management-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ManagementPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementPageRoutingModule", function() { return ManagementPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _management_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./management.page */ "oQua");




const routes = [
    {
        path: '',
        component: _management_page__WEBPACK_IMPORTED_MODULE_3__["ManagementPage"],
    },
];
let ManagementPageRoutingModule = class ManagementPageRoutingModule {
};
ManagementPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManagementPageRoutingModule);



/***/ }),

/***/ "nhAk":
/*!*******************************************************************!*\
  !*** ./src/app/modules/analytics/management/management.module.ts ***!
  \*******************************************************************/
/*! exports provided: ManagementPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementPageModule", function() { return ManagementPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _management_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./management-routing.module */ "mQWx");
/* harmony import */ var _management_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./management.page */ "oQua");







let ManagementPageModule = class ManagementPageModule {
};
ManagementPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _management_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManagementPageRoutingModule"]
        ],
        declarations: [_management_page__WEBPACK_IMPORTED_MODULE_6__["ManagementPage"]]
    })
], ManagementPageModule);



/***/ }),

/***/ "oQua":
/*!*****************************************************************!*\
  !*** ./src/app/modules/analytics/management/management.page.ts ***!
  \*****************************************************************/
/*! exports provided: ManagementPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementPage", function() { return ManagementPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_management_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./management.page.html */ "JnSv");
/* harmony import */ var _management_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./management.page.scss */ "82qs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "b/SL");
/* harmony import */ var _shedule_shedule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shedule/shedule.service */ "mrZj");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_reducers_shedule_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/reducers/shedule.reducer */ "tJKL");
/* harmony import */ var src_app_store_actions_shedule_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/store/actions/shedule.actions */ "4dfA");
/* harmony import */ var src_app_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/store/reducers/user.reducer */ "mgGq");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "TEn/");














let ManagementPage = class ManagementPage {
    constructor(sheduleService, store, router, alertController) {
        this.sheduleService = sheduleService;
        this.store = store;
        this.router = router;
        this.alertController = alertController;
        this.bookingSteps = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].bookingStepsMap;
        this.bookingStep = 'cancelled';
        this.bookingStepExprs = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].bookingStepExprsMap;
        this.bookingStepExpr = '$eq';
        this.sortFields = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].sortFieldsMap;
        this.sortField = 'dates.from';
        this.sortOrders = src_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].sortOrdersMap;
        this.sortOrder = 1;
        this.date = this.sheduleService.convertDateToShort(new Date());
        this.maxDate = this.sheduleService.convertDateToShort(date_fns__WEBPACK_IMPORTED_MODULE_5__["add"](new Date(), { years: 1 }));
    }
    ngOnInit() {
        this.store.select(src_app_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_10__["getCompany"])
            .subscribe((company) => {
            this.rooms = [...company.rooms];
            this.rooms.unshift({ _id: null, name: 'All' });
            console.log('rooms', this.rooms);
            this.room = this.rooms[0];
        }, (err) => console.log('load rooms err', err));
        this.store.select(src_app_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_10__["getUser"])
            .subscribe((user) => this.user = user);
        this.store.select(src_app_store_reducers_shedule_reducer__WEBPACK_IMPORTED_MODULE_8__["getBookings"])
            .subscribe((bookings) => {
            this.bookings = bookings;
        });
        // this.filterForm = new FormGroup({
        //   date: new FormControl(),
        //   room: new FormControl(),
        //   bookingStep: new FormControl(),
        //   sort: new FormControl(),
        // });
    }
    ionViewWillEnter() {
        const bookingQuery = this.createBookingQuery();
        this.store.dispatch(new src_app_store_actions_shedule_actions__WEBPACK_IMPORTED_MODULE_9__["GetBookings"](bookingQuery));
    }
    presentAlert(_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // cssClass: 'my-custom-class',
                header: 'Delete reservation',
                subHeader: 'Reservation will be deleted',
                message: 'Are you shure?',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        // cssClass: 'secondary',
                        handler: (blah) => {
                            // console.log('Confirm Cancel: blah');
                        },
                    }, {
                        text: 'Ok',
                        handler: () => {
                            this.delete(_id);
                            const bookingQuery = this.createBookingQuery();
                            this.store.dispatch(new src_app_store_actions_shedule_actions__WEBPACK_IMPORTED_MODULE_9__["GetBookings"](bookingQuery));
                        },
                    }],
            });
            yield alert.present();
        });
    }
    createBookingQuery() {
        return {
            dateRangeLimits: this.sheduleService.createDateRangeLimits(this.sheduleService.convertISOToDate(this.date)),
            room_id: this.room._id,
            bookingStep: this.bookingStep ? {
                val: this.bookingStep,
                expr: this.bookingStepExpr,
            } : null,
            sort: {
                field: this.sortField,
                order: this.sortOrder,
            },
        };
    }
    filter() {
        const bookingQuery = this.createBookingQuery();
        this.store.dispatch(new src_app_store_actions_shedule_actions__WEBPACK_IMPORTED_MODULE_9__["GetBookings"](bookingQuery));
    }
    getBookings(room_id, date) {
        return this.store.select(src_app_store_reducers_shedule_reducer__WEBPACK_IMPORTED_MODULE_8__["getBookings"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((bookings) => {
            return bookings
                .filter((booking) => {
                return booking.room_id === room_id;
            })
                .map((booking) => {
                if (date_fns__WEBPACK_IMPORTED_MODULE_5__["isEqual"](new Date(date), new Date(booking.dates.from))) {
                    return Object.assign(Object.assign({}, booking), { info: 'start' });
                }
                else if (date_fns__WEBPACK_IMPORTED_MODULE_5__["isEqual"](new Date(date), new Date(booking.dates.to))) {
                    return Object.assign(Object.assign({}, booking), { info: 'end' });
                }
                else if (date_fns__WEBPACK_IMPORTED_MODULE_5__["isAfter"](new Date(date), new Date(booking.dates.from)) &&
                    date_fns__WEBPACK_IMPORTED_MODULE_5__["isBefore"](new Date(date), new Date(booking.dates.to))) {
                    return Object.assign(Object.assign({}, booking), { info: 'ahead' });
                }
                else {
                    return;
                }
            })
                .filter((booking) => booking)
                .sort((a, b) => {
                return new Date(a.dates.from).getTime() - new Date(b.dates.from).getTime();
            })
                .map((booking) => {
                return booking;
            });
        }));
    }
    viewBooking(booking_id) {
        // discover
        this.router.navigate(['/', 'shedule', 'edit', booking_id]);
    }
    delete(booking_id) {
        this.sheduleService.deleteBooking(booking_id)
            .subscribe((_) => _, (err) => console.log('err delete', err));
    }
    update(booking_id) {
        this.router.navigateByUrl('/shedule/edit/' + booking_id);
    }
};
ManagementPage.ctorParameters = () => [
    { type: _shedule_shedule_service__WEBPACK_IMPORTED_MODULE_6__["SheduleService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["AlertController"] }
];
ManagementPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-management',
        template: _raw_loader_management_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_management_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ManagementPage);



/***/ })

}]);
//# sourceMappingURL=management-management-module.js.map