import { Pipe, PipeTransform } from '@angular/core';
import { ShiftDto } from '@commom/hrm/models';

@Pipe({
  name: 'validateTime'
})
export class ValidateTimePipe implements PipeTransform {

  transform(start: string, end: string): string {
    let time ='';

    if(start && end){
      time = start.substring(0, 5)! + ' - ' + end.substring(0, 5)!;
    }
    return time;
  }

}
