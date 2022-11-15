/* tslint:disable */
/* eslint-disable */
import { ExtensionEnumDto } from './extension-enum-dto';
import { ModuleExtensionDto } from './module-extension-dto';
export interface ObjectExtensionsDto {
  enums?: null | {
[key: string]: ExtensionEnumDto;
};
  modules?: null | {
[key: string]: ModuleExtensionDto;
};
}
