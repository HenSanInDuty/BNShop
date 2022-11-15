/* tslint:disable */
/* eslint-disable */
import { PropertyApiDescriptionModel } from './property-api-description-model';
export interface TypeApiDescriptionModel {
  baseType?: null | string;
  enumNames?: null | Array<string>;
  enumValues?: null | Array<any>;
  genericArguments?: null | Array<string>;
  isEnum?: boolean;
  properties?: null | Array<PropertyApiDescriptionModel>;
}
