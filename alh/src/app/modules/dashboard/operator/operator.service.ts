import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { FormFieldOptions, User } from '../../../interface';
import { UserService } from '../../user/user.service';

@Injectable({
  providedIn: 'root',
})

export class OperatorService extends EntityCollectionServiceBase<User> {
  constructor(
      serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private userService: UserService,
  ) {
    super('Operator', serviceElementsFactory);
  }

  formFieldOptions(field: 'email') {
    return this.formFieldsOptions.get(field);
  }

  private get formFieldsOptions() {
    return new Map<'email', FormFieldOptions>([
      ['email', {
        title: 'Update email',
        subTitle: 'Email',
        iconName: 'mail-outline',
        inputLable: 'Input email',
        inputType: 'email',
        errors: new Map<string, string>([
          ['required', 'Required value'],
          ['pattern', 'Entered wrong email'],
        ]),
        formControl: {
          formState: '',
          validatorOrOpts: {
            updateOn: 'blur',
            validators: [
              Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
              Validators.required,
            ],
            asyncValidators: [
              this.userService.checkEmailUnique(),

            ],
          },
        },
      }],

    ]);
  }
}
