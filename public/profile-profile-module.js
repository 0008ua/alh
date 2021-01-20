(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "+YUB":
/*!********************************************************!*\
  !*** ./src/app/modules/user/profile/profile.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "/MlX":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/user/profile/update-activation/update-activation.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtYWN0aXZhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "3w87":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/user/profile/update-activation/update-activation.component.ts ***!
  \***************************************************************************************/
/*! exports provided: UpdateActivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateActivationComponent", function() { return UpdateActivationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_update_activation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./update-activation.component.html */ "jlIR");
/* harmony import */ var _update_activation_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-activation.component.scss */ "/MlX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_modules_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/user/user.service */ "d6tv");







let UpdateActivationComponent = class UpdateActivationComponent {
    // @Input() email: any;
    constructor(modalController, userService) {
        this.modalController = modalController;
        this.userService = userService;
    }
    ngOnInit() {
        this.activateEmailCodeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
                updateOn: 'change',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[0-9]{2,10}$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ],
            }),
        });
        // this.formSubmitSubject$
        //     .pipe(
        //         tap(() => this.activateEmailCodeForm.markAsDirty()),
        //         switchMap(() =>
        //           this.activateEmailCodeForm.statusChanges.pipe(
        //               startWith(this.activateEmailCodeForm.status),
        //               filter((status) => status !== 'PENDING'),
        //               take(1),
        //           ),
        //         ),
        //         filter((status) => status === 'VALID'),
        //     )
        //     .subscribe((validationSuccessful) => this.onUpdate());
    }
    dismiss(data) {
        console.log('code data', data);
        this.modalController.dismiss(data);
    }
    activate() {
        this.dismiss({ code: this.activateEmailCodeForm.get('code').value });
        this.resetForm();
    }
    resetForm() {
        if (this.activateEmailCodeFormDirective) {
            this.activateEmailCodeFormDirective.resetForm();
        }
    }
};
UpdateActivationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_modules_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
UpdateActivationComponent.propDecorators = {
    activateEmailCodeFormDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['activateEmailCodeFormDirective', { static: false },] }]
};
UpdateActivationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-update-activation',
        template: _raw_loader_update_activation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_update_activation_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UpdateActivationComponent);



/***/ }),

/***/ "8qGB":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/user/profile/update-email/update-email.component.ts ***!
  \*****************************************************************************/
/*! exports provided: UpdateEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEmailComponent", function() { return UpdateEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_update_email_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./update-email.component.html */ "mORd");
/* harmony import */ var _update_email_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-email.component.scss */ "UuHK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_modules_user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/user/user.service */ "d6tv");









let UpdateEmailComponent = class UpdateEmailComponent {
    constructor(modalController, userService) {
        this.modalController = modalController;
        this.userService = userService;
        this.formSubmitSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    ngOnInit() {
        this.updateEmailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: this.userService.emailFormControl(''),
        });
        this.formSubmitSubject$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => this.updateEmailForm.markAsDirty()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(() => this.updateEmailForm.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this.updateEmailForm.status), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((status) => status !== 'PENDING'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((status) => status === 'VALID'))
            .subscribe((validationSuccessful) => this.onUpdate());
    }
    dismiss(data) {
        console.log('data form', data);
        this.modalController.dismiss(data);
    }
    onUpdate() {
        this.dismiss({ email: this.updateEmailForm.get('email').value });
        this.resetForm();
    }
    resetForm() {
        if (this.updateEmailFormDirective) {
            this.updateEmailFormDirective.resetForm();
        }
    }
};
UpdateEmailComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_modules_user_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] }
];
UpdateEmailComponent.propDecorators = {
    updateEmailFormDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['updateEmailFormDirective', { static: false },] }],
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
UpdateEmailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-update-email',
        template: _raw_loader_update_email_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_update_email_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UpdateEmailComponent);



/***/ }),

/***/ "GMam":
/*!********************************************************!*\
  !*** ./src/app/modules/user/profile/profile.module.ts ***!
  \********************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "bIba");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "fzmW");
/* harmony import */ var _update_email_update_email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./update-email/update-email.component */ "8qGB");
/* harmony import */ var _update_activation_update_activation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-activation/update-activation.component */ "3w87");









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
        ],
        declarations: [
            _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"],
            _update_email_update_email_component__WEBPACK_IMPORTED_MODULE_7__["UpdateEmailComponent"],
            _update_activation_update_activation_component__WEBPACK_IMPORTED_MODULE_8__["UpdateActivationComponent"],
        ],
    })
], ProfilePageModule);



