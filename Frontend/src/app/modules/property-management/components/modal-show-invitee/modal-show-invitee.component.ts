import { Component, Input, OnInit } from '@angular/core';
import { MemberDto, ResourceTicketDto } from '@commom/hrm/models';
import { ResourceTicketService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'hrm-modal-show-invitee',
  templateUrl: './modal-show-invitee.component.html',
  styleUrls: ['./modal-show-invitee.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ModalShowInviteeComponent implements OnInit {

  //get list Invitee api
  @Input() members?: MemberDto []
  loading = false
  constructor(
    private modal: TDSModalRef,
  ) { }

  ngOnInit(): void {
  }

  cancel() {
    this.modal.destroy(null)
  }

  // //get data Invitee
  // getInvitee() {
  //   this.loading =true
  //   this.resourceTicketService.getResourceTicketId_Json({ id: this.id })
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe({
  //       next: (res) => {
  //         this.listInvitee = res.members!;
  //         this.loading =false;
  //       },
  //       error: (err) => {
  //         this.message.error(err.code);
  //         this.loading =false;
  //       },
  //     })
  // }
}
