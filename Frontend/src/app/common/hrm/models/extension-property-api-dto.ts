/* tslint:disable */
/* eslint-disable */
import { ExtensionPropertyApiCreateDto } from './extension-property-api-create-dto';
import { ExtensionPropertyApiGetDto } from './extension-property-api-get-dto';
import { ExtensionPropertyApiUpdateDto } from './extension-property-api-update-dto';
export interface ExtensionPropertyApiDto {
  onCreate?: ExtensionPropertyApiCreateDto;
  onGet?: ExtensionPropertyApiGetDto;
  onUpdate?: ExtensionPropertyApiUpdateDto;
}
