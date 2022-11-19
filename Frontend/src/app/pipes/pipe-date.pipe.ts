import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDate'
})
export class PipeDatePipe implements PipeTransform {

  transform(date: string): Date {
    let index = new Date(date)
    return index;
  }

}
