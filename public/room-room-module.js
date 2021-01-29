(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["room-room-module"],{

/***/ "2PSG":
/*!*************************************************************************!*\
  !*** ./src/app/modules/dashboard/room/room-add/room-add.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tLWFkZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "4cpM":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/room/room-add/room-add.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Add room</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">close</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"addRoomForm\" *ngIf=\"addRoomForm\" #addRoomFormDirective=\"ngForm\">\n    <ion-grid>\n      <ion-row>\n        <ion-col size-md=\"6\" offset-md=\"3\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title class=\"ion-text-center\">Add room</ion-card-title>\n              <ion-progress-bar *ngIf=\"loading$ | async\" type=\"indeterminate\" color=\"primary\"></ion-progress-bar>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-list>\n                <ion-item>\n                  <ion-icon class=\"ion-align-self-center\" name=\"business-outline\" slot=\"start\"></ion-icon>\n                  <ion-label position=\"floating\">Name</ion-label>\n                  <ion-input type=\"text\" autocomplete autocorrect formControlName=\"name\"></ion-input>\n                </ion-item>\n                <ion-text *ngIf=\"addRoomForm.get('name').touched && addRoomForm.get('name').errors\" class=\"input-error\"\n                  color=\"danger\">\n                  {{addRoomForm.get('name').errors | json}}\n                </ion-text>\n                <ion-item>\n                  <ion-icon class=\"ion-align-self-center\" name=\"cash-outline\" slot=\"start\"></ion-icon>\n                  <ion-label position=\"floating\">Price</ion-label>\n                  <ion-input autocomplete autocorrect formControlName=\"price\"></ion-input>\n                </ion-item>\n                <ion-text *ngIf=\"addRoomForm.get('price').touched && addRoomForm.get('price').errors\"\n                  class=\"input-error\" color=\"danger\">\n                  {{addRoomForm.get('price').errors | json}}\n                </ion-text>\n              </ion-list>\n            </ion-card-content>\n\n          </ion-card>\n\n          <ion-row>\n            <ion-col>\n              <ion-button expand=\"block\"\n                [disabled]=\"addRoomForm.status === 'INVALID' || addRoomForm.status === 'PENDING'\"\n                (click)=\"this.onSignup()\">\n                Signup\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>");

/***/ }),

/***/ "6vqP":
/*!********************************************************!*\
  !*** ./src/app/modules/dashboard/room/room.service.ts ***!
  \********************************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngrx_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/data */ "hlQ1");




let RoomService = class RoomService extends _ngrx_data__WEBPACK_IMPORTED_MODULE_3__["EntityCollectionServiceBase"] {
    constructor(serviceElementsFactory) {
        super('Room', serviceElementsFactory);
    }
    formFieldOptions(field) {
        return this.formFieldsOptions.get(field);
    }
    get formFieldsOptions() {
        return new Map([
            ['price', {
                    title: 'Update price',
                    subTitle: 'Price',
                    iconName: 'business-outline',
                    inputLable: 'input price',
                    inputType: 'text',
                    errors: new Map([
                        ['required', 'Required value'],
                        ['pattern', 'Entered wrong symbol'],
                    ]),
                    formControl: {
                        formState: '',
                        validatorOrOpts: {
                            updateOn: 'change',
                            validators: [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*'),
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                            ],
                        },
                    },
                }],
            ['name', {
                    title: 'Update room',
                    subTitle: 'Name',
                    iconName: 'cash-outline',
                    inputLable: 'input room name',
                    inputType: 'text',
                    errors: new Map([
                        ['required', 'Required value'],
                        ['pattern', 'Entered wrong symbol'],
                        ['minlength', 'Too short'],
                        ['maxlength', 'Too long'],
                    ]),
                    formControl: {
                        formState: '',
                        validatorOrOpts: {
                            updateOn: 'change',
                            validators: [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9а-яА-ЯіІїЇєЄ_@#$%№ \'"\\-]*$'),
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60),
                                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                            ],
                        },
                    },
                }],
        ]);
    }
};
RoomService.ctorParameters = () => [
    { type: _ngrx_data__WEBPACK_IMPORTED_MODULE_3__["EntityCollectionServiceElementsFactory"] }
];
RoomService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], RoomService);



