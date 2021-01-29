(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-form-login-form-module"],{

/***/ "Am/h":
/*!************************************************************!*\
  !*** ./src/app/modules/user/login-form/login-form.page.ts ***!
  \************************************************************/
/*! exports provided: LoginFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormPage", function() { return LoginFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login-form.page.html */ "uTkd");
/* harmony import */ var _login_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-form.page.scss */ "ggkE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/store/actions/user.actions */ "mYIz");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user.service */ "d6tv");









let LoginFormPage = class LoginFormPage {
    constructor(userService, router, store) {
        this.userService = userService;
        this.router = router;
        this.store = store;
        this.inputType = 'password';
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
                updateOn: 'change',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_\\-]{2,60}$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(60),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
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
        });
    }
    switchInputType() {
        if (this.inputType === 'password') {
            this.inputType = 'text';
        }
        else {
            this.inputType = 'password';
        }
    }
    onLogin() {
        const user = {
            login: this.loginForm.get('login').value,
            password: this.loginForm.get('password').value,
        };
        this.store.dispatch(new src_app_store_actions_user_actions__WEBPACK_IMPORTED_MODULE_7__["Login"]({ user }));
        this.resetForm();
        // this.userService.login(user)
        //     .subscribe(
        //         (_) => this.resetForm(),
        //         (err) => console.log('login Error', err),
        //     );
    }
    resetForm() {
        if (this.loginFormDirective) {
            this.loginFormDirective.resetForm();
        }
    }
};
LoginFormPage.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
];
LoginFormPage.propDecorators = {
    loginFormDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['loginFormDirective', { static: false },] }]
};
LoginFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login-form',
        template: _raw_loader_login_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginFormPage);



/***/ }),

/***/ "Hl+6":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/login-form/signup-form/signup-form.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Signup</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"signupForm\" *ngIf=\"signupForm\" #signupFormDirective=\"ngForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-md=\"6\" offset-md=\"3\">\n          <ion-card>\n            <ion-card-header>\n                        <div>\n                          <img class=\"logo_login\" src=\"/assets/shapes.svg\">\n\n                        </div>\n              <ion-card-title class=\"ion-text-center\">Signup</ion-card-title>\n              <ion-card-subtitle class=\"ion-text-center\">\n                <a button color=\"primary\" routerLink=\"/user/login\">or Login</a>\n              </ion-card-subtitle>\n            </ion-card-header>\n\n            <ion-card-content>\n              <ion-list>\n                <ion-item>\n                  <ion-icon class=\"ion-align-self-center\" name=\"podium-outline\" slot=\"start\"></ion-icon>\n                  <ion-label position=\"floating\">Company name</ion-label>\n                  <ion-input type=\"text\" autocomplete autocorrect formControlName=\"companyName\"></ion-input>\n                </ion-item>\n                <ion-text\n                  *ngIf=\"signupForm.get('companyName').touched && signupForm.get('companyName').errors && !signupForm.get('companyName').errors['unique']\"\n                  class=\"input-error\" color=\"danger\">\n                  {{signupForm.get('companyName').errors | json}}\n                </ion-text>\n                <ion-item>\n                  <ion-icon class=\"ion-align-self-center\" name=\"person-outline\" slot=\"start\"></ion-icon>\n                  <ion-label position=\"floating\">Login</ion-label>\n                  <ion-input type=\"text\" autocomplete autocorrect formControlName=\"login\"></ion-input>\n                </ion-item>\n                <ion-text *ngIf=\"signupForm.get('login').touched && signupForm.get('login').errors\" class=\"input-error\"\n                  color=\"danger\">\n                  {{signupForm.get('login').errors | json}}\n                </ion-text>\n                <ion-item>\n                  <ion-icon class=\"ion-align-self-center\" name=\"mail-outline\" slot=\"start\"></ion-icon>\n                  <ion-label position=\"floating\">Email</ion-label>\n                  <ion-input type=\"email\" autocomplete autocorrect formControlName=\"email\"></ion-input>\n                </ion-item>\n                <ion-text *ngIf=\"signupForm.get('email').touched && signupForm.get('email').errors\" class=\"input-error\"\n                  color=\"danger\">\n                  {{signupForm.get('email').errors | json}}\n                </ion-text>\n                <ion-item lines=\"none\">\n                  <ion-icon class=\"ion-align-self-center\" name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\n                  <ion-label position=\"floating\">Password</ion-label>\n                  <ion-input [type]=\"inputType\" autocomplete autocorrect formControlName=\"password\"></ion-input>\n                  <ion-icon class=\"ion-align-self-center\"\n                    [name]=\"inputType === 'password' ? 'eye-outline' : 'eye-off-outline'\" slot=\"end\"\n                    (click)=switchInputType()></ion-icon>\n                </ion-item>\n                <ion-text *ngIf=\"signupForm.get('password').touched && signupForm.get('password').errors\"\n                  class=\"input-error\" color=\"danger\">\n                  {{signupForm.get('password').errors | json}}\n                </ion-text>\n                <ion-item lines=\"none\">\n                  <ion-icon class=\"ion-align-self-center\" name=\"reorder-two-outline\" slot=\"start\"></ion-icon>\n\n                  <ion-label position=\"floating\">Password Confirm</ion-label>\n                  <ion-input [type]=\"inputType\" autocomplete autocorrect formControlName=\"passwordConfirm\"></ion-input>\n                  <ion-icon\n                    *ngIf=\"signupForm.get('passwordConfirm').status === 'VALID'\"\n                    class=\"ion-align-self-center\" [name]=\"'checkmark-done-outline'\" color=\"primary\" slot=\"end\">\n                  </ion-icon>\n                </ion-item>\n                <ion-text *ngIf=\"signupForm.get('passwordConfirm').touched && signupForm.get('passwordConfirm').errors\"\n                  class=\"input-error\" color=\"danger\">\n                  {{signupForm.get('passwordConfirm').errors | json}}\n                </ion-text>\n              </ion-list>\n            </ion-card-content>\n\n          </ion-card>\n\n          <ion-row>\n            <ion-col>\n              <ion-button expand=\"block\" [disabled]=\"signupForm.status === 'INVALID' || signupForm.status === 'PENDING'\"\n                (click)=\"formSubmitSubject$.next()\">\n                Signup\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "M/w1":
/*!**************************************************************!*\
  !*** ./src/app/modules/user/login-form/login-form.module.ts ***!
  \**************************************************************/
