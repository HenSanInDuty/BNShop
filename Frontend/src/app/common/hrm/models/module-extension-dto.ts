/* tslint:disable */
/* eslint-disable */
import { EntityExtensionDto } from './entity-extension-dto';
export interface ModuleExtensionDto {
  configuration?: null | {
[key: string]: any;
};
  entities?: null | {
[key: string]: EntityExtensionDto;
};
}
