!function(){function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return n(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{nhAk:function(n,i,r){"use strict";r.r(i),r.d(i,"ManagementPageModule",function(){return R});var b=r("ofXK"),c=r("3Pt+"),a=r("TEn/"),l=r("tyNb"),s=r("mrSG"),d=r("IjAw"),u=r("zHMj"),m=r("EhJz"),f=r("dndX"),g=r("PQ5l"),p=r("lJxs"),M=r("y7AT"),h=r("QqEo"),N=r("mgGq"),y=r("fXoL"),v=r("dJMc"),k=r("l7P3"),S=r("sYmb");function O(e,n){if(1&e){var t=y.Ob();y.Nb(0,"ion-datetime",13),y.Vb("ngModelChange",function(e){return y.jc(t),y.Xb().date=e})("ionChange",function(){return y.jc(t),y.Xb().filter()}),y.Mb()}if(2&e){var o=y.Xb();y.ec("monthNames",o.monthNames),y.dc("max",o.maxDate)("ngModel",o.date)}}function w(e,n){if(1&e&&(y.Nb(0,"ion-select-option",16),y.nc(1),y.Yb(2,"translate"),y.Mb()),2&e){var t=n.$implicit;y.dc("value",t),y.yb(1),y.pc(" ",y.Zb(2,2,"common.sortFields."+t)," ")}}function C(e,n){if(1&e){var t=y.Ob();y.Nb(0,"ion-select",14),y.Vb("ngModelChange",function(e){return y.jc(t),y.Xb().sortField=e})("ionChange",function(){return y.jc(t),y.Xb().filter()}),y.mc(1,w,3,4,"ion-select-option",15),y.Mb()}if(2&e){var o=y.Xb();y.dc("ngModel",o.sortField),y.yb(1),y.dc("ngForOf",o.sortFields)}}function Y(e,n){if(1&e&&(y.Nb(0,"ion-select-option",16),y.nc(1),y.Yb(2,"translate"),y.Mb()),2&e){var t=n.$implicit;y.dc("value",t),y.yb(1),y.pc(" ",y.Zb(2,2,"common.sortOrders."+t)," ")}}function j(e,n){if(1&e){var t=y.Ob();y.Nb(0,"ion-select",14),y.Vb("ngModelChange",function(e){return y.jc(t),y.Xb().sortOrder=e})("ionChange",function(){return y.jc(t),y.Xb().filter()}),y.mc(1,Y,3,4,"ion-select-option",15),y.Mb()}if(2&e){var o=y.Xb();y.dc("ngModel",o.sortOrder),y.yb(1),y.dc("ngForOf",o.sortOrders)}}function F(e,n){if(1&e&&(y.Nb(0,"ion-select-option",16),y.nc(1),y.Mb()),2&e){var t=n.$implicit;y.dc("value",t),y.yb(1),y.pc("",t.name," ")}}function X(e,n){if(1&e){var t=y.Ob();y.Nb(0,"ion-select",14),y.Vb("ngModelChange",function(e){return y.jc(t),y.Xb().room=e})("ionChange",function(){return y.jc(t),y.Xb().filter()}),y.mc(1,F,2,2,"ion-select-option",15),y.Mb()}if(2&e){var o=y.Xb();y.dc("ngModel",o.room),y.yb(1),y.dc("ngForOf",o.rooms)}}function x(e,n){if(1&e&&(y.Nb(0,"ion-select-option",16),y.nc(1),y.Yb(2,"translate"),y.Mb()),2&e){var t=n.$implicit;y.dc("value",t),y.yb(1),y.pc(" ",y.Zb(2,2,"common.bookingSteps."+t)," ")}}function I(e,n){if(1&e){var t=y.Ob();y.Nb(0,"ion-select",14),y.Vb("ngModelChange",function(e){return y.jc(t),y.Xb().bookingStep=e})("ionChange",function(){return y.jc(t),y.Xb().filter()}),y.mc(1,x,3,4,"ion-select-option",15),y.Mb()}if(2&e){var o=y.Xb();y.dc("ngModel",o.bookingStep),y.yb(1),y.dc("ngForOf",o.bookingSteps)}}function D(e,n){if(1&e&&(y.Nb(0,"ion-select-option",16),y.nc(1),y.Yb(2,"translate"),y.Mb()),2&e){var t=n.$implicit;y.dc("value",t),y.yb(1),y.pc(" ",y.Zb(2,2,"common.bookingStepExprs."+t)," ")}}function Z(e,n){if(1&e){var t=y.Ob();y.Nb(0,"ion-select",17),y.Vb("ngModelChange",function(e){return y.jc(t),y.Xb().bookingStepExpr=e})("ionChange",function(){return y.jc(t),y.Xb().filter()}),y.mc(1,D,3,4,"ion-select-option",15),y.Mb()}if(2&e){var o=y.Xb();y.dc("ngModel",o.bookingStepExpr)("disabled",!o.bookingStep),y.yb(1),y.dc("ngForOf",o.bookingStepExprs)}}function A(e,n){if(1&e){var t=y.Ob();y.Nb(0,"ion-item-options",22),y.Nb(1,"ion-item-option",23),y.Vb("click",function(){y.jc(t);var e=y.Xb().$implicit;return y.Xb().presentAlert(e._id)}),y.Jb(2,"ion-icon",24),y.Mb(),y.Mb()}}function E(e,n){if(1&e){var t=y.Ob();y.Nb(0,"ion-item-options",25),y.Nb(1,"ion-item-option",26),y.Vb("click",function(){y.jc(t);var e=y.Xb().$implicit;return y.Xb().update(e._id)}),y.Jb(2,"ion-icon",27),y.Mb(),y.Mb()}}function T(e,n){if(1&e){var t=y.Ob();y.Lb(0),y.Nb(1,"ion-item-sliding"),y.Nb(2,"ion-item",18),y.Nb(3,"ion-label"),y.Nb(4,"ion-row"),y.Nb(5,"ion-col",8),y.Nb(6,"ion-item",9),y.Nb(7,"ion-label",10),y.Nb(8,"ion-button",19),y.Vb("click",function(){y.jc(t);var e=n.$implicit;return y.Xb().viewBooking(e._id)}),y.nc(9),y.Yb(10,"translate"),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Nb(11,"ion-col",8),y.Nb(12,"ion-item",9),y.Nb(13,"ion-label",10),y.nc(14),y.Yb(15,"date"),y.Mb(),y.Mb(),y.Mb(),y.Nb(16,"ion-col",8),y.Nb(17,"ion-item",9),y.Nb(18,"ion-label",10),y.nc(19),y.Yb(20,"date"),y.Mb(),y.Mb(),y.Mb(),y.Nb(21,"ion-col",8),y.Nb(22,"ion-item",9),y.Nb(23,"ion-label",10),y.Nb(24,"ion-text",11),y.nc(25),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.mc(26,A,3,0,"ion-item-options",20),y.mc(27,E,3,0,"ion-item-options",21),y.Mb(),y.Kb()}if(2&e){var o=n.$implicit,i=y.Xb();y.yb(8),y.dc("ngClass","status-color_"+o.bookingStep),y.yb(1),y.oc(y.Zb(10,7,"common.bookingSteps."+o.bookingStep)),y.yb(5),y.pc(" ",y.ac(15,9,o.dates.from,"dd MMM")," "),y.yb(5),y.pc(" ",y.ac(20,12,o.dates.to,"dd MMM")," "),y.yb(6),y.pc(" ",o.price," "),y.yb(1),y.dc("ngIf",!(null!=i.user&&i.user.blocked)),y.yb(1),y.dc("ngIf","cancelled"!==o.bookingStep&&!(null!=i.user&&i.user.blocked))}}var $,V,B,J=[{path:"",component:($=function(){function n(e,o,i,r,b,c){t(this,n),this.scheduleService=e,this.store=o,this.router=i,this.route=r,this.alertController=b,this.translate=c,this.bookingSteps=g.b,this.bookingStep="cancelled",this.bookingStepExprs=g.a,this.bookingStepExpr="$eq",this.sortFields=g.d,this.sortField="dates.from",this.sortOrders=g.e,this.sortOrder=1,this.date=this.scheduleService.convertDateToShort(new Date),this.maxDate=this.scheduleService.convertDateToShort(d.a(new Date,{years:1})),this.updated=!0}var i,r,b;return i=n,(r=[{key:"ngOnInit",value:function(){var n=this;this.store.select(N.a).subscribe(function(t){if(console.log("company",t),t){var o=n.translate.instant("dif.all");n.rooms=e(t.rooms),n.rooms.unshift({_id:null,name:o}),n.room=n.rooms[0]}},function(e){return console.log("load rooms err",e)}),this.store.select(N.b).subscribe(function(e){return n.user=e}),this.store.select(M.a).subscribe(function(e){n.bookings=e}),this.translate.stream("elements.datePicker.monthNames").subscribe(function(e){n.updated=!1,n.monthNames=e,setTimeout(function(){return n.updated=!0},1)}),this.route.url.subscribe(function(e){if(n.room){n.filter(),n.updated=!1;var t=n.translate.instant("dif.all");n.rooms[0].name=t,setTimeout(function(){return n.updated=!0},1)}})}},{key:"ionViewWillEnter",value:function(){}},{key:"presentAlert",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var t,o=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({header:"Delete reservation",subHeader:"Reservation will be deleted",message:"Are you shure?",buttons:[{text:"Cancel",role:"cancel",handler:function(e){}},{text:"Ok",handler:function(){o.delete(e);var n=o.createBookingQuery();o.store.dispatch(new h.a(n))}}]});case 2:return t=n.sent,n.next=5,t.present();case 5:case"end":return n.stop()}},n,this)}))}},{key:"createBookingQuery",value:function(){return{dateRangeLimits:this.scheduleService.createDateRangeLimits(this.scheduleService.convertISOToDate(this.date)),room_id:this.room._id,bookingStep:this.bookingStep?{val:this.bookingStep,expr:this.bookingStepExpr}:null,sort:{field:this.sortField,order:this.sortOrder}}}},{key:"filter",value:function(){var e=this.createBookingQuery();this.store.dispatch(new h.a(e))}},{key:"getBookings",value:function(e,n){return this.store.select(M.a).pipe(Object(p.a)(function(t){return t.filter(function(n){return n.room_id===e}).map(function(e){return u.a(new Date(n),new Date(e.dates.from))?Object.assign(Object.assign({},e),{info:"start"}):u.a(new Date(n),new Date(e.dates.to))?Object.assign(Object.assign({},e),{info:"end"}):m.a(new Date(n),new Date(e.dates.from))&&f.a(new Date(n),new Date(e.dates.to))?Object.assign(Object.assign({},e),{info:"ahead"}):void 0}).filter(function(e){return e}).sort(function(e,n){return new Date(e.dates.from).getTime()-new Date(n.dates.from).getTime()}).map(function(e){return e})}))}},{key:"viewBooking",value:function(e){this.router.navigate(["/","schedule","edit",e])}},{key:"delete",value:function(e){this.scheduleService.deleteBooking(e).subscribe(function(e){return e},function(e){return console.log("err delete",e)})}},{key:"update",value:function(e){this.router.navigateByUrl("/schedule/edit/"+e)}}])&&o(i.prototype,r),b&&o(i,b),n}(),$.\u0275fac=function(e){return new(e||$)(y.Ib(v.a),y.Ib(k.i),y.Ib(l.g),y.Ib(l.a),y.Ib(a.a),y.Ib(S.d))},$.\u0275cmp=y.Cb({type:$,selectors:[["app-management"]],decls:82,vars:37,consts:[["slot","end"],["menu","analytics-menu"],["size-md","8","offset-md","2"],["color","primary","lines","none"],["pickerFormat","MMMM-YYYY","displayFormat","MMMM YYYY","placeholder","Select Month",3,"max","monthNames","ngModel","ngModelChange","ionChange",4,"ngIf"],["placeholder","Select One",3,"ngModel","ngModelChange","ionChange",4,"ngIf"],["placeholder","Select One",3,"ngModel","disabled","ngModelChange","ionChange",4,"ngIf"],[1,"ion-no-padding"],["size","3",1,"ion-no-padding"],["lines","none",1,"ion-no-padding"],[1,"ion-text-center"],["color","tertiary"],[4,"ngFor","ngForOf"],["pickerFormat","MMMM-YYYY","displayFormat","MMMM YYYY","placeholder","Select Month",3,"max","monthNames","ngModel","ngModelChange","ionChange"],["placeholder","Select One",3,"ngModel","ngModelChange","ionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["placeholder","Select One",3,"ngModel","disabled","ngModelChange","ionChange"],["lines","none"],["fill","clear",3,"ngClass","click"],["side","end",4,"ngIf"],["side","start",4,"ngIf"],["side","end"],["color","danger",3,"click"],["slot","icon-only","name","trash"],["side","start"],["color","primary",3,"click"],["slot","icon-only","name","pencil-outline"]],template:function(e,n){1&e&&(y.Nb(0,"ion-header"),y.Nb(1,"ion-toolbar"),y.Nb(2,"ion-title"),y.nc(3),y.Yb(4,"translate"),y.Mb(),y.Nb(5,"ion-buttons",0),y.Jb(6,"ion-menu-button",1),y.Mb(),y.Mb(),y.Nb(7,"ion-toolbar"),y.Nb(8,"ion-grid"),y.Nb(9,"ion-row"),y.Nb(10,"ion-col",2),y.Nb(11,"ion-item",3),y.Nb(12,"ion-label"),y.Nb(13,"ion-row"),y.Nb(14,"ion-col"),y.Nb(15,"ion-item"),y.Nb(16,"ion-label"),y.nc(17),y.Yb(18,"translate"),y.Mb(),y.mc(19,O,1,3,"ion-datetime",4),y.Mb(),y.Mb(),y.Nb(20,"ion-col"),y.Nb(21,"ion-item"),y.Nb(22,"ion-label"),y.nc(23),y.Yb(24,"translate"),y.Mb(),y.mc(25,C,2,2,"ion-select",5),y.Mb(),y.Mb(),y.Nb(26,"ion-col"),y.Nb(27,"ion-item"),y.Nb(28,"ion-label"),y.nc(29),y.Yb(30,"translate"),y.Mb(),y.mc(31,j,2,2,"ion-select",5),y.Mb(),y.Mb(),y.Mb(),y.Nb(32,"ion-row"),y.Nb(33,"ion-col"),y.Nb(34,"ion-item"),y.Nb(35,"ion-label"),y.nc(36,"Room"),y.Mb(),y.mc(37,X,2,2,"ion-select",5),y.Mb(),y.Mb(),y.Nb(38,"ion-col"),y.Nb(39,"ion-item"),y.Nb(40,"ion-label"),y.nc(41),y.Yb(42,"translate"),y.Mb(),y.mc(43,I,2,2,"ion-select",5),y.Mb(),y.Mb(),y.Nb(44,"ion-col"),y.Nb(45,"ion-item"),y.Nb(46,"ion-label"),y.nc(47),y.Yb(48,"translate"),y.Mb(),y.mc(49,Z,2,3,"ion-select",6),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Nb(50,"ion-content"),y.Nb(51,"ion-grid"),y.Nb(52,"ion-row"),y.Nb(53,"ion-col",2),y.Nb(54,"ion-list"),y.Nb(55,"ion-list-header",7),y.Nb(56,"ion-label"),y.Nb(57,"ion-item"),y.Nb(58,"ion-label"),y.Nb(59,"ion-row"),y.Nb(60,"ion-col",8),y.Nb(61,"ion-item",9),y.Nb(62,"ion-label",10),y.nc(63),y.Yb(64,"translate"),y.Mb(),y.Mb(),y.Mb(),y.Nb(65,"ion-col",8),y.Nb(66,"ion-item",9),y.Nb(67,"ion-label",10),y.nc(68),y.Yb(69,"translate"),y.Mb(),y.Mb(),y.Mb(),y.Nb(70,"ion-col",8),y.Nb(71,"ion-item",9),y.Nb(72,"ion-label",10),y.nc(73),y.Yb(74,"translate"),y.Mb(),y.Mb(),y.Mb(),y.Nb(75,"ion-col",8),y.Nb(76,"ion-item",9),y.Nb(77,"ion-label",10),y.Nb(78,"ion-text",11),y.nc(79),y.Yb(80,"translate"),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.mc(81,T,28,15,"ng-container",12),y.Mb(),y.Mb(),y.Mb(),y.Mb(),y.Mb()),2&e&&(y.yb(3),y.oc(y.Zb(4,17,"management")),y.yb(14),y.oc(y.Zb(18,19,"elements.datePicker.chooseMonth")),y.yb(2),y.dc("ngIf",n.updated),y.yb(4),y.oc(y.Zb(24,21,"common.sortFields.title")),y.yb(2),y.dc("ngIf",n.updated),y.yb(4),y.oc(y.Zb(30,23,"common.sortOrders.title")),y.yb(2),y.dc("ngIf",n.updated),y.yb(6),y.dc("ngIf",n.updated),y.yb(4),y.oc(y.Zb(42,25,"common.bookingSteps.title")),y.yb(2),y.dc("ngIf",n.updated),y.yb(4),y.oc(y.Zb(48,27,"common.bookingStepExprs.title")),y.yb(2),y.dc("ngIf",n.updated),y.yb(14),y.pc(" ",y.Zb(64,29,"common.bookingSteps.title")," "),y.yb(5),y.pc(" ",y.Zb(69,31,"common.sortFields.dates.from")," "),y.yb(5),y.pc(" ",y.Zb(74,33,"common.sortFields.dates.to")," "),y.yb(6),y.pc(" ",y.Zb(80,35,"common.sortFields.price")," "),y.yb(2),y.dc("ngForOf",n.bookings))},directives:[a.q,a.T,a.R,a.g,a.D,a.p,a.J,a.m,a.t,a.z,b.n,a.n,a.A,a.B,a.Q,b.m,a.o,a.cb,c.k,c.m,a.K,a.L,a.y,a.f,b.l,a.x,a.w,a.r],pipes:[S.c,b.e],styles:["ion-label[_ngcontent-%COMP%]{margin:0}"]}),$)}],_=((V=function e(){t(this,e)}).\u0275mod=y.Gb({type:V}),V.\u0275inj=y.Fb({factory:function(e){return new(e||V)},imports:[[l.k.forChild(J)],l.k]}),V),P=r("FUS3"),R=((B=function e(){t(this,e)}).\u0275mod=y.Gb({type:B}),B.\u0275inj=y.Fb({factory:function(e){return new(e||B)},imports:[[b.c,c.h,c.n,a.U,_,S.b.forChild({extend:!0}),P.a]]}),B)}}])}();