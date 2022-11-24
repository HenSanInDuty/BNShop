/* tslint:disable */
/* eslint-disable */
import { ExtensionPropertyApiDto } from './extension-property-api-dto';
import { ExtensionPropertyAttributeDto } from './extension-property-attribute-dto';
import { ExtensionPropertyUiDto } from './extension-property-ui-dto';
import { LocalizableStringDto } from './localizable-string-dto';
export interface ExtensionPropertyDto {
  api?: ExtensionPropertyApiDto;
  attributes?: null | Array<ExtensionPropertyAttributeDto>;
  configuration?: null | {
[key: string]: any;
};
  defaultValue?: null | any;
  displayName?: LocalizableStringDto;
  type?: null | string;
  typeSimple?: null | string;
  ui?: ExtensionPropertyUiDto;
}
