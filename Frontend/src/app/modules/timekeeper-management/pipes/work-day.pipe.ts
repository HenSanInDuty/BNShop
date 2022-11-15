import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { TimeKeepingDto } from '@commom/hrm/models';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Pipe({
  name: 'workDay',
})

export class WorkDayPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) { }

  transform(value?: TimeKeepingDto, inTime?: string,): TDSSafeAny {
    if (inTime) {
      if (value?.inTime) {
        return `<span'>${this.datePipe.transform(value?.inTime, "HH:mm")}</span>`;
      } else {
        return `<div class="bg-neutral-3-100  w-full h-full flex items-center justify-center group-hover:bg-primary-3"><span>OFF 1/2</span></div>`;
      }
    }
    else {
      if (value?.outTime) {
        return `<span'>${this.datePipe.transform(value?.outTime, "HH:mm")}</span>`;
      } else {
        return `<div class="bg-neutral-3-100 w-full h-full flex items-center justify-center group-hover:bg-primary-3"><span>OFF 1/2</span></div>`;
      }
    }
  }

}
