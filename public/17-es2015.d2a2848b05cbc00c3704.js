(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"9ziR":function(e,n,t){"use strict";t.r(n),t.d(n,"ShedulePageModule",function(){return j});var o=t("ofXK"),i=t("3Pt+"),r=t("TEn/"),a=t("tyNb"),s=t("E2UR"),l=t("IjAw"),d=t("zHMj"),c=t("EhJz"),g=t("dndX"),b=t("OuL/"),h=t("9ig3"),p=t("/Tr7"),u=t("jIYg");function m(e,n){Object(u.a)(1,arguments);var t=e||{},o=Object(p.a)(t.start),i=Object(p.a)(t.end),r=i.getTime();if(!(o.getTime()<=r))throw new RangeError("Invalid interval");var a=[],s=o;s.setHours(0,0,0,0);var l=n&&"step"in n?Number(n.step):1;if(l<1||isNaN(l))throw new RangeError("`options.step` must be a number greater than 1");for(;s.getTime()<=r;)a.push(Object(p.a)(s)),s.setDate(s.getDate()+l),s.setHours(0,0,0,0);return a}var f=t("lJxs"),M=t("4dfA"),_=t("tJKL"),k=t("mgGq"),w=t("fXoL"),x=t("l7P3"),y=t("mrZj");function O(e,n){if(1&e){const e=w.Ob();w.Nb(0,"ion-button",4),w.Vb("click",function(){return w.hc(e),w.Xb().bookingInfo()}),w.Jb(1,"ion-icon",5),w.Mb()}}const C=function(e,n,t){return[e,n,t]};function N(e,n){if(1&e){const e=w.Ob();w.Nb(0,"div",6),w.Vb("click",function(){w.hc(e);const t=n.$implicit;return w.Xb().bookingInfo(t)}),w.Mb()}if(2&e){const e=n.$implicit;w.dc("ngClass",w.fc(1,C,"status-background-color_"+e.bookingStep,"shedule-item__info_"+e.info,"shedule-item__info_"+e.bookingStep))}}function P(e,n){if(1&e){const e=w.Ob();w.Nb(0,"ion-button",7),w.Vb("click",function(){return w.hc(e),w.Xb().bookingInfo()}),w.Jb(1,"ion-icon",5),w.Mb()}}let v=(()=>{class e{constructor(e){this.router=e}ngOnInit(){}bookingInfo(e){this.router.navigate(e?["/","shedule","edit",e._id]:["/","shedule","new",this.room_id,this.date])}}return e.\u0275fac=function(n){return new(n||e)(w.Ib(a.g))},e.\u0275cmp=w.Cb({type:e,selectors:[["app-shedule-item"]],inputs:{bookings:"bookings",date:"date",room_id:"room_id"},decls:4,vars:3,consts:[[1,"shedule-item"],["class","shedule-item__info ion-no-margin","fill","none","routerDirection","forward",3,"click",4,"ngIf"],["class","shedule-item__info",3,"ngClass","click",4,"ngFor","ngForOf"],["class","shedule-item__info ion-no-margin","fill","none","size","small","routerDirection","forward",3,"click",4,"ngIf"],["fill","none","routerDirection","forward",1,"shedule-item__info","ion-no-margin",3,"click"],["slot","icon-only","size","small","name","add-circle-outline","color","success"],[1,"shedule-item__info",3,"ngClass","click"],["fill","none","size","small","routerDirection","forward",1,"shedule-item__info","ion-no-margin",3,"click"]],template:function(e,n){1&e&&(w.Nb(0,"div",0),w.kc(1,O,2,0,"ion-button",1),w.kc(2,N,1,5,"div",2),w.kc(3,P,2,0,"ion-button",3),w.Mb()),2&e&&(w.yb(1),w.dc("ngIf",!n.bookings||!n.bookings.length),w.yb(1),w.dc("ngForOf",n.bookings),w.yb(1),w.dc("ngIf",1===(null==n.bookings?null:n.bookings.length)&&"end"===n.bookings[0].info))},directives:[o.n,o.m,r.e,r.q,o.l],styles:["ion-button[_ngcontent-%COMP%]{--padding-start:0px;--padding-end:0px}.shedule-item[_ngcontent-%COMP%]{height:100%;display:flex;flex-flow:row nowrap;align-items:center}.shedule-item__info[_ngcontent-%COMP%]{height:1.5em;font-size:13px;font-weight:500;flex:1 1 auto}.shedule-item__info_start[_ngcontent-%COMP%]{border-radius:10px 0 0 10px}.shedule-item__info_ahead[_ngcontent-%COMP%], .shedule-item__info_start[_ngcontent-%COMP%]{border-right:.5px solid #d3d3d3}.shedule-item__info_end[_ngcontent-%COMP%]{border-radius:0 10px 10px 0}.shedule-item__date[_ngcontent-%COMP%]{position:absolute;left:2px;top:2px}"]}),e})();function S(e,n){if(1&e&&(w.Nb(0,"ion-col",13),w.lc(1),w.Yb(2,"date"),w.Mb()),2&e){const e=n.$implicit;w.yb(1),w.nc(" ",w.ac(2,1,e,"dd ")," ")}}function I(e,n){if(1&e&&(w.Nb(0,"ion-col",17),w.Jb(1,"app-shedule-item",18),w.Yb(2,"async"),w.Mb()),2&e){const e=n.$implicit,t=w.Xb().$implicit,o=w.Xb();w.yb(1),w.dc("bookings",w.Zb(2,3,o.getBookings(t._id,e)))("date",e)("room_id",t._id)}}function R(e,n){if(1&e&&(w.Nb(0,"ion-item"),w.Nb(1,"ion-grid"),w.Nb(2,"ion-row",14),w.Nb(3,"ion-col",15),w.lc(4),w.Mb(),w.kc(5,I,3,5,"ion-col",16),w.Mb(),w.Mb(),w.Mb()),2&e){const e=n.$implicit,t=w.Xb();w.yb(4),w.nc(" ",e.name," "),w.yb(1),w.dc("ngForOf",t.selectedRange)}}const D=[{path:"",component:(()=>{class e{constructor(e,n){this.store=e,this.sheduleService=n,this.pickedMonth=this.sheduleService.convertDateToShort(new Date),this.maxPickedMonth=this.sheduleService.convertDateToShort(l.a(new Date,{years:1})),this.range=[],this.selectedRange=[],this.daysInSelectedArray=10,this.knobs={lower:0,upper:this.daysInSelectedArray-1},this.knobChangedProgrammatically=!1}ngOnInit(){const e=new Date;this.createRange(e),this.createSelectedRange(this.knobs),this.store.select(k.a).subscribe(e=>{e&&(this.rooms=e.rooms),console.log("rooms",this.rooms)},e=>console.log("load rooms err",e))}ionViewWillEnter(){this.store.dispatch(new M.a({dateRange:this.createRangeLimits(),bookingStep:{expr:"$ne",val:"cancelled"}}))}getBookings(e,n){return this.store.select(_.a).pipe(Object(f.a)(t=>t.filter(n=>n.room_id===e).map(e=>d.a(new Date(n),new Date(e.dates.from))?Object.assign(Object.assign({},e),{info:"start"}):d.a(new Date(n),new Date(e.dates.to))?Object.assign(Object.assign({},e),{info:"end"}):c.a(new Date(n),new Date(e.dates.from))&&g.a(new Date(n),new Date(e.dates.to))?Object.assign(Object.assign({},e),{info:"ahead"}):void 0).filter(e=>e).sort((e,n)=>new Date(e.dates.from).getTime()-new Date(n.dates.from).getTime()).map(e=>e)))}onMonthChange(){const e=new Date(this.pickedMonth);this.createRange(e),this.createSelectedRange({lower:0,upper:9}),this.store.dispatch(new M.a({dateRange:this.createRangeLimits(),bookingStep:{expr:"$ne",val:"cancelled"}}))}onRangeChange(e){if(this.knobChangedProgrammatically)return void(this.knobChangedProgrammatically=!1);const n=this.range[this.knobs.upper];this.knobs.lower!==this.selectedRangeKnobs.lower?(console.log("take lower",this.range[this.knobs.lower]),this.knobs=this.knobs.lower<0?{lower:0,upper:this.daysInSelectedArray-1}:this.knobs.lower>this.rangeKnobs.upper-this.daysInSelectedArray-1?{lower:this.rangeKnobs.upper-this.daysInSelectedArray+1,upper:this.rangeKnobs.upper}:{lower:this.knobs.lower,upper:this.knobs.lower+this.daysInSelectedArray-1}):(console.log("take upper",n),this.knobs=this.knobs.upper>this.rangeKnobs.upper?{lower:this.rangeKnobs.upper-this.daysInSelectedArray-1,upper:this.rangeKnobs.upper}:this.knobs.upper<this.daysInSelectedArray?{lower:0,upper:this.daysInSelectedArray-1}:{lower:this.knobs.upper-this.daysInSelectedArray+1,upper:this.knobs.upper}),this.createSelectedRange(this.knobs),this.knobChangedProgrammatically=!0}createRangeLimits(){return{lower:this.range[0],upper:this.range[this.range.length-1]}}createRange(e){const n=b.a(e),t=h.a(e),o=l.a(t,{days:n-1});this.range=m({start:t,end:o}).map(e=>this.sheduleService.convertDateToShort(e)),this.rangeKnobs={lower:0,upper:this.range.length-1}}createSelectedRange(e){this.selectedRange=m({start:this.sheduleService.convertShortToDate(this.range[e.lower]),end:this.sheduleService.convertShortToDate(this.range[e.upper])}).map(e=>this.sheduleService.convertDateToShort(e)),this.selectedRangeKnobs={lower:e.lower,upper:e.upper}}}return e.\u0275fac=function(n){return new(n||e)(w.Ib(x.i),w.Ib(y.a))},e.\u0275cmp=w.Cb({type:e,selectors:[["app-shedule"]],decls:42,vars:32,consts:[["color","primary"],["slot","end"],["contentId","main-content"],["size-md","6","offset-md","3"],["pickerFormat","MMMM-YYYY","displayFormat","MMMM YYYY","placeholder","Select Month",3,"max","ngModel","ngModelChange","ionChange"],["color","secondary","snaps","true","dualKnobs","true",3,"min","step","max","ngModel","ngModelChange","ionChange"],["slot","start",1,"ion-text-end"],["color","secondary"],["slot","end",1,"ion-text-start"],[1,"shedule-header"],["size","2",1,"ion-no-padding","shedule-header__range"],["class","ion-no-padding ion-text-center shedule-header__date","size","1",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["size","1",1,"ion-no-padding","ion-text-center","shedule-header__date"],[1,"shedule-body"],["size","2",1,"ion-no-padding","ion-text-center","shedule-body__room-name"],["class","ion-no-padding","size","1",4,"ngFor","ngForOf"],["size","1",1,"ion-no-padding"],[3,"bookings","date","room_id"]],template:function(e,n){1&e&&(w.Nb(0,"ion-header"),w.Nb(1,"ion-toolbar",0),w.Nb(2,"ion-title"),w.lc(3,"shedule"),w.Mb(),w.Nb(4,"ion-buttons",1),w.Jb(5,"ion-menu-button",2),w.Mb(),w.Mb(),w.Mb(),w.Nb(6,"ion-content"),w.Nb(7,"ion-grid"),w.Nb(8,"ion-row"),w.Nb(9,"ion-col",3),w.Nb(10,"ion-list"),w.Nb(11,"ion-item"),w.Nb(12,"ion-label"),w.lc(13,"Choose period"),w.Mb(),w.Nb(14,"ion-datetime",4),w.Vb("ngModelChange",function(e){return n.pickedMonth=e})("ionChange",function(){return n.onMonthChange()}),w.Mb(),w.Mb(),w.Nb(15,"ion-item"),w.Nb(16,"ion-range",5),w.Vb("ngModelChange",function(e){return n.knobs=e})("ionChange",function(e){return n.onRangeChange(e)}),w.Nb(17,"ion-label",6),w.Nb(18,"ion-text"),w.lc(19),w.Yb(20,"date"),w.Mb(),w.Nb(21,"ion-text",7),w.Nb(22,"h2",7),w.lc(23),w.Yb(24,"date"),w.Mb(),w.Mb(),w.Mb(),w.Nb(25,"ion-label",8),w.Nb(26,"ion-text"),w.lc(27),w.Yb(28,"date"),w.Mb(),w.Nb(29,"ion-text",7),w.Nb(30,"h2",7),w.lc(31),w.Yb(32,"date"),w.Mb(),w.Mb(),w.Mb(),w.Mb(),w.Mb(),w.Nb(33,"ion-item"),w.Nb(34,"ion-grid"),w.Nb(35,"ion-row",9),w.Nb(36,"ion-col",10),w.lc(37),w.Yb(38,"date"),w.Yb(39,"date"),w.Mb(),w.kc(40,S,3,4,"ion-col",11),w.Mb(),w.Mb(),w.Mb(),w.kc(41,R,6,2,"ion-item",12),w.Mb(),w.Mb(),w.Mb(),w.Mb(),w.Mb()),2&e&&(w.yb(14),w.dc("max",n.maxPickedMonth)("ngModel",n.pickedMonth),w.yb(2),w.dc("min",0)("step",1)("max",n.range.length-1)("ngModel",n.knobs),w.yb(3),w.mc(w.ac(20,14,n.range[0],"dd MMM")),w.yb(4),w.nc(" ",w.ac(24,17,n.range[n.knobs.lower],"dd MMM")," "),w.yb(4),w.mc(w.ac(28,20,n.range[n.range.length-1],"dd MMM")),w.yb(4),w.nc(" ",w.ac(32,23,n.range[n.knobs.upper],"dd MMM")," "),w.yb(6),w.oc(" ",w.ac(38,26,n.selectedRange[0],"dd.MM")," - ",w.ac(39,29,n.selectedRange[n.selectedRange.length-1],"dd.MM")," "),w.yb(3),w.dc("ngForOf",n.selectedRange),w.yb(1),w.dc("ngForOf",n.rooms))},directives:[r.p,r.O,r.N,r.f,r.A,r.m,r.o,r.G,r.l,r.x,r.s,r.w,r.n,r.W,i.k,i.m,r.E,r.M,o.m,v],pipes:[o.e,o.b],styles:[".day[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap;align-items:stretch;height:45px}.day__cell[_ngcontent-%COMP%]{border-right:1px solid #dfd6d6;border-bottom:1px solid #dfd6d6;border-radius:5px;flex:1 1 auto;text-align:center;padding:5px}.shedule-header[_ngcontent-%COMP%]{font-size:14px;font-weight:500;display:flex;flex-flow:row nowrap;align-items:center;justify-content:center}.shedule-header__date[_ngcontent-%COMP%]{border-left:.5px solid #d3d3d3}.shedule-body__room-name[_ngcontent-%COMP%]{min-height:2.1em;font-size:13px;font-weight:500}.block[_ngcontent-%COMP%]{border:1px solid grey;margin:4px 2px;height:36px;font-size:14px;font-weight:500;letter-spacing:.06em;text-transform:uppercase}.block_small[_ngcontent-%COMP%]{height:2.1em;font-size:13px}.block_large[_ngcontent-%COMP%]{height:2.8em;font-size:20px}.small[_ngcontent-%COMP%]{width:27px;height:27px}.mid[_ngcontent-%COMP%], .small[_ngcontent-%COMP%]{border:1px solid grey;margin:4px 2px}.mid[_ngcontent-%COMP%]{width:36px;height:36px}.big[_ngcontent-%COMP%]{width:56px;height:56px;border:1px solid grey;margin:4px 2px}.flex-container[_ngcontent-%COMP%]{display:flex;flex-flow:row nowrap}.flex-container__button[_ngcontent-%COMP%]{flex:1 1 auto}.free[_ngcontent-%COMP%]{background:linear-gradient(to bottom right,rgba(0,255,0,.1) 0,rgba(0,255,0,.7) 8%,rgba(0,255,0,0) 10%,transparent),linear-gradient(to top left,rgba(0,255,0,.1) 0,rgba(0,255,0,.7) 10%,rgba(0,255,0,0) 15%,transparent)}.free_morning[_ngcontent-%COMP%]{background:linear-gradient(to bottom right,rgba(0,255,0,.1) 0,rgba(0,255,0,.7) 8%,rgba(0,255,0,0) 10%,transparent),linear-gradient(to top left,rgba(255,0,0,.1) 0,rgba(255,0,0,.7) 10%,rgba(255,0,0,0) 15%,transparent)}.free_evening[_ngcontent-%COMP%]{background:linear-gradient(to bottom right,rgba(255,0,0,.1) 0,rgba(255,0,0,.7) 8%,rgba(255,0,0,0) 10%,transparent),linear-gradient(to top left,rgba(0,255,0,.1) 0,rgba(0,255,0,.7) 10%,rgba(0,255,0,0) 15%,transparent)}.free_none[_ngcontent-%COMP%]{background:linear-gradient(to bottom right,rgba(255,0,0,.1) 0,rgba(255,0,0,.7) 8%,rgba(255,0,0,0) 10%,transparent),linear-gradient(to top left,rgba(255,0,0,.1) 0,rgba(255,0,0,.7) 10%,rgba(255,0,0,0) 15%,transparent)}"]}),e})()},{path:"new/:roomId/:date",loadChildren:()=>t.e(2).then(t.bind(null,"LOB2")).then(e=>e.BookingFormPageModule),canLoad:[s.a],canActivate:[s.a]},{path:"edit/:bookingId",loadChildren:()=>t.e(2).then(t.bind(null,"LOB2")).then(e=>e.BookingFormPageModule)},{path:"**",redirectTo:"",pathMatch:"full"}];let z=(()=>{class e{}return e.\u0275mod=w.Gb({type:e}),e.\u0275inj=w.Fb({factory:function(n){return new(n||e)},imports:[[a.k.forChild(D)],a.k]}),e})(),j=(()=>{class e{}return e.\u0275mod=w.Gb({type:e}),e.\u0275inj=w.Fb({factory:function(n){return new(n||e)},imports:[[o.c,i.h,r.P,z]]}),e})()}}]);