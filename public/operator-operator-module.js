(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operator-operator-module"],{

/***/ "+7nM":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/operator/operator-add/operator-add.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Add company user</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"addOperatorForm\" *ngIf=\"addOperatorForm\" #addOperatorFormDirective=\"ngForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-md=\"10\" offset-md=\"1\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title class=\"ion-text-center\">Add company user</ion-card-title>\n              <ion-progress-bar *ngIf=\"loading$ | async\" type=\"indeterminate\" color=\"primary\"></ion-progress-bar>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item>\n                  <ion-icon class=\"ion-align-self-center\" name=\"person-outline\" slot=\"start\"></ion-icon>\n                  <ion-label position=\"floating\">Login</ion-label>\n                  <ion-input type=\"text\" autocomplete autocorrect formControlName=\"login\"></ion-input>\n                </ion-item>\n                <ion-text *ngIf=\"addOperatorForm.get('login').touched && addOperatorForm.get('login').errors\"\n                  class=\"input-error\" color=\"danger\">\n                  {{addOperatorForm.get('login').errors | json}}\n                </ion-text>\n                <ion-item>\n                  <ion-icon class=\"ion-align-self-center\" name=\"mail-outline\" slot=\"start\"></ion-icon>\n                  <ion-label position=\"floating\">Email</ion-label>\n                  <ion-input type=\"email\" autocomplete autocorrect formControlName=\"email\"></ion-input>\n                </ion-item>\n                <ion-text *ngIf=\"addOperatorForm.get('email').touched && addOperatorForm.get('email').errors\"\n                  class=\"input-error\" color=\"danger\">\n                  {{addOperatorForm.get('email').errors | json}}\n                </ion-text>\n                <ion-item lines=\"none\">\n                  <ion-icon class=\"ion-align-self-center\" name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\n                  <ion-label position=\"floating\">Password</ion-label>\n                  <ion-input [type]=\"inputType\" autocomplete autocorrect formControlName=\"password\"></ion-input>\n                  <ion-icon class=\"ion-align-self-center\"\n                    [name]=\"inputType === 'password' ? 'eye-outline' : 'eye-off-outline'\" slot=\"end\"\n                    (click)=switchInputType()></ion-icon>\n                </ion-item>\n                <ion-text\n                  *ngIf=\"addOperatorForm.get('password').touched && addOperatorForm.get('password').errors\"\n                  class=\"input-error\" color=\"danger\">\n                  {{addOperatorForm.get('password').errors | json}}\n                </ion-text>\n                <ion-item lines=\"none\">\n                  <ion-icon class=\"ion-align-self-center\" name=\"reorder-two-outline\" slot=\"start\"></ion-icon>\n\n                  <ion-label position=\"floating\">Password Confirm</ion-label>\n                  <ion-input [type]=\"inputType\" autocomplete autocorrect formControlName=\"passwordConfirm\"></ion-input>\n                  <ion-icon *ngIf=\"addOperatorForm.get('passwordConfirm').status === 'VALID'\"\n                    class=\"ion-align-self-center\" [name]=\"'checkmark-done-outline'\" color=\"primary\" slot=\"end\">\n                  </ion-icon>\n                </ion-item>\n                <ion-text\n                  *ngIf=\"addOperatorForm.get('passwordConfirm').touched && addOperatorForm.get('passwordConfirm').errors\"\n                  class=\"input-error\" color=\"danger\">\n                  {{addOperatorForm.get('passwordConfirm').errors | json}}\n                </ion-text>\n              </ion-list>\n            </ion-card-content>\n\n          </ion-card>\n\n          <ion-row>\n            <ion-col>\n              <ion-button expand=\"block\"\n                [disabled]=\"addOperatorForm.status === 'INVALID' || addOperatorForm.status === 'PENDING'\"\n                (click)=\"formSubmitSubject$.next()\">\n                Signup\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "/WHF":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/dashboard/operator/operator-add/operator-add.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OperatorAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorAddComponent", function() { return OperatorAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_operator_add_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./operator-add.component.html */ "+7nM");
/* harmony import */ var _operator_add_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operator-add.component.scss */ "Wt/+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_modules_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modules/user/user.service */ "d6tv");
/* harmony import */ var _operator_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../operator.service */ "Xnf4");











