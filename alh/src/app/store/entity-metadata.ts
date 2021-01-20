import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

export const entityMetadata: EntityMetadataMap = {
  Operator: {
    selectId: (operator) => operator._id,
    entityDispatcherOptions: {
      optimisticAdd: false,
      optimisticUpdate: false,
      optimisticDelete: false,
    },
  },
  Room: {
    selectId: (room) => room._id,
    entityDispatcherOptions: {
      optimisticAdd: false,
      optimisticUpdate: false,
      optimisticDelete: false,
    },
  },
};

const pluralNames = {
  Operator: 'Operators',
  Room: 'Rooms',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
