!function(){function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,o){if(!e)return;if("string"==typeof e)return n(e,o);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,o)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,t=new Array(n);o<n;o++)t[o]=e[o];return t}function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{QmOr:function(n,i,r){"use strict";r.r(i),r.d(i,"ManagementPageModule",function(){return V});var b=r("ofXK"),l=r("3Pt+"),a=r("TEn/"),c=r("tyNb"),s=r("mrSG"),u=r("IjAw"),d=r("zHMj"),f=r("EhJz"),M=r("dndX"),g=r("OuL/"),p=r("9ig3"),m=r("lJxs"),h=r("tJKL"),N=r("4dfA"),y=r("mgGq"),v=r("AytR"),k=r("fXoL"),S=r("mrZj"),w=r("l7P3");function O(e,n){if(1&e&&(k.Nb(0,"ion-select-option",14),k.lc(1),k.Mb()),2&e){var o=n.$implicit;k.dc("value",o.key),k.yb(1),k.nc(" ",o.value," ")}}function C(e,n){if(1&e&&(k.Nb(0,"ion-select-option",14),k.lc(1),k.Mb()),2&e){var o=n.$implicit;k.dc("value",o.key),k.yb(1),k.nc(" ",o.value," ")}}function x(e,n){if(1&e&&(k.Nb(0,"ion-select-option",14),k.lc(1),k.Mb()),2&e){var o=n.$implicit;k.dc("value",o),k.yb(1),k.nc("",o.name," ")}}function D(e,n){if(1&e&&(k.Nb(0,"ion-select-option",14),k.lc(1),k.Mb()),2&e){var o=n.$implicit;k.dc("value",o.key),k.yb(1),k.nc(" ",o.value," ")}}function F(e,n){if(1&e&&(k.Nb(0,"ion-select-option",14),k.lc(1),k.Mb()),2&e){var o=n.$implicit;k.dc("value",o.key),k.yb(1),k.nc("",o.value," ")}}function j(e,n){if(1&e){var o=k.Ob();k.Nb(0,"ion-item-options",19),k.Nb(1,"ion-item-option",20),k.Vb("click",function(){k.hc(o);var e=k.Xb().$implicit;return k.Xb().presentAlert(e._id)}),k.Jb(2,"ion-icon",21),k.Mb(),k.Mb()}}function A(e,n){if(1&e){var o=k.Ob();k.Nb(0,"ion-item-options",22),k.Nb(1,"ion-item-option",23),k.Vb("click",function(){k.hc(o);var e=k.Xb().$implicit;return k.Xb().update(e._id)}),k.Jb(2,"ion-icon",24),k.Mb(),k.Mb()}}function I(e,n){if(1&e){var o=k.Ob();k.Lb(0),k.Nb(1,"ion-item-sliding"),k.Nb(2,"ion-item",15),k.Nb(3,"ion-label"),k.Nb(4,"ion-row"),k.Nb(5,"ion-col",9),k.Nb(6,"ion-item",10),k.Nb(7,"ion-label",11),k.Nb(8,"ion-button",16),k.Vb("click",function(){k.hc(o);var e=n.$implicit;return k.Xb().viewBooking(e._id)}),k.lc(9),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Nb(10,"ion-col",9),k.Nb(11,"ion-item",10),k.Nb(12,"ion-label",11),k.lc(13),k.Yb(14,"date"),k.Mb(),k.Mb(),k.Mb(),k.Nb(15,"ion-col",9),k.Nb(16,"ion-item",10),k.Nb(17,"ion-label",11),k.lc(18),k.Yb(19,"date"),k.Mb(),k.Mb(),k.Mb(),k.Nb(20,"ion-col",9),k.Nb(21,"ion-item",10),k.Nb(22,"ion-label",11),k.Nb(23,"ion-text",12),k.lc(24),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.kc(25,j,3,0,"ion-item-options",17),k.kc(26,A,3,0,"ion-item-options",18),k.Mb(),k.Kb()}if(2&e){var t=n.$implicit,i=k.Xb();k.yb(8),k.dc("ngClass","status-color_"+t.bookingStep),k.yb(1),k.mc(t.bookingStep),k.yb(4),k.nc(" ",k.ac(14,7,t.dates.from,"dd MMM")," "),k.yb(5),k.nc(" ",k.ac(19,10,t.dates.to,"dd MMM")," "),k.yb(6),k.nc(" ",t.price," "),k.yb(1),k.dc("ngIf",!(null!=i.user&&i.user.blocked)),k.yb(1),k.dc("ngIf","cancelled"!==t.bookingStep&&!(null!=i.user&&i.user.blocked))}}var Y,E,B,$=[{path:"",component:(Y=function(){function n(e,t,i,r){o(this,n),this.sheduleService=e,this.store=t,this.router=i,this.alertController=r,this.bookingSteps=v.a.bookingStepsMap,this.bookingStep="cancelled",this.bookingStepExprs=v.a.bookingStepExprsMap,this.bookingStepExpr="$eq",this.sortFields=v.a.sortFieldsMap,this.sortField="dates.from",this.sortOrders=v.a.sortOrdersMap,this.sortOrder=1,this.date=this.sheduleService.convertDateToShort(new Date),this.maxDate=this.sheduleService.convertDateToShort(u.a(new Date,{years:1}))}var i,r,b;return i=n,(r=[{key:"ngOnInit",value:function(){var n=this;this.store.select(y.a).subscribe(function(o){n.rooms=e(o.rooms),n.rooms.unshift({_id:null,name:"All"}),console.log("rooms",n.rooms),n.room=n.rooms[0]},function(e){return console.log("load rooms err",e)}),this.store.select(y.b).subscribe(function(e){return n.user=e}),this.store.select(h.a).subscribe(function(e){n.bookings=e})}},{key:"ionViewWillEnter",value:function(){var e=this.createBookingQuery();this.store.dispatch(new N.a(e))}},{key:"presentAlert",value:function(e){return Object(s.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var o,t=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({header:"Delete reservation",subHeader:"Reservation will be deleted",message:"Are you shure?",buttons:[{text:"Cancel",role:"cancel",handler:function(e){}},{text:"Ok",handler:function(){t.delete(e);var n=t.createBookingQuery();t.store.dispatch(new N.a(n))}}]});case 2:return o=n.sent,n.next=5,o.present();case 5:case"end":return n.stop()}},n,this)}))}},{key:"createBookingQuery",value:function(){return{dateRange:this.createRangeLimits(this.sheduleService.convertShortToDate(this.date)),room_id:this.room._id,bookingStep:this.bookingStep?{val:this.bookingStep,expr:this.bookingStepExpr}:null,sort:{field:this.sortField,order:this.sortOrder}}}},{key:"filter",value:function(){var e=this.createBookingQuery();this.store.dispatch(new N.a(e))}},{key:"getBookings",value:function(e,n){return this.store.select(h.a).pipe(Object(m.a)(function(o){return o.filter(function(n){return n.room_id===e}).map(function(e){return d.a(new Date(n),new Date(e.dates.from))?Object.assign(Object.assign({},e),{info:"start"}):d.a(new Date(n),new Date(e.dates.to))?Object.assign(Object.assign({},e),{info:"end"}):f.a(new Date(n),new Date(e.dates.from))&&M.a(new Date(n),new Date(e.dates.to))?Object.assign(Object.assign({},e),{info:"ahead"}):void 0}).filter(function(e){return e}).sort(function(e,n){return new Date(e.dates.from).getTime()-new Date(n.dates.from).getTime()}).map(function(e){return e})}))}},{key:"createRangeLimits",value:function(e){var n=g.a(e),o=p.a(e),t=u.a(o,{days:n-1});return{lower:this.sheduleService.convertDateToShort(o),upper:this.sheduleService.convertDateToShort(t)}}},{key:"viewBooking",value:function(e){this.router.navigate(["/","shedule","edit",e])}},{key:"delete",value:function(e){this.sheduleService.deleteBooking(e).subscribe(function(e){return e},function(e){return console.log("err delete",e)})}},{key:"update",value:function(e){this.router.navigateByUrl("/shedule/edit/"+e)}}])&&t(i.prototype,r),b&&t(i,b),n}(),Y.\u0275fac=function(e){return new(e||Y)(k.Ib(S.a),k.Ib(w.i),k.Ib(c.g),k.Ib(a.a))},Y.\u0275cmp=k.Cb({type:Y,selectors:[["app-management"]],decls:81,vars:22,consts:[["slot","end"],["contentId","main-content"],["size-md","8","offset-md","2"],["color","primary","lines","none"],["pickerFormat","MMMM-YYYY","displayFormat","MMMM YYYY","placeholder","Select Month",3,"max","ngModel","ngModelChange","ionChange"],["placeholder","Select One",3,"ngModel","ngModelChange","ionChange"],[3,"value",4,"ngFor","ngForOf"],["placeholder","Select One",3,"ngModel","disabled","ngModelChange","ionChange"],[1,"ion-no-padding"],["size","3",1,"ion-no-padding"],["lines","none",1,"ion-no-padding"],[1,"ion-text-center"],["color","tertiary"],[4,"ngFor","ngForOf"],[3,"value"],["lines","none"],["fill","clear",3,"ngClass","click"],["side","end",4,"ngIf"],["side","start",4,"ngIf"],["side","end"],["color","danger",3,"click"],["slot","icon-only","name","trash"],["side","start"],["color","primary",3,"click"],["slot","icon-only","name","pencil-outline"]],template:function(e,n){1&e&&(k.Nb(0,"ion-header"),k.Nb(1,"ion-toolbar"),k.Nb(2,"ion-title"),k.lc(3,"Management"),k.Mb(),k.Nb(4,"ion-buttons",0),k.Jb(5,"ion-menu-button",1),k.Mb(),k.Mb(),k.Nb(6,"ion-toolbar"),k.Nb(7,"ion-grid"),k.Nb(8,"ion-row"),k.Nb(9,"ion-col",2),k.Nb(10,"ion-item",3),k.Nb(11,"ion-label"),k.Nb(12,"ion-row"),k.Nb(13,"ion-col"),k.Nb(14,"ion-item"),k.Nb(15,"ion-label"),k.lc(16,"Choose period"),k.Mb(),k.Nb(17,"ion-datetime",4),k.Vb("ngModelChange",function(e){return n.date=e})("ionChange",function(){return n.filter()}),k.Mb(),k.Mb(),k.Mb(),k.Nb(18,"ion-col"),k.Nb(19,"ion-item"),k.Nb(20,"ion-label"),k.lc(21,"Sort"),k.Mb(),k.Nb(22,"ion-select",5),k.Vb("ngModelChange",function(e){return n.sortField=e})("ionChange",function(){return n.filter()}),k.kc(23,O,2,2,"ion-select-option",6),k.Yb(24,"keyvalue"),k.Mb(),k.Mb(),k.Mb(),k.Nb(25,"ion-col"),k.Nb(26,"ion-item"),k.Nb(27,"ion-label"),k.lc(28,"Sort order"),k.Mb(),k.Nb(29,"ion-select",5),k.Vb("ngModelChange",function(e){return n.sortOrder=e})("ionChange",function(){return n.filter()}),k.kc(30,C,2,2,"ion-select-option",6),k.Yb(31,"keyvalue"),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Nb(32,"ion-row"),k.Nb(33,"ion-col"),k.Nb(34,"ion-item"),k.Nb(35,"ion-label"),k.lc(36,"Room"),k.Mb(),k.Nb(37,"ion-select",5),k.Vb("ngModelChange",function(e){return n.room=e})("ionChange",function(){return n.filter()}),k.kc(38,x,2,2,"ion-select-option",6),k.Mb(),k.Mb(),k.Mb(),k.Nb(39,"ion-col"),k.Nb(40,"ion-item"),k.Nb(41,"ion-label"),k.lc(42,"Booking Step"),k.Mb(),k.Nb(43,"ion-select",5),k.Vb("ngModelChange",function(e){return n.bookingStep=e})("ionChange",function(){return n.filter()}),k.kc(44,D,2,2,"ion-select-option",6),k.Yb(45,"keyvalue"),k.Mb(),k.Mb(),k.Mb(),k.Nb(46,"ion-col"),k.Nb(47,"ion-item"),k.Nb(48,"ion-label"),k.lc(49,"Booking Step Equals"),k.Mb(),k.Nb(50,"ion-select",7),k.Vb("ngModelChange",function(e){return n.bookingStepExpr=e})("ionChange",function(){return n.filter()}),k.kc(51,F,2,2,"ion-select-option",6),k.Yb(52,"keyvalue"),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Nb(53,"ion-content"),k.Nb(54,"ion-grid"),k.Nb(55,"ion-row"),k.Nb(56,"ion-col",2),k.Nb(57,"ion-list"),k.Nb(58,"ion-list-header",8),k.Nb(59,"ion-label"),k.Nb(60,"ion-item"),k.Nb(61,"ion-label"),k.Nb(62,"ion-row"),k.Nb(63,"ion-col",9),k.Nb(64,"ion-item",10),k.Nb(65,"ion-label",11),k.lc(66," Step "),k.Mb(),k.Mb(),k.Mb(),k.Nb(67,"ion-col",9),k.Nb(68,"ion-item",10),k.Nb(69,"ion-label",11),k.lc(70," Date form "),k.Mb(),k.Mb(),k.Mb(),k.Nb(71,"ion-col",9),k.Nb(72,"ion-item",10),k.Nb(73,"ion-label",11),k.lc(74," Date to "),k.Mb(),k.Mb(),k.Mb(),k.Nb(75,"ion-col",9),k.Nb(76,"ion-item",10),k.Nb(77,"ion-label",11),k.Nb(78,"ion-text",12),k.lc(79," Price "),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.kc(80,I,27,13,"ng-container",13),k.Mb(),k.Mb(),k.Mb(),k.Mb(),k.Mb()),2&e&&(k.yb(17),k.dc("max",n.maxDate)("ngModel",n.date),k.yb(5),k.dc("ngModel",n.sortField),k.yb(1),k.dc("ngForOf",k.Zb(24,14,n.sortFields)),k.yb(6),k.dc("ngModel",n.sortOrder),k.yb(1),k.dc("ngForOf",k.Zb(31,16,n.sortOrders)),k.yb(7),k.dc("ngModel",n.room),k.yb(1),k.dc("ngForOf",n.rooms),k.yb(5),k.dc("ngModel",n.bookingStep),k.yb(1),k.dc("ngForOf",k.Zb(45,18,n.bookingSteps)),k.yb(6),k.dc("ngModel",n.bookingStepExpr)("disabled",!n.bookingStep),k.yb(1),k.dc("ngForOf",k.Zb(52,20,n.bookingStepExprs)),k.yb(29),k.dc("ngForOf",n.bookings))},directives:[a.p,a.O,a.N,a.f,a.A,a.o,a.G,a.l,a.s,a.w,a.n,a.W,l.k,l.m,a.H,b.m,a.m,a.x,a.y,a.M,a.I,a.v,a.e,b.l,b.n,a.u,a.t,a.q],pipes:[b.h,b.e],styles:["ion-label[_ngcontent-%COMP%]{margin:0}"]}),Y)}],T=((B=function e(){o(this,e)}).\u0275mod=k.Gb({type:B}),B.\u0275inj=k.Fb({factory:function(e){return new(e||B)},imports:[[c.k.forChild($)],c.k]}),B),V=((E=function e(){o(this,e)}).\u0275mod=k.Gb({type:E}),E.\u0275inj=k.Fb({factory:function(e){return new(e||E)},imports:[[b.c,l.h,l.n,a.P,T]]}),E)}}])}();