let OperatorAddComponent = class OperatorAddComponent {
    constructor(modalController, userService, store, operatorService) {
        this.modalController = modalController;
        this.userService = userService;
        this.store = store;
        this.operatorService = operatorService;
        this.inputType = 'password';
        this.formSubmitSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
    }
    ngOnInit() {
        this.loading$ = this.operatorService.loading$;
        this.addOperatorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_\\-]{2,60}$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(60),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ],
                asyncValidators: [
                    this.userService.checkLoginUnique(),
                ],
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
                updateOn: 'change',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_\\-]{8,60}$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(60),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ],
            }),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
                updateOn: 'change',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_\\-]{8,60}$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(60),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ],
            }),
            email: this.userService.emailFormControl(),
        }, this.userService.matchPassword);
        // prevent form submit before async validator completes
        this.formSubmitSubject$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(() => this.addOperatorForm.markAsDirty()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["switchMap"])(() => this.addOperatorForm.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["startWith"])(this.addOperatorForm.status), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((status) => status !== 'PENDING'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["take"])(1))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])((status) => status === 'VALID'))
            .subscribe((validationSuccessful) => this.onSignup());
    }
    dismiss(data) {
        this.modalController.dismiss(data);
    }
    switchInputType() {
        if (this.inputType === 'password') {
            this.inputType = 'text';
        }
        else {
            this.inputType = 'password';
        }
    }
    onSignup() {
        this.dismiss({
            // _id: 'fff',
            login: this.addOperatorForm.get('login').value,
            password: this.addOperatorForm.get('password').value,
            email: this.addOperatorForm.get('email').value,
        });
        this.resetForm();
        // this.userService.createCompanyUser({
        //   login: this.addOperatorForm.get('login').value,
        //   password: this.addOperatorForm.get('password').value,
        //   email: this.addOperatorForm.get('email').value,
        // })
        //     .subscribe(
        //         (_) => {
        //           this.resetForm();
        //           this.dismiss(null);
        //         },
        //         (err) => this.dismiss(err.error),
        //     );
    }
    resetForm() {
        if (this.addOperatorFormDirective) {
            this.addOperatorFormDirective.resetForm();
        }
    }
};
OperatorAddComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_modules_user_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
    { type: _operator_service__WEBPACK_IMPORTED_MODULE_10__["OperatorService"] }
];
OperatorAddComponent.propDecorators = {
    company: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    addOperatorFormDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['addOperatorFormDirective', { static: false },] }]
};
OperatorAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-operator-add',
        template: _raw_loader_operator_add_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_operator_add_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OperatorAddComponent);



/***/ }),

/***/ "ATrw":
/*!*************************************************************!*\
  !*** ./src/app/modules/dashboard/operator/operator.page.ts ***!
  \*************************************************************/
/*! exports provided: OperatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorPage", function() { return OperatorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_operator_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./operator.page.html */ "faI2");
/* harmony import */ var _operator_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operator.page.scss */ "NMxb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/reducers/user.reducer */ "mgGq");
/* harmony import */ var _shared_update_form_field_update_form_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/update-form-field/update-form-field.component */ "vtsq");
/* harmony import */ var _operator_add_operator_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./operator-add/operator-add.component */ "/WHF");
/* harmony import */ var _operator_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./operator.service */ "Xnf4");