/***/ }),

/***/ "GQ1d":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/profile/profile.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Profile</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button contentId=\"main-content\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"6\" offset-md=\"3\">\n        <h2 class=\"ion-text-center\">Profile</h2>\n        <ion-list>\n          <ion-row>\n            <ion-col class=\"ion-no-padding\" size=\"4\">\n              <ion-item class=\"ion-no-padding\" lines=\"none\">\n                <ion-label>\n                  <h4>Login:</h4>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\" size=\"8\">\n              <ion-item class=\"ion-no-padding\" lines=\"none\">\n                <ion-label>\n                  <ion-text color=\"primary\">\n                    <p>\n                      {{user.login}}\n                    </p>\n                  </ion-text>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class=\"ion-no-padding\" size=\"4\">\n              <ion-item class=\"ion-no-padding\" lines=\"none\">\n                <ion-label>\n                  <h4>Email:</h4>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\" size=\"8\">\n              <ion-item class=\"ion-no-padding\" lines=\"none\">\n                <ion-label>\n                  <ion-text color=\"primary\">\n                    <p>\n                      {{user.email}}\n                    </p>\n                  </ion-text>\n                </ion-label>\n                <ion-button (click)=\"updateEmail()\">\n                  Update email\n                </ion-button>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class=\"ion-no-padding\" size=\"4\">\n              <ion-item class=\"ion-no-padding\" lines=\"none\">\n                <ion-label>\n                  <h4>Role:</h4>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\" size=\"8\">\n              <ion-item class=\"ion-no-padding\" lines=\"none\">\n                <ion-label>\n                  <ion-text color=\"primary\">\n                    <p>\n                      {{user.role}}\n                    </p>\n                  </ion-text>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class=\"ion-no-padding\" size=\"4\">\n              <ion-item class=\"ion-no-padding\" lines=\"none\">\n                <ion-label>\n                  <h4>Blocked:</h4>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\" size=\"8\">\n              <ion-item class=\"ion-no-padding\" lines=\"none\">\n                <ion-label>\n                  <ion-text color=\"primary\">\n                    <p>\n                      {{!!user.blocked}}\n                    </p>\n                  </ion-text>\n                </ion-label>\n\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class=\"ion-no-padding\" size=\"4\">\n              <ion-item class=\"ion-no-padding\" lines=\"none\">\n                <ion-label>\n                  <h4>Activated:</h4>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col class=\"ion-no-padding\" size=\"8\">\n              <ion-item class=\"ion-no-padding\" lines=\"none\">\n                <ion-label>\n                  <ion-text color=\"primary\">\n                    <p>\n                      {{!!user.activated}}\n                    </p>\n                  </ion-text>\n                </ion-label>\n                <ion-button *ngIf=\"!user.activated\" (click)=\"activate()\">\n                  Activate\n                </ion-button>\n                <!-- <ion-input color=\"primary\" [placeholder]=\"user.activated\">\n                                    </ion-input>\n                                    <ion-button slot=\"end\" (click)=\"add()\">\n                                      <ion-icon slot=\"icon-only\" name=\"pencil-outline\"></ion-icon>\n                                    </ion-button> -->\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n\n\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>");

/***/ }),

/***/ "UuHK":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/user/profile/update-email/update-email.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtZW1haWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "bIba":
/*!****************************************************************!*\
  !*** ./src/app/modules/user/profile/profile-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "fzmW");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "fzmW":
/*!******************************************************!*\
  !*** ./src/app/modules/user/profile/profile.page.ts ***!
  \******************************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.page.html */ "GQ1d");
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.page.scss */ "+YUB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/store/actions/user.actions */ "mYIz");
/* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../store/reducers/user.reducer */ "mgGq");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../user.service */ "d6tv");
/* harmony import */ var _update_activation_update_activation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./update-activation/update-activation.component */ "3w87");
/* harmony import */ var _update_email_update_email_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./update-email/update-email.component */ "8qGB");













