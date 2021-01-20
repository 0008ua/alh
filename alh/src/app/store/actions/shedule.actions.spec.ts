import * as SheduleActions from './shedule.actions';

describe('Shedule', () => {
  it('should create an instance', () => {
    expect(new SheduleActions.LoadShedules()).toBeTruthy();
  });
});