let OperatorPage = class OperatorPage {
    constructor(operatorService, store, modalController, alertController) {
        this.operatorService = operatorService;
        this.store = store;
        this.modalController = modalController;
        this.alertController = alertController;
        this.user = null;
        this.company = null;
    }
    ngOnInit() {
        this.store.select(_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_6__["getCompany"])
            .subscribe((company) => {
            if (company) {
                this.company = company;
                this.operatorService.getAll();
            }
        });
        this.store.select(_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_6__["getUser"])
            .subscribe((user) => {
            if (user) {
                this.user = user;
            }
        });
        this.entities$ = this.operatorService.entities$;
        this.loading$ = this.operatorService.loading$;
        this.entities$.subscribe((operators) => this.operators = operators);
    }
    presentAlert(_id, login) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // cssClass: 'my-custom-class',
                header: 'Delete',
                subHeader: 'user with login: ' + login,
                message: 'Are you shure?',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        // cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        },
                    }, {
                        text: 'Okay',
                        handler: () => this.remove(_id),
                    }],
            });
            yield alert.present();
        });
    }
    presentModal(component, data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component,
                // cssClass: 'my-custom-class',
                componentProps: data,
            });
            yield modal.present();
            return yield modal.onWillDismiss();
        });
    }
    blockUser(_id, blocked) {
        this.operatorService.update({
            _id,
            blocked,
        }).subscribe((result) => console.log('update result', result), (err) => console.log('update error', err));
    }
    update(_id, field) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { data } = yield this.presentModal(_shared_update_form_field_update_form_field_component__WEBPACK_IMPORTED_MODULE_7__["UpdateFormFieldComponent"], { data: this.operatorService.formFieldOptions(field) });
            if (data) {
                this.operatorService.update({
                    _id,
                    [field]: data,
                }).subscribe((result) => console.log('update result', result), (err) => console.log('update error', err));
            }
        });
    }
    add() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { data } = yield this.presentModal(_operator_add_operator_add_component__WEBPACK_IMPORTED_MODULE_8__["OperatorAddComponent"], { company: this.company });
            if (data) {
                this.operatorService.add(data).subscribe((result) => console.log('add result', result), (err) => console.log('add error', err));
            }
        });
    }
    remove(_id) {
        return this.operatorService.delete(_id);
    }
};
OperatorPage.ctorParameters = () => [
    { type: _operator_service__WEBPACK_IMPORTED_MODULE_9__["OperatorService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
OperatorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-operator',
        template: _raw_loader_operator_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_operator_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], OperatorPage);



/***/ }),

/***/ "Fl6X":
/*!***************************************************************!*\
  !*** ./src/app/modules/dashboard/operator/operator.module.ts ***!
  \***************************************************************/
/*! exports provided: OperatorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorPageModule", function() { return OperatorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _operator_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operator-routing.module */ "v/H/");
/* harmony import */ var _operator_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operator.page */ "ATrw");
/* harmony import */ var _operator_add_operator_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./operator-add/operator-add.component */ "/WHF");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "FpXt");









let OperatorPageModule = class OperatorPageModule {
};
OperatorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _operator_routing_module__WEBPACK_IMPORTED_MODULE_5__["OperatorPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        ],
        declarations: [_operator_page__WEBPACK_IMPORTED_MODULE_6__["OperatorPage"], _operator_add_operator_add_component__WEBPACK_IMPORTED_MODULE_7__["OperatorAddComponent"]],
    })
], OperatorPageModule);



/***/ }),

/***/ "NMxb":
/*!***************************************************************!*\
  !*** ./src/app/modules/dashboard/operator/operator.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcGVyYXRvci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Wt/+":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/dashboard/operator/operator-add/operator-add.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcGVyYXRvci1hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "Xnf4":
/*!****************************************************************!*\
  !*** ./src/app/modules/dashboard/operator/operator.service.ts ***!
  \****************************************************************/
/*! exports provided: OperatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorService", function() { return OperatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/data */ "hlQ1");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user/user.service */ "d6tv");





let OperatorService = class OperatorService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_3__["EntityCollectionServiceBase"] {
    constructor(serviceElementsFactory, userService) {
        super('Operator', serviceElementsFactory);
        this.userService = userService;
    }
    formFieldOptions(field) {
        return this.formFieldsOptions.get(field);
    }
    get formFieldsOptions() {
        return new Map([
            ['email', {
                    title: 'Update email',
                    subTitle: 'Email',
                    iconName: 'mail-outline',
                    inputLable: 'Input email',
                    inputType: 'email',
                    errors: new Map([
                        ['required', 'Required value'],
                        ['pattern', 'Entered wrong email'],
                    ]),
                    formControl: {
                        formState: '',
                        validatorOrOpts: {
                            updateOn: 'blur',
                            validators: [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                            ],
                            asyncValidators: [
                                this.userService.checkEmailUnique(),
                            ],
                        },
                    },
                }],
        ]);
    }
};
OperatorService.ctorParameters = () => [
    { type: _ngrx_data__WEBPACK_IMPORTED_MODULE_3__["EntityCollectionServiceElementsFactory"] },
    { type: _user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
OperatorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], OperatorService);



