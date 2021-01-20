import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { filter, startWith, switchMap, take, tap } from 'rxjs/operators';

import { Company } from 'src/app/interface';
import { UserService } from 'src/app/modules/user/user.service';
import { State } from '../../../../store/reducers';
import { OperatorService } from '../operator.service';

@Component({
  selector: 'app-operator-add',
  templateUrl: './operator-add.component.html',
  styleUrls: ['./operator-add.component.scss'],
})
export class OperatorAddComponent implements OnInit {
  @Input() company: Company;
  addOperatorForm: FormGroup;
  inputType: 'password' | 'text' = 'password';
  formSubmitSubject$ = new Subject();
  @ViewChild('addOperatorFormDirective', { static: false }) addOperatorFormDirective: FormGroupDirective;
  loading$: Observable<boolean> | Store<boolean>
  loadingIndicator: any;

  constructor(
    public modalController: ModalController,
    private userService: UserService,
    private store: Store<State>,
    private operatorService: OperatorService,
  ) { }

  ngOnInit() {
    this.loading$ = this.operatorService.loading$;

    this.addOperatorForm = new FormGroup({
      login: new FormControl(
          '',
          {
            updateOn: 'blur',
            validators: [
              Validators.pattern('^[a-zA-Z0-9_\\-]{2,60}$'),
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
              Validators.pattern('^[a-zA-Z0-9_\\-]{8,60}$'),
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
              Validators.pattern('^[a-zA-Z0-9_\\-]{8,60}$'),
              Validators.minLength(8),
              Validators.maxLength(60),
              Validators.required,
            ],
          }),
      email: this.userService.emailFormControl(),
    }, this.userService.matchPassword,
    );

    // prevent form submit before async validator completes
    this.formSubmitSubject$
        .pipe(
            tap(() => this.addOperatorForm.markAsDirty()),
            switchMap(() =>
              this.addOperatorForm.statusChanges.pipe(
                  startWith(this.addOperatorForm.status),
                  filter((status) => status !== 'PENDING'),
                  take(1),
              ),
            ),
            filter((status) => status === 'VALID'),
        )
        .subscribe((validationSuccessful) => this.onSignup());
  }

  dismiss(data?: any): void {
    this.modalController.dismiss(data);
  }

  switchInputType() {
    if (this.inputType === 'password') {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    }
  }

  onSignup() {
    this.dismiss({
      // _id: 'fff',
      login: this.addOperatorForm.get('login').value,
      password: this.addOperatorForm.get('password').value,
      email: this.addOperatorForm.get('email').value,
    });
    this.resetForm();

    // this.userService.createCompanyUser({
    //   login: this.addOperatorForm.get('login').value,
    //   password: this.addOperatorForm.get('password').value,
    //   email: this.addOperatorForm.get('email').value,
    // })
    //     .subscribe(
    //         (_) => {
    //           this.resetForm();
    //           this.dismiss(null);
    //         },
    //         (err) => this.dismiss(err.error),
    //     );
  }

  resetForm() {
    if (this.addOperatorFormDirective) {
      this.addOperatorFormDirective.resetForm();
    }
  }
}
