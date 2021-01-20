(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-form-booking-form-module"],{

/***/ "6lnG":
/*!*******************************************************************!*\
  !*** ./src/app/modules/shedule/booking-form/booking-form.page.ts ***!
  \*******************************************************************/
/*! exports provided: BookingFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingFormPage", function() { return BookingFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_booking_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./booking-form.page.html */ "SluI");
/* harmony import */ var _booking_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-form.page.scss */ "U61U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _shedule_shedule_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shedule/shedule.service */ "mrZj");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ "b/SL");












let BookingFormPage = class BookingFormPage {
    constructor(route, sheduleService, navController, router, alertController) {
        this.route = route;
        this.sheduleService = sheduleService;
        this.navController = navController;
        this.router = router;
        this.alertController = alertController;
        this.calculatedData = {};
        this.isCancelled = false;
        // oneDay = environment.constants.oneDay;
        this.bookingSteps = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].bookingStepsMap;
        this.paymentMethods = src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].paymentMethodsMap;
        this.editPayment = null;
        this.availableTo = null;
    }
    ngOnInit() {
        this.bookingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
                updateOn: 'change',
            }),
            guestName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('Guest', {
                updateOn: 'change',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9а-яА-ЯіІїЇєЄ_@#$%№\'"\\-]{2,40}$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(40),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ],
            }),
            guestPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('380500000000', {
                updateOn: 'change',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^((\\+[0-9]{3})|[0-9]{3}|0)[0-9]{9}$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(9),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(13),
                ],
            }),
            guestEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
                updateOn: 'change',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
                ],
            }),
            // price: new FormControl(
            //     0, {
            //       updateOn: 'change',
            //       validators: [
            //         Validators.required,
            //         Validators.pattern('[0-9]*'),
            //       ],
            //     }),
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0, {
                updateOn: 'change',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]*'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(this.calculatedData.bookingPrice ? this.calculatedData.bookingPrice : null),
                ],
            }),
            // bookingStep: new FormControl(
            //     'preorder', {
            //       updateOn: 'change',
            //       validators: [
            //         Validators.required,
            //         Validators.pattern('^preorder|waiting\\-for\\-payment|reserved|cancelled$'),
            //       ],
            //     }),
            dates: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
                from: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0, {
                    updateOn: 'change',
                    validators: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    ],
                }),
                to: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0, {
                    updateOn: 'change',
                    validators: [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    ],
                }),
            }),
            payments: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([]),
        });
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((paramMap) => {
            if (paramMap.get('bookingId')) {
                // edit booking
                this.mode = 'edit';
                return this.sheduleService.getBookingById(paramMap.get('bookingId')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((booking) => {
                    console.log('booking', booking);
                    this.isCancelled = booking.bookingStep === 'cancelled';
                    this.booking = this.sheduleService.convertBookingDatesIsoToShort(booking);
                    this.booking.payments.forEach((_) => this.addPaymentsArrayControl());
                    this.bookingForm.patchValue(this.booking);
                    return this.sheduleService.getRoomById(booking.room_id);
                }));
            }
            else if (paramMap.get('roomId')) {
                // new booking
                this.mode = 'new';
                this.date = paramMap.get('date');
                return this.sheduleService.getRoomById(paramMap.get('roomId'));
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])('error parameter');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((room) => {
            this.room = room;
            if (this.mode === 'edit') {
                return this.sheduleService.getAvailableDateTo(this.booking.room_id, this.booking.dates.to);
            }
            else if (this.mode === 'new') {
                this.fromPlusOneDay = this.sheduleService.convertDateToShort(date_fns__WEBPACK_IMPORTED_MODULE_11__["add"](this.sheduleService.convertShortToDate(this.date), { days: 1 }));
                this.bookingForm.get('dates').get('from').setValue(this.date);
                this.bookingForm.get('dates').get('to').setValue(this.fromPlusOneDay);
                return this.sheduleService.getAvailableDateTo(this.room._id, this.date);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])('error get room');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])((availableTo) => {
            if (availableTo) {
                this.availableTo = this.sheduleService.convertISOToShort(availableTo);
            }
            else {
                this.availableTo = this.sheduleService.convertDateToShort(date_fns__WEBPACK_IMPORTED_MODULE_11__["add"](new Date(), { days: 30 }));
            }
            this.calcData();
            return this.bookingForm.valueChanges;
        })).subscribe((_) => this.calcData(), (err) => console.log('error', err));
    }
    calcData() {
        this.calculatedData.days = date_fns__WEBPACK_IMPORTED_MODULE_11__["differenceInCalendarDays"](this.sheduleService.convertShortToDate(this.bookingForm.get('dates').get('to').value), this.sheduleService.convertShortToDate(this.bookingForm.get('dates').get('from').value));
        this.calculatedData.bookingPrice = this.room.price * this.calculatedData.days;
        let amount = 0;
        this.bookingForm.get('payments')['controls'].forEach((control) => {
            amount += control.get('amount').value;
        });
        this.calculatedData.totalPaid = amount;
        this.calculatedData.balance = this.calculatedData.totalPaid - this.calculatedData.bookingPrice +
            (+this.bookingForm.get('discount').value);
        if (this.isCancelled) {
            this.calculatedData.bookingStep = 'cancelled';
        }
        else if (this.calculatedData.balance >= 0) {
            this.calculatedData.bookingStep = 'paid';
        }
        else if (this.calculatedData.totalPaid > 0) {
            this.calculatedData.bookingStep = 'reserved';
        }
        else {
            this.calculatedData.bookingStep = 'preorder';
        }
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // cssClass: 'my-custom-class',
                header: 'Cancel reservation',
                subHeader: 'Reservation will be cancelled and dessapears from shedule',
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
                            this.isCancelled = true;
                            this.calcData();
                            this.onFormSubmit();
                        },
                    }],
            });
            yield alert.present();
        });
    }
    get paymentsFormGroup() {
        return {
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
                updateOn: 'change',
            }),
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.sheduleService.convertDateToShort(new Date()), {
                updateOn: 'change',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ],
            }),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](200, {
                updateOn: 'change',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]*'),
                ],
            }),
            paymentMethod: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('cash', {
                updateOn: 'change',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^card|cash$'),
                ],
            }),
        };
    }
    getPaymentsArrayControlAt(i) {
        const arrayControl = this.bookingForm.get('payments');
        return arrayControl.at(i);
    }
    addPaymentsArrayControl() {
        const control = this.bookingForm.get('payments');
        control.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"](Object.assign({}, this.paymentsFormGroup)));
    }
    addPaymentsArrayControlToBegin() {
        const control = this.bookingForm.get('payments');
        control.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"](this.paymentsFormGroup));
        const newControl = Object.assign({}, control.at(control.controls.length - 1).value);
        for (let i = control.controls.length - 1; i > 0; i--) {
            control.at(i).setValue(Object.assign({}, control.at(i - 1).value));
        }
        control.at(0).setValue(newControl);
    }
    editPayments(position) {
        this.editPayment = position;
    }
    initControl(formState = null, options) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](formState, options);
    }
    addControl(formField, data) {
        console.log('data', data);
        this.bookingForm.addControl(formField, this.initControl(data.formState, data.options));
    }
    addArrayControl(formField, data) {
        const control = this.bookingForm.get(formField);
        control.push(this.initControl(data.formState, data.options));
    }
    removeArrayControl(formField, position) {
        const control = this.bookingForm.get(formField);
        control.removeAt(position);
    }
    onFormCancel() {
        this.resetForm();
        this.navController.back();
        // this.router.navigate([this.mode === 'new' ? '/shedule' : '/shedule/discover/' + this.booking?._id]);
    }
    onFormSubmit() {
        let booking = Object.assign(Object.assign({}, this.bookingForm.value), { room_id: this.room._id, price: this.calculatedData.bookingPrice, bookingStep: this.calculatedData.bookingStep });
        // prepare booking object to send to server
        // booking = this.sheduleService.convertBookingDatesIsoToNumber(booking);
        booking = this.sheduleService.convertBookingDatesIsoToShort(booking);
        console.log('f booking', booking);
        this.sheduleService.upsertBooking(booking)
            .subscribe((result) => {
            this.resetForm();
            // const url = booking._id ? '/shedule/discover/' + booking._id : '/shedule/discover/' + result.upserted[0]._id;
            if (booking._id) {
                // edit
                this.navController.back();
            }
            else {
                // new
                this.router.navigateByUrl('/shedule/discover/' + result.upserted[0]._id);
            }
        }, (err) => console.log('error', err.error));
    }
    resetForm() {
        if (this.bookingFormDirective) {
            this.bookingForm.get('payments').clear();
            this.bookingFormDirective.resetForm();
        }
    }
};
BookingFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _shedule_shedule_service__WEBPACK_IMPORTED_MODULE_10__["SheduleService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
BookingFormPage.propDecorators = {
    bookingFormDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['bookingFormDirective', { static: false },] }]
};
BookingFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-booking-form',
        template: _raw_loader_booking_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_booking_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BookingFormPage);



