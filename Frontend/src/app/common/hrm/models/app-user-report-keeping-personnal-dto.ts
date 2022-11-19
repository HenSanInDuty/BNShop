/* tslint:disable */
/* eslint-disable */
import { FaultDto } from './fault-dto';
import { FurloughKindAndWorkingKindReportDto } from './furlough-kind-and-working-kind-report-dto';
export interface AppUserReportKeepingPersonnalDto {
  annualLeaveDay?: number;
  faults?: null | Array<FaultDto>;
  furloughKindReports?: null | Array<FurloughKindAndWorkingKindReportDto>;
  totalFurloughKind?: number;
  totalKeeping?: number;
  totalWorkingKind?: number;
  userId?: null | string;
  workingKindReports?: null | Array<FurloughKindAndWorkingKindReportDto>;
}
