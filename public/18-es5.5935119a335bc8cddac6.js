!function(){function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function o(n,o){for(var e=0;e<o.length;e++){var t=o[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function e(n,e,t){return e&&o(n.prototype,e),t&&o(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"M/w1":function(o,t,i){"use strict";i.r(t),i.d(t,"LoginFormPageModule",function(){return V});var r=i("ofXK"),c=i("3Pt+"),s=i("TEn/"),a=i("tyNb"),u=i("mYIz"),b=i("fXoL"),l=i("d6tv"),p=i("l7P3"),m=["loginFormDirective"];function g(n,o){if(1&n&&(b.Nb(0,"ion-text",14),b.lc(1),b.Yb(2,"json"),b.Mb()),2&n){var e=b.Xb();b.yb(1),b.nc(" ",b.Zb(2,1,e.loginForm.get("login").errors)," ")}}function d(n,o){if(1&n&&(b.Nb(0,"ion-text",14),b.lc(1),b.Yb(2,"json"),b.Mb()),2&n){var e=b.Xb();b.yb(1),b.nc(" ",b.Zb(2,1,e.loginForm.get("password").errors)," ")}}var f,y=((f=function(){function o(e,t,i){n(this,o),this.userService=e,this.router=t,this.store=i,this.inputType="password"}return e(o,[{key:"ngOnInit",value:function(){this.loginForm=new c.e({login:new c.c("",{updateOn:"change",validators:[c.o.pattern("^[a-zA-Z0-9_\\-]{2,60}$"),c.o.minLength(2),c.o.maxLength(60),c.o.required]}),password:new c.c("",{updateOn:"change",validators:[c.o.pattern("^[a-zA-Z0-9_\\-]{8,60}$"),c.o.minLength(8),c.o.maxLength(60),c.o.required]})})}},{key:"switchInputType",value:function(){this.inputType="password"===this.inputType?"text":"password"}},{key:"onLogin",value:function(){var n={login:this.loginForm.get("login").value,password:this.loginForm.get("password").value};this.store.dispatch(new u.g({user:n})),this.resetForm()}},{key:"resetForm",value:function(){this.loginFormDirective&&this.loginFormDirective.resetForm()}}]),o}()).\u0275fac=function(n){return new(n||f)(b.Ib(l.a),b.Ib(a.g),b.Ib(p.i))},f.\u0275cmp=b.Cb({type:f,selectors:[["app-login-form"]],viewQuery:function(n,o){var e;1&n&&b.pc(m,!0),2&n&&b.gc(e=b.Wb())&&(o.loginFormDirective=e.first)},decls:36,vars:6,consts:[[3,"formGroup"],["loginFormDirective","ngForm"],["size-md","6","offset-md","3"],[1,"ion-text-center"],["button","","color","primary","routerLink","/user/login/signup"],["name","person-outline","slot","start",1,"ion-align-self-center"],["position","floating"],["type","text","autocomplete","","autocorrect","","formControlName","login"],["class","input-error","color","danger",4,"ngIf"],["lines","none"],["name","lock-closed-outline","slot","start",1,"ion-align-self-center"],["autocomplete","","autocorrect","","formControlName","password",3,"type"],["slot","end",1,"ion-align-self-center",3,"name","click"],["expand","block",3,"disabled","click"],["color","danger",1,"input-error"]],template:function(n,o){1&n&&(b.Nb(0,"ion-header"),b.Nb(1,"ion-toolbar"),b.Nb(2,"ion-title"),b.lc(3,"Login"),b.Mb(),b.Mb(),b.Mb(),b.Nb(4,"ion-content"),b.Nb(5,"form",0,1),b.Nb(7,"ion-grid"),b.Nb(8,"ion-row"),b.Nb(9,"ion-col",2),b.Nb(10,"ion-card"),b.Nb(11,"ion-card-header"),b.Nb(12,"ion-card-title",3),b.lc(13,"Login"),b.Mb(),b.Nb(14,"ion-card-subtitle",3),b.Nb(15,"a",4),b.lc(16,"or Signup"),b.Mb(),b.Mb(),b.Mb(),b.Nb(17,"ion-card-content"),b.Nb(18,"ion-list"),b.Nb(19,"ion-item"),b.Jb(20,"ion-icon",5),b.Nb(21,"ion-label",6),b.lc(22,"Login"),b.Mb(),b.Jb(23,"ion-input",7),b.Mb(),b.kc(24,g,3,3,"ion-text",8),b.Nb(25,"ion-item",9),b.Jb(26,"ion-icon",10),b.Nb(27,"ion-label",6),b.lc(28,"Password"),b.Mb(),b.Jb(29,"ion-input",11),b.Nb(30,"ion-icon",12),b.Vb("click",function(){return o.switchInputType()}),b.Mb(),b.Mb(),b.kc(31,d,3,3,"ion-text",8),b.Mb(),b.Mb(),b.Mb(),b.Nb(32,"ion-row"),b.Nb(33,"ion-col"),b.Nb(34,"ion-button",13),b.Vb("click",function(){return o.onLogin()}),b.lc(35," Login "),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb()),2&n&&(b.yb(5),b.dc("formGroup",o.loginForm),b.yb(19),b.dc("ngIf",o.loginForm.get("login").touched&&o.loginForm.get("login").errors),b.yb(5),b.dc("type",o.inputType),b.yb(1),b.dc("name","password"===o.inputType?"eye-outline":"eye-off-outline"),b.yb(1),b.dc("ngIf",o.loginForm.get("password").touched&&o.loginForm.get("password").errors),b.yb(3),b.dc("disabled","INVALID"===o.loginForm.status))},directives:[s.p,s.O,s.N,s.m,c.p,c.l,c.f,s.o,s.G,s.l,s.g,s.i,s.k,s.j,a.j,s.V,s.h,s.x,s.s,s.q,s.w,s.r,s.X,c.k,c.d,r.n,s.e,s.M],pipes:[r.g],styles:[""]}),f),h=i("XNiG"),N=i("vkgz"),v=i("eIep"),w=i("JX91"),M=i("pLZG"),F=i("IzEk"),k=["signupFormDirective"];function I(n,o){if(1&n&&(b.Nb(0,"ion-text",22),b.lc(1),b.Yb(2,"json"),b.Mb()),2&n){var e=b.Xb(2);b.yb(1),b.nc(" ",b.Zb(2,1,e.signupForm.get("companyName").errors)," ")}}function x(n,o){if(1&n&&(b.Nb(0,"ion-text",22),b.lc(1),b.Yb(2,"json"),b.Mb()),2&n){var e=b.Xb(2);b.yb(1),b.nc(" ",b.Zb(2,1,e.signupForm.get("login").errors)," ")}}function L(n,o){if(1&n&&(b.Nb(0,"ion-text",22),b.lc(1),b.Yb(2,"json"),b.Mb()),2&n){var e=b.Xb(2);b.yb(1),b.nc(" ",b.Zb(2,1,e.signupForm.get("email").errors)," ")}}function j(n,o){if(1&n&&(b.Nb(0,"ion-text",22),b.lc(1),b.Yb(2,"json"),b.Mb()),2&n){var e=b.Xb(2);b.yb(1),b.nc(" ",b.Zb(2,1,e.signupForm.get("password").errors)," ")}}function C(n,o){1&n&&b.Jb(0,"ion-icon",23),2&n&&b.dc("name","checkmark-done-outline")}function O(n,o){if(1&n&&(b.Nb(0,"ion-text",22),b.lc(1),b.Yb(2,"json"),b.Mb()),2&n){var e=b.Xb(2);b.yb(1),b.nc(" ",b.Zb(2,1,e.signupForm.get("passwordConfirm").errors)," ")}}function S(n,o){if(1&n){var e=b.Ob();b.Nb(0,"form",1,2),b.Nb(2,"ion-grid"),b.Nb(3,"ion-row"),b.Nb(4,"ion-col",3),b.Nb(5,"ion-card"),b.Nb(6,"ion-card-header"),b.Nb(7,"ion-card-title",4),b.lc(8,"Signup"),b.Mb(),b.Nb(9,"ion-card-subtitle",4),b.Nb(10,"a",5),b.lc(11,"or Login"),b.Mb(),b.Mb(),b.Mb(),b.Nb(12,"ion-card-content"),b.Nb(13,"ion-list"),b.Nb(14,"ion-item"),b.Jb(15,"ion-icon",6),b.Nb(16,"ion-label",7),b.lc(17,"Company name"),b.Mb(),b.Jb(18,"ion-input",8),b.Mb(),b.kc(19,I,3,3,"ion-text",9),b.Nb(20,"ion-item"),b.Jb(21,"ion-icon",10),b.Nb(22,"ion-label",7),b.lc(23,"Login"),b.Mb(),b.Jb(24,"ion-input",11),b.Mb(),b.kc(25,x,3,3,"ion-text",9),b.Nb(26,"ion-item"),b.Jb(27,"ion-icon",12),b.Nb(28,"ion-label",7),b.lc(29,"Email"),b.Mb(),b.Jb(30,"ion-input",13),b.Mb(),b.kc(31,L,3,3,"ion-text",9),b.Nb(32,"ion-item",14),b.Jb(33,"ion-icon",15),b.Nb(34,"ion-label",7),b.lc(35,"Password"),b.Mb(),b.Jb(36,"ion-input",16),b.Nb(37,"ion-icon",17),b.Vb("click",function(){return b.hc(e),b.Xb().switchInputType()}),b.Mb(),b.Mb(),b.kc(38,j,3,3,"ion-text",9),b.Nb(39,"ion-item",14),b.Jb(40,"ion-icon",18),b.Nb(41,"ion-label",7),b.lc(42,"Password Confirm"),b.Mb(),b.Jb(43,"ion-input",19),b.kc(44,C,1,1,"ion-icon",20),b.Mb(),b.kc(45,O,3,3,"ion-text",9),b.Mb(),b.Mb(),b.Mb(),b.Nb(46,"ion-row"),b.Nb(47,"ion-col"),b.Nb(48,"ion-button",21),b.Vb("click",function(){return b.hc(e),b.Xb().formSubmitSubject$.next()}),b.lc(49," Signup "),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb()}if(2&n){var t=b.Xb();b.dc("formGroup",t.signupForm),b.yb(19),b.dc("ngIf",t.signupForm.get("companyName").touched&&t.signupForm.get("companyName").errors&&!t.signupForm.get("companyName").errors.unique),b.yb(6),b.dc("ngIf",t.signupForm.get("login").touched&&t.signupForm.get("login").errors),b.yb(6),b.dc("ngIf",t.signupForm.get("email").touched&&t.signupForm.get("email").errors),b.yb(5),b.dc("type",t.inputType),b.yb(1),b.dc("name","password"===t.inputType?"eye-outline":"eye-off-outline"),b.yb(1),b.dc("ngIf",t.signupForm.get("password").touched&&t.signupForm.get("password").errors),b.yb(5),b.dc("type",t.inputType),b.yb(1),b.dc("ngIf","VALID"===t.signupForm.get("passwordConfirm").status),b.yb(1),b.dc("ngIf",t.signupForm.get("passwordConfirm").touched&&t.signupForm.get("passwordConfirm").errors),b.yb(3),b.dc("disabled","INVALID"===t.signupForm.status||"PENDING"===t.signupForm.status)}}var J,T,D,X,z=((J=function(){function o(e,t){n(this,o),this.userService=e,this.router=t,this.inputType="password",this.formSubmitSubject$=new h.a}return e(o,[{key:"ngOnInit",value:function(){var n=this;this.signupForm=new c.e({companyName:new c.c("",{updateOn:"blur",validators:[c.o.pattern("^[a-zA-Z0-9 _\\-]{2,60}$"),c.o.minLength(2),c.o.maxLength(60),c.o.required],asyncValidators:[this.userService.checkCompanyNameUnique()]}),login:new c.c("",{updateOn:"blur",validators:[c.o.pattern("^[a-zA-Z0-9_\\-]{2,60}$"),c.o.minLength(2),c.o.maxLength(60),c.o.required],asyncValidators:[this.userService.checkLoginUnique()]}),password:new c.c("",{updateOn:"change",validators:[c.o.pattern("^[a-zA-Z0-9_\\-]{8,60}$"),c.o.minLength(8),c.o.maxLength(60),c.o.required]}),passwordConfirm:new c.c("",{updateOn:"change",validators:[c.o.pattern("^[a-zA-Z0-9_\\-]{8,60}$"),c.o.minLength(8),c.o.maxLength(60),c.o.required]}),email:new c.c("",{updateOn:"blur",validators:[c.o.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),c.o.required],asyncValidators:[this.userService.checkEmailUnique()]})},this.userService.matchPassword),this.formSubmitSubject$.pipe(Object(N.a)(function(){return n.signupForm.markAsDirty()}),Object(v.a)(function(){return n.signupForm.statusChanges.pipe(Object(w.a)(n.signupForm.status),Object(M.a)(function(n){return"PENDING"!==n}),Object(F.a)(1))}),Object(M.a)(function(n){return"VALID"===n})).subscribe(function(o){return n.onSignup()})}},{key:"switchInputType",value:function(){this.inputType="password"===this.inputType?"text":"password"}},{key:"onSignup",value:function(){var n=this;this.userService.createCompany({companyName:this.signupForm.get("companyName").value,user:{login:this.signupForm.get("login").value,password:this.signupForm.get("password").value,email:this.signupForm.get("email").value}}).subscribe(function(o){return n.resetForm()},function(n){return console.log("signup Error",n.error)})}},{key:"resetForm",value:function(){this.signupFormDirective&&this.signupFormDirective.resetForm()}}]),o}()).\u0275fac=function(n){return new(n||J)(b.Ib(l.a),b.Ib(a.g))},J.\u0275cmp=b.Cb({type:J,selectors:[["app-signup-form"]],viewQuery:function(n,o){var e;1&n&&b.pc(k,!0),2&n&&b.gc(e=b.Wb())&&(o.signupFormDirective=e.first)},decls:6,vars:1,consts:[[3,"formGroup",4,"ngIf"],[3,"formGroup"],["signupFormDirective","ngForm"],["size-md","6","offset-md","3"],[1,"ion-text-center"],["button","","color","primary","routerLink","/user/login"],["name","podium-outline","slot","start",1,"ion-align-self-center"],["position","floating"],["type","text","autocomplete","","autocorrect","","formControlName","companyName"],["class","input-error","color","danger",4,"ngIf"],["name","person-outline","slot","start",1,"ion-align-self-center"],["type","text","autocomplete","","autocorrect","","formControlName","login"],["name","mail-outline","slot","start",1,"ion-align-self-center"],["type","email","autocomplete","","autocorrect","","formControlName","email"],["lines","none"],["name","lock-closed-outline","slot","start",1,"ion-align-self-center"],["autocomplete","","autocorrect","","formControlName","password",3,"type"],["slot","end",1,"ion-align-self-center",3,"name","click"],["name","reorder-two-outline","slot","start",1,"ion-align-self-center"],["autocomplete","","autocorrect","","formControlName","passwordConfirm",3,"type"],["class","ion-align-self-center","color","primary","slot","end",3,"name",4,"ngIf"],["expand","block",3,"disabled","click"],["color","danger",1,"input-error"],["color","primary","slot","end",1,"ion-align-self-center",3,"name"]],template:function(n,o){1&n&&(b.Nb(0,"ion-header"),b.Nb(1,"ion-toolbar"),b.Nb(2,"ion-title"),b.lc(3,"Signup"),b.Mb(),b.Mb(),b.Mb(),b.Nb(4,"ion-content"),b.kc(5,S,50,11,"form",0),b.Mb()),2&n&&(b.yb(5),b.dc("ngIf",o.signupForm))},directives:[s.p,s.O,s.N,s.m,r.n,c.p,c.l,c.f,s.o,s.G,s.l,s.g,s.i,s.k,s.j,a.j,s.V,s.h,s.x,s.s,s.q,s.w,s.r,s.X,c.k,c.d,s.e,s.M],pipes:[r.g],styles:[""]}),J),A=i("lJxs"),Z=((T=function(){function o(e,t,i){n(this,o),this.userService=e,this.router=t,this.store=i}return e(o,[{key:"canActivate",value:function(n,o){var e=this;return this.store.select("user").pipe(Object(A.a)(function(n){return!n.user||(e.router.navigateByUrl("/"),!1)}))}}]),o}()).\u0275fac=function(n){return new(n||T)(b.Rb(l.a),b.Rb(a.g),b.Rb(p.i))},T.\u0275prov=b.Eb({token:T,factory:T.\u0275fac,providedIn:"root"}),T),q=[{path:"",component:y,canActivate:[Z]},{path:"signup",component:z,canActivate:[Z]},{path:"**",redirectTo:"",pathMatch:"full"}],G=((X=function o(){n(this,o)}).\u0275mod=b.Gb({type:X}),X.\u0275inj=b.Fb({factory:function(n){return new(n||X)},imports:[[a.k.forChild(q)],a.k]}),X),V=((D=function o(){n(this,o)}).\u0275mod=b.Gb({type:D}),D.\u0275inj=b.Fb({factory:function(n){return new(n||D)},imports:[[r.c,c.n,s.P,G]]}),D)}}])}();