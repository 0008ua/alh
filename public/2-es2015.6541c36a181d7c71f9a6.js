(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{LOB2:function(e,t,o){"use strict";o.r(t),o.d(t,"BookingFormPageModule",function(){return V});var n=o("ofXK"),a=o("3Pt+"),i=o("TEn/"),b=o("tyNb"),r=o("mrSG"),l=o("z6cu"),c=o("eIep"),s=o("PQ5l"),m=o("IjAw"),d=o("gXqy"),u=o("mgGq"),g=o("fXoL"),h=o("mrZj"),p=o("l7P3"),M=o("sYmb");const y=["bookingFormDirective"];function N(e,t){if(1&e&&(g.Lb(0),g.Nb(1,"ion-item",4),g.Nb(2,"ion-label"),g.Nb(3,"p"),g.nc(4),g.Yb(5,"translate"),g.Mb(),g.Mb(),g.Nb(6,"ion-text",29),g.nc(7),g.Mb(),g.Mb(),g.Nb(8,"ion-item",4),g.Nb(9,"ion-label"),g.Nb(10,"p"),g.nc(11),g.Yb(12,"translate"),g.Mb(),g.Mb(),g.Nb(13,"ion-text",29),g.nc(14),g.Mb(),g.Mb(),g.Nb(15,"ion-item",4),g.Nb(16,"ion-label"),g.Nb(17,"p"),g.nc(18),g.Yb(19,"translate"),g.Mb(),g.Mb(),g.Nb(20,"ion-text",30),g.nc(21),g.Yb(22,"translate"),g.Mb(),g.Mb(),g.Nb(23,"ion-item",4),g.Nb(24,"ion-label"),g.Nb(25,"p"),g.nc(26),g.Yb(27,"translate"),g.Mb(),g.Mb(),g.Nb(28,"ion-text",29),g.nc(29),g.Mb(),g.Mb(),g.Nb(30,"ion-item",4),g.Nb(31,"ion-label"),g.Nb(32,"p"),g.nc(33),g.Yb(34,"translate"),g.Mb(),g.Mb(),g.Nb(35,"ion-text",29),g.nc(36),g.Mb(),g.Mb(),g.Nb(37,"ion-item",4),g.Nb(38,"ion-label"),g.Nb(39,"p"),g.nc(40),g.Yb(41,"translate"),g.Mb(),g.Mb(),g.Nb(42,"ion-text",29),g.nc(43),g.Mb(),g.Mb(),g.Kb()),2&e){const e=g.Xb();g.yb(4),g.oc(g.Zb(5,13,"modules.shedule.bookingForm.pricePerNight")),g.yb(3),g.oc(null==e.room?null:e.room.price),g.yb(4),g.oc(g.Zb(12,15,"modules.shedule.bookingForm.reservedNights")),g.yb(3),g.oc(null==e.calculatedData?null:e.calculatedData.days),g.yb(4),g.oc(g.Zb(19,17,"modules.shedule.bookingForm.bookingStep")),g.yb(2),g.dc("ngClass","status-color_"+(null==e.calculatedData?null:e.calculatedData.bookingStep)),g.yb(1),g.pc(" ",g.Zb(22,19,"common.bookingSteps."+(null==e.calculatedData?null:e.calculatedData.bookingStep)),""),g.yb(5),g.oc(g.Zb(27,21,"modules.shedule.bookingForm.bookingPrice")),g.yb(3),g.oc(null==e.calculatedData?null:e.calculatedData.bookingPrice),g.yb(4),g.oc(g.Zb(34,23,"modules.shedule.bookingForm.discount")),g.yb(3),g.oc(null==e.bookingForm?null:e.bookingForm.get("discount").value),g.yb(4),g.oc(g.Zb(41,25,"modules.shedule.bookingForm.totalPaid")),g.yb(3),g.oc(null==e.calculatedData?null:e.calculatedData.totalPaid)}}function f(e,t){if(1&e&&g.Jb(0,"ion-datetime",31),2&e){const e=g.Xb();g.ec("monthNames",e.monthNames),g.dc("value",e.bookingForm.get("dates").get("from").value)}}function k(e,t){if(1&e&&(g.Jb(0,"ion-datetime",32),g.Yb(1,"date")),2&e){const e=g.Xb();g.ec("monthNames",e.monthNames),g.dc("value",e.availableTo?g.ac(1,2,e.availableTo,"dd MMMM yyyy"):"No limits")}}function Y(e,t){if(1&e&&g.Jb(0,"ion-datetime",33),2&e){const e=g.Xb();g.ec("monthNames",e.monthNames),g.dc("min",e.fromPlusOneDay)("max",e.availableTo)}}function F(e,t){if(1&e&&(g.Nb(0,"ion-text",34),g.nc(1),g.Yb(2,"json"),g.Mb()),2&e){const e=g.Xb();g.yb(1),g.pc(" ",g.Zb(2,1,e.bookingForm.get("dates").get("to").errors)," ")}}function v(e,t){if(1&e){const e=g.Ob();g.Nb(0,"ion-item",10),g.Nb(1,"ion-label"),g.Nb(2,"ion-button",35),g.Vb("click",function(){return g.jc(e),g.Xb().presentAlert()}),g.nc(3),g.Yb(4,"translate"),g.Mb(),g.Mb(),g.Mb()}2&e&&(g.yb(3),g.pc(" ",g.Zb(4,1,"modules.shedule.bookingForm.cancelReservation")," "))}function D(e,t){if(1&e&&(g.Nb(0,"ion-text",34),g.nc(1),g.Yb(2,"json"),g.Mb()),2&e){const e=g.Xb();g.yb(1),g.pc(" ",g.Zb(2,1,e.bookingForm.get("guestName").errors)," ")}}function C(e,t){if(1&e&&(g.Nb(0,"ion-text",34),g.nc(1),g.Yb(2,"json"),g.Mb()),2&e){const e=g.Xb();g.yb(1),g.pc(" ",g.Zb(2,1,e.bookingForm.get("guestPhone").errors)," ")}}function P(e,t){if(1&e&&(g.Nb(0,"ion-text",34),g.nc(1),g.Yb(2,"json"),g.Mb()),2&e){const e=g.Xb();g.yb(1),g.pc(" ",g.Zb(2,1,e.bookingForm.get("guestEmail").errors)," ")}}function I(e,t){if(1&e&&(g.Nb(0,"ion-text",34),g.nc(1),g.Yb(2,"json"),g.Mb()),2&e){const e=g.Xb();g.yb(1),g.pc(" ",g.Zb(2,1,e.bookingForm.get("discount").errors)," ")}}function S(e,t){if(1&e){const e=g.Ob();g.Nb(0,"ion-button",36),g.Vb("click",function(){g.jc(e);const t=g.Xb();return t.addPaymentsArrayControlToBegin(),t.editPayments(0)}),g.nc(1),g.Yb(2,"translate"),g.Mb()}2&e&&(g.yb(1),g.pc(" ",g.Zb(2,1,"elements.button.add"),""))}function x(e,t){if(1&e){const e=g.Ob();g.Nb(0,"ion-button",37),g.Vb("click",function(){return g.jc(e),g.Xb().editPayments(null)}),g.nc(1,"Ok"),g.Mb()}if(2&e){const e=g.Xb();g.dc("disabled","INVALID"===e.bookingForm.get("payments").status)}}function O(e,t){if(1&e){const e=g.Ob();g.Nb(0,"ion-item-sliding"),g.Nb(1,"ion-item"),g.Nb(2,"ion-label"),g.Nb(3,"h2"),g.nc(4),g.Yb(5,"translate"),g.Nb(6,"ion-text",40),g.nc(7),g.Mb(),g.Mb(),g.Nb(8,"p"),g.nc(9),g.Yb(10,"translate"),g.Nb(11,"ion-text",40),g.nc(12),g.Yb(13,"date"),g.Mb(),g.Mb(),g.Nb(14,"p"),g.nc(15),g.Yb(16,"translate"),g.Nb(17,"ion-text",40),g.nc(18),g.Mb(),g.Mb(),g.Mb(),g.Nb(19,"ion-note",41),g.nc(20),g.Yb(21,"translate"),g.Mb(),g.Mb(),g.Nb(22,"ion-item-options",42),g.Nb(23,"ion-item-option",36),g.Vb("click",function(){g.jc(e);const t=g.Xb().index;return g.Xb().editPayments(t)}),g.Jb(24,"ion-icon",43),g.Mb(),g.Mb(),g.Nb(25,"ion-item-options",44),g.Nb(26,"ion-item-option",45),g.Vb("click",function(){g.jc(e);const t=g.Xb().index;return g.Xb().removeArrayControl("payments",t)}),g.Jb(27,"ion-icon",46),g.Mb(),g.Mb(),g.Mb()}if(2&e){const e=g.Xb().index,t=g.Xb();g.yb(4),g.pc("",g.Zb(5,7,"dif.amount"),": "),g.yb(3),g.pc(" ",t.getPaymentsArrayControlAt(e).get("amount").value," "),g.yb(2),g.pc("",g.Zb(10,9,"dif.date")," "),g.yb(3),g.pc(" ",g.ac(13,11,t.getPaymentsArrayControlAt(e).get("date").value,"dd MMM"),""),g.yb(3),g.pc("",g.Zb(16,14,"common.paymentMethods.title")," "),g.yb(3),g.pc(" ",t.getPaymentsArrayControlAt(e).get("paymentMethod").value,""),g.yb(2),g.pc(" ",g.Zb(21,16,"elements.button.slideForOptions")," ")}}function w(e,t){if(1&e&&g.Jb(0,"ion-datetime",51),2&e){const e=g.Xb(3);g.ec("monthNames",e.monthNames)}}function Z(e,t){if(1&e&&(g.Nb(0,"ion-text",34),g.nc(1),g.Yb(2,"json"),g.Mb()),2&e){const e=g.Xb(2).index,t=g.Xb();g.yb(1),g.pc(" ",g.Zb(2,1,t.getPaymentsArrayControlAt(e).get("amount").errors)," ")}}function A(e,t){if(1&e&&(g.Nb(0,"ion-select-option",52),g.Nb(1,"span"),g.nc(2),g.Yb(3,"translate"),g.Mb(),g.Mb()),2&e){const e=t.$implicit;g.dc("value",e),g.yb(2),g.oc(g.Zb(3,2,"common.paymentMethods."+e))}}function X(e,t){if(1&e&&(g.Nb(0,"ion-text",34),g.nc(1),g.Yb(2,"json"),g.Mb()),2&e){const e=g.Xb(2).index,t=g.Xb();g.yb(1),g.pc("",g.Zb(2,1,t.getPaymentsArrayControlAt(e).get("paymentMethod").errors)," ")}}function j(e,t){if(1&e&&(g.Nb(0,"ion-list"),g.Nb(1,"ion-item"),g.Nb(2,"ion-label",11),g.nc(3),g.Yb(4,"translate"),g.Mb(),g.mc(5,w,1,1,"ion-datetime",47),g.Mb(),g.Nb(6,"ion-item"),g.Nb(7,"ion-label",18),g.nc(8),g.Yb(9,"translate"),g.Mb(),g.Jb(10,"ion-input",48),g.Mb(),g.mc(11,Z,3,3,"ion-text",16),g.Nb(12,"ion-item"),g.Nb(13,"ion-label",11),g.nc(14),g.Yb(15,"translate"),g.Mb(),g.Nb(16,"ion-select",49),g.mc(17,A,4,4,"ion-select-option",50),g.Mb(),g.Mb(),g.mc(18,X,3,3,"ion-text",16),g.Mb()),2&e){const e=g.Xb().index,t=g.Xb();g.yb(3),g.pc("",g.Zb(4,7,"elements.datePicker.chooseDate")," "),g.yb(2),g.dc("ngIf",t.updated),g.yb(3),g.oc(g.Zb(9,9,"dif.amount")),g.yb(3),g.dc("ngIf",t.getPaymentsArrayControlAt(e).get("amount").errors),g.yb(3),g.pc("",g.Zb(15,11,"common.paymentMethods.title")," "),g.yb(3),g.dc("ngForOf",t.paymentMethods),g.yb(1),g.dc("ngIf",t.getPaymentsArrayControlAt(e).get("paymentMethod").errors)}}function T(e,t){if(1&e&&(g.Lb(0,38),g.Lb(1,39),g.mc(2,O,28,18,"ion-item-sliding",8),g.mc(3,j,19,13,"ion-list",8),g.Kb(),g.Kb()),2&e){const e=t.index,o=g.Xb();g.yb(1),g.dc("formGroupName",e),g.yb(1),g.dc("ngIf",null===o.editPayment||o.editPayment!==e),g.yb(1),g.dc("ngIf",o.editPayment===e)}}const J=[{path:"",component:(()=>{class e{constructor(e,t,o,n,a,i,b){this.route=e,this.sheduleService=t,this.navController=o,this.router=n,this.alertController=a,this.store=i,this.translate=b,this.calculatedData={},this.isCancelled=!1,this.updated=!0,this.bookingSteps=s.b,this.paymentMethods=s.c,this.editPayment=null,this.availableTo=null}ngOnInit(){this.bookingForm=new a.e({_id:new a.c("",{updateOn:"change"}),guestName:new a.c("Guest",{updateOn:"change",validators:[a.o.pattern("^[a-zA-Z0-9\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0454\u0404_@#$%\u2116'\"\\-]{2,40}$"),a.o.minLength(2),a.o.maxLength(40),a.o.required]}),guestPhone:new a.c("380500000000",{updateOn:"change",validators:[a.o.required,a.o.pattern("^((\\+[0-9]{3})|[0-9]{3}|0)[0-9]{9}$"),a.o.minLength(9),a.o.maxLength(13)]}),guestEmail:new a.c("",{updateOn:"change",validators:[a.o.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]}),discount:new a.c(0,{updateOn:"change",validators:[a.o.required,a.o.pattern("[0-9]*"),a.o.max(this.calculatedData.bookingPrice?this.calculatedData.bookingPrice:null)]}),dates:new a.e({from:new a.c(0,{updateOn:"change",validators:[a.o.required]}),to:new a.c(0,{updateOn:"change",validators:[a.o.required]})}),payments:new a.a([])}),this.route.paramMap.pipe(Object(c.a)(e=>e.get("bookingId")?(this.mode="edit",this.sheduleService.getBookingById(e.get("bookingId")).pipe(Object(c.a)(e=>(console.log("booking",e),this.isCancelled="cancelled"===e.bookingStep,this.booking=this.sheduleService.convertBookingDatesIsoToShort(e),this.booking.payments.forEach(e=>this.addPaymentsArrayControl()),this.bookingForm.patchValue(this.booking),this.sheduleService.getRoomById(e.room_id))))):e.get("roomId")?(this.mode="new",this.date=e.get("date"),this.sheduleService.getRoomById(e.get("roomId"))):Object(l.a)("error parameter")),Object(c.a)(e=>(this.room=e,"edit"===this.mode?this.sheduleService.getAvailableDateTo(this.booking.room_id,this.booking.dates.to):"new"===this.mode?(this.fromPlusOneDay=this.sheduleService.convertDateToShort(m.a(this.sheduleService.convertShortToDate(this.date),{days:1})),this.bookingForm.get("dates").get("from").setValue(this.date),this.bookingForm.get("dates").get("to").setValue(this.fromPlusOneDay),this.sheduleService.getAvailableDateTo(this.room._id,this.date)):Object(l.a)("error get room"))),Object(c.a)(e=>(this.availableTo=e?this.sheduleService.convertISOToShort(e):this.sheduleService.convertDateToShort(m.a(new Date,{days:30})),this.calcData(),this.bookingForm.valueChanges))).subscribe(e=>this.calcData(),e=>console.log("error",e)),this.store.select(u.b).subscribe(e=>{this.user=e}),this.translate.stream("elements.datePicker.monthNames").subscribe(e=>{this.updated=!1,this.monthNames=e,setTimeout(()=>this.updated=!0,1)})}ionViewWillEnter(){this.updated=!1,setTimeout(()=>this.updated=!0,1)}calcData(){this.calculatedData.days=d.a(this.sheduleService.convertShortToDate(this.bookingForm.get("dates").get("to").value),this.sheduleService.convertShortToDate(this.bookingForm.get("dates").get("from").value)),this.calculatedData.bookingPrice=this.room.price*this.calculatedData.days;let e=0;this.bookingForm.get("payments").controls.forEach(t=>{e+=t.get("amount").value}),this.calculatedData.totalPaid=e,this.calculatedData.balance=this.calculatedData.totalPaid-this.calculatedData.bookingPrice+ +this.bookingForm.get("discount").value,this.calculatedData.bookingStep=this.isCancelled?"cancelled":this.calculatedData.balance>=0?"paid":this.calculatedData.totalPaid>0?"reserved":"preorder"}presentAlert(){return Object(r.a)(this,void 0,void 0,function*(){const e=yield this.alertController.create({header:"Cancel reservation",subHeader:"Reservation will be cancelled and dessapears from shedule",message:"Are you shure?",buttons:[{text:"Cancel",role:"cancel",handler:e=>{}},{text:"Ok",handler:()=>{this.isCancelled=!0,this.calcData(),this.onFormSubmit()}}]});yield e.present()})}get paymentsFormGroup(){return{_id:new a.c("",{updateOn:"change"}),date:new a.c(this.sheduleService.convertDateToShort(new Date),{updateOn:"change",validators:[a.o.required]}),amount:new a.c(200,{updateOn:"change",validators:[a.o.required,a.o.pattern("[0-9]*")]}),paymentMethod:new a.c("cash",{updateOn:"change",validators:[a.o.required,a.o.pattern("^card|cash$")]})}}getPaymentsArrayControlAt(e){return this.bookingForm.get("payments").at(e)}addPaymentsArrayControl(){this.bookingForm.get("payments").push(new a.e(Object.assign({},this.paymentsFormGroup)))}addPaymentsArrayControlToBegin(){const e=this.bookingForm.get("payments");e.push(new a.e(this.paymentsFormGroup));const t=Object.assign({},e.at(e.controls.length-1).value);for(let o=e.controls.length-1;o>0;o--)e.at(o).setValue(Object.assign({},e.at(o-1).value));e.at(0).setValue(t)}editPayments(e){this.editPayment=e}initControl(e=null,t){return new a.c(e,t)}addControl(e,t){console.log("data",t),this.bookingForm.addControl(e,this.initControl(t.formState,t.options))}addArrayControl(e,t){this.bookingForm.get(e).push(this.initControl(t.formState,t.options))}removeArrayControl(e,t){this.bookingForm.get(e).removeAt(t)}onFormCancel(){this.resetForm(),this.navController.back()}onFormSubmit(){let e=Object.assign(Object.assign({},this.bookingForm.value),{room_id:this.room._id,price:this.calculatedData.bookingPrice,bookingStep:this.calculatedData.bookingStep});e=this.sheduleService.convertBookingDatesIsoToShort(e),console.log("f booking",e),this.sheduleService.upsertBooking(e).subscribe(e=>{this.resetForm(),this.navController.back()},e=>console.log("error",e.error))}resetForm(){this.bookingFormDirective&&(this.bookingForm.get("payments").clear(),this.bookingFormDirective.resetForm())}}return e.\u0275fac=function(t){return new(t||e)(g.Ib(b.a),g.Ib(h.a),g.Ib(i.X),g.Ib(b.g),g.Ib(i.a),g.Ib(p.i),g.Ib(M.d))},e.\u0275cmp=g.Cb({type:e,selectors:[["app-booking-form"]],viewQuery:function(e,t){var o;1&e&&g.rc(y,!0),2&e&&g.hc(o=g.Wb())&&(t.bookingFormDirective=o.first)},decls:88,vars:52,consts:[["slot","start"],[3,"formGroup"],["bookingFormDirective","ngForm"],["size-md","6","offset-md","3"],["lines","none"],["slot","start","color","primary"],["summary",""],["slot","end",3,"color"],[4,"ngIf"],["lines","none",1,"date-label"],[1,"date-label__item"],["position","stacked","color","primary"],["pickerFormat","DD-MMMM-YYYY","displayFormat","DD MMMM YYYY","placeholder","Select end date","disabled","",3,"value","monthNames",4,"ngIf"],["pickerFormat","DD-MMMM-YYYY","displayFormat","DD MMMM YYYY","disabled","",3,"value","monthNames",4,"ngIf"],["formGroupName","dates",1,"date-label__item"],["pickerFormat","DD-MMMM-YYYY","displayFormat","DD MMMM YYYY","placeholder","Select end date","formControlName","to",3,"min","max","monthNames",4,"ngIf"],["class","input-error","color","danger",4,"ngIf"],["class","date-label__item",4,"ngIf"],["position","floating","color","primary"],["type","text","autocomplete","","autocorrect","","formControlName","guestName"],["type","text","autocomplete","","autocorrect","","formControlName","guestPhone"],["type","email","autocomplete","","autocorrect","","formControlName","guestEmail"],["type","text","autocomplete","","autocorrect","","formControlName","discount"],[3,"click",4,"ngIf"],[3,"disabled","click",4,"ngIf"],["formArrayName","payments",4,"ngFor","ngForOf"],["size","8"],["expand","block","fill","outline",3,"click"],["expand","block",3,"disabled","click"],["slot","end","color","primary"],["slot","end",3,"ngClass"],["pickerFormat","DD-MMMM-YYYY","displayFormat","DD MMMM YYYY","placeholder","Select end date","disabled","",3,"value","monthNames"],["pickerFormat","DD-MMMM-YYYY","displayFormat","DD MMMM YYYY","disabled","",3,"value","monthNames"],["pickerFormat","DD-MMMM-YYYY","displayFormat","DD MMMM YYYY","placeholder","Select end date","formControlName","to",3,"min","max","monthNames"],["color","danger",1,"input-error"],["fill","outline","color","danger",3,"click"],[3,"click"],[3,"disabled","click"],["formArrayName","payments"],[3,"formGroupName"],["color","secondary"],["slot","end"],["side","start"],["slot","icon-only","name","pencil-outline"],["side","end"],["color","danger",3,"click"],["slot","icon-only","name","trash"],["pickerFormat","DD-MMMM-YYYY","displayFormat","DD MMMM YYYY","placeholder","Select Month","formControlName","date",3,"monthNames",4,"ngIf"],["type","text","autocomplete","","autocorrect","","formControlName","amount"],["placeholder","Select One","interface","popover","formControlName","paymentMethod"],[3,"value",4,"ngFor","ngForOf"],["pickerFormat","DD-MMMM-YYYY","displayFormat","DD MMMM YYYY","placeholder","Select Month","formControlName","date",3,"monthNames"],[3,"value"]],template:function(e,t){if(1&e&&(g.Nb(0,"ion-header"),g.Nb(1,"ion-toolbar"),g.Nb(2,"ion-buttons",0),g.Jb(3,"ion-back-button"),g.Mb(),g.Nb(4,"ion-title"),g.nc(5),g.Yb(6,"translate"),g.Mb(),g.Mb(),g.Mb(),g.Nb(7,"ion-content"),g.Nb(8,"form",1,2),g.Nb(10,"ion-grid"),g.Nb(11,"ion-row"),g.Nb(12,"ion-col",3),g.Nb(13,"ion-item",4),g.Nb(14,"ion-label"),g.Nb(15,"h2"),g.nc(16),g.Mb(),g.Mb(),g.Mb(),g.Nb(17,"ion-item-group"),g.Nb(18,"ion-item-divider",4),g.Jb(19,"ion-toggle",5,6),g.Nb(21,"ion-label",4),g.Nb(22,"h3"),g.nc(23),g.Yb(24,"translate"),g.Mb(),g.Mb(),g.Nb(25,"ion-text",7),g.nc(26),g.Mb(),g.Mb(),g.mc(27,N,44,27,"ng-container",8),g.Mb(),g.Nb(28,"ion-list",9),g.Nb(29,"ion-item",10),g.Nb(30,"ion-label",11),g.nc(31),g.Yb(32,"translate"),g.Mb(),g.mc(33,f,1,2,"ion-datetime",12),g.Mb(),g.Nb(34,"ion-item",10),g.Nb(35,"ion-label",11),g.nc(36),g.Yb(37,"translate"),g.Mb(),g.mc(38,k,2,5,"ion-datetime",13),g.Mb(),g.Mb(),g.Nb(39,"ion-list",9),g.Nb(40,"ion-item",14),g.Nb(41,"ion-label",11),g.nc(42),g.Yb(43,"translate"),g.Mb(),g.mc(44,Y,1,3,"ion-datetime",15),g.mc(45,F,3,3,"ion-text",16),g.Mb(),g.mc(46,v,5,3,"ion-item",17),g.Mb(),g.Nb(47,"ion-list"),g.Nb(48,"ion-item"),g.Nb(49,"ion-label",18),g.nc(50),g.Yb(51,"translate"),g.Mb(),g.Jb(52,"ion-input",19),g.Mb(),g.mc(53,D,3,3,"ion-text",16),g.Nb(54,"ion-item"),g.Nb(55,"ion-label",18),g.nc(56),g.Yb(57,"translate"),g.Mb(),g.Jb(58,"ion-input",20),g.Mb(),g.mc(59,C,3,3,"ion-text",16),g.Nb(60,"ion-item"),g.Nb(61,"ion-label",18),g.nc(62),g.Yb(63,"translate"),g.Mb(),g.Jb(64,"ion-input",21),g.Mb(),g.mc(65,P,3,3,"ion-text",16),g.Nb(66,"ion-item"),g.Nb(67,"ion-label",18),g.nc(68),g.Yb(69,"translate"),g.Mb(),g.Jb(70,"ion-input",22),g.Mb(),g.mc(71,I,3,3,"ion-text",16),g.Mb(),g.Nb(72,"ion-list",4),g.Nb(73,"ion-list-header"),g.Nb(74,"ion-label"),g.nc(75),g.Yb(76,"translate"),g.Mb(),g.mc(77,S,3,3,"ion-button",23),g.mc(78,x,2,1,"ion-button",24),g.Mb(),g.mc(79,T,4,3,"ng-container",25),g.Mb(),g.Nb(80,"ion-row"),g.Nb(81,"ion-col",26),g.Nb(82,"ion-button",27),g.Vb("click",function(){return t.onFormCancel()}),g.nc(83," Cancel "),g.Mb(),g.Mb(),g.Nb(84,"ion-col"),g.Nb(85,"ion-button",28),g.Vb("click",function(){return t.onFormSubmit()}),g.nc(86),g.Yb(87,"translate"),g.Mb(),g.Mb(),g.Mb(),g.Mb(),g.Mb(),g.Mb(),g.Mb(),g.Mb()),2&e){const e=g.ic(20);g.yb(5),g.oc(g.Zb(6,30,"modules.shedule.bookingForm.title")),g.yb(3),g.dc("formGroup",t.bookingForm),g.yb(8),g.oc(null==t.room?null:t.room.name),g.yb(7),g.oc(g.Zb(24,32,"modules.shedule.bookingForm.balance")),g.yb(2),g.dc("color",(null==t.calculatedData?null:t.calculatedData.balance)>=0?"success":"danger"),g.yb(1),g.pc(" ",null==t.calculatedData?null:t.calculatedData.balance,""),g.yb(1),g.dc("ngIf",e.checked),g.yb(4),g.pc(" ",g.Zb(32,34,"modules.shedule.bookingForm.from")," "),g.yb(2),g.dc("ngIf",t.updated),g.yb(3),g.pc(" ",g.Zb(37,36,"modules.shedule.bookingForm.availableTo")," "),g.yb(2),g.dc("ngIf",t.updated),g.yb(4),g.pc(" ",g.Zb(43,38,"modules.shedule.bookingForm.to")," "),g.yb(2),g.dc("ngIf",t.updated),g.yb(1),g.dc("ngIf",t.bookingForm.get("dates").get("to").errors),g.yb(1),g.dc("ngIf",!(null!=t.user&&t.user.blocked)),g.yb(4),g.pc(" ",g.Zb(51,40,"modules.shedule.bookingForm.guestName")," "),g.yb(3),g.dc("ngIf",t.bookingForm.get("guestName").errors),g.yb(3),g.pc(" ",g.Zb(57,42,"modules.shedule.bookingForm.guestPhone")," "),g.yb(3),g.dc("ngIf",t.bookingForm.get("guestPhone").errors),g.yb(3),g.pc(" ",g.Zb(63,44,"modules.shedule.bookingForm.guestEmail")," "),g.yb(3),g.dc("ngIf",t.bookingForm.get("guestEmail").errors),g.yb(3),g.pc(" ",g.Zb(69,46,"modules.shedule.bookingForm.discount")," "),g.yb(3),g.dc("ngIf",t.bookingForm.get("discount").errors),g.yb(4),g.oc(g.Zb(76,48,"modules.shedule.bookingForm.payments")),g.yb(2),g.dc("ngIf",null===t.editPayment),g.yb(1),g.dc("ngIf",null!==t.editPayment),g.yb(1),g.dc("ngForOf",t.bookingForm.get("payments").controls),g.yb(6),g.dc("disabled","INVALID"===t.bookingForm.status||t.isCancelled||t.user.blocked),g.yb(1),g.qc(" ",g.Zb(87,50,"elements.button.submit")," ",t.bookingForm.errors," ")}},directives:[i.q,i.S,i.g,i.d,i.e,i.Q,i.n,a.p,a.l,a.f,i.p,i.J,i.m,i.t,i.z,i.v,i.u,i.R,i.b,i.P,n.n,i.A,a.g,i.s,i.cb,a.k,a.d,i.B,n.m,i.f,n.l,i.o,i.bb,a.b,i.y,i.F,i.x,i.w,i.r,i.K,i.L],pipes:[M.c,n.e,n.g],styles:[""]}),e})()}];let _=(()=>{class e{}return e.\u0275mod=g.Gb({type:e}),e.\u0275inj=g.Fb({factory:function(t){return new(t||e)},imports:[[b.k.forChild(J)],b.k]}),e})(),V=(()=>{class e{}return e.\u0275mod=g.Gb({type:e}),e.\u0275inj=g.Fb({factory:function(t){return new(t||e)},imports:[[n.c,a.n,i.T,_,M.b.forChild({extend:!0})]]}),e})()}}]);