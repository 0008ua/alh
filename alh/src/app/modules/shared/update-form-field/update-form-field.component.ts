import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { Observable, Subject } from 'rxjs';
import { filter, startWith, switchMap, take, tap } from 'rxjs/operators';
import { FormFieldOptions } from 'src/app/interface';
import { UserService } from 'src/app/modules/user/user.service';

@Component({
  selector: 'app-update-form-field',
  templateUrl: './update-form-field.component.html',
  styleUrls: ['./update-form-field.component.scss'],
})
export class UpdateFormFieldComponent implements OnInit {
  updateFormField: FormGroup;
  formSubmitSubject$ = new Subject();
  @ViewChild('updateFormFieldDirective', { static: false }) updateFormFieldDirective: FormGroupDirective;
  @Input() data: FormFieldOptions;

  constructor(
    public modalController: ModalController,
  ) { }

  ngOnInit() {
    this.updateFormField = new FormGroup({
      formControlName: new FormControl(
          this.data.formControl.formState,
          this.data.formControl.validatorOrOpts,
          this.data.formControl.asyncValidator),
    });

    this.formSubmitSubject$
        .pipe(
            tap(() => this.updateFormField.markAsDirty()),
            switchMap(() =>
              this.updateFormField.statusChanges.pipe(
                  startWith(this.updateFormField.status),
                  filter((status) => status !== 'PENDING'),
                  take(1),
              ),
            ),
            filter((status) => status === 'VALID'),
        )
        .subscribe((validationSuccessful) => this.onConfirm());
  }

  // errorMapping(errors) {
  //   const errorsArr = [];
  //   for (const key in errors) {
  //     if (this.data.errors.has(key)) {
  //       console.log('key', key);

  //       console.log('key', this.data.errors.get(key));
  //       errorsArr.push(this.data.errors.get(key));
  //     }
  //   }
  //   console.log('errorsArr', errorsArr);
  //   return errorsArr.length ? errorsArr : ['Error: Wrong symbols or length'];
  // }

  dismiss(data?: any): void {
    this.modalController.dismiss(data);
  }

  onConfirm() {
    this.dismiss(this.updateFormField.get('formControlName').value);
    this.resetForm();
  }

  resetForm() {
    if (this.updateFormFieldDirective) {
      this.updateFormFieldDirective.resetForm();
    }
  }
}
