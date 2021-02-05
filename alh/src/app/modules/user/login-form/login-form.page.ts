import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/interface';
import { Login } from 'src/app/store/actions/user.actions';
import { State } from 'src/app/store/reducers';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss'],
})
export class LoginFormPage implements OnInit {
  lang: string;
  loginForm: FormGroup;
  inputType: 'password' | 'text' = 'password';
  @ViewChild('loginFormDirective', { static: false }) loginFormDirective: FormGroupDirective;

  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store<State>,
    public translate: TranslateService,

  ) { }

  ngOnInit() {
    this.lang = this.translate.currentLang;

    this.loginForm = new FormGroup({
      login: new FormControl(
          '',
          {
            updateOn: 'change',
            validators: [
              Validators.pattern('^[a-zA-Z0-9_\\-]{2,60}$'),
              Validators.minLength(2),
              Validators.maxLength(60),
              Validators.required,
            ],
          }),
      password: new FormControl(
          '',
          {
            updateOn: 'change',
            validators: [
              Validators.pattern('^[a-zA-Z0-9_\\-]{8,60}$'),
              Validators.minLength(8),
              Validators.maxLength(60),
              Validators.required,
            ],
          }),
    });
  }

  switchInputType() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }

  onLogin() {
    const user: User = {
      login: this.loginForm.get('login').value,
      password: this.loginForm.get('password').value,
    };

    this.store.dispatch(new Login({user}));
    this.resetForm();
    // this.userService.login(user)
    //     .subscribe(
    //         (_) => this.resetForm(),
    //         (err) => console.log('login Error', err),
    //     );
  }

  resetForm() {
    if (this.loginFormDirective) {
      this.loginFormDirective.resetForm();
    }
  }

  switchLanguage() {
    this.lang === 'en' ? this.lang = 'uk' : this.lang = 'en';
    this.translate.use(this.lang);
  }
}
