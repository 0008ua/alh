!function(){function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function n(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"9ziR":function(n,o,i){"use strict";i.r(o),i.d(o,"ShedulePageModule",function(){return $});var r=i("ofXK"),a=i("3Pt+"),s=i("TEn/"),c=i("tyNb"),l=i("E2UR"),d=i("IjAw"),b=i("zHMj"),g=i("EhJz"),h=i("dndX"),u=i("OuL/"),p=i("9ig3"),f=i("/Tr7"),m=i("jIYg");function M(e,n){Object(m.a)(1,arguments);var t=e||{},o=Object(f.a)(t.start),i=Object(f.a)(t.end),r=i.getTime();if(!(o.getTime()<=r))throw new RangeError("Invalid interval");var a=[],s=o;s.setHours(0,0,0,0);var c=n&&"step"in n?Number(n.step):1;if(c<1||isNaN(c))throw new RangeError("`options.step` must be a number greater than 1");for(;s.getTime()<=r;)a.push(Object(f.a)(s)),s.setDate(s.getDate()+c),s.setHours(0,0,0,0);return a}var k=i("lJxs"),_=i("4dfA"),y=i("mYIz"),w=i("tJKL"),x=i("mgGq"),v=i("fXoL"),O=i("l7P3"),C=i("mrZj"),N=i("sYmb");function P(e,n){if(1&e){var t=v.Ob();v.Nb(0,"ion-button",4),v.Vb("click",function(){return v.kc(t),v.Xb().bookingInfo()}),v.Jb(1,"ion-icon",5),v.Mb()}}var S=function(e,n,t){return[e,n,t]};function I(e,n){if(1&e){var t=v.Ob();v.Nb(0,"div",6),v.Vb("click",function(){v.kc(t);var e=n.$implicit;return v.Xb().bookingInfo(e)}),v.Mb()}if(2&e){var o=n.$implicit;v.dc("ngClass",v.hc(1,S,"status-background-color_"+o.bookingStep,"shedule-item__info_"+o.info,"shedule-item__info_"+o.bookingStep))}}function Y(e,n){if(1&e){var t=v.Ob();v.Nb(0,"ion-button",7),v.Vb("click",function(){return v.kc(t),v.Xb().bookingInfo()}),v.Jb(1,"ion-icon",5),v.Mb()}}var R,D=((R=function(){function n(t){e(this,n),this.router=t}return t(n,[{key:"ngOnInit",value:function(){}},{key:"bookingInfo",value:function(e){this.router.navigate(e?["/","shedule","edit",e._id]:["/","shedule","new",this.room_id,this.date])}}]),n}()).\u0275fac=function(e){return new(e||R)(v.Ib(c.g))},R.\u0275cmp=v.Cb({type:R,selectors:[["app-shedule-item"]],inputs:{bookings:"bookings",date:"date",room_id:"room_id"},decls:4,vars:3,consts:[[1,"shedule-item"],["class","shedule-item__info ion-no-margin","fill","none","routerDirection","forward",3,"click",4,"ngIf"],["class","shedule-item__info",3,"ngClass","click",4,"ngFor","ngForOf"],["class","shedule-item__info ion-no-margin","fill","none","size","small","routerDirection","forward",3,"click",4,"ngIf"],["fill","none","routerDirection","forward",1,"shedule-item__info","ion-no-margin",3,"click"],["slot","icon-only","size","small","name","add-circle-outline","color","success"],[1,"shedule-item__info",3,"ngClass","click"],["fill","none","size","small","routerDirection","forward",1,"shedule-item__info","ion-no-margin",3,"click"]],template:function(e,n){1&e&&(v.Nb(0,"div",0),v.nc(1,P,2,0,"ion-button",1),v.nc(2,I,1,5,"div",2),v.nc(3,Y,2,0,"ion-button",3),v.Mb()),2&e&&(v.yb(1),v.dc("ngIf",!n.bookings||!n.bookings.length),v.yb(1),v.dc("ngForOf",n.bookings),v.yb(1),v.dc("ngIf",1===(null==n.bookings?null:n.bookings.length)&&"end"===n.bookings[0].info))},directives:[r.n,r.m,s.f,s.r,r.l],styles:["ion-button[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px}.shedule-item[_ngcontent-%COMP%]{height:100%;display:flex;flex-flow:row nowrap;align-items:center}.shedule-item__info[_ngcontent-%COMP%]{height:1.5em;font-size:13px;font-weight:500;flex:1 1 auto}.shedule-item__info_start[_ngcontent-%COMP%]{border-radius:10px 0 0 10px}.shedule-item__info_ahead[_ngcontent-%COMP%], .shedule-item__info_start[_ngcontent-%COMP%]{border-right:.5px solid #d3d3d3}.shedule-item__info_end[_ngcontent-%COMP%]{border-radius:0 10px 10px 0}.shedule-item__date[_ngcontent-%COMP%]{position:absolute;left:2px;top:2px}"]}),R);function z(e,n){if(1&e){var t=v.Ob();v.Nb(0,"ion-datetime",14),v.Vb("ngModelChange",function(e){return v.kc(t),v.Xb().pickedMonth=e})("ionChange",function(){return v.kc(t),v.Xb().onMonthChange()}),v.Mb()}if(2&e){var o=v.Xb();v.ec("monthNames",o.monthNames),v.dc("max",o.maxPickedMonth)("ngModel",o.pickedMonth)}}function F(e,n){if(1&e&&(v.Nb(0,"ion-col",15),v.oc(1),v.Yb(2,"date"),v.Mb()),2&e){var t=n.$implicit;v.yb(1),v.qc(" ",v.ac(2,1,t,"dd ")," ")}}function j(e,n){if(1&e&&(v.Nb(0,"ion-col",19),v.Jb(1,"app-shedule-item",20),v.Yb(2,"async"),v.Mb()),2&e){var t=n.$implicit,o=v.Xb().$implicit,i=v.Xb();v.yb(1),v.dc("bookings",v.Zb(2,3,i.getBookings(o._id,t)))("date",t)("room_id",o._id)}}function T(e,n){if(1&e&&(v.Nb(0,"ion-item"),v.Nb(1,"ion-grid"),v.Nb(2,"ion-row",16),v.Nb(3,"ion-col",17),v.oc(4),v.Mb(),v.nc(5,j,3,5,"ion-col",18),v.Mb(),v.Mb(),v.Mb()),2&e){var t=n.$implicit,o=v.Xb();v.yb(4),v.qc(" ",t.name," "),v.yb(1),v.dc("ngForOf",o.selectedRange)}}var A,L,K,X=[{path:"",component:(A=function(){function n(t,o,i){e(this,n),this.store=t,this.sheduleService=o,this.translate=i,this.pickedMonth=this.sheduleService.convertDateToShort(new Date),this.maxPickedMonth=this.sheduleService.convertDateToShort(d.a(new Date,{years:1})),this.range=[],this.selectedRange=[],this.updated=!0,this.daysInSelectedArray=10,this.knobs={lower:0,upper:this.daysInSelectedArray-1},this.knobChangedProgrammatically=!1}return t(n,[{key:"ngOnInit",value:function(){var e=this,n=new Date;this.createRange(n),this.createSelectedRange(this.knobs),this.translate.stream("elements.datePicker.monthNames").subscribe(function(n){e.updated=!1,e.monthNames=n,setTimeout(function(){return e.updated=!0},1)}),this.store.select(x.a).subscribe(function(n){n&&(e.rooms=n.rooms)},function(e){return console.log("load rooms err",e)}),this.lang=this.translate.currentLang}},{key:"ionViewWillEnter",value:function(){var e=this;this.store.dispatch(new y.f),this.store.dispatch(new _.a({dateRangeLimits:this.createRangeLimits(),bookingStep:{expr:"$ne",val:"cancelled"}})),this.updated=!1,setTimeout(function(){return e.updated=!0},1)}},{key:"getBookings",value:function(e,n){return this.store.select(w.a).pipe(Object(k.a)(function(t){return t.filter(function(n){return n.room_id===e}).map(function(e){return b.a(new Date(n),new Date(e.dates.from))?Object.assign(Object.assign({},e),{info:"start"}):b.a(new Date(n),new Date(e.dates.to))?Object.assign(Object.assign({},e),{info:"end"}):g.a(new Date(n),new Date(e.dates.from))&&h.a(new Date(n),new Date(e.dates.to))?Object.assign(Object.assign({},e),{info:"ahead"}):void 0}).filter(function(e){return e}).sort(function(e,n){return new Date(e.dates.from).getTime()-new Date(n.dates.from).getTime()}).map(function(e){return e})}))}},{key:"onMonthChange",value:function(){var e=new Date(this.pickedMonth);this.createRange(e),this.createSelectedRange({lower:0,upper:9}),this.store.dispatch(new _.a({dateRangeLimits:this.createRangeLimits(),bookingStep:{expr:"$ne",val:"cancelled"}}))}},{key:"onRangeChange",value:function(e){this.knobChangedProgrammatically?this.knobChangedProgrammatically=!1:(this.knobs=this.knobs.lower!==this.selectedRangeKnobs.lower?this.knobs.lower<0?{lower:0,upper:this.daysInSelectedArray-1}:this.knobs.lower>this.rangeKnobs.upper-this.daysInSelectedArray-1?{lower:this.rangeKnobs.upper-this.daysInSelectedArray+1,upper:this.rangeKnobs.upper}:{lower:this.knobs.lower,upper:this.knobs.lower+this.daysInSelectedArray-1}:this.knobs.upper>this.rangeKnobs.upper?{lower:this.rangeKnobs.upper-this.daysInSelectedArray-1,upper:this.rangeKnobs.upper}:this.knobs.upper<this.daysInSelectedArray?{lower:0,upper:this.daysInSelectedArray-1}:{lower:this.knobs.upper-this.daysInSelectedArray+1,upper:this.knobs.upper},this.createSelectedRange(this.knobs),this.knobChangedProgrammatically=!0)}},{key:"createRangeLimits",value:function(){return{lower:this.range[0],upper:this.range[this.range.length-1]}}},{key:"createRange",value:function(e){var n=this,t=u.a(e),o=p.a(e),i=d.a(o,{days:t-1});this.range=M({start:o,end:i}).map(function(e){return n.sheduleService.convertDateToShort(e)}),this.rangeKnobs={lower:0,upper:this.range.length-1}}},{key:"createSelectedRange",value:function(e){var n=this;this.selectedRange=M({start:this.sheduleService.convertShortToDate(this.range[e.lower]),end:this.sheduleService.convertShortToDate(this.range[e.upper])}).map(function(e){return n.sheduleService.convertDateToShort(e)}),this.selectedRangeKnobs={lower:e.lower,upper:e.upper}}},{key:"switchLanguage",value:function(){this.lang="en"===this.lang?"uk":"en",this.translate.use(this.lang)}}]),n}(),A.\u0275fac=function(e){return new(e||A)(v.Ib(O.i),v.Ib(C.a),v.Ib(N.d))},A.\u0275cmp=v.Cb({type:A,selectors:[["app-shedule"]],decls:48,vars:40,consts:[["color","primary"],["slot","end"],["color","primary","button","","lines","none",3,"click"],["name","earth-outline","slot","start"],["size-md","6","offset-md","3"],["pickerFormat","MMMM-YYYY","displayFormat","MMMM YYYY","placeholder","Select Month",3,"max","ngModel","monthNames","ngModelChange","ionChange",4,"ngIf"],["color","secondary","snaps","true","dualKnobs","true",3,"min","step","max","ngModel","ngModelChange","ionChange"],["slot","start",1,"ion-text-end"],["color","secondary"],["slot","end",1,"ion-text-start"],[1,"shedule-header"],["size","2",1,"ion-no-padding","shedule-header__range"],["class","ion-no-padding ion-text-center shedule-header__date","size","1",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["pickerFormat","MMMM-YYYY","displayFormat","MMMM YYYY","placeholder","Select Month",3,"max","ngModel","monthNames","ngModelChange","ionChange"],["size","1",1,"ion-no-padding","ion-text-center","shedule-header__date"],[1,"shedule-body"],["size","2",1,"ion-no-padding","ion-text-center","shedule-body__room-name"],["class","ion-no-padding","size","1",4,"ngFor","ngForOf"],["size","1",1,"ion-no-padding"],[3,"bookings","date","room_id"]],template:function(e,n){1&e&&(v.Nb(0,"ion-header"),v.Nb(1,"ion-toolbar",0),v.Nb(2,"ion-title"),v.oc(3),v.Yb(4,"translate"),v.Mb(),v.Nb(5,"ion-buttons",1),v.Nb(6,"ion-item",2),v.Vb("click",function(){return n.switchLanguage()}),v.Jb(7,"ion-icon",3),v.Nb(8,"ion-label"),v.oc(9),v.Yb(10,"translate"),v.Mb(),v.Mb(),v.Mb(),v.Mb(),v.Mb(),v.Nb(11,"ion-content"),v.Nb(12,"ion-grid"),v.Nb(13,"ion-row"),v.Nb(14,"ion-col",4),v.Nb(15,"ion-list"),v.Nb(16,"ion-item"),v.Nb(17,"ion-label"),v.oc(18),v.Yb(19,"translate"),v.Mb(),v.nc(20,z,1,3,"ion-datetime",5),v.Mb(),v.Nb(21,"ion-item"),v.Nb(22,"ion-range",6),v.Vb("ngModelChange",function(e){return n.knobs=e})("ionChange",function(e){return n.onRangeChange(e)}),v.Nb(23,"ion-label",7),v.Nb(24,"ion-text"),v.oc(25),v.Yb(26,"date"),v.Mb(),v.Nb(27,"ion-text",8),v.Nb(28,"h2",8),v.oc(29),v.Yb(30,"date"),v.Mb(),v.Mb(),v.Mb(),v.Nb(31,"ion-label",9),v.Nb(32,"ion-text"),v.oc(33),v.Yb(34,"date"),v.Mb(),v.Nb(35,"ion-text",8),v.Nb(36,"h2",8),v.oc(37),v.Yb(38,"date"),v.Mb(),v.Mb(),v.Mb(),v.Mb(),v.Mb(),v.Nb(39,"ion-item"),v.Nb(40,"ion-grid"),v.Nb(41,"ion-row",10),v.Nb(42,"ion-col",11),v.oc(43),v.Yb(44,"date"),v.Yb(45,"date"),v.Mb(),v.nc(46,F,3,4,"ion-col",12),v.Mb(),v.Mb(),v.Mb(),v.nc(47,T,6,2,"ion-item",13),v.Mb(),v.Mb(),v.Mb(),v.Mb(),v.Mb()),2&e&&(v.yb(3),v.pc(v.Zb(4,16,"modules.shedule.title")),v.yb(6),v.pc(v.Zb(10,18,"language")),v.yb(9),v.pc(v.Zb(19,20,"elements.datePicker.chooseMonth")),v.yb(2),v.dc("ngIf",n.updated),v.yb(2),v.dc("min",0)("step",1)("max",n.range.length-1)("ngModel",n.knobs),v.yb(3),v.pc(v.ac(26,22,n.range[0],"dd MMM")),v.yb(4),v.qc(" ",v.ac(30,25,n.range[n.knobs.lower],"dd MMM")," "),v.yb(4),v.pc(v.ac(34,28,n.range[n.range.length-1],"dd MMM")),v.yb(4),v.qc(" ",v.ac(38,31,n.range[n.knobs.upper],"dd MMM")," "),v.yb(6),v.rc(" ",v.ac(44,34,n.selectedRange[0],"dd.MM")," - ",v.ac(45,37,n.selectedRange[n.selectedRange.length-1],"dd.MM")," "),v.yb(3),v.dc("ngForOf",n.selectedRange),v.yb(1),v.dc("ngForOf",n.rooms))},directives:[s.q,s.T,s.R,s.g,s.t,s.r,s.z,s.n,s.p,s.J,s.m,s.A,r.n,s.H,s.cb,a.k,a.m,s.Q,r.m,s.o,D],pipes:[N.c,r.e,r.b],styles:[".day[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;height:45px}.day__cell[_ngcontent-%COMP%]{border-right:1px solid #dfd6d6;border-bottom:1px solid #dfd6d6;border-radius:5px;flex:1 1 auto;text-align:center;padding:5px}.shedule-header[_ngcontent-%COMP%]{font-size:14px;font-weight:500;display:flex;flex-flow:row nowrap;align-items:center;justify-content:center}.shedule-header__date[_ngcontent-%COMP%]{border-left:.5px solid #d3d3d3}.shedule-body__room-name[_ngcontent-%COMP%]{min-height:2.1em;font-size:13px;font-weight:500}.block[_ngcontent-%COMP%]{border:1px solid grey;margin:4px 2px;height:36px;font-size:14px;font-weight:500;letter-spacing:.06em;text-transform:uppercase}.block_small[_ngcontent-%COMP%]{height:2.1em;font-size:13px}.block_large[_ngcontent-%COMP%]{height:2.8em;font-size:20px}.small[_ngcontent-%COMP%]{width:27px;height:27px}.mid[_ngcontent-%COMP%], .small[_ngcontent-%COMP%]{border:1px solid grey;margin:4px 2px}.mid[_ngcontent-%COMP%]{width:36px;height:36px}.big[_ngcontent-%COMP%]{width:56px;height:56px;border:1px solid grey;margin:4px 2px}.flex-container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}.flex-container__button[_ngcontent-%COMP%]{flex:1 1 auto}.free[_ngcontent-%COMP%]{background:linear-gradient(to bottom right,rgba(0,255,0,.1) 0,rgba(0,255,0,.7) 8%,rgba(0,255,0,0) 10%,transparent),linear-gradient(to top left,rgba(0,255,0,.1) 0,rgba(0,255,0,.7) 10%,rgba(0,255,0,0) 15%,transparent)}.free_morning[_ngcontent-%COMP%]{background:linear-gradient(to bottom right,rgba(0,255,0,.1) 0,rgba(0,255,0,.7) 8%,rgba(0,255,0,0) 10%,transparent),linear-gradient(to top left,rgba(255,0,0,.1) 0,rgba(255,0,0,.7) 10%,rgba(255,0,0,0) 15%,transparent)}.free_evening[_ngcontent-%COMP%]{background:linear-gradient(to bottom right,rgba(255,0,0,.1) 0,rgba(255,0,0,.7) 8%,rgba(255,0,0,0) 10%,transparent),linear-gradient(to top left,rgba(0,255,0,.1) 0,rgba(0,255,0,.7) 10%,rgba(0,255,0,0) 15%,transparent)}.free_none[_ngcontent-%COMP%]{background:linear-gradient(to bottom right,rgba(255,0,0,.1) 0,rgba(255,0,0,.7) 8%,rgba(255,0,0,0) 10%,transparent),linear-gradient(to top left,rgba(255,0,0,.1) 0,rgba(255,0,0,.7) 10%,rgba(255,0,0,0) 15%,transparent)}"]}),A)},{path:"new/:roomId/:date",loadChildren:function(){return Promise.all([i.e(0),i.e(2)]).then(i.bind(null,"LOB2")).then(function(e){return e.BookingFormPageModule})},canLoad:[l.a],canActivate:[l.a]},{path:"edit/:bookingId",loadChildren:function(){return Promise.all([i.e(0),i.e(2)]).then(i.bind(null,"LOB2")).then(function(e){return e.BookingFormPageModule})}},{path:"**",redirectTo:"",pathMatch:"full"}],J=((K=function n(){e(this,n)}).\u0275mod=v.Gb({type:K}),K.\u0275inj=v.Fb({factory:function(e){return new(e||K)},imports:[[c.k.forChild(X)],c.k]}),K),$=((L=function n(){e(this,n)}).\u0275mod=v.Gb({type:L}),L.\u0275inj=v.Fb({factory:function(e){return new(e||L)},imports:[[r.c,a.h,s.U,J,N.b.forChild({extend:!0})]]}),L)}}])}();