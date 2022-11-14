/* tslint:disable */
/* eslint-disable */
export interface UpdateEmailSettingsDto {
  defaultFromAddress: string;
  defaultFromDisplayName: string;
  smtpDomain?: null | string;
  smtpEnableSsl?: boolean;
  smtpHost?: null | string;
  smtpPassword?: null | string;
  smtpPort?: number;
  smtpUseDefaultCredentials?: boolean;
  smtpUserName?: null | string;
}
