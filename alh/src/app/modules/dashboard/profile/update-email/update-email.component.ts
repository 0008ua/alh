import { AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { Observable, Subject } from 'rxjs';
import { filter, startWith, switchMap, take, tap } from 'rxjs/operators';
import { UserService } from 'src/app/modules/user/user.service';

@Component({
  selector: 'app-update-email',
  templateUrl: './update-email.component.html',
  styleUrls: ['./update-email.component.scss'],
})
export class UpdateEmailComponent implements OnInit {
  updateEmailForm: FormGroup;
  formSubmitSubject$ = new Subject();
  @ViewChild('updateEmailFormDirective', { static: false }) updateEmailFormDirective: FormGroupDirective;
  @Input() email: any;

  constructor(
    public modalController: ModalController,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.updateEmailForm = new FormGroup({
      email: this.userService.emailFormControl(''),
    });

    this.formSubmitSubject$
        .pipe(
            tap(() => this.updateEmailForm.markAsDirty()),
            switchMap(() =>
              this.updateEmailForm.statusChanges.pipe(
                  startWith(this.updateEmailForm.status),
                  filter((status) => status !== 'PENDING'),
                  take(1),
              ),
            ),
            filter((status) => status === 'VALID'),
        )
        .subscribe((validationSuccessful) => this.onUpdate());
  }

  dismiss(data?: any): void {
    console.log('data form', data);
    this.modalController.dismiss(data);
  }

  onUpdate() {
    this.dismiss({ email: this.updateEmailForm.get('email').value });
    this.resetForm();
  }

  resetForm() {
    if (this.updateEmailFormDirective) {
      this.updateEmailFormDirective.resetForm();
    }
  }
}
