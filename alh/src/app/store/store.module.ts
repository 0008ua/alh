import { NgModule } from '@angular/core';
import { DefaultDataServiceConfig, EntityDataModule, EntityDataService } from '@ngrx/data';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, metaReducers } from './reducers';

import { OperatorDataService } from './operator-data.service';
import { entityMetadata } from './entity-metadata';
import { EntityToastService } from './store-toast.service';
import { SheduleEffects } from './effects/shedule.effects';
import { UserEffects } from './effects/user.effects';
import { environment } from 'src/environments/environment';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.host + 'api/store',
  timeout: 3000,
  entityHttpResourceUrls: {
    Operator: {
      entityResourceUrl: environment.host + 'api/store/operator/',
      collectionResourceUrl: environment.host + 'api/store/operators/',
    },
    Room: {
      entityResourceUrl: environment.host + 'api/store/room/',
      collectionResourceUrl: environment.host + 'api/store/rooms/',
    },
  },
};

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([SheduleEffects, UserEffects]),
    EntityDataModule.forRoot({ entityMetadata }),
  ],
  providers: [
    OperatorDataService,
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
  ],

})

export class AppStoreModule {
  constructor(
      entityDataService: EntityDataService,
      operatorDataService: OperatorDataService,
      entityToastService: EntityToastService,
  ) {
    entityDataService.registerService('Operator', operatorDataService);
  }
}

