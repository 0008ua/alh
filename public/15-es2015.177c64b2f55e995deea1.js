(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{Fl6X:function(o,e,t){"use strict";t.r(e),t.d(e,"OperatorPageModule",function(){return D});var n=t("ofXK"),i=t("3Pt+"),r=t("TEn/"),b=t("tyNb"),a=t("mrSG"),c=t("mgGq"),s=t("vtsq"),l=t("XNiG"),d=t("vkgz"),p=t("eIep"),m=t("JX91"),u=t("pLZG"),N=t("IzEk"),h=t("fXoL"),M=t("d6tv"),f=t("l7P3"),g=t("hlQ1");let y=(()=>{class o extends g.d{constructor(o,e){super("Operator",o),this.userService=e}formFieldOptions(o){return this.formFieldsOptions.get(o)}get formFieldsOptions(){return new Map([["email",{title:"Update email",subTitle:"Email",iconName:"mail-outline",inputLable:"Input email",inputType:"email",errors:new Map([["required","Required value"],["pattern","Entered wrong email"]]),formControl:{formState:"",validatorOrOpts:{updateOn:"blur",validators:[i.o.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),i.o.required],asyncValidators:[this.userService.checkEmailUnique()]}}}]])}}return o.\u0275fac=function(e){return new(e||o)(h.Rb(g.e),h.Rb(M.a))},o.\u0275prov=h.Eb({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const O=["addOperatorFormDirective"];function v(o,e){1&o&&h.Jb(0,"ion-progress-bar",22)}function w(o,e){if(1&o&&(h.Nb(0,"ion-text",23),h.lc(1),h.Yb(2,"json"),h.Mb()),2&o){const o=h.Xb(2);h.yb(1),h.nc(" ",h.Zb(2,1,o.addOperatorForm.get("login").errors)," ")}}function k(o,e){if(1&o&&(h.Nb(0,"ion-text",23),h.lc(1),h.Yb(2,"json"),h.Mb()),2&o){const o=h.Xb(2);h.yb(1),h.nc(" ",h.Zb(2,1,o.addOperatorForm.get("email").errors)," ")}}function F(o,e){if(1&o&&(h.Nb(0,"ion-text",23),h.lc(1),h.Yb(2,"json"),h.Mb()),2&o){const o=h.Xb(2);h.yb(1),h.nc(" ",h.Zb(2,1,o.addOperatorForm.get("password").errors)," ")}}function I(o,e){1&o&&h.Jb(0,"ion-icon",24),2&o&&h.dc("name","checkmark-done-outline")}function S(o,e){if(1&o&&(h.Nb(0,"ion-text",23),h.lc(1),h.Yb(2,"json"),h.Mb()),2&o){const o=h.Xb(2);h.yb(1),h.nc(" ",h.Zb(2,1,o.addOperatorForm.get("passwordConfirm").errors)," ")}}function x(o,e){if(1&o){const o=h.Ob();h.Nb(0,"form",3,4),h.Nb(2,"ion-grid"),h.Nb(3,"ion-row"),h.Nb(4,"ion-col",5),h.Nb(5,"ion-card"),h.Nb(6,"ion-card-header"),h.Nb(7,"ion-card-title",6),h.lc(8,"Add company user"),h.Mb(),h.kc(9,v,1,0,"ion-progress-bar",7),h.Yb(10,"async"),h.Mb(),h.Nb(11,"ion-card-content"),h.Nb(12,"ion-list"),h.Nb(13,"ion-item"),h.Jb(14,"ion-icon",8),h.Nb(15,"ion-label",9),h.lc(16,"Login"),h.Mb(),h.Jb(17,"ion-input",10),h.Mb(),h.kc(18,w,3,3,"ion-text",11),h.Nb(19,"ion-item"),h.Jb(20,"ion-icon",12),h.Nb(21,"ion-label",9),h.lc(22,"Email"),h.Mb(),h.Jb(23,"ion-input",13),h.Mb(),h.kc(24,k,3,3,"ion-text",11),h.Nb(25,"ion-item",14),h.Jb(26,"ion-icon",15),h.Nb(27,"ion-label",9),h.lc(28,"Password"),h.Mb(),h.Jb(29,"ion-input",16),h.Nb(30,"ion-icon",17),h.Vb("click",function(){return h.hc(o),h.Xb().switchInputType()}),h.Mb(),h.Mb(),h.kc(31,F,3,3,"ion-text",11),h.Nb(32,"ion-item",14),h.Jb(33,"ion-icon",18),h.Nb(34,"ion-label",9),h.lc(35,"Password Confirm"),h.Mb(),h.Jb(36,"ion-input",19),h.kc(37,I,1,1,"ion-icon",20),h.Mb(),h.kc(38,S,3,3,"ion-text",11),h.Mb(),h.Mb(),h.Mb(),h.Nb(39,"ion-row"),h.Nb(40,"ion-col"),h.Nb(41,"ion-button",21),h.Vb("click",function(){return h.hc(o),h.Xb().formSubmitSubject$.next()}),h.lc(42," Signup "),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb()}if(2&o){const o=h.Xb();h.dc("formGroup",o.addOperatorForm),h.yb(9),h.dc("ngIf",h.Zb(10,11,o.loading$)),h.yb(9),h.dc("ngIf",o.addOperatorForm.get("login").touched&&o.addOperatorForm.get("login").errors),h.yb(6),h.dc("ngIf",o.addOperatorForm.get("email").touched&&o.addOperatorForm.get("email").errors),h.yb(5),h.dc("type",o.inputType),h.yb(1),h.dc("name","password"===o.inputType?"eye-outline":"eye-off-outline"),h.yb(1),h.dc("ngIf",o.addOperatorForm.get("password").touched&&o.addOperatorForm.get("password").errors),h.yb(5),h.dc("type",o.inputType),h.yb(1),h.dc("ngIf","VALID"===o.addOperatorForm.get("passwordConfirm").status),h.yb(1),h.dc("ngIf",o.addOperatorForm.get("passwordConfirm").touched&&o.addOperatorForm.get("passwordConfirm").errors),h.yb(3),h.dc("disabled","INVALID"===o.addOperatorForm.status||"PENDING"===o.addOperatorForm.status)}}let C=(()=>{class o{constructor(o,e,t,n){this.modalController=o,this.userService=e,this.store=t,this.operatorService=n,this.inputType="password",this.formSubmitSubject$=new l.a}ngOnInit(){this.loading$=this.operatorService.loading$,this.addOperatorForm=new i.e({login:new i.c("",{updateOn:"blur",validators:[i.o.pattern("^[a-zA-Z0-9_\\-]{2,60}$"),i.o.minLength(2),i.o.maxLength(60),i.o.required],asyncValidators:[this.userService.checkLoginUnique()]}),password:new i.c("",{updateOn:"change",validators:[i.o.pattern("^[a-zA-Z0-9_\\-]{8,60}$"),i.o.minLength(8),i.o.maxLength(60),i.o.required]}),passwordConfirm:new i.c("",{updateOn:"change",validators:[i.o.pattern("^[a-zA-Z0-9_\\-]{8,60}$"),i.o.minLength(8),i.o.maxLength(60),i.o.required]}),email:this.userService.emailFormControl()},this.userService.matchPassword),this.formSubmitSubject$.pipe(Object(d.a)(()=>this.addOperatorForm.markAsDirty()),Object(p.a)(()=>this.addOperatorForm.statusChanges.pipe(Object(m.a)(this.addOperatorForm.status),Object(u.a)(o=>"PENDING"!==o),Object(N.a)(1))),Object(u.a)(o=>"VALID"===o)).subscribe(o=>this.onSignup())}dismiss(o){this.modalController.dismiss(o)}switchInputType(){this.inputType="password"===this.inputType?"text":"password"}onSignup(){this.dismiss({login:this.addOperatorForm.get("login").value,password:this.addOperatorForm.get("password").value,email:this.addOperatorForm.get("email").value}),this.resetForm()}resetForm(){this.addOperatorFormDirective&&this.addOperatorFormDirective.resetForm()}}return o.\u0275fac=function(e){return new(e||o)(h.Ib(r.R),h.Ib(M.a),h.Ib(f.i),h.Ib(y))},o.\u0275cmp=h.Cb({type:o,selectors:[["app-operator-add"]],viewQuery:function(o,e){var t;1&o&&h.pc(O,!0),2&o&&h.gc(t=h.Wb())&&(e.addOperatorFormDirective=t.first)},inputs:{company:"company"},decls:9,vars:1,consts:[["slot","end"],[3,"click"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],["addOperatorFormDirective","ngForm"],["size-md","10","offset-md","1"],[1,"ion-text-center"],["type","indeterminate","color","primary",4,"ngIf"],["name","person-outline","slot","start",1,"ion-align-self-center"],["position","floating"],["type","text","autocomplete","","autocorrect","","formControlName","login"],["class","input-error","color","danger",4,"ngIf"],["name","mail-outline","slot","start",1,"ion-align-self-center"],["type","email","autocomplete","","autocorrect","","formControlName","email"],["lines","none"],["name","lock-closed-outline","slot","start",1,"ion-align-self-center"],["autocomplete","","autocorrect","","formControlName","password",3,"type"],["slot","end",1,"ion-align-self-center",3,"name","click"],["name","reorder-two-outline","slot","start",1,"ion-align-self-center"],["autocomplete","","autocorrect","","formControlName","passwordConfirm",3,"type"],["class","ion-align-self-center","color","primary","slot","end",3,"name",4,"ngIf"],["expand","block",3,"disabled","click"],["type","indeterminate","color","primary"],["color","danger",1,"input-error"],["color","primary","slot","end",1,"ion-align-self-center",3,"name"]],template:function(o,e){1&o&&(h.Nb(0,"ion-header"),h.Nb(1,"ion-toolbar"),h.Nb(2,"ion-title"),h.lc(3,"Add company user"),h.Mb(),h.Nb(4,"ion-buttons",0),h.Nb(5,"ion-button",1),h.Vb("click",function(){return e.dismiss()}),h.lc(6,"close"),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Nb(7,"ion-content"),h.kc(8,x,43,13,"form",2),h.Mb()),2&o&&(h.yb(8),h.dc("ngIf",e.addOperatorForm))},directives:[r.p,r.O,r.N,r.f,r.e,r.m,n.n,i.p,i.l,i.f,r.o,r.G,r.l,r.g,r.i,r.k,r.h,r.x,r.s,r.q,r.w,r.r,r.X,i.k,i.d,r.D,r.M],pipes:[n.b,n.g],styles:[""]}),o})();function X(o,e){1&o&&(h.Lb(0),h.lc(1," Loading.."),h.Kb())}function $(o,e){if(1&o){const o=h.Ob();h.Nb(0,"ion-item-sliding"),h.Nb(1,"ion-item"),h.Nb(2,"ion-label"),h.Nb(3,"ion-row"),h.Nb(4,"ion-col",7),h.Nb(5,"ion-item",8),h.Nb(6,"ion-label"),h.Nb(7,"h4"),h.lc(8,"Login:"),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Nb(9,"ion-col",9),h.Nb(10,"ion-item",8),h.Nb(11,"ion-label"),h.Nb(12,"ion-text",10),h.Nb(13,"p"),h.lc(14),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Nb(15,"ion-row"),h.Nb(16,"ion-col",7),h.Nb(17,"ion-item",8),h.Nb(18,"ion-label"),h.Nb(19,"h4"),h.lc(20,"Email:"),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Nb(21,"ion-col",9),h.Nb(22,"ion-item",8),h.Nb(23,"ion-label"),h.Nb(24,"ion-text",10),h.Nb(25,"p"),h.lc(26),h.Mb(),h.Mb(),h.Mb(),h.Nb(27,"ion-button",5),h.Vb("click",function(){h.hc(o);const e=h.Xb().$implicit;return h.Xb().update(e._id,"email")}),h.lc(28," Update "),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Nb(29,"ion-row"),h.Nb(30,"ion-col",7),h.Nb(31,"ion-item",8),h.Nb(32,"ion-label"),h.Nb(33,"h4"),h.lc(34,"Role:"),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Nb(35,"ion-col",9),h.Nb(36,"ion-item",8),h.Nb(37,"ion-label"),h.Nb(38,"ion-text",10),h.Nb(39,"p"),h.lc(40),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Nb(41,"ion-row"),h.Nb(42,"ion-col",7),h.Nb(43,"ion-item",8),h.Nb(44,"ion-label"),h.Nb(45,"h4"),h.lc(46,"Blocked:"),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Nb(47,"ion-col",9),h.Nb(48,"ion-item",8),h.Nb(49,"ion-label"),h.Nb(50,"ion-text",10),h.Nb(51,"p"),h.lc(52),h.Mb(),h.Mb(),h.Mb(),h.Nb(53,"ion-button",5),h.Vb("click",function(){h.hc(o);const e=h.Xb().$implicit;return h.Xb().blockUser(e._id,!e.blocked)}),h.lc(54),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Nb(55,"ion-row"),h.Nb(56,"ion-col",7),h.Nb(57,"ion-item",8),h.Nb(58,"ion-label"),h.Nb(59,"h4"),h.lc(60,"Activated:"),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Nb(61,"ion-col",9),h.Nb(62,"ion-item",8),h.Nb(63,"ion-label"),h.Nb(64,"ion-text",10),h.Nb(65,"p"),h.lc(66),h.Mb(),h.Mb(),h.Mb(),h.Nb(67,"ion-note",1),h.lc(68," slide to delete "),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Nb(69,"ion-item-options",11),h.Nb(70,"ion-item-option",12),h.Vb("click",function(){h.hc(o);const e=h.Xb().$implicit;return h.Xb().presentAlert(e._id,e.login)}),h.Jb(71,"ion-icon",13),h.Mb(),h.Mb(),h.Mb()}if(2&o){const o=h.Xb().$implicit;h.yb(14),h.nc(" ",o.login," "),h.yb(12),h.nc(" ",o.email," "),h.yb(14),h.nc(" ",o.role," "),h.yb(12),h.nc(" ",!!o.blocked," "),h.yb(2),h.nc(" ",o.blocked?"Unblock":"Block"," "),h.yb(12),h.nc(" ",!!o.activated," ")}}function j(o,e){if(1&o&&(h.Lb(0),h.kc(1,$,72,6,"ion-item-sliding",0),h.Kb()),2&o){const o=e.$implicit,t=h.Xb();h.yb(1),h.dc("ngIf",o._id!==t.user._id)}}const L=[{path:"",component:(()=>{class o{constructor(o,e,t,n){this.operatorService=o,this.store=e,this.modalController=t,this.alertController=n,this.user=null,this.company=null}ngOnInit(){this.store.select(c.a).subscribe(o=>{o&&(this.company=o,this.operatorService.getAll())}),this.store.select(c.b).subscribe(o=>{o&&(this.user=o)}),this.entities$=this.operatorService.entities$,this.loading$=this.operatorService.loading$,this.entities$.subscribe(o=>this.operators=o)}presentAlert(o,e){return Object(a.a)(this,void 0,void 0,function*(){const t=yield this.alertController.create({header:"Delete",subHeader:"user with login: "+e,message:"Are you shure?",buttons:[{text:"Cancel",role:"cancel",handler:o=>{console.log("Confirm Cancel: blah")}},{text:"Okay",handler:()=>this.remove(o)}]});yield t.present()})}presentModal(o,e){return Object(a.a)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:o,componentProps:e});return yield t.present(),yield t.onWillDismiss()})}blockUser(o,e){this.operatorService.update({_id:o,blocked:e}).subscribe(o=>console.log("update result",o),o=>console.log("update error",o))}update(o,e){return Object(a.a)(this,void 0,void 0,function*(){const{data:t}=yield this.presentModal(s.a,{data:this.operatorService.formFieldOptions(e)});t&&this.operatorService.update({_id:o,[e]:t}).subscribe(o=>console.log("update result",o),o=>console.log("update error",o))})}add(){return Object(a.a)(this,void 0,void 0,function*(){const{data:o}=yield this.presentModal(C,{company:this.company});o&&this.operatorService.add(o).subscribe(o=>console.log("add result",o),o=>console.log("add error",o))})}remove(o){return this.operatorService.delete(o)}}return o.\u0275fac=function(e){return new(e||o)(h.Ib(y),h.Ib(f.i),h.Ib(r.R),h.Ib(r.a))},o.\u0275cmp=h.Cb({type:o,selectors:[["app-operator"]],decls:22,vars:5,consts:[[4,"ngIf"],["slot","end"],["contentId","dashboard-content"],["size-md","8","offset-md","2"],[1,"ion-text-center"],[3,"click"],[4,"ngFor","ngForOf"],["size","4",1,"ion-no-padding"],["lines","none",1,"ion-no-padding"],["size","8",1,"ion-no-padding"],["color","primary"],["side","end"],["color","danger",3,"click"],["slot","icon-only","name","trash"]],template:function(o,e){1&o&&(h.Nb(0,"ion-header"),h.Nb(1,"ion-toolbar"),h.Nb(2,"ion-title"),h.lc(3,"Operator "),h.kc(4,X,2,0,"ng-container",0),h.Yb(5,"async"),h.Mb(),h.Nb(6,"ion-buttons",1),h.Jb(7,"ion-menu-button",2),h.Mb(),h.Mb(),h.Mb(),h.Nb(8,"ion-content"),h.Nb(9,"ion-grid"),h.Nb(10,"ion-row"),h.Nb(11,"ion-col",3),h.Nb(12,"h2",4),h.lc(13),h.Mb(),h.Nb(14,"ion-list"),h.Nb(15,"ion-list-header"),h.Nb(16,"ion-label"),h.Nb(17,"h2"),h.lc(18,"Users"),h.Mb(),h.Mb(),h.Nb(19,"ion-button",5),h.Vb("click",function(){return e.add()}),h.lc(20,"New operator"),h.Mb(),h.Mb(),h.kc(21,j,2,1,"ng-container",6),h.Mb(),h.Mb(),h.Mb(),h.Mb(),h.Mb()),2&o&&(h.yb(4),h.dc("ngIf",h.Zb(5,3,e.loading$)),h.yb(9),h.mc(null==e.company?null:e.company.companyName),h.yb(8),h.dc("ngForOf",e.operators))},directives:[r.p,r.O,r.N,n.n,r.f,r.A,r.m,r.o,r.G,r.l,r.x,r.y,r.w,r.e,n.m,r.v,r.s,r.M,r.C,r.u,r.t,r.q],pipes:[n.b],styles:[""]}),o})()}];let A=(()=>{class o{}return o.\u0275mod=h.Gb({type:o}),o.\u0275inj=h.Fb({factory:function(e){return new(e||o)},imports:[[b.k.forChild(L)],b.k]}),o})();var J=t("FpXt");let D=(()=>{class o{}return o.\u0275mod=h.Gb({type:o}),o.\u0275inj=h.Fb({factory:function(e){return new(e||o)},imports:[[n.c,i.h,r.P,i.n,A,J.a]]}),o})()}}]);