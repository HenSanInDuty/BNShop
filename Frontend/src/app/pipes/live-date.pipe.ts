import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'liveDate'
})
export class LiveDatePipe implements PipeTransform {

  transform(date: Date): any {
    let millis:any
    setTimeout(() => {
       millis = new Date()
       return millis;
    }, 1000)
  }

}
