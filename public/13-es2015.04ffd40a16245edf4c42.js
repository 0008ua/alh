(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{XoyV:function(e,t,r){"use strict";r.r(t),r.d(t,"DashboardModule",function(){return m});var a=r("ofXK"),o=r("3Pt+"),n=r("TEn/"),i=r("tyNb"),c=r("lJxs"),s=r("IzEk"),u=r("fXoL"),l=r("d6tv"),d=r("l7P3");let h=(()=>{class e{constructor(e,t,r){this.userService=e,this.router=t,this.store=r}canLoad(e,t){return this.store.select("user").pipe(Object(c.a)(e=>!(!e.user||"admin"!==e.user.role)||(this.router.navigateByUrl("/user/login"),!1)),Object(s.a)(1))}canActivate(e,t){return this.store.select("user").pipe(Object(c.a)(e=>!(!e.user||"admin"!==e.user.role)||(this.router.navigateByUrl("/user/login"),!1)))}}return e.\u0275fac=function(t){return new(t||e)(u.Rb(l.a),u.Rb(i.g),u.Rb(d.i))},e.\u0275prov=u.Eb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var p=r("E2UR"),b=r("9nZL");const f=[{path:"",redirectTo:"operator",pathMatch:"full",canLoad:[b.a],canActivate:[b.a]},{path:"operator",loadChildren:()=>Promise.all([r.e(0),r.e(14)]).then(r.bind(null,"Fl6X")).then(e=>e.OperatorPageModule),canLoad:[h],canActivate:[h]},{path:"room",loadChildren:()=>Promise.all([r.e(0),r.e(15)]).then(r.bind(null,"8auw")).then(e=>e.RoomPageModule),canLoad:[b.a,p.a],canActivate:[b.a,p.a]},{path:"**",redirectTo:"",pathMatch:"full"}];let v=(()=>{class e{}return e.\u0275mod=u.Gb({type:e}),e.\u0275inj=u.Fb({factory:function(t){return new(t||e)},imports:[[i.k.forChild(f)],i.k]}),e})(),m=(()=>{class e{}return e.\u0275mod=u.Gb({type:e}),e.\u0275inj=u.Fb({factory:function(t){return new(t||e)},imports:[[a.c,o.h,n.P,v]]}),e})()}}]);