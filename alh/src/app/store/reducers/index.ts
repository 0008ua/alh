import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../environments/environment';
import * as fromShedule from './shedule.reducer';
import * as fromUser from './user.reducer';

export interface State {
  shedule: fromShedule.SheduleState;
  user: fromUser.UserState;
}

export const reducers: ActionReducerMap<State> = {
  shedule: fromShedule.reducer,
  user: fromUser.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
