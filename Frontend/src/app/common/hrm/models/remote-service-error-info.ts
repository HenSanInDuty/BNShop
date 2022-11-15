/* tslint:disable */
/* eslint-disable */
import { RemoteServiceValidationErrorInfo } from './remote-service-validation-error-info';
export interface RemoteServiceErrorInfo {
  code?: null | string;
  data?: null | {
[key: string]: any;
};
  details?: null | string;
  message?: null | string;
  validationErrors?: null | Array<RemoteServiceValidationErrorInfo>;
}
