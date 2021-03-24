import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { filter, startWith, switchMap, take, tap } from 'rxjs/operators';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
  lang: string;
  signupForm: FormGroup;
  inputType: 'password' | 'text' = 'password';
  formSubmitSubject$ = new Subject();
  @ViewChild('signupFormDirective', { static: false }) signupFormDirective: FormGroupDirective;

  constructor(
    private userService: UserService,
    private router: Router,
    public translate: TranslateService,

  ) { }

  ngOnInit() {
    this.lang = this.translate.currentLang;

    this.signupForm = new FormGroup({
      companyName: new FormControl(
          '',
          {
            updateOn: 'change',
            validators: [
              Validators.pattern('^[a-zA-Z0-9 _\\-]+$'),
              Validators.minLength(2),
              Validators.maxLength(60),
              Validators.required,
            ],
            asyncValidators: [
              this.userService.checkCompanyNameUnique(),
            ],
          }),
      login: new FormControl(
          '',
          {
            updateOn: 'change',
            validators: [
              Validators.pattern('^[a-zA-Z0-9_\\-]+$'),
              Validators.minLength(2),
              Validators.maxLength(60),
              Validators.required,
            ],
            asyncValidators: [
              this.userService.checkLoginUnique(),
            ],
          }),
      password: new FormControl(
          '',
          {
            updateOn: 'change',
            validators: [
              Validators.pattern('^[a-zA-Z0-9_\\-]+$'),
              Validators.minLength(8),
              Validators.maxLength(60),
              Validators.required,
            ],
          }),
      passwordConfirm: new FormControl(
          '',
          {
            updateOn: 'change',
            validators: [
              Validators.pattern('^[a-zA-Z0-9_\\-]+$'),
              Validators.minLength(8),
              Validators.maxLength(60),
              Validators.required,
            ],
          }),
      email: new FormControl(
          '',
          {
            updateOn: 'change',
            validators: [
              Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
              Validators.required,
            ],
            asyncValidators: [
              this.userService.checkEmailUnique(),
            ],
          }),

    }, this.userService.matchPassword,
    );

    // prevent form submit before async validator completes
    this.formSubmitSubject$
        .pipe(
            tap(() => this.signupForm.markAsDirty()),
            switchMap(() =>
              this.signupForm.statusChanges.pipe(
                  startWith(this.signupForm.status),
                  filter((status) => status !== 'PENDING'),
                  take(1),
              ),
            ),
            filter((status) => status === 'VALID'),
        )
        .subscribe((validationSuccessful) => this.onSignup());
  }

  switchInputType() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }

  onSignup() {
    this.userService.createCompany(
        {
          companyName: this.signupForm.get('companyName').value,
          user: {
            login: this.signupForm.get('login').value,
            password: this.signupForm.get('password').value,
            email: this.signupForm.get('email').value,
          },
        },

    ).subscribe(
        (_) => this.resetForm(),
        (err) => console.log('signup Error', err.error),
    );
  }

  resetForm() {
    if (this.signupFormDirective) {
      this.signupFormDirective.resetForm();
    }
  }

  switchLanguage() {
    this.lang === 'en' ? this.lang = 'uk' : this.lang = 'en';
    this.translate.use(this.lang);
  }
}

