import * as ScheduleActions from './schedule.actions';

describe('Schedule', () => {
  it('should create an instance', () => {
    expect(new ScheduleActions.LoadSchedules()).toBeTruthy();
  });
});