/*! exports provided: LoginFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormPageModule", function() { return LoginFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-form-routing.module */ "vHdN");
/* harmony import */ var _login_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-form.page */ "Am/h");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "MQ9t");








let LoginFormPageModule = class LoginFormPageModule {
};
LoginFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_form_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginFormPageRoutingModule"],
        ],
        declarations: [_login_form_page__WEBPACK_IMPORTED_MODULE_6__["LoginFormPage"], _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_7__["SignupFormComponent"]],
    })
], LoginFormPageModule);



/***/ }),

/***/ "MQ9t":
/*!******************************************************************************!*\
  !*** ./src/app/modules/user/login-form/signup-form/signup-form.component.ts ***!
  \******************************************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_signup_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./signup-form.component.html */ "Hl+6");
/* harmony import */ var _signup_form_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup-form.component.scss */ "uQNZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../user.service */ "d6tv");









let SignupFormComponent = class SignupFormComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.inputType = 'password';
        this.formSubmitSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
    }
    ngOnInit() {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9 _\\-]{2,60}$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(60),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ],
                asyncValidators: [
                    this.userService.checkCompanyNameUnique(),
                ],
            }),
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
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
                updateOn: 'blur',
                validators: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ],
                asyncValidators: [
                    this.userService.checkEmailUnique(),
                ],
            }),
        }, this.userService.matchPassword);
        // prevent form submit before async validator completes
        this.formSubmitSubject$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => this.signupForm.markAsDirty()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(() => this.signupForm.statusChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this.signupForm.status), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((status) => status !== 'PENDING'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])((status) => status === 'VALID'))
            .subscribe((validationSuccessful) => this.onSignup());
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
        this.userService.createCompany({
            companyName: this.signupForm.get('companyName').value,
            user: {
                login: this.signupForm.get('login').value,
                password: this.signupForm.get('password').value,
                email: this.signupForm.get('email').value,
            },
        }).subscribe((_) => this.resetForm(), (err) => console.log('signup Error', err.error));
    }
    resetForm() {
        if (this.signupFormDirective) {
            this.signupFormDirective.resetForm();
        }
    }
};
SignupFormComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SignupFormComponent.propDecorators = {
    signupFormDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['signupFormDirective', { static: false },] }]
};
SignupFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-signup-form',
        template: _raw_loader_signup_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_signup_form_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignupFormComponent);



/***/ }),

/***/ "Snpq":
/*!***********************************************!*\
  !*** ./src/app/modules/user/no-auth.guard.ts ***!
  \***********************************************/