let ProfilePage = class ProfilePage {
    constructor(store, modalController, userService) {
        this.store = store;
        this.modalController = modalController;
        this.userService = userService;
        this.user = null;
    }
    ngOnInit() {
        this.store.select(_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_9__["getUser"])
            .subscribe((user) => {
            this.user = user;
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
    activate() {
        this.userService.sendActivationCode(this.user._id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(err)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((_) => {
            console.log('sendActivationCode', _);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["from"])(this.presentModal(_update_activation_update_activation_component__WEBPACK_IMPORTED_MODULE_11__["UpdateActivationComponent"]));
        }))
            .subscribe((res) => {
            console.log('data s', res.data);
            this.store.dispatch(new src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_8__["ActivateUser"]({
                _id: this.user._id,
                code: res.data.code,
            }));
        }, (err) => console.log('err activate', err));
    }
    updateEmail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { data } = yield this.presentModal(_update_email_update_email_component__WEBPACK_IMPORTED_MODULE_12__["UpdateEmailComponent"]);
            if (data) {
                console.log('data', data);
                this.store.dispatch(new src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_8__["UpdateUser"]({
                    _id: this.user._id,
                    email: data.email,
                }));
                // this.userService.updateUser({
                //   _id: this.user._id,
                //   email: data.email,
                // }).subscribe(
                //     (result) => console.log('update result', result),
                //     (err) => console.log('update error', err),
                // );
            }
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfilePage);



/***/ }),

/***/ "jlIR":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/profile/update-activation/update-activation.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Activate email</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss(null)\">close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"activateEmailCodeForm\" *ngIf=\"activateEmailCodeForm\" #activateEmailCodeFormDirective=\"ngForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-md=\"6\" offset-md=\"3\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title class=\"ion-text-center\">Activate email</ion-card-title>\n              <ion-card-subtitle class=\"ion-text-center\">Please enter activation code from email</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item lines=\"none\">\n                  <ion-icon class=\"ion-align-self-center\" name=\"mail-outline\" slot=\"start\"></ion-icon>\n                  <ion-label position=\"floating\">Code</ion-label>\n                  <ion-input type=\"number\" autocomplete autocorrect formControlName=\"code\"></ion-input>\n                </ion-item>\n                <ion-text *ngIf=\"activateEmailCodeForm.get('code').touched && activateEmailCodeForm.get('code').errors\"\n                  class=\"input-error\" color=\"danger\">\n                  {{activateEmailCodeForm.get('code').errors | json}}\n                </ion-text>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n          <ion-row>\n            <ion-col size=\"8\">\n              <ion-button expand=\"block\"\n                [disabled]=\"activateEmailCodeForm.status === 'INVALID' || activateEmailCodeForm.status === 'PENDING'\"\n                (click)=\"activate()\">\n                Activate\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-button expand=\"block\" (click)=\"dismiss(null)\">\n                Cancel\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "mORd":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/profile/update-email/update-email.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Update Email</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"updateEmailForm\" *ngIf=\"updateEmailForm\" #updateEmailFormDirective=\"ngForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-md=\"6\" offset-md=\"3\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title class=\"ion-text-center\">Update email</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item lines=\"none\">\n                  <ion-icon class=\"ion-align-self-center\" name=\"mail-outline\" slot=\"start\"></ion-icon>\n                  <ion-label position=\"floating\">Email</ion-label>\n                  <ion-input type=\"email\" autocomplete autocorrect formControlName=\"email\"></ion-input>\n                </ion-item>\n                <ion-text *ngIf=\"updateEmailForm.get('email').touched && updateEmailForm.get('email').errors\"\n                  class=\"input-error\" color=\"danger\">\n                  {{updateEmailForm.get('email').errors | json}}\n                </ion-text>\n              </ion-list>\n            </ion-card-content>\n          </ion-card>\n          <ion-row>\n            <ion-col size=\"8\">\n              <ion-button expand=\"block\"\n                [disabled]=\"updateEmailForm.status === 'INVALID' || updateEmailForm.status === 'PENDING'\"\n                (click)=\"formSubmitSubject$.next()\">\n                Update\n              </ion-button>\n            </ion-col>\n            <ion-col size=\"4\">\n              <ion-button expand=\"block\" (click)=\"dismiss(null)\">\n                Cancel\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map