/***/ }),

/***/ "faI2":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/operator/operator.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Operator\n      <ng-container *ngIf=\"loading$ | async as loadiong\"> Loading..</ng-container>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button contentId=\"dashboard-content\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"8\" offset-md=\"2\">\n        <h2 class=\"ion-text-center\">{{company?.companyName}}</h2>\n\n        <ion-list>\n          <ion-list-header>\n            <ion-label>\n              <h2>Users</h2>\n            </ion-label>\n            <ion-button (click)=\"add()\">New operator</ion-button>\n          </ion-list-header>\n\n          <ng-container *ngFor=\"let operator of operators\">\n            <ion-item-sliding *ngIf=\"operator._id !== user._id\">\n              <ion-item>\n                <ion-label>\n                  <ion-row>\n\n                    <ion-col class=\"ion-no-padding\" size=\"4\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label>\n                          <h4>Login:</h4>\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col class=\"ion-no-padding\" size=\"8\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label>\n                          <ion-text color=\"primary\">\n                            <p>\n                              {{operator.login}}\n                            </p>\n                          </ion-text>\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                    <ion-col class=\"ion-no-padding\" size=\"4\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label>\n                          <h4>Email:</h4>\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col class=\"ion-no-padding\" size=\"8\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label>\n                          <ion-text color=\"primary\">\n                            <p>\n                              {{operator.email}}\n                            </p>\n                          </ion-text>\n                        </ion-label>\n                        <ion-button (click)=\"update(operator._id, 'email')\">\n                          Update\n                        </ion-button>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                    <ion-col class=\"ion-no-padding\" size=\"4\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label>\n                          <h4>Role:</h4>\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col class=\"ion-no-padding\" size=\"8\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label>\n                          <ion-text color=\"primary\">\n                            <p>\n                              {{operator.role}}\n                            </p>\n                          </ion-text>\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                    <ion-col class=\"ion-no-padding\" size=\"4\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label>\n                          <h4>Blocked:</h4>\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col class=\"ion-no-padding\" size=\"8\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label>\n                          <ion-text color=\"primary\">\n                            <p>\n                              {{!!operator.blocked}}\n                            </p>\n                          </ion-text>\n                        </ion-label>\n                        <ion-button (click)=\"blockUser(operator._id, !operator.blocked)\">\n                          {{!!operator.blocked? 'Unblock' : 'Block'}}\n                        </ion-button>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                    <ion-col class=\"ion-no-padding\" size=\"4\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label>\n                          <h4>Activated:</h4>\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col class=\"ion-no-padding\" size=\"8\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label>\n                          <ion-text color=\"primary\">\n                            <p>\n                              {{!!operator.activated}}\n                            </p>\n                          </ion-text>\n                        </ion-label>\n                        <ion-note slot=\"end\">\n                          slide to delete\n                        </ion-note>\n                      </ion-item>\n                    </ion-col>\n                    <!--   <ion-col class=\"ion-no-padding\" size=\"2\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-note slot=\"end\">\n                          slide to delete\n                        </ion-note>\n                      </ion-item>\n                    </ion-col> -->\n                  </ion-row>\n                </ion-label>\n                <!-- <ion-note slot=\"end\">\n                  slide to delete\n                </ion-note> -->\n              </ion-item>\n\n              <ion-item-options side=\"end\">\n                <ion-item-option color=\"danger\" (click)=\"presentAlert(operator._id, operator.login)\">\n                  <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                </ion-item-option>\n              </ion-item-options>\n\n            </ion-item-sliding>\n          </ng-container>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "v/H/":
/*!***********************************************************************!*\
  !*** ./src/app/modules/dashboard/operator/operator-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: OperatorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorPageRoutingModule", function() { return OperatorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _operator_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operator.page */ "ATrw");




const routes = [
    {
        path: '',
        component: _operator_page__WEBPACK_IMPORTED_MODULE_3__["OperatorPage"],
    },
];
let OperatorPageRoutingModule = class OperatorPageRoutingModule {
};
OperatorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OperatorPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=operator-operator-module.js.map