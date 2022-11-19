/* tslint:disable */
/* eslint-disable */
import { ActionApiDescriptionModel } from './action-api-description-model';
import { ControllerInterfaceApiDescriptionModel } from './controller-interface-api-description-model';
export interface ControllerApiDescriptionModel {
  actions?: null | {
[key: string]: ActionApiDescriptionModel;
};
  apiVersion?: null | string;
  controllerGroupName?: null | string;
  controllerName?: null | string;
  interfaces?: null | Array<ControllerInterfaceApiDescriptionModel>;
  isRemoteService?: boolean;
  type?: null | string;
}