/***/ }),

/***/ "LOB2":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shedule/booking-form/booking-form.module.ts ***!
  \*********************************************************************/
/*! exports provided: BookingFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingFormPageModule", function() { return BookingFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _booking_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking-form-routing.module */ "SH3o");
/* harmony import */ var _booking_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking-form.page */ "6lnG");







let BookingFormPageModule = class BookingFormPageModule {
};
BookingFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _booking_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingFormPageRoutingModule"],
        ],
        declarations: [_booking_form_page__WEBPACK_IMPORTED_MODULE_6__["BookingFormPage"]],
    })
], BookingFormPageModule);



/***/ }),

/***/ "SH3o":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shedule/booking-form/booking-form-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: BookingFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingFormPageRoutingModule", function() { return BookingFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _booking_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking-form.page */ "6lnG");




const routes = [
    {
        path: '',
        component: _booking_form_page__WEBPACK_IMPORTED_MODULE_3__["BookingFormPage"],
    },
];
let BookingFormPageRoutingModule = class BookingFormPageRoutingModule {
};
BookingFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookingFormPageRoutingModule);



/***/ }),

/***/ "SluI":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shedule/booking-form/booking-form.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [defaultHref]=\"mode === 'new' ? '/shedule': '/shedule/discover' + booking?._id\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>booking-form</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"bookingForm\" #bookingFormDirective=\"ngForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-md=\"6\" offset-md=\"3\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title>{{room?.name}}</ion-card-title>\n              <ion-card-subtitle>\n                <ion-text></ion-text>\n                <ion-text [color]=\"calculatedData?.balance >= 0 ? 'success': 'danger'\">Balance:\n                  {{calculatedData?.balance}}</ion-text>\n\n\n\n                <!-- з {{bookingForm.get('dates').get('from').value | date: 'dd MMM'}} по\n                {{bookingForm.get('dates').get('to').value | date: 'dd MMM'}} -->\n              </ion-card-subtitle>\n            </ion-card-header>\n\n            <ion-card-content>\n              <ion-row>\n                <ion-col>\n                  <ion-text>Price per night:</ion-text>\n                </ion-col>\n                <ion-col>\n                  <ion-text color=\"primary\">{{room?.price}}</ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-text>Nights reserved:</ion-text>\n                </ion-col>\n                <ion-col>\n                  <ion-text color=\"primary\">{{calculatedData?.days}}</ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-text>Status:</ion-text>\n                </ion-col>\n                <ion-col>\n                  <ion-text [ngClass]=\"'status_' + calculatedData?.bookingStep\">{{bookingSteps.get(calculatedData?.bookingStep)}}</ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-text>Total price:</ion-text>\n                </ion-col>\n                <ion-col>\n                  <ion-text color=\"primary\">{{calculatedData?.bookingPrice}}</ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-text>Discount:</ion-text>\n                </ion-col>\n                <ion-col>\n                  <ion-text color=\"primary\">{{bookingForm?.get('discount').value}}</ion-text>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-text>Total paid:</ion-text>\n                </ion-col>\n                <ion-col>\n                  <ion-text color=\"primary\">{{calculatedData?.totalPaid}}</ion-text>\n                </ion-col>\n              </ion-row>\n            </ion-card-content>\n          </ion-card>\n\n          <!-- <ion-item lines=\"none\">\n                                              <ion-label class=\"date-label\">\n\n                                                <ion-text class=\"date-label__item\">\n                                                  From: {{bookingForm.get('dates').get('from').value | date: 'dd MMMM yyyy'}}\n                                                </ion-text>\n                                                <ion-text color=\"secondary\" class=\"date-label__item\">\n                                                  Available to: {{availableTo? (availableTo | date: 'dd MMMM yyyy') : 'No limits' }}\n                                                </ion-text>\n                                              </ion-label>\n                                            </ion-item> -->\n          <ion-list lines=\"none\" class=\"date-label\">\n            <ion-item class=\"date-label__item\">\n              <ion-label position=\"stacked\">\n                From:\n              </ion-label>\n              {{bookingForm.get('dates').get('from').value | date: 'dd MMMM yyyy'}}\n            </ion-item>\n            <ion-item class=\"date-label__item\">\n              <ion-label position=\"stacked\">\n                Available to:\n              </ion-label>\n              <ion-text>\n                {{availableTo? (availableTo | date: 'dd MMMM yyyy') : 'No limits' }}\n\n              </ion-text>\n            </ion-item>\n          </ion-list>\n\n          <ion-list lines=\"none\" class=\"date-label\">\n\n            <ion-item class=\"date-label__item\" formGroupName=\"dates\">\n              <ion-label position=\"stacked\" color=\"primary\">\n                To:\n              </ion-label>\n              <ion-datetime pickerFormat=\"DD-MMMM-YYYY\" [min]=\"fromPlusOneDay\" [max]=\"availableTo\"\n                displayFormat=\"DD MMMM YYYY\" placeholder=\"Select end date\" formControlName=\"to\"></ion-datetime>\n              <ion-text *ngIf=\"bookingForm.get('dates').get('to').errors\" class=\"input-error\" color=\"danger\">\n                {{bookingForm.get('dates').get('to').errors | json}}\n              </ion-text>\n            </ion-item>\n\n            <ion-item class=\"date-label__item\">\n              <ion-label>\n                <ion-button fill=\"outline\" color=\"danger\" (click)=\"presentAlert()\">\n                  Cancel reservation\n                </ion-button>\n              </ion-label>\n            </ion-item>\n\n\n          </ion-list>\n\n\n\n\n          <ion-list>\n            <ion-item>\n              <ion-label position=\"floating\" color=\"primary\">\n                Guest name\n              </ion-label>\n\n              <ion-input type=\"text\" autocomplete autocorrect formControlName=\"guestName\"></ion-input>\n            </ion-item>\n            <ion-text *ngIf=\"bookingForm.get('guestName').errors\" class=\"input-error\" color=\"danger\">\n              {{bookingForm.get('guestName').errors | json}}\n            </ion-text>\n\n            <ion-item>\n              <ion-label position=\"floating\" color=\"primary\">Guest phone</ion-label>\n              <ion-input type=\"text\" autocomplete autocorrect formControlName=\"guestPhone\"></ion-input>\n            </ion-item>\n            <ion-text *ngIf=\"bookingForm.get('guestPhone').errors\" class=\"input-error\" color=\"danger\">\n              {{bookingForm.get('guestPhone').errors | json}}\n            </ion-text>\n\n            <ion-item>\n              <ion-label position=\"floating\" color=\"primary\">Guest email</ion-label>\n              <ion-input type=\"email\" autocomplete autocorrect formControlName=\"guestEmail\"></ion-input>\n            </ion-item>\n            <ion-text *ngIf=\"bookingForm.get('guestEmail').errors\" class=\"input-error\" color=\"danger\">\n              {{bookingForm.get('guestEmail').errors | json}}\n            </ion-text>\n\n            <!-- <ion-item>\n                  <ion-label position=\"floating\">Price</ion-label>\n                  <ion-input type=\"text\" autocomplete autocorrect formControlName=\"price\"></ion-input>\n                </ion-item>\n                <ion-text *ngIf=\"bookingForm.get('price').errors\" class=\"input-error\" color=\"danger\">\n                  {{bookingForm.get('price').errors | json}}\n                </ion-text> -->\n\n\n\n            <!-- <ion-item>\n                  <ion-label position=\"stacked\" color=\"primary\">Booking step</ion-label>\n                  <ion-select placeholder=\"Select One\" interface=\"popover\" formControlName=\"bookingStep\">\n                    <ion-select-option *ngFor=\"let bookingStep of bookingSteps\">{{bookingStep}}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n                <ion-text *ngIf=\"bookingForm.get('bookingStep').errors\" class=\"input-error\" color=\"danger\">\n                  {{bookingForm.get('bookingStep').errors | json}}\n                </ion-text> -->\n\n\n            <ion-item>\n              <ion-label position=\"floating\" color=\"primary\">Discount</ion-label>\n              <ion-input type=\"text\" autocomplete autocorrect formControlName=\"discount\"></ion-input>\n            </ion-item>\n            <ion-text *ngIf=\"bookingForm.get('discount').errors\" class=\"input-error\" color=\"danger\">\n              {{bookingForm.get('discount').errors | json}}\n            </ion-text>\n          </ion-list>\n\n          <ion-list lines=\"none\">\n            <ion-list-header>\n              <ion-label>Payments</ion-label>\n              <ion-button *ngIf=\"editPayment === null\" (click)=\"addPaymentsArrayControlToBegin(); editPayments(0);\">\n                Add</ion-button>\n              <ion-button *ngIf=\"editPayment !== null\" [disabled]=\"bookingForm.get('payments').status === 'INVALID'\"\n                (click)=\"editPayments(null)\">Ok</ion-button>\n            </ion-list-header>\n            <ng-container *ngFor=\"let paymentsControl of bookingForm.get('payments')['controls']; let i= index\"\n              formArrayName=\"payments\">\n              <ng-container [formGroupName]=\"i\">\n                <ion-item-sliding *ngIf=\"editPayment === null || editPayment !== i\">\n                  <ion-item>\n                    <ion-label>\n                      <h2>Amount: <ion-text color=\"secondary\">{{getPaymentsArrayControlAt(i).get('amount').value}}\n                        </ion-text>\n                      </h2>\n                      <p>Payment date: <ion-text color=\"secondary\">\n                          {{getPaymentsArrayControlAt(i).get('date').value | date: 'dd MMM' }}</ion-text>\n                      </p>\n                      <p>Payment type: <ion-text color=\"secondary\">\n                          {{getPaymentsArrayControlAt(i).get('paymentMethod').value}}</ion-text>\n                      </p>\n                    </ion-label>\n                    <ion-note slot=\"end\">\n                      slide for options\n                    </ion-note>\n                  </ion-item>\n\n                  <ion-item-options side=\"start\">\n                    <ion-item-option (click)=\"editPayments(i)\">\n                      <ion-icon slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n                    </ion-item-option>\n                  </ion-item-options>\n                  <ion-item-options side=\"end\">\n                    <ion-item-option color=\"danger\" (click)=\"removeArrayControl('payments', i)\">\n                      <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                    </ion-item-option>\n                  </ion-item-options>\n                </ion-item-sliding>\n\n                <ion-list *ngIf=\"editPayment === i\">\n\n                  <ion-item>\n                    <ion-label position=\"stacked\" color=\"primary\">Choose date</ion-label>\n                    <ion-datetime pickerFormat=\"DD-MMMM-YYYY\" displayFormat=\"DD MMMM YYYY\" placeholder=\"Select Month\"\n                      formControlName=\"date\"></ion-datetime>\n                  </ion-item>\n\n                  <ion-item>\n                    <ion-label position=\"floating\" color=\"primary\">Amount</ion-label>\n                    <ion-input type=\"text\" autocomplete autocorrect formControlName=\"amount\"></ion-input>\n                  </ion-item>\n                  <ion-text *ngIf=\"getPaymentsArrayControlAt(i).get('amount').errors\" class=\"input-error\"\n                    color=\"danger\">\n                    {{getPaymentsArrayControlAt(i).get('amount').errors | json}}\n                  </ion-text>\n\n                  <ion-item>\n                    <ion-label position=\"stacked\" color=\"primary\">Payment method</ion-label>\n                    <ion-select placeholder=\"Select One\" interface=\"popover\" formControlName=\"paymentMethod\">\n                      <ion-select-option *ngFor=\"let paymentMethod of paymentMethods | keyvalue\" [value]=\"paymentMethod.key\">\n                        <span>{{paymentMethod.value}}</span>\n                      </ion-select-option>\n                    </ion-select>\n                  </ion-item>\n                  <ion-text *ngIf=\"getPaymentsArrayControlAt(i).get('paymentMethod').errors\" class=\"input-error\"\n                    color=\"danger\">{{getPaymentsArrayControlAt(i).get('paymentMethod').errors | json}}\n                  </ion-text>\n                </ion-list>\n              </ng-container>\n            </ng-container>\n          </ion-list>\n          <ion-row>\n            <ion-col size=\"8\">\n              <ion-button expand=\"block\" fill=\"outline\" (click)=\"onFormCancel()\">\n                Cancel\n              </ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button expand=\"block\" [disabled]=\"bookingForm.status === 'INVALID'\" (click)=\"onFormSubmit()\">\n                Submit {{bookingForm.errors}}\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "U61U":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shedule/booking-form/booking-form.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".status_preorder {\n  color: var(--ion-color-warning);\n}\n.status_paid {\n  color: var(--ion-color-success);\n}\n.status_reserved {\n  color: var(--ion-color-primary);\n}\n.status_cancelled {\n  color: var(--ion-color-warning);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYm9va2luZy1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLCtCQUFBO0FBQUo7QUFFRTtFQUNFLCtCQUFBO0FBQUo7QUFFRTtFQUNFLCtCQUFBO0FBQUo7QUFFRTtFQUNFLCtCQUFBO0FBQUoiLCJmaWxlIjoiYm9va2luZy1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGF0dXMge1xyXG4gICZfcHJlb3JkZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcclxuICB9XHJcbiAgJl9wYWlkIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcyk7XHJcbiAgfVxyXG4gICZfcmVzZXJ2ZWQge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcbiAgJl9jYW5jZWxsZWQge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=booking-form-booking-form-module.js.map