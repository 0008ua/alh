import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss'],
})
export class LoginFormPage implements OnInit {
  loginForm: FormGroup;
  inputType: 'password' | 'text' = 'password';
  @ViewChild('loginFormDirective', { static: false }) loginFormDirective: FormGroupDirective;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
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
    this.userService.login(user)
        .subscribe(
            (_) => this.resetForm(),
            (err) => console.log('login Error', err),
        );
  }

  resetForm() {
    if (this.loginFormDirective) {
      this.loginFormDirective.resetForm();
    }
  }
}
