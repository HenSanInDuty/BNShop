/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';

/**
 * Global configuration
 */
@Injectable({
  providedIn: 'root',
})
export class THRMApiConfiguration {
  rootUrl: string = 'https://hrm.dev.tmtco.org/hrm';
}

/**
 * Parameters for `THRMApiModule.forRoot()`
 */
export interface THRMApiConfigurationParams {
  rootUrl?: string;
}
