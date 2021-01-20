import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SheduleEffects } from './shedule.effects';

describe('SheduleEffects', () => {
  let actions$: Observable<any>;
  let effects: SheduleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SheduleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SheduleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
