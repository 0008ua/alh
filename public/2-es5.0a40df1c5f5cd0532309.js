!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{LOB2:function(o,n,a){"use strict";a.r(n),a.d(n,"BookingFormPageModule",function(){return ne});var i=a("ofXK"),r=a("3Pt+"),b=a("TEn/"),c=a("tyNb"),l=a("mrSG"),s=a("z6cu"),m=a("eIep"),d=a("PQ5l"),u=a("IjAw"),g=a("gXqy"),p=a("mgGq"),y=a("fXoL"),h=a("mrZj"),f=a("l7P3"),M=a("sYmb"),v=a("VURf"),k=a("1UXS"),N=["bookingFormDirective"];function F(e,t){if(1&e&&(y.Lb(0),y.Nb(1,"ion-item",4),y.Nb(2,"ion-label"),y.Nb(3,"p"),y.nc(4),y.Yb(5,"translate"),y.Mb(),y.Mb(),y.Nb(6,"ion-text",29),y.nc(7),y.Mb(),y.Mb(),y.Nb(8,"ion-item",4),y.Nb(9,"ion-label"),y.Nb(10,"p"),y.nc(11),y.Yb(12,"translate"),y.Mb(),y.Mb(),y.Nb(13,"ion-text",29),y.nc(14),y.Mb(),y.Mb(),y.Nb(15,"ion-item",4),y.Nb(16,"ion-label"),y.Nb(17,"p"),y.nc(18),y.Yb(19,"translate"),y.Mb(),y.Mb(),y.Nb(20,"ion-text",30),y.nc(21),y.Yb(22,"translate"),y.Mb(),y.Mb(),y.Nb(23,"ion-item",4),y.Nb(24,"ion-label"),y.Nb(25,"p"),y.nc(26),y.Yb(27,"translate"),y.Mb(),y.Mb(),y.Nb(28,"ion-text",29),y.nc(29),y.Mb(),y.Mb(),y.Nb(30,"ion-item",4),y.Nb(31,"ion-label"),y.Nb(32,"p"),y.nc(33),y.Yb(34,"translate"),y.Mb(),y.Mb(),y.Nb(35,"ion-text",29),y.nc(36),y.Mb(),y.Mb(),y.Nb(37,"ion-item",4),y.Nb(38,"ion-label"),y.Nb(39,"p"),y.nc(40),y.Yb(41,"translate"),y.Mb(),y.Mb(),y.Nb(42,"ion-text",29),y.nc(43),y.Mb(),y.Mb(),y.Kb()),2&e){var o=y.Xb();y.yb(4),y.oc(y.Zb(5,13,"modules.shedule.bookingForm.pricePerNight")),y.yb(3),y.oc(null==o.calculatedData?null:o.calculatedData.pricePerNight),y.yb(4),y.oc(y.Zb(12,15,"modules.shedule.bookingForm.reservedNights")),y.yb(3),y.oc(null==o.calculatedData?null:o.calculatedData.days),y.yb(4),y.oc(y.Zb(19,17,"modules.shedule.bookingForm.bookingStep")),y.yb(2),y.dc("ngClass","status-color_"+(null==o.calculatedData?null:o.calculatedData.bookingStep)),y.yb(1),y.pc(" ",y.Zb(22,19,"common.bookingSteps."+(null==o.calculatedData?null:o.calculatedData.bookingStep)),""),y.yb(5),y.oc(y.Zb(27,21,"modules.shedule.bookingForm.bookingPrice")),y.yb(3),y.oc(null==o.calculatedData?null:o.calculatedData.bookingPrice),y.yb(4),y.oc(y.Zb(34,23,"modules.shedule.bookingForm.discount")),y.yb(3),y.oc(null==o.bookingForm?null:o.bookingForm.get("discount").value),y.yb(4),y.oc(y.Zb(41,25,"modules.shedule.bookingForm.totalPaid")),y.yb(3),y.oc(null==o.calculatedData?null:o.calculatedData.totalPaid)}}function Y(e,t){if(1&e&&y.Jb(0,"ion-datetime",31),2&e){var o=y.Xb();y.ec("monthNames",o.monthNames),y.dc("value",o.bookingForm.get("dates").get("from").value)}}function D(e,t){if(1&e&&(y.Jb(0,"ion-datetime",32),y.Yb(1,"date")),2&e){var o=y.Xb();y.ec("monthNames",o.monthNames),y.dc("value",o.availableTo?y.ac(1,2,o.availableTo,"dd MMMM yyyy"):0)}}function P(e,t){1&e&&y.Jb(0,"ion-spinner",33)}function x(e,t){if(1&e&&y.Jb(0,"ion-datetime",34),2&e){var o=y.Xb();y.ec("monthNames",o.monthNames),y.dc("min",o.fromPlusOneDay)("max",o.availableTo)}}function C(e,t){if(1&e&&(y.Nb(0,"ion-text",36),y.nc(1),y.Yb(2,"translate"),y.Mb()),2&e){var o=t.$implicit;y.yb(1),y.pc(" ",y.Zb(2,1,"errors."+o)," ")}}function S(e,t){if(1&e&&(y.Lb(0),y.mc(1,C,3,3,"ion-text",35),y.Yb(2,"errorExtractor"),y.Kb()),2&e){var o=y.Xb();y.yb(1),y.dc("ngForOf",y.Zb(2,1,o.bookingForm.get("dates").get("to").errors))}}function I(e,t){if(1&e&&(y.Nb(0,"ion-text",36),y.nc(1),y.Yb(2,"translate"),y.Mb()),2&e){var o=t.$implicit;y.yb(1),y.pc(" ",y.Zb(2,1,"errors."+o)," ")}}function O(e,t){if(1&e&&(y.Lb(0),y.mc(1,I,3,3,"ion-text",35),y.Yb(2,"errorExtractor"),y.Kb()),2&e){var o=y.Xb();y.yb(1),y.dc("ngForOf",y.Zb(2,1,o.bookingForm.get("guestName").errors))}}function Z(e,t){if(1&e&&(y.Nb(0,"ion-text",36),y.nc(1),y.Yb(2,"translate"),y.Mb()),2&e){var o=t.$implicit;y.yb(1),y.pc(" ",y.Zb(2,1,"errors."+o)," ")}}function w(e,t){if(1&e&&(y.Lb(0),y.mc(1,Z,3,3,"ion-text",35),y.Yb(2,"errorExtractor"),y.Kb()),2&e){var o=y.Xb();y.yb(1),y.dc("ngForOf",y.Zb(2,1,o.bookingForm.get("guestPhone").errors))}}function A(e,t){if(1&e&&(y.Nb(0,"ion-text",36),y.nc(1),y.Yb(2,"translate"),y.Mb()),2&e){var o=t.$implicit;y.yb(1),y.pc(" ",y.Zb(2,1,"errors."+o)," ")}}function X(e,t){if(1&e&&(y.Lb(0),y.mc(1,A,3,3,"ion-text",35),y.Yb(2,"errorExtractor"),y.Kb()),2&e){var o=y.Xb();y.yb(1),y.dc("ngForOf",y.Zb(2,1,o.bookingForm.get("guestEmail").errors))}}function T(e,t){if(1&e&&(y.Nb(0,"ion-text",36),y.nc(1),y.Yb(2,"translate"),y.Mb()),2&e){var o=t.$implicit;y.yb(1),y.pc(" ",y.Zb(2,1,"errors."+o)," ")}}function j(e,t){if(1&e&&(y.Lb(0),y.mc(1,T,3,3,"ion-text",35),y.Yb(2,"errorExtractor"),y.Kb()),2&e){var o=y.Xb();y.yb(1),y.dc("ngForOf",y.Zb(2,1,o.bookingForm.get("discount").errors))}}function L(e,t){if(1&e){var o=y.Ob();y.Nb(0,"ion-button",37),y.Vb("click",function(){y.jc(o);var e=y.Xb();return e.addPaymentsArrayControlToBegin(),e.editPayments(0)}),y.nc(1),y.Yb(2,"translate"),y.Mb()}2&e&&(y.yb(1),y.pc(" ",y.Zb(2,1,"elements.button.add"),""))}function E(e,t){if(1&e){var o=y.Ob();y.Nb(0,"ion-button",38),y.Vb("click",function(){return y.jc(o),y.Xb().editPayments(null)}),y.nc(1,"Ok"),y.Mb()}if(2&e){var n=y.Xb();y.dc("disabled","INVALID"===n.bookingForm.get("payments").status)}}function J(e,t){if(1&e){var o=y.Ob();y.Nb(0,"ion-item-sliding"),y.Nb(1,"ion-item"),y.Nb(2,"ion-label"),y.Nb(3,"h2"),y.nc(4),y.Yb(5,"translate"),y.Nb(6,"ion-text",41),y.nc(7),y.Mb(),y.Mb(),y.Nb(8,"p"),y.nc(9),y.Yb(10,"translate"),y.Nb(11,"ion-text",41),y.nc(12),y.Yb(13,"date"),y.Mb(),y.Mb(),y.Nb(14,"p"),y.nc(15),y.Yb(16,"translate"),y.Nb(17,"ion-text",41),y.nc(18),y.Mb(),y.Mb(),y.Mb(),y.Nb(19,"ion-note",42),y.nc(20),y.Yb(21,"translate"),y.Mb(),y.Mb(),y.Nb(22,"ion-item-options",43),y.Nb(23,"ion-item-option",37),y.Vb("click",function(){y.jc(o);var e=y.Xb().index;return y.Xb().editPayments(e)}),y.Jb(24,"ion-icon",44),y.Mb(),y.Mb(),y.Nb(25,"ion-item-options",45),y.Nb(26,"ion-item-option",46),y.Vb("click",function(){y.jc(o);var e=y.Xb().index;return y.Xb().removeArrayControl("payments",e)}),y.Jb(27,"ion-icon",47),y.Mb(),y.Mb(),y.Mb()}if(2&e){var n=y.Xb().index,a=y.Xb();y.yb(4),y.pc("",y.Zb(5,7,"dif.amount"),": "),y.yb(3),y.pc(" ",a.getPaymentsArrayControlAt(n).get("amount").value," "),y.yb(2),y.pc("",y.Zb(10,9,"dif.date")," "),y.yb(3),y.pc(" ",y.ac(13,11,a.getPaymentsArrayControlAt(n).get("date").value,"dd MMM"),""),y.yb(3),y.pc("",y.Zb(16,14,"common.paymentMethods.title")," "),y.yb(3),y.pc(" ",a.getPaymentsArrayControlAt(n).get("paymentMethod").value,""),y.yb(2),y.pc(" ",y.Zb(21,16,"elements.button.slideForOptions")," ")}}function V(e,t){if(1&e&&y.Jb(0,"ion-datetime",52),2&e){var o=y.Xb(3);y.ec("monthNames",o.monthNames)}}function _(e,t){if(1&e&&(y.Nb(0,"ion-text",36),y.nc(1),y.Yb(2,"translate"),y.Mb()),2&e){var o=t.$implicit;y.yb(1),y.pc(" ",y.Zb(2,1,"errors."+o)," ")}}function B(e,t){if(1&e&&(y.Lb(0),y.mc(1,_,3,3,"ion-text",35),y.Yb(2,"errorExtractor"),y.Kb()),2&e){var o=y.Xb(2).index,n=y.Xb();y.yb(1),y.dc("ngForOf",y.Zb(2,1,n.getPaymentsArrayControlAt(o).get("amount").errors))}}function G(e,t){if(1&e&&(y.Nb(0,"ion-select-option",53),y.Nb(1,"span"),y.nc(2),y.Yb(3,"translate"),y.Mb(),y.Mb()),2&e){var o=t.$implicit;y.dc("value",o),y.yb(2),y.oc(y.Zb(3,2,"common.paymentMethods."+o))}}function $(e,t){if(1&e&&(y.Nb(0,"ion-text",36),y.nc(1),y.Yb(2,"translate"),y.Mb()),2&e){var o=t.$implicit;y.yb(1),y.pc(" ",y.Zb(2,1,"errors."+o)," ")}}function q(e,t){if(1&e&&(y.Lb(0),y.mc(1,$,3,3,"ion-text",35),y.Yb(2,"errorExtractor"),y.Kb()),2&e){var o=y.Xb(2).index,n=y.Xb();y.yb(1),y.dc("ngForOf",y.Zb(2,1,n.getPaymentsArrayControlAt(o).get("paymentMethod").errors))}}function K(e,t){if(1&e&&(y.Nb(0,"ion-list"),y.Nb(1,"ion-item"),y.Nb(2,"ion-label",11),y.nc(3),y.Yb(4,"translate"),y.Mb(),y.mc(5,V,1,1,"ion-datetime",48),y.Mb(),y.Nb(6,"ion-item"),y.Nb(7,"ion-label",18),y.nc(8),y.Yb(9,"translate"),y.Mb(),y.Jb(10,"ion-input",49),y.Mb(),y.mc(11,B,3,3,"ng-container",8),y.Nb(12,"ion-item"),y.Nb(13,"ion-label",11),y.nc(14),y.Yb(15,"translate"),y.Mb(),y.Nb(16,"ion-select",50),y.mc(17,G,4,4,"ion-select-option",51),y.Mb(),y.Mb(),y.mc(18,q,3,3,"ng-container",8),y.Mb()),2&e){var o=y.Xb().index,n=y.Xb();y.yb(3),y.pc("",y.Zb(4,7,"elements.datePicker.chooseDate")," "),y.yb(2),y.dc("ngIf",n.updated),y.yb(3),y.oc(y.Zb(9,9,"dif.amount")),y.yb(3),y.dc("ngIf",n.getPaymentsArrayControlAt(o).get("amount").dirty&&n.getPaymentsArrayControlAt(o).get("amount").errors),y.yb(3),y.pc("",y.Zb(15,11,"common.paymentMethods.title")," "),y.yb(3),y.dc("ngForOf",n.paymentMethods),y.yb(1),y.dc("ngIf",n.getPaymentsArrayControlAt(o).get("paymentMethod").dirty&&n.getPaymentsArrayControlAt(o).get("paymentMethod").errors)}}function R(e,t){if(1&e&&(y.Lb(0,39),y.Lb(1,40),y.mc(2,J,28,18,"ion-item-sliding",8),y.mc(3,K,19,13,"ion-list",8),y.Kb(),y.Kb()),2&e){var o=t.index,n=y.Xb();y.yb(1),y.dc("formGroupName",o),y.yb(1),y.dc("ngIf",null===n.editPayment||n.editPayment!==o),y.yb(1),y.dc("ngIf",n.editPayment===o)}}var z,U,Q,W=function(){return{component:"BookingFormPage",item:"btnCancelReservation"}},H=[{path:"",component:(z=function(){function o(t,n,a,i,r,b,c){e(this,o),this.route=t,this.sheduleService=n,this.navController=a,this.router=i,this.alertController=r,this.store=b,this.translate=c,this.calculatedData={},this.isCancelled=!1,this.updated=!0,this.bookingSteps=d.b,this.paymentMethods=d.c,this.editPayment=null,this.availableTo=null}var n,a,i;return n=o,(a=[{key:"ngOnInit",value:function(){var e=this;this.bookingForm=new r.e({_id:new r.c("",{updateOn:"change"}),guestName:new r.c("Guest",{updateOn:"change",validators:[r.o.pattern("^[a-zA-Z0-9\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404_@#$%\u2116'\"\\-]+$"),r.o.minLength(2),r.o.maxLength(40),r.o.required]}),guestPhone:new r.c("380500000000",{updateOn:"change",validators:[r.o.required,r.o.pattern("^((\\+[0-9]{3})|[0-9]{3}|0)[0-9]{9}$"),r.o.minLength(9),r.o.maxLength(13)]}),guestEmail:new r.c("",{updateOn:"change",validators:[r.o.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]}),discount:new r.c(0,{updateOn:"change",validators:[r.o.required,r.o.pattern("[0-9]*"),r.o.max(this.calculatedData.bookingPrice?this.calculatedData.bookingPrice:null)]}),dates:new r.e({from:new r.c(0,{updateOn:"change",validators:[r.o.required]}),to:new r.c(0,{updateOn:"change",validators:[r.o.required]})}),payments:new r.a([])}),this.route.paramMap.pipe(Object(m.a)(function(t){return t.get("bookingId")?(e.mode="edit",e.sheduleService.getBookingById(t.get("bookingId")).pipe(Object(m.a)(function(t){return e.isCancelled="cancelled"===t.bookingStep,e.booking=e.sheduleService.convertBookingDatesIsoToShort(t),e.booking.payments.forEach(function(t){return e.addPaymentsArrayControl()}),e.bookingForm.patchValue(e.booking),e.sheduleService.getRoomById(t.room_id)}))):t.get("roomId")?(e.mode="new",e.date=t.get("date"),e.sheduleService.getRoomById(t.get("roomId"))):Object(s.a)("error parameter")}),Object(m.a)(function(t){return e.room=t,"edit"===e.mode?e.sheduleService.getAvailableDateTo(e.booking.room_id,e.booking.dates.to):"new"===e.mode?(e.fromPlusOneDay=e.sheduleService.convertDateToShort(u.a(e.sheduleService.convertShortToDate(e.date),{days:1})),e.bookingForm.get("dates").get("from").setValue(e.date),e.bookingForm.get("dates").get("to").setValue(e.fromPlusOneDay),e.sheduleService.getAvailableDateTo(e.room._id,e.date)):Object(s.a)("error get room")}),Object(m.a)(function(t){return e.availableTo=t?e.sheduleService.convertISOToShort(t):e.sheduleService.convertDateToShort(u.a(new Date,{days:30})),e.calcData(),e.bookingForm.valueChanges})).subscribe(function(t){return e.calcData()},function(e){return console.log("error",e)}),this.store.select(p.b).subscribe(function(t){e.user=t}),this.translate.stream("elements.datePicker.monthNames").subscribe(function(t){e.updated=!1,e.monthNames=t,setTimeout(function(){return e.updated=!0},1)})}},{key:"ionViewWillEnter",value:function(){var e=this;this.updated=!1,setTimeout(function(){return e.updated=!0},1)}},{key:"calcData",value:function(){var e;this.calculatedData.days=g.a(this.sheduleService.convertShortToDate(this.bookingForm.get("dates").get("to").value),this.sheduleService.convertShortToDate(this.bookingForm.get("dates").get("from").value)),this.calculatedData.bookingPrice=(null===(e=this.booking)||void 0===e?void 0:e.price)?this.booking.price:this.room.price*this.calculatedData.days,this.calculatedData.pricePerNight=this.calculatedData.bookingPrice/this.calculatedData.days;var t=0;this.bookingForm.get("payments").controls.forEach(function(e){t+=e.get("amount").value}),this.calculatedData.totalPaid=t,this.calculatedData.balance=this.calculatedData.totalPaid-this.calculatedData.bookingPrice+ +this.bookingForm.get("discount").value,this.calculatedData.bookingStep=this.isCancelled?"cancelled":this.calculatedData.balance>=0?"paid":this.calculatedData.totalPaid>0?"reserved":"preorder"}},{key:"presentAlert",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var t,o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:"Cancel reservation",subHeader:"Reservation will be cancelled and dessapears from shedule",message:"Are you shure?",buttons:[{text:"Cancel",role:"cancel",handler:function(e){}},{text:"Ok",handler:function(){o.isCancelled=!0,o.calcData(),o.onFormSubmit()}}]});case 2:return t=e.sent,e.next=5,t.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"getPaymentsArrayControlAt",value:function(e){return this.bookingForm.get("payments").at(e)}},{key:"addPaymentsArrayControl",value:function(){this.bookingForm.get("payments").push(new r.e(Object.assign({},this.paymentsFormGroup)))}},{key:"addPaymentsArrayControlToBegin",value:function(){var e=this.bookingForm.get("payments");e.push(new r.e(this.paymentsFormGroup));for(var t=Object.assign({},e.at(e.controls.length-1).value),o=e.controls.length-1;o>0;o--)e.at(o).setValue(Object.assign({},e.at(o-1).value));e.at(0).setValue(t)}},{key:"editPayments",value:function(e){this.editPayment=e}},{key:"initControl",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return new r.c(e,t)}},{key:"addControl",value:function(e,t){this.bookingForm.addControl(e,this.initControl(t.formState,t.options))}},{key:"addArrayControl",value:function(e,t){this.bookingForm.get(e).push(this.initControl(t.formState,t.options))}},{key:"removeArrayControl",value:function(e,t){this.bookingForm.get(e).removeAt(t)}},{key:"onFormCancel",value:function(){this.resetForm(),this.navController.back()}},{key:"onFormSubmit",value:function(){var e=this,t=Object.assign(Object.assign({},this.bookingForm.value),{room_id:this.room._id,price:this.calculatedData.bookingPrice,bookingStep:this.calculatedData.bookingStep});t=this.sheduleService.convertBookingDatesIsoToShort(t),this.sheduleService.upsertBooking(t).subscribe(function(t){e.resetForm(),e.navController.back()},function(e){return console.log("error",e.error)})}},{key:"resetForm",value:function(){this.bookingFormDirective&&(this.bookingForm.get("payments").clear(),this.bookingFormDirective.resetForm())}},{key:"paymentsFormGroup",get:function(){return{_id:new r.c("",{updateOn:"change"}),date:new r.c(this.sheduleService.convertDateToShort(new Date),{updateOn:"change",validators:[r.o.required]}),amount:new r.c(200,{updateOn:"change",validators:[r.o.required,r.o.pattern("[0-9]*")]}),paymentMethod:new r.c("cash",{updateOn:"change",validators:[r.o.required,r.o.pattern("^card|cash$")]})}}}])&&t(n.prototype,a),i&&t(n,i),o}(),z.\u0275fac=function(e){return new(e||z)(y.Ib(c.a),y.Ib(h.a),y.Ib(b.Y),y.Ib(c.g),y.Ib(b.a),y.Ib(f.i),y.Ib(M.d))},z.\u0275cmp=y.Cb({type:z,selectors:[["app-booking-form"]],viewQuery:function(e,t){var o;1&e&&y.rc(N,!0),2&e&&y.hc(o=y.Wb())&&(t.bookingFormDirective=o.first)},decls:93,vars:59,consts:[["slot","start"],[3,"formGroup"],["bookingFormDirective","ngForm"],["size-md","6","offset-md","3"],["lines","none"],["slot","start","color","primary"],["summary",""],["slot","end",3,"color"],[4,"ngIf"],["lines","none",1,"date-label"],[1,"date-label__item"],["position","stacked","color","primary"],["pickerFormat","DD-MMMM-YYYY","displayFormat","DD MMMM YYYY","placeholder","Select end date","disabled","",3,"value","monthNames",4,"ngIf"],["pickerFormat","DD-MMMM-YYYY","displayFormat","DD MMMM YYYY","disabled","",3,"value","monthNames",4,"ngIf"],["name","dots",4,"ngIf"],["formGroupName","dates",1,"date-label__item"],["pickerFormat","DD-MMMM-YYYY","displayFormat","DD MMMM YYYY","placeholder","Select end date","formControlName","to",3,"min","max","monthNames",4,"ngIf"],["fill","outline","color","danger",3,"appPermissionDisabled","click"],["position","floating","color","primary"],["type","text","autocomplete","","autocorrect","","formControlName","guestName"],["type","text","autocomplete","","autocorrect","","formControlName","guestPhone"],["type","email","autocomplete","","autocorrect","","formControlName","guestEmail"],["type","text","autocomplete","","autocorrect","","formControlName","discount"],[3,"click",4,"ngIf"],[3,"disabled","click",4,"ngIf"],["formArrayName","payments",4,"ngFor","ngForOf"],["size","8"],["expand","block","fill","outline",3,"click"],["expand","block",3,"appPermissionDisabled","disabled","click"],["slot","end","color","primary"],["slot","end",3,"ngClass"],["pickerFormat","DD-MMMM-YYYY","displayFormat","DD MMMM YYYY","placeholder","Select end date","disabled","",3,"value","monthNames"],["pickerFormat","DD-MMMM-YYYY","displayFormat","DD MMMM YYYY","disabled","",3,"value","monthNames"],["name","dots"],["pickerFormat","DD-MMMM-YYYY","displayFormat","DD MMMM YYYY","placeholder","Select end date","formControlName","to",3,"min","max","monthNames"],["class","input-error","color","danger",4,"ngFor","ngForOf"],["color","danger",1,"input-error"],[3,"click"],[3,"disabled","click"],["formArrayName","payments"],[3,"formGroupName"],["color","secondary"],["slot","end"],["side","start"],["slot","icon-only","name","pencil-outline"],["side","end"],["color","danger",3,"click"],["slot","icon-only","name","trash"],["pickerFormat","DD-MMMM-YYYY","displayFormat","DD MMMM YYYY","placeholder","Select Month","formControlName","date",3,"monthNames",4,"ngIf"],["type","text","autocomplete","","autocorrect","","formControlName","amount"],["placeholder","Select One","interface","popover","formControlName","paymentMethod"],[3,"value",4,"ngFor","ngForOf"],["pickerFormat","DD-MMMM-YYYY","displayFormat","DD MMMM YYYY","placeholder","Select Month","formControlName","date",3,"monthNames"],[3,"value"]],template:function(e,t){if(1&e&&(y.Nb(0,"ion-header"),y.Nb(1,"ion-toolbar"),y.Nb(2,"ion-buttons",0),y.Jb(3,"ion-back-button"),y.Mb(),y.Nb(4,"ion-title"),y.nc(5),y.Yb(6,"translate"),y.Mb(),y.Mb(),y.Mb(),y.Nb(7,"ion-content"),y.Nb(8,"form",1,2),y.Nb(10,"ion-grid"),y.Nb(11,"ion-row"),y.Nb(12,"ion-col",3),y.Nb(13,"ion-item",4),y.Nb(14,"ion-label"),y.Nb(15,"h2"),y.nc(16),y.Mb(),y.Mb(),y.Mb(),y.Nb(17,"ion-item-group"),y.Nb(18,"ion-item-divider",4),y.Jb(19,"ion-toggle",5,6),y.Nb(21,"ion-label",4),y.Nb(22,"h3"),y.nc(23),y.Yb(24,"translate"),y.Mb(),y.Mb(),y.Nb(25,"ion-text",7),y.nc(26),y.Mb(),y.Mb(),y.mc(27,F,44,27,"ng-container",8),y.Mb(),y.Nb(28,"ion-list",9),y.Nb(29,"ion-item",10),y.Nb(30,"ion-label",11),y.nc(31),y.Yb(32,"translate"),y.Mb(),y.mc(33,Y,1,2,"ion-datetime",12),y.Mb(),y.Nb(34,"ion-item",10),y.Nb(35,"ion-label",11),y.nc(36),y.Yb(37,"translate"),y.Mb(),y.mc(38,D,2,5,"ion-datetime",13),y.mc(39,P,1,0,"ion-spinner",14),y.Mb(),y.Mb(),y.Nb(40,"ion-list",9),y.Nb(41,"ion-item",15),y.Nb(42,"ion-label",11),y.nc(43),y.Yb(44,"translate"),y.Mb(),y.mc(45,x,1,3,"ion-datetime",16),y.mc(46,S,3,3,"ng-container",8),y.Mb(),y.Nb(47,"ion-item",10),y.Nb(48,"ion-label"),y.Nb(49,"ion-button",17),y.Vb("click",function(){return t.presentAlert()}),y.nc(50),y.Yb(51,"translate"),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Nb(52,"ion-list"),y.Nb(53,"ion-item"),y.Nb(54,"ion-label",18),y.nc(55),y.Yb(56,"translate"),y.Mb(),y.Jb(57,"ion-input",19),y.Mb(),y.mc(58,O,3,3,"ng-container",8),y.Nb(59,"ion-item"),y.Nb(60,"ion-label",18),y.nc(61),y.Yb(62,"translate"),y.Mb(),y.Jb(63,"ion-input",20),y.Mb(),y.mc(64,w,3,3,"ng-container",8),y.Nb(65,"ion-item"),y.Nb(66,"ion-label",18),y.nc(67),y.Yb(68,"translate"),y.Mb(),y.Jb(69,"ion-input",21),y.Mb(),y.mc(70,X,3,3,"ng-container",8),y.Nb(71,"ion-item"),y.Nb(72,"ion-label",18),y.nc(73),y.Yb(74,"translate"),y.Mb(),y.Jb(75,"ion-input",22),y.Mb(),y.mc(76,j,3,3,"ng-container",8),y.Mb(),y.Nb(77,"ion-list",4),y.Nb(78,"ion-list-header"),y.Nb(79,"ion-label"),y.nc(80),y.Yb(81,"translate"),y.Mb(),y.mc(82,L,3,3,"ion-button",23),y.mc(83,E,2,1,"ion-button",24),y.Mb(),y.mc(84,R,4,3,"ng-container",25),y.Mb(),y.Nb(85,"ion-row"),y.Nb(86,"ion-col",26),y.Nb(87,"ion-button",27),y.Vb("click",function(){return t.onFormCancel()}),y.nc(88," Cancel "),y.Mb(),y.Mb(),y.Nb(89,"ion-col"),y.Nb(90,"ion-button",28),y.Vb("click",function(){return t.onFormSubmit()}),y.nc(91),y.Yb(92,"translate"),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb()),2&e){var o=y.ic(20);y.yb(5),y.oc(y.Zb(6,33,"modules.shedule.bookingForm.title")),y.yb(3),y.dc("formGroup",t.bookingForm),y.yb(8),y.oc(null==t.room?null:t.room.name),y.yb(7),y.oc(y.Zb(24,35,"modules.shedule.bookingForm.balance")),y.yb(2),y.dc("color",(null==t.calculatedData?null:t.calculatedData.balance)>=0?"success":"danger"),y.yb(1),y.pc(" ",null==t.calculatedData?null:t.calculatedData.balance,""),y.yb(1),y.dc("ngIf",o.checked),y.yb(4),y.pc(" ",y.Zb(32,37,"modules.shedule.bookingForm.from")," "),y.yb(2),y.dc("ngIf",t.updated),y.yb(3),y.pc(" ",y.Zb(37,39,"modules.shedule.bookingForm.availableTo")," "),y.yb(2),y.dc("ngIf",t.updated&&t.availableTo),y.yb(1),y.dc("ngIf",!(t.updated&&t.availableTo)),y.yb(4),y.pc(" ",y.Zb(44,41,"modules.shedule.bookingForm.to")," "),y.yb(2),y.dc("ngIf",t.updated),y.yb(1),y.dc("ngIf",t.bookingForm.get("dates").get("to").dirty&&t.bookingForm.get("dates").get("to").errors),y.yb(3),y.dc("appPermissionDisabled",y.fc(57,W)),y.yb(1),y.pc(" ",y.Zb(51,43,"modules.shedule.bookingForm.cancelReservation")," "),y.yb(5),y.pc(" ",y.Zb(56,45,"modules.shedule.bookingForm.guestName")," "),y.yb(3),y.dc("ngIf",t.bookingForm.get("guestName").dirty&&t.bookingForm.get("guestName").errors),y.yb(3),y.pc(" ",y.Zb(62,47,"modules.shedule.bookingForm.guestPhone")," "),y.yb(3),y.dc("ngIf",t.bookingForm.get("guestPhone").dirty&&t.bookingForm.get("guestPhone").errors),y.yb(3),y.pc(" ",y.Zb(68,49,"modules.shedule.bookingForm.guestEmail")," "),y.yb(3),y.dc("ngIf",t.bookingForm.get("guestEmail").dirty&&t.bookingForm.get("guestEmail").errors),y.yb(3),y.pc(" ",y.Zb(74,51,"modules.shedule.bookingForm.discount")," "),y.yb(3),y.dc("ngIf",t.bookingForm.get("discount").dirty&&t.bookingForm.get("discount").errors),y.yb(4),y.oc(y.Zb(81,53,"modules.shedule.bookingForm.payments")),y.yb(2),y.dc("ngIf",null===t.editPayment),y.yb(1),y.dc("ngIf",null!==t.editPayment),y.yb(1),y.dc("ngForOf",t.bookingForm.get("payments").controls),y.yb(6),y.dc("appPermissionDisabled",y.fc(58,W))("disabled","INVALID"===t.bookingForm.status||t.isCancelled||t.user.blocked),y.yb(1),y.qc(" ",y.Zb(92,55,"elements.button.submit")," ",t.bookingForm.errors," ")}},directives:[b.q,b.T,b.g,b.d,b.e,b.R,b.n,r.p,r.l,r.f,b.p,b.J,b.m,b.t,b.z,b.v,b.u,b.S,b.b,b.Q,i.n,b.A,r.g,b.f,v.a,b.s,b.db,r.k,r.d,b.B,i.m,i.l,b.o,b.cb,b.M,r.b,b.y,b.F,b.x,b.w,b.r,b.K,b.L],pipes:[M.c,i.e,k.a],styles:[""]}),z)}],ee=((U=function t(){e(this,t)}).\u0275mod=y.Gb({type:U}),U.\u0275inj=y.Fb({factory:function(e){return new(e||U)},imports:[[c.k.forChild(H)],c.k]}),U),te=a("FUS3"),oe=a("iTUp"),ne=((Q=function t(){e(this,t)}).\u0275mod=y.Gb({type:Q}),Q.\u0275inj=y.Fb({factory:function(e){return new(e||Q)},imports:[[i.c,r.n,b.U,ee,M.b.forChild({extend:!0}),te.a,oe.a]]}),Q)}}])}();