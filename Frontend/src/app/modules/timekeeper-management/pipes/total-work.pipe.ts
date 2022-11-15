import { Pipe, PipeTransform } from '@angular/core';
import { AppUserKeepingDto } from '@commom/hrm/models';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Pipe({
  name: 'totalWork'
})
export class TotalWorkPipe implements PipeTransform {

  transform(data: AppUserKeepingDto): TDSSafeAny {
    let total = 0;
    for (let day of data.keepingDtos!) {
      total += day.total!;
    }
    return total;
  }

}