/***/ }),

/***/ "8auw":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/room/room.module.ts ***!
  \*******************************************************/
/*! exports provided: RoomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomPageModule", function() { return RoomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _room_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room-routing.module */ "rmu4");
/* harmony import */ var _room_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room.page */ "tkrW");
/* harmony import */ var _room_add_room_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./room-add/room-add.component */ "pxra");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.module */ "FpXt");









let RoomPageModule = class RoomPageModule {
};
RoomPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _room_routing_module__WEBPACK_IMPORTED_MODULE_5__["RoomPageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        ],
        declarations: [_room_page__WEBPACK_IMPORTED_MODULE_6__["RoomPage"], _room_add_room_add_component__WEBPACK_IMPORTED_MODULE_7__["RoomAddComponent"]],
    })
], RoomPageModule);



/***/ }),

/***/ "gyPA":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/room/room.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Room\n      <ng-container *ngIf=\"loading$ | async as loadiong\"> Loading..</ng-container>\n    </ion-title>\n    <ion-buttons slot=\"end\">\n        <ion-menu-button contentId=\"dashboard-content\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"6\" offset-md=\"3\">\n        <h2 class=\"ion-text-center\">{{company?.companyName}}</h2>\n        <ion-list>\n          <ion-list-header>\n            <ion-label>\n              <h2>Rooms</h2>\n                            <ion-note slot=\"end\">\n                              slide to delete\n                            </ion-note>\n            </ion-label>\n            <ion-button (click)=\"add()\">New room</ion-button>\n          </ion-list-header>\n          <ng-container *ngFor=\"let room of rooms\">\n            <ion-item-sliding>\n              <ion-item>\n                <ion-label>\n                  <ion-row>\n                    <ion-col class=\"ion-no-padding\" size=\"4\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label>\n                          <h4>Room name:</h4>\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col class=\"ion-no-padding\" size=\"8\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label>\n                          <ion-text color=\"primary\">\n\n                              {{room.name}}\n\n                          </ion-text>\n                        </ion-label>\n                        <ion-button (click)=\"update(room._id, 'name')\">\n                          Update\n                        </ion-button>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                    <ion-col class=\"ion-no-padding\" size=\"4\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label>\n                          <h4>Price:</h4>\n                        </ion-label>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col class=\"ion-no-padding\" size=\"8\">\n                      <ion-item class=\"ion-no-padding\" lines=\"none\">\n                        <ion-label>\n                          <ion-text color=\"primary\">\n\n                              {{room.price}}\n\n                          </ion-text>\n                        </ion-label>\n                        <ion-button (click)=\"update(room._id, 'price')\">\n                          Update\n                        </ion-button>\n                      </ion-item>\n                    </ion-col>\n                  </ion-row>\n\n                </ion-label>\n                <!-- <ion-note slot=\"end\">\n                  slide to delete\n                </ion-note> -->\n              </ion-item>\n              <ion-item-options side=\"end\">\n                <ion-item-option color=\"danger\" (click)=\"presentAlert(room._id, room.name)\">\n                  <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                </ion-item-option>\n              </ion-item-options>\n\n            </ion-item-sliding>\n          </ng-container>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "pxra":
/*!***********************************************************************!*\
  !*** ./src/app/modules/dashboard/room/room-add/room-add.component.ts ***!
  \***********************************************************************/
/*! exports provided: RoomAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomAddComponent", function() { return RoomAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_room_add_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./room-add.component.html */ "4cpM");
/* harmony import */ var _room_add_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room-add.component.scss */ "2PSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_modules_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/user/user.service */ "d6tv");
/* harmony import */ var _room_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../room.service */ "6vqP");









