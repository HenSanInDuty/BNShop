/* tslint:disable */
/* eslint-disable */
import { IValueValidator } from './i-value-validator';
export interface IStringValueType {
  name?: null | string;
  properties?: null | {
[key: string]: any;
};
  validator?: IValueValidator;
}
