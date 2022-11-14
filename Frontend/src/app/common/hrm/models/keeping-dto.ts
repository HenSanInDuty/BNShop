/* tslint:disable */
/* eslint-disable */
import { KeepingOtherFurDto } from './keeping-other-fur-dto';
import { KeepingOtherWkDto } from './keeping-other-wk-dto';
import { TimeKeepingDto } from './time-keeping-dto';
export interface KeepingDto {
  date?: string;
  furloughKinds?: null | Array<KeepingOtherFurDto>;
  timeKeeping?: TimeKeepingDto;
  total?: number;
  workingKinds?: null | Array<KeepingOtherWkDto>;
}
