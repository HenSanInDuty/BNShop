import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { BioDeviceAdminCreateDto } from '@commom/hrm/models';
import { BioDeviceService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';

import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef, TDSModalService } from 'tds-ui/modal';
import { TDSHelperArray, TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { ModalGetStaffComponent } from '../modal-get-staff/modal-get-staff.component';

@Component({
  selector: 'hrm-modal-admin-device',
  templateUrl: './modal-admin-device.component.html',
  styleUrls: ['./modal-admin-device.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ModalAdminDeviceComponent implements OnInit {

  @Input() idAdminBioDevice: TDSSafeAny;
  @Input() nameBioDevice: TDSSafeAny;
  lstAdminBioDevice: TDSSafeAny
  lstTestAdminBioDevice: TDSSafeAny
  lstId: TDSSafeAny
  body?:BioDeviceAdminCreateDto
  listIdAdmin = new Set<string>();
  loading: boolean = false;
  error?: string;
  constructor(
    private modal: TDSModalRef,
    private bioDeviceService: BioDeviceService,
    private message: TDSMessageService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private destroy$: TDSDestroyService
  ) { }

  ngOnInit(): void {
    this.getAdminBioDevice()
  }

  cancel() {
    this.modal.destroy(null);
  }

  onSave() {
    let result = this.lstAdminBioDevice.filter((item: TDSSafeAny) => !this.lstTestAdminBioDevice.includes(item.id))
    this.loading = true;
    this.body = {
      deviceSerialNo: this.idAdminBioDevice,
      userIds: this.lstId = result.map((item: TDSSafeAny) => item.id)

    }
    let params = {
      body: this.body
    }
    if (TDSHelperArray.hasListValue(result)) {
      this.bioDeviceService.postBioDeviceAdminCreate_Response(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            this.loading = false
            this.message.success("Thêm admin thành công")
            this.modal.destroy(params);
          },
          error: (err) => {
            this.message.error(err.error.message)
            this.loading = false
            this.modal.destroy(params);
          }
        })
    }
    else {
      this.loading = false
      this.modal.destroy(null);
    }
  }

  onDeleteOne(data: TDSSafeAny): void {
    const modal = this.modalService.error({
      title: 'Xác nhận xóa người quản lý',
      content: `<span  class="text-body-2 font-regular">
       Bạn có chắc muốn xóa người quản lý này không?
     </span>`,
      onOk: () => {
        const idAdmin = this.lstTestAdminBioDevice.find((item: TDSSafeAny) => item === data)
        let params: TDSSafeAny = {
          deviceSerialNo: this.idAdminBioDevice,
          userId: idAdmin
        }
        if (idAdmin) {
          this.bioDeviceService.deleteBioDeviceDeviceSerialNoAdminDeleteUserId_Response(params)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                modal.destroy(params);
                this.getAdminBioDevice()
                this.message.success("Xóa người quản lý thành công")
              },
              error: (err) => {
                this.getAdminBioDevice()
                this.message.error(err.error.message)
              }
            })
        }
        else {
          this.lstAdminBioDevice = this.lstAdminBioDevice.filter((item: TDSSafeAny) => item.id != data)
        }
      },
      onCancel: () => { },
      confirmIcon: 'tdsi-trash-fill',
      okText: "Xóa",
      cancelText: "Hủy"
    });
  }

  getAdminBioDevice() {
    this.loading = true;
    let params = {
      serialNo: this.idAdminBioDevice
    }
    this.bioDeviceService.getBioDeviceSerialNoAdmins_Json(params)
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (res) => {
        if (res) {
          this.loading = false
          this.lstAdminBioDevice = res;
          this.lstTestAdminBioDevice = this.lstAdminBioDevice.map((item: TDSSafeAny) => item.id)
          this.listIdAdmin = this.lstTestAdminBioDevice
        }
      },
      error: (err) => {
        this.loading = false
        this.message.error(err.message)
      }
    })
  }

  getStaffAdmin(): void {
    let modal = this.modalService.create({
      title: `Thêm Admin quản lý cho ${this.nameBioDevice} `,
      content: ModalGetStaffComponent,
      size: "lg",
      viewContainerRef: this.viewContainerRef,
      footer: null,
      componentParams: {
        listOfCheckedId: Array.from(this.listIdAdmin),
        listOfdata: [...this.lstAdminBioDevice]
      },
    })
    modal.afterClose.subscribe({
      next: (res) => {
        if (TDSHelperObject.hasValue(res)) {
          let retrievedObject: TDSSafeAny = localStorage.getItem("admin-new");
          this.lstAdminBioDevice = JSON.parse(retrievedObject);
          this.listIdAdmin = this.lstAdminBioDevice.map((item: TDSSafeAny) => item.id)
          localStorage.removeItem("admin-new");
        }
      },
      error: (err) => {
        this.message.error(err.code)
      }
    }
    )
  }
}
