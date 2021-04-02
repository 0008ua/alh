import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../environments/environment';
import * as fromSchedule from './schedule.reducer';
import * as fromUser from './user.reducer';

export interface State {
  schedule: fromSchedule.ScheduleState;
  user: fromUser.UserState;
}

export const reducers: ActionReducerMap<State> = {
  schedule: fromSchedule.reducer,
  user: fromUser.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
