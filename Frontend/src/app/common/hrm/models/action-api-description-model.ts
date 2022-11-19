/* tslint:disable */
/* eslint-disable */
import { MethodParameterApiDescriptionModel } from './method-parameter-api-description-model';
import { ParameterApiDescriptionModel } from './parameter-api-description-model';
import { ReturnValueApiDescriptionModel } from './return-value-api-description-model';
export interface ActionApiDescriptionModel {
  allowAnonymous?: null | boolean;
  httpMethod?: null | string;
  implementFrom?: null | string;
  name?: null | string;
  parameters?: null | Array<ParameterApiDescriptionModel>;
  parametersOnMethod?: null | Array<MethodParameterApiDescriptionModel>;
  returnValue?: ReturnValueApiDescriptionModel;
  supportedVersions?: null | Array<string>;
  uniqueName?: null | string;
  url?: null | string;
}
