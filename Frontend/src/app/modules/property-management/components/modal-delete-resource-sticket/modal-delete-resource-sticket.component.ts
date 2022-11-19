import { Component, Input, OnInit } from '@angular/core';

import { ResourceTicketService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';

@Component({
  selector: 'hrm-modal-delete-resource-sticket',
  templateUrl: './modal-delete-resource-sticket.component.html',
  styleUrls: ['./modal-delete-resource-sticket.component.scss'],
  providers: [TDSDestroyService]
})
export class ModalDeleteResourceSticketComponent implements OnInit {

  @Input() id?: string
  constructor(
    private modal: TDSModalRef,
    private resourceTicketService: ResourceTicketService,
    private $destroy: TDSDestroyService,
    private message: TDSMessageService
  ) { }

  ngOnInit(): void {
  }

  onDelete() {
    this.resourceTicketService.putResourceTicketCancelTicket_Response({ id: this.id }).pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (res) => {
          this.message.success("Xóa vé thuê thành công");
          this.modal.destroy(this.id)
        },
        error: (err) => {
          this.message.error(err.message);
          this.modal.destroy(null)
        },
      })

  }

  cancel() {
    this.modal.destroy(null)
  }
}
