import { Pipe, PipeTransform } from '@angular/core';
import { AppUserDisplayDto, ResourceTicketCheckBusyTimeDto } from '@commom/hrm/models';

@Pipe({
  name: 'checkBusyParticipant'
})
export class CheckBusyParticipantPipe implements PipeTransform {

  transform(member: AppUserDisplayDto, userAndIsBusy: ResourceTicketCheckBusyTimeDto[]): boolean {
    let index = userAndIsBusy.findIndex(x => x.userId == member.id && x.isBusy == true)
    if (index > -1) {
      return true;
    }
    return false;
  }

}
