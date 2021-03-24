import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { Observable, Subject } from 'rxjs';
import { filter, startWith, switchMap, take, tap } from 'rxjs/operators';
import { UserService } from 'src/app/modules/user/user.service';

@Component({
  selector: 'app-update-activation',
  templateUrl: './update-activation.component.html',
  styleUrls: ['./update-activation.component.scss'],
})
export class UpdateActivationComponent implements OnInit {
  activateEmailCodeForm: FormGroup;
  // formSubmitSubject$ = new Subject();
  @ViewChild('activateEmailCodeFormDirective', { static: false }) activateEmailCodeFormDirective: FormGroupDirective;
  // @Input() email: any;

  constructor(
    public modalController: ModalController,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.activateEmailCodeForm = new FormGroup({
      code: new FormControl(
          '',
          {
            updateOn: 'change',
            validators: [
              Validators.pattern('^[0-9]+$'),
              Validators.minLength(2),
              Validators.maxLength(10),
              Validators.required,
            ],
          }),
    });

    // this.formSubmitSubject$
    //     .pipe(
    //         tap(() => this.activateEmailCodeForm.markAsDirty()),
    //         switchMap(() =>
    //           this.activateEmailCodeForm.statusChanges.pipe(
    //               startWith(this.activateEmailCodeForm.status),
    //               filter((status) => status !== 'PENDING'),
    //               take(1),
    //           ),
    //         ),
    //         filter((status) => status === 'VALID'),
    //     )
    //     .subscribe((validationSuccessful) => this.onUpdate());
  }

  dismiss(data?: any): void {
    this.modalController.dismiss(data);
  }

  activate() {
    this.dismiss({ code: this.activateEmailCodeForm.get('code').value });
    this.resetForm();
  }

  resetForm() {
    if (this.activateEmailCodeFormDirective) {
      this.activateEmailCodeFormDirective.resetForm();
    }
  }
}
