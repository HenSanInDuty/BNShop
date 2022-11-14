/* tslint:disable */
/* eslint-disable */
import { ModuleApiDescriptionModel } from './module-api-description-model';
import { TypeApiDescriptionModel } from './type-api-description-model';
export interface ApplicationApiDescriptionModel {
  modules?: null | {
[key: string]: ModuleApiDescriptionModel;
};
  types?: null | {
[key: string]: TypeApiDescriptionModel;
};
}