let RoomAddComponent = class RoomAddComponent {
    constructor(modalController, userService, store, roomService) {
        this.modalController = modalController;
        this.userService = userService;
        this.store = store;
        this.roomService = roomService;
    }
    ngOnInit() {
        this.loading$ = this.roomService.loading$;
        this.addRoomForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.roomService.formFieldOptions('name').formControl.formState, this.roomService.formFieldOptions('name').formControl.validatorOrOpts, this.roomService.formFieldOptions('name').formControl.asyncValidator),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.roomService.formFieldOptions('price').formControl.formState, this.roomService.formFieldOptions('price').formControl.validatorOrOpts, this.roomService.formFieldOptions('price').formControl.asyncValidator),
        });
    }
    dismiss(data) {
        this.modalController.dismiss(data);
    }
    onSignup() {
        this.dismiss({
            name: this.addRoomForm.get('name').value,
            price: this.addRoomForm.get('price').value,
        });
        this.resetForm();
    }
    resetForm() {
        if (this.addRoomFormDirective) {
            this.addRoomFormDirective.resetForm();
        }
    }
};
RoomAddComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: src_app_modules_user_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
    { type: _room_service__WEBPACK_IMPORTED_MODULE_8__["RoomService"] }
];
RoomAddComponent.propDecorators = {
    company: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    addRoomFormDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['addRoomFormDirective', { static: false },] }]
};
RoomAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-room-add',
        template: _raw_loader_room_add_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_room_add_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RoomAddComponent);



/***/ }),

/***/ "qTHG":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/room/room.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb29tLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "rmu4":
/*!***************************************************************!*\
  !*** ./src/app/modules/dashboard/room/room-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: RoomPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomPageRoutingModule", function() { return RoomPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _room_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room.page */ "tkrW");




const routes = [
    {
        path: '',
        component: _room_page__WEBPACK_IMPORTED_MODULE_3__["RoomPage"]
    }
];
let RoomPageRoutingModule = class RoomPageRoutingModule {
};
RoomPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RoomPageRoutingModule);



/***/ }),

/***/ "tkrW":
/*!*****************************************************!*\
  !*** ./src/app/modules/dashboard/room/room.page.ts ***!
  \*****************************************************/
/*! exports provided: RoomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomPage", function() { return RoomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_room_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./room.page.html */ "gyPA");
/* harmony import */ var _room_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./room.page.scss */ "qTHG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _room_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room.service */ "6vqP");
/* harmony import */ var _store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/reducers/user.reducer */ "mgGq");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _room_add_room_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./room-add/room-add.component */ "pxra");
/* harmony import */ var _shared_update_form_field_update_form_field_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/update-form-field/update-form-field.component */ "vtsq");










let RoomPage = class RoomPage {
    constructor(roomService, store, modalController, alertController) {
        this.roomService = roomService;
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
                this.roomService.getAll();
            }
        });
        this.store.select(_store_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_6__["getUser"])
            .subscribe((user) => {
            if (user) {
                this.user = user;
            }
        });
        this.loading$ = this.roomService.loading$;
        this.roomService.entities$
            .subscribe((rooms) => this.rooms = rooms);
    }
    presentAlert(_id, name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // cssClass: 'my-custom-class',
                header: 'Delete',
                subHeader: 'room: ' + name,
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
    update(_id, field) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { data } = yield this.presentModal(_shared_update_form_field_update_form_field_component__WEBPACK_IMPORTED_MODULE_9__["UpdateFormFieldComponent"], { data: this.roomService.formFieldOptions(field) });
            if (data) {
                this.roomService.update({
                    _id,
                    [field]: data,
                }).subscribe((result) => console.log('update result', result), (err) => console.log('update error', err));
            }
        });
    }
    add() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { data } = yield this.presentModal(_room_add_room_add_component__WEBPACK_IMPORTED_MODULE_8__["RoomAddComponent"], { company: this.company });
            if (data) {
                this.roomService.add(data).subscribe((result) => console.log('add result', result), (err) => console.log('add error', err));
            }
        });
    }
    remove(_id) {
        return this.roomService.delete(_id);
    }
};
RoomPage.ctorParameters = () => [
    { type: _room_service__WEBPACK_IMPORTED_MODULE_5__["RoomService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
];
RoomPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-room',
        template: _raw_loader_room_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_room_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RoomPage);



/***/ })

}]);
//# sourceMappingURL=room-room-module.js.map