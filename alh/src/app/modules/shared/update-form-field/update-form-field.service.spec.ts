import { TestBed } from '@angular/core/testing';

import { UpdateFormFieldService } from './update-form-field.service';

describe('UpdateFormFieldService', () => {
  let service: UpdateFormFieldService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateFormFieldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
