import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef, TDSModalService } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'hrm-modal-setting-notification',
  templateUrl: './modal-setting-notification.component.html',
  styleUrls: ['./modal-setting-notification.component.scss']
})
export class ModalSettingNotificationComponent implements OnInit {


  constructor(
    private modal: TDSModalRef,
    private fb: FormBuilder,
    private destroy$: TDSDestroyService,
    private message: TDSMessageService,
    private cd: ChangeDetectorRef,
    private modalService: TDSModalService
  ) { }

  ngOnInit(): void {
  }


  cancel() {
    this.modal.destroy(null);
  }


  defaultSetting(): void {
    this.modalService.warning({
      title: 'Quay trở lại cài đặt mặc định',
      content: 'Bạn sẽ nhận lại tất cả thông báo thiết bị đã tắt, bạn đồng ý chứ?',
      onOk: () => {},
      onCancel: () => {  },
      okText: "Đóng",
      cancelText: "Đồng ý"
    });
  }

}
