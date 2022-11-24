/* tslint:disable */
/* eslint-disable */
import { ExtensionPropertyDto } from './extension-property-dto';
export interface EntityExtensionDto {
  configuration?: null | {
[key: string]: any;
};
  properties?: null | {
[key: string]: ExtensionPropertyDto;
};
}
