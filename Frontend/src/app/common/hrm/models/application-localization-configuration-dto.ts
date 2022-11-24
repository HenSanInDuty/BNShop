/* tslint:disable */
/* eslint-disable */
import { CurrentCultureDto } from './current-culture-dto';
import { LanguageInfo } from './language-info';
import { NameValue } from './name-value';
export interface ApplicationLocalizationConfigurationDto {
  currentCulture?: CurrentCultureDto;
  defaultResourceName?: null | string;
  languageFilesMap?: null | {
[key: string]: Array<NameValue>;
};
  languages?: null | Array<LanguageInfo>;
  languagesMap?: null | {
[key: string]: Array<NameValue>;
};
  values?: null | {
[key: string]: {
[key: string]: string;
};
};
}
