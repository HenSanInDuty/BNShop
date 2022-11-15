/* tslint:disable */
/* eslint-disable */
import { FeatureProviderDto } from './feature-provider-dto';
import { IStringValueType } from './i-string-value-type';
export interface FeatureDto {
  depth?: number;
  description?: null | string;
  displayName?: null | string;
  name?: null | string;
  parentName?: null | string;
  provider?: FeatureProviderDto;
  value?: null | string;
  valueType?: IStringValueType;
}
