(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Fl6X:function(o,e,t){"use strict";t.r(e),t.d(e,"OperatorPageModule",function(){return z});var i=t("ofXK"),n=t("3Pt+"),r=t("TEn/"),b=t("tyNb"),a=t("mrSG"),c=t("mgGq"),s=t("vtsq"),l=t("XNiG"),d=t("vkgz"),m=t("eIep"),p=t("JX91"),u=t("pLZG"),N=t("IzEk"),f=t("fXoL"),M=t("d6tv"),g=t("l7P3"),h=t("hlQ1");let y=(()=>{class o extends h.d{constructor(o,e){super("Operator",o),this.userService=e}formFieldOptions(o){return this.formFieldsOptions.get(o)}get formFieldsOptions(){return new Map([["email",{title:"Update email",subTitle:"Email",iconName:"mail-outline",inputLable:"Input email",inputType:"email",errors:new Map([["required","Required value"],["pattern","Entered wrong email"]]),formControl:{formState:"",validatorOrOpts:{updateOn:"blur",validators:[n.o.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),n.o.required],asyncValidators:[this.userService.checkEmailUnique()]}}}]])}}return o.\u0275fac=function(e){return new(e||o)(f.Rb(h.e),f.Rb(M.a))},o.\u0275prov=f.Eb({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const O=["addOperatorFormDirective"];function v(o,e){1&o&&f.Jb(0,"ion-progress-bar",25)}function w(o,e){if(1&o&&(f.Nb(0,"ion-text",26),f.mc(1),f.Yb(2,"json"),f.Mb()),2&o){const o=f.Xb(2);f.yb(1),f.oc(" ",f.Zb(2,1,o.addOperatorForm.get("login").errors)," ")}}function F(o,e){if(1&o&&(f.Nb(0,"ion-text",26),f.mc(1),f.Yb(2,"json"),f.Mb()),2&o){const o=f.Xb(2);f.yb(1),f.oc(" ",f.Zb(2,1,o.addOperatorForm.get("email").errors)," ")}}function k(o,e){if(1&o&&(f.Nb(0,"ion-text",26),f.mc(1),f.Yb(2,"json"),f.Mb()),2&o){const o=f.Xb(2);f.yb(1),f.oc(" ",f.Zb(2,1,o.addOperatorForm.get("password").errors)," ")}}function I(o,e){1&o&&f.Jb(0,"ion-icon",27),2&o&&f.dc("name","checkmark-done-outline")}function x(o,e){if(1&o&&(f.Nb(0,"ion-text",26),f.mc(1),f.Yb(2,"json"),f.Mb()),2&o){const o=f.Xb(2);f.yb(1),f.oc(" ",f.Zb(2,1,o.addOperatorForm.get("passwordConfirm").errors)," ")}}function C(o,e){if(1&o){const o=f.Ob();f.Nb(0,"form",3,4),f.Nb(2,"ion-grid"),f.Nb(3,"ion-row"),f.Nb(4,"ion-col",5),f.Nb(5,"ion-card"),f.Nb(6,"ion-card-header"),f.Nb(7,"ion-card-title",6),f.mc(8,"Add company user"),f.Mb(),f.lc(9,v,1,0,"ion-progress-bar",7),f.Yb(10,"async"),f.Mb(),f.Nb(11,"ion-card-content"),f.Nb(12,"ion-list"),f.Nb(13,"ion-item"),f.Jb(14,"ion-icon",8),f.Nb(15,"ion-label",9),f.mc(16,"Login"),f.Mb(),f.Jb(17,"ion-input",10),f.Mb(),f.lc(18,w,3,3,"ion-text",11),f.Nb(19,"ion-item"),f.Jb(20,"ion-icon",12),f.Nb(21,"ion-label",9),f.mc(22,"Email"),f.Mb(),f.Jb(23,"ion-input",13),f.Mb(),f.lc(24,F,3,3,"ion-text",11),f.Nb(25,"ion-item",14),f.Jb(26,"ion-icon",15),f.Nb(27,"ion-label",9),f.mc(28,"Password"),f.Mb(),f.Jb(29,"ion-input",16),f.Nb(30,"ion-icon",17),f.Vb("click",function(){return f.ic(o),f.Xb().switchInputType()}),f.Mb(),f.Mb(),f.lc(31,k,3,3,"ion-text",11),f.Nb(32,"ion-item",14),f.Jb(33,"ion-icon",18),f.Nb(34,"ion-label",9),f.mc(35,"Password Confirm"),f.Mb(),f.Jb(36,"ion-input",19),f.lc(37,I,1,1,"ion-icon",20),f.Mb(),f.lc(38,x,3,3,"ion-text",11),f.Mb(),f.Mb(),f.Mb(),f.Nb(39,"ion-row"),f.Nb(40,"ion-col",21),f.Nb(41,"ion-button",22),f.Vb("click",function(){return f.ic(o),f.Xb().dismiss()}),f.mc(42,"Cancel"),f.Mb(),f.Mb(),f.Nb(43,"ion-col",23),f.Nb(44,"ion-button",24),f.Vb("click",function(){return f.ic(o),f.Xb().formSubmitSubject$.next()}),f.mc(45," Add "),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb()}if(2&o){const o=f.Xb();f.dc("formGroup",o.addOperatorForm),f.yb(9),f.dc("ngIf",f.Zb(10,11,o.loading$)),f.yb(9),f.dc("ngIf",o.addOperatorForm.get("login").touched&&o.addOperatorForm.get("login").errors),f.yb(6),f.dc("ngIf",o.addOperatorForm.get("email").touched&&o.addOperatorForm.get("email").errors),f.yb(5),f.dc("type",o.inputType),f.yb(1),f.dc("name","password"===o.inputType?"eye-outline":"eye-off-outline"),f.yb(1),f.dc("ngIf",o.addOperatorForm.get("password").touched&&o.addOperatorForm.get("password").errors),f.yb(5),f.dc("type",o.inputType),f.yb(1),f.dc("ngIf","VALID"===o.addOperatorForm.get("passwordConfirm").status),f.yb(1),f.dc("ngIf",o.addOperatorForm.get("passwordConfirm").touched&&o.addOperatorForm.get("passwordConfirm").errors),f.yb(6),f.dc("disabled","INVALID"===o.addOperatorForm.status||"PENDING"===o.addOperatorForm.status)}}let S=(()=>{class o{constructor(o,e,t,i){this.modalController=o,this.userService=e,this.store=t,this.operatorService=i,this.inputType="password",this.formSubmitSubject$=new l.a}ngOnInit(){this.loading$=this.operatorService.loading$,this.addOperatorForm=new n.e({login:new n.c("",{updateOn:"blur",validators:[n.o.pattern("^[a-zA-Z0-9_\\-]{2,60}$"),n.o.minLength(2),n.o.maxLength(60),n.o.required],asyncValidators:[this.userService.checkLoginUnique()]}),password:new n.c("",{updateOn:"change",validators:[n.o.pattern("^[a-zA-Z0-9_\\-]{8,60}$"),n.o.minLength(8),n.o.maxLength(60),n.o.required]}),passwordConfirm:new n.c("",{updateOn:"change",validators:[n.o.pattern("^[a-zA-Z0-9_\\-]{8,60}$"),n.o.minLength(8),n.o.maxLength(60),n.o.required]}),email:this.userService.emailFormControl()},this.userService.matchPassword),this.formSubmitSubject$.pipe(Object(d.a)(()=>this.addOperatorForm.markAsDirty()),Object(m.a)(()=>this.addOperatorForm.statusChanges.pipe(Object(p.a)(this.addOperatorForm.status),Object(u.a)(o=>"PENDING"!==o),Object(N.a)(1))),Object(u.a)(o=>"VALID"===o)).subscribe(o=>this.onSignup())}dismiss(o){this.modalController.dismiss(o)}switchInputType(){this.inputType="password"===this.inputType?"text":"password"}onSignup(){this.dismiss({login:this.addOperatorForm.get("login").value,password:this.addOperatorForm.get("password").value,email:this.addOperatorForm.get("email").value}),this.resetForm()}resetForm(){this.addOperatorFormDirective&&this.addOperatorFormDirective.resetForm()}}return o.\u0275fac=function(e){return new(e||o)(f.Ib(r.X),f.Ib(M.a),f.Ib(g.i),f.Ib(y))},o.\u0275cmp=f.Cb({type:o,selectors:[["app-operator-add"]],viewQuery:function(o,e){var t;1&o&&f.qc(O,!0),2&o&&f.gc(t=f.Wb())&&(e.addOperatorFormDirective=t.first)},inputs:{company:"company"},decls:9,vars:1,consts:[["slot","end"],[3,"click"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],["addOperatorFormDirective","ngForm"],["size-md","10","offset-md","1"],[1,"ion-text-center"],["type","indeterminate","color","primary",4,"ngIf"],["name","person-outline","slot","start",1,"ion-align-self-center"],["position","floating"],["type","text","autocomplete","","autocorrect","","formControlName","login"],["class","input-error","color","danger",4,"ngIf"],["name","mail-outline","slot","start",1,"ion-align-self-center"],["type","email","autocomplete","","autocorrect","","formControlName","email"],["lines","none"],["name","lock-closed-outline","slot","start",1,"ion-align-self-center"],["autocomplete","","autocorrect","","formControlName","password",3,"type"],["slot","end",1,"ion-align-self-center",3,"name","click"],["name","reorder-two-outline","slot","start",1,"ion-align-self-center"],["autocomplete","","autocorrect","","formControlName","passwordConfirm",3,"type"],["class","ion-align-self-center","color","primary","slot","end",3,"name",4,"ngIf"],["size","8"],["expand","block","fill","outline",3,"click"],["size","4"],["expand","block",3,"disabled","click"],["type","indeterminate","color","primary"],["color","danger",1,"input-error"],["color","primary","slot","end",1,"ion-align-self-center",3,"name"]],template:function(o,e){1&o&&(f.Nb(0,"ion-header"),f.Nb(1,"ion-toolbar"),f.Nb(2,"ion-title"),f.mc(3,"Add company user"),f.Mb(),f.Nb(4,"ion-buttons",0),f.Nb(5,"ion-button",1),f.Vb("click",function(){return e.dismiss()}),f.mc(6,"close"),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Nb(7,"ion-content"),f.lc(8,C,46,13,"form",2),f.Mb()),2&o&&(f.yb(8),f.dc("ngIf",e.addOperatorForm))},directives:[r.q,r.T,r.R,r.g,r.f,r.n,i.n,n.p,n.l,n.f,r.p,r.J,r.m,r.h,r.j,r.l,r.i,r.A,r.t,r.r,r.z,r.s,r.db,n.k,n.d,r.G,r.Q],pipes:[i.b,i.g],styles:[""]}),o})();function X(o,e){1&o&&(f.Lb(0),f.mc(1," Loading.."),f.Kb())}function $(o,e){if(1&o){const o=f.Ob();f.Nb(0,"ion-item-sliding"),f.Nb(1,"ion-item"),f.Nb(2,"ion-label"),f.Nb(3,"ion-row"),f.Nb(4,"ion-col",7),f.Nb(5,"ion-item",8),f.Nb(6,"ion-label"),f.Nb(7,"h4"),f.mc(8,"Login:"),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Nb(9,"ion-col",9),f.Nb(10,"ion-item",8),f.Nb(11,"ion-label"),f.Nb(12,"ion-text",10),f.Nb(13,"p"),f.mc(14),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Nb(15,"ion-row"),f.Nb(16,"ion-col",7),f.Nb(17,"ion-item",8),f.Nb(18,"ion-label"),f.Nb(19,"h4"),f.mc(20,"Email:"),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Nb(21,"ion-col",9),f.Nb(22,"ion-item",8),f.Nb(23,"ion-label"),f.Nb(24,"ion-text",10),f.Nb(25,"p"),f.mc(26),f.Mb(),f.Mb(),f.Mb(),f.Nb(27,"ion-button",5),f.Vb("click",function(){f.ic(o);const e=f.Xb().$implicit;return f.Xb().update(e._id,"email")}),f.mc(28," Update "),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Nb(29,"ion-row"),f.Nb(30,"ion-col",7),f.Nb(31,"ion-item",8),f.Nb(32,"ion-label"),f.Nb(33,"h4"),f.mc(34,"Role:"),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Nb(35,"ion-col",9),f.Nb(36,"ion-item",8),f.Nb(37,"ion-label"),f.Nb(38,"ion-text",10),f.Nb(39,"p"),f.mc(40),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Nb(41,"ion-row"),f.Nb(42,"ion-col",7),f.Nb(43,"ion-item",8),f.Nb(44,"ion-label"),f.Nb(45,"h4"),f.mc(46,"Blocked:"),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Nb(47,"ion-col",9),f.Nb(48,"ion-item",8),f.Nb(49,"ion-label"),f.Nb(50,"ion-text",10),f.Nb(51,"p"),f.mc(52),f.Mb(),f.Mb(),f.Mb(),f.Nb(53,"ion-button",5),f.Vb("click",function(){f.ic(o);const e=f.Xb().$implicit;return f.Xb().blockUser(e._id,!e.blocked)}),f.mc(54),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Nb(55,"ion-row"),f.Nb(56,"ion-col",7),f.Nb(57,"ion-item",8),f.Nb(58,"ion-label"),f.Nb(59,"h4"),f.mc(60,"Activated:"),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Nb(61,"ion-col",9),f.Nb(62,"ion-item",8),f.Nb(63,"ion-label"),f.Nb(64,"ion-text",10),f.Nb(65,"p"),f.mc(66),f.Mb(),f.Mb(),f.Mb(),f.Nb(67,"ion-note",1),f.mc(68," slide to delete "),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Nb(69,"ion-item-options",11),f.Nb(70,"ion-item-option",12),f.Vb("click",function(){f.ic(o);const e=f.Xb().$implicit;return f.Xb().presentAlert(e._id,e.login)}),f.Jb(71,"ion-icon",13),f.Mb(),f.Mb(),f.Mb()}if(2&o){const o=f.Xb().$implicit;f.yb(14),f.oc(" ",o.login," "),f.yb(12),f.oc(" ",o.email," "),f.yb(14),f.oc(" ",o.role," "),f.yb(12),f.oc(" ",!!o.blocked," "),f.yb(2),f.oc(" ",o.blocked?"Unblock":"Block"," "),f.yb(12),f.oc(" ",!!o.activated," ")}}function j(o,e){if(1&o&&(f.Lb(0),f.lc(1,$,72,6,"ion-item-sliding",0),f.Kb()),2&o){const o=e.$implicit,t=f.Xb();f.yb(1),f.dc("ngIf",o._id!==t.user._id)}}const L=[{path:"",component:(()=>{class o{constructor(o,e,t,i){this.operatorService=o,this.store=e,this.modalController=t,this.alertController=i,this.user=null,this.company=null}ngOnInit(){this.store.select(c.a).subscribe(o=>{o&&(this.company=o,this.operatorService.getAll())}),this.store.select(c.b).subscribe(o=>{o&&(this.user=o)}),this.entities$=this.operatorService.entities$,this.loading$=this.operatorService.loading$,this.entities$.subscribe(o=>this.operators=o)}presentAlert(o,e){return Object(a.a)(this,void 0,void 0,function*(){const t=yield this.alertController.create({header:"Delete",subHeader:"user with login: "+e,message:"Are you shure?",buttons:[{text:"Cancel",role:"cancel",handler:o=>{console.log("Confirm Cancel: blah")}},{text:"Okay",handler:()=>this.remove(o)}]});yield t.present()})}presentModal(o,e){return Object(a.a)(this,void 0,void 0,function*(){const t=yield this.modalController.create({component:o,componentProps:e});return yield t.present(),yield t.onWillDismiss()})}blockUser(o,e){this.operatorService.update({_id:o,blocked:e}).subscribe(o=>console.log("update result",o),o=>console.log("update error",o))}update(o,e){return Object(a.a)(this,void 0,void 0,function*(){const{data:t}=yield this.presentModal(s.a,{data:this.operatorService.formFieldOptions(e)});t&&this.operatorService.update({_id:o,[e]:t}).subscribe(o=>console.log("update result",o),o=>console.log("update error",o))})}add(){return Object(a.a)(this,void 0,void 0,function*(){const{data:o}=yield this.presentModal(S,{company:this.company});o&&this.operatorService.add(o).subscribe(o=>console.log("add result",o),o=>console.log("add error",o))})}remove(o){return this.operatorService.delete(o)}}return o.\u0275fac=function(e){return new(e||o)(f.Ib(y),f.Ib(g.i),f.Ib(r.X),f.Ib(r.a))},o.\u0275cmp=f.Cb({type:o,selectors:[["app-operator"]],decls:22,vars:5,consts:[[4,"ngIf"],["slot","end"],["menu","dashboard-menu"],["size-md","8","offset-md","2"],[1,"ion-text-center"],[3,"click"],[4,"ngFor","ngForOf"],["size","4",1,"ion-no-padding"],["lines","none",1,"ion-no-padding"],["size","8",1,"ion-no-padding"],["color","primary"],["side","end"],["color","danger",3,"click"],["slot","icon-only","name","trash"]],template:function(o,e){1&o&&(f.Nb(0,"ion-header"),f.Nb(1,"ion-toolbar"),f.Nb(2,"ion-title"),f.mc(3,"Operator "),f.lc(4,X,2,0,"ng-container",0),f.Yb(5,"async"),f.Mb(),f.Nb(6,"ion-buttons",1),f.Jb(7,"ion-menu-button",2),f.Mb(),f.Mb(),f.Mb(),f.Nb(8,"ion-content"),f.Nb(9,"ion-grid"),f.Nb(10,"ion-row"),f.Nb(11,"ion-col",3),f.Nb(12,"h2",4),f.mc(13),f.Mb(),f.Nb(14,"ion-list"),f.Nb(15,"ion-list-header"),f.Nb(16,"ion-label"),f.Nb(17,"h2"),f.mc(18,"Users"),f.Mb(),f.Mb(),f.Nb(19,"ion-button",5),f.Vb("click",function(){return e.add()}),f.mc(20,"New operator"),f.Mb(),f.Mb(),f.lc(21,j,2,1,"ng-container",6),f.Mb(),f.Mb(),f.Mb(),f.Mb(),f.Mb()),2&o&&(f.yb(4),f.dc("ngIf",f.Zb(5,3,e.loading$)),f.yb(9),f.nc(null==e.company?null:e.company.companyName),f.yb(8),f.dc("ngForOf",e.operators))},directives:[r.q,r.T,r.R,i.n,r.g,r.D,r.n,r.p,r.J,r.m,r.A,r.B,r.z,r.f,i.m,r.y,r.t,r.Q,r.F,r.x,r.w,r.r],pipes:[i.b],styles:[""]}),o})()}];let A=(()=>{class o{}return o.\u0275mod=f.Gb({type:o}),o.\u0275inj=f.Fb({factory:function(e){return new(e||o)},imports:[[b.k.forChild(L)],b.k]}),o})();var J=t("FpXt");let z=(()=>{class o{}return o.\u0275mod=f.Gb({type:o}),o.\u0275inj=f.Fb({factory:function(e){return new(e||o)},imports:[[i.c,n.h,r.U,n.n,A,J.a]]}),o})()}}]);