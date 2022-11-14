/* tslint:disable */
/* eslint-disable */
export interface EmailSettingsDto {
  defaultFromAddress?: null | string;
  defaultFromDisplayName?: null | string;
  smtpDomain?: null | string;
  smtpEnableSsl?: boolean;
  smtpHost?: null | string;
  smtpPassword?: null | string;
  smtpPort?: number;
  smtpUseDefaultCredentials?: boolean;
  smtpUserName?: null | string;
}