/*! exports provided: NoAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function() { return NoAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "d6tv");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let NoAuthGuard = class NoAuthGuard {
    constructor(userService, router, store) {
        this.userService = userService;
        this.router = router;
        this.store = store;
    }
    canActivate(route, state) {
        return this.store.select('user').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((storeState) => {
            if (storeState.user) {
                this.router.navigateByUrl('/');
                return false;
            }
            return true;
        }));
    }
};
NoAuthGuard.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
NoAuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], NoAuthGuard);



/***/ }),

/***/ "ggkE":
/*!**************************************************************!*\
  !*** ./src/app/modules/user/login-form/login-form.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo_login {\n  width: 100%;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4tZm9ybS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFBSiIsImZpbGUiOiJsb2dpbi1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAmX2xvZ2luIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ "uQNZ":
/*!********************************************************************************!*\
  !*** ./src/app/modules/user/login-form/signup-form/signup-form.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".logo_login {\n  width: 100%;\n  margin: auto;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNpZ251cC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQUoiLCJmaWxlIjoic2lnbnVwLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nbyB7XHJcbiAgJl9sb2dpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufSJdfQ== */");

/***/ }),

/***/ "uTkd":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/user/login-form/login-form.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"loginForm\" #loginFormDirective=\"ngForm\">\n    <ion-grid>\n      <ion-row>\n\n        <ion-col size-md=\"6\" offset-md=\"3\">\n          <ion-card>\n            <ion-card-header>\n              <div>\n              <img class=\"logo_login\" src=\"/assets/shapes.svg\">\n\n              </div>\n              <ion-card-title class=\"ion-text-center\">Login</ion-card-title>\n              <ion-card-subtitle class=\"ion-text-center\">\n                <a button color=\"primary\" routerLink=\"/user/login/signup\">or Signup</a>\n              </ion-card-subtitle>\n            </ion-card-header>\n\n            <ion-card-content>\n              <ion-list>\n                <ion-item>\n                  <ion-icon class=\"ion-align-self-center\" name=\"person-outline\" slot=\"start\"></ion-icon>\n                  <ion-label position=\"floating\">Login</ion-label>\n                  <ion-input type=\"text\" autocomplete autocorrect formControlName=\"login\"></ion-input>\n                </ion-item>\n                <ion-text *ngIf=\"loginForm.get('login').touched && loginForm.get('login').errors\" class=\"input-error\"\n                  color=\"danger\">\n                  {{loginForm.get('login').errors | json}}\n                </ion-text>\n                <ion-item lines=\"none\">\n                  <ion-icon class=\"ion-align-self-center\" name=\"lock-closed-outline\" slot=\"start\"></ion-icon>\n                  <ion-label position=\"floating\">Password</ion-label>\n                  <ion-input [type]=\"inputType\" autocomplete autocorrect formControlName=\"password\"></ion-input>\n                  <ion-icon class=\"ion-align-self-center\"\n                    [name]=\"inputType === 'password' ? 'eye-outline' : 'eye-off-outline'\" slot=\"end\"\n                    (click)=switchInputType()></ion-icon>\n                </ion-item>\n                <ion-text *ngIf=\"loginForm.get('password').touched && loginForm.get('password').errors\"\n                  class=\"input-error\" color=\"danger\">\n                  {{loginForm.get('password').errors | json}}\n                </ion-text>\n\n              </ion-list>\n            </ion-card-content>\n\n          </ion-card>\n          <ion-row>\n            <ion-col>\n              <ion-button expand=\"block\" [disabled]=\"loginForm.status === 'INVALID'\" (click)=\"onLogin()\">\n                Login\n              </ion-button>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "vHdN":
/*!**********************************************************************!*\
  !*** ./src/app/modules/user/login-form/login-form-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: LoginFormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormPageRoutingModule", function() { return LoginFormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form.page */ "Am/h");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "MQ9t");
/* harmony import */ var _no_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../no-auth.guard */ "Snpq");






const routes = [
    {
        path: '',
        component: _login_form_page__WEBPACK_IMPORTED_MODULE_3__["LoginFormPage"],
        canActivate: [_no_auth_guard__WEBPACK_IMPORTED_MODULE_5__["NoAuthGuard"]],
    },
    {
        path: 'signup',
        component: _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_4__["SignupFormComponent"],
        canActivate: [_no_auth_guard__WEBPACK_IMPORTED_MODULE_5__["NoAuthGuard"]],
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    },
];
let LoginFormPageRoutingModule = class LoginFormPageRoutingModule {
};
LoginFormPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginFormPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=login-form-login-form-module.js.map