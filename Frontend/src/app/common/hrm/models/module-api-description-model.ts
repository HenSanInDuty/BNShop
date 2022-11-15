/* tslint:disable */
/* eslint-disable */
import { ControllerApiDescriptionModel } from './controller-api-description-model';
export interface ModuleApiDescriptionModel {
  controllers?: null | {
[key: string]: ControllerApiDescriptionModel;
};
  remoteServiceName?: null | string;
  rootPath?: null | string;
}
