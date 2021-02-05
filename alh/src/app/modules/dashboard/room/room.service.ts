import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { TranslateService } from '@ngx-translate/core';
import { FormFieldOptions, Room, RoomFormFields } from '../../../interface';

@Injectable({
  providedIn: 'root',
})

export class RoomService extends EntityCollectionServiceBase<Room> {
  constructor(
      serviceElementsFactory: EntityCollectionServiceElementsFactory,
    private translate: TranslateService,
  ) {
    super('Room', serviceElementsFactory);
  }

  formFieldOptions(field: RoomFormFields) {
    return this.formFieldsOptions.get(field);
  }

  private get formFieldsOptions() {
    return new Map<RoomFormFields, FormFieldOptions>([
      ['price', {
        title: this.translate.instant('modules.shared.formField.updatePrice'),
        subTitle: this.translate.instant('dif.price'),
        iconName: 'business-outline',
        inputLable: this.translate.instant('modules.shared.formField.inputPrice'),
        inputType: 'text',
        errors: new Map<string, string>([
          ['required', 'Required value'],
          ['pattern', 'Entered wrong symbol'],
        ]),
        formControl: {
          formState: '',
          validatorOrOpts: {
            updateOn: 'change',
            validators: [
              Validators.pattern('[0-9]*'),
              Validators.required,
            ],
          },
        },
      }],
      ['name', {
        title: this.translate.instant('modules.shared.formField.updateName'),
        subTitle: this.translate.instant('dif.name'),
        iconName: 'cash-outline',
        inputLable: this.translate.instant('modules.shared.formField.inputName'),
        inputType: 'text',
        errors: new Map<string, string>([
          ['required', 'Required value'],
          ['pattern', 'Entered wrong symbol'],
          ['minlength', 'Too short'],
          ['maxlength', 'Too long'],
        ]),
        formControl: {
          formState: '',
          validatorOrOpts: {
            updateOn: 'change',
            validators: [
              Validators.pattern('^[a-zA-Z0-9а-яА-ЯіІїЇєЄ_@#$%№ \'"\\-]*$'),
              Validators.minLength(2),
              Validators.maxLength(60),
              Validators.required,
            ],
          },
        },
      }],
    ]);
  }
}
