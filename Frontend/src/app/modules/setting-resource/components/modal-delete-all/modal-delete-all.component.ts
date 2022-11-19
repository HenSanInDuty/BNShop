import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// import { DeleteRoleUserDto } from '@commom/hrm/models';
import { BioDeviceService, FurloughKindService, HolidayService, ResourceService, ResourceTypeService, RoleService, ShiftService, WorkingKindService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSHelperArray, TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'hrm-modal-delete-all',
  templateUrl: './modal-delete-all.component.html',
  styleUrls: ['./modal-delete-all.component.scss'],
  host: { class: 'h-full w-full flex' },
  providers: [
    TDSDestroyService
  ]
})
export class ModalDeleteAllComponent implements OnInit {

  @Input() userId: TDSSafeAny
  @Input() lstRoleUser: TDSSafeAny
  @Input() userName: TDSSafeAny
  @Input() lstAccset: TDSSafeAny
  @Input() lstAccsetType: TDSSafeAny
  @Input() lstShift: TDSSafeAny
  @Input() lstFurloughKind: TDSSafeAny
  @Input() lstHolidays: TDSSafeAny
  @Input() lstBioDevice: TDSSafeAny
  @Input() lstWorkingkind: TDSSafeAny
  @Input() lstRole: TDSSafeAny
  private listIdAccset: TDSSafeAny
  private listIdShift: TDSSafeAny
  private listIdAccetType: TDSSafeAny
  private listIdFurloughKind: TDSSafeAny
  private listIdHolidays: TDSSafeAny
  private listIdBioDevice: TDSSafeAny
  isSubmit: boolean = false
  error?: string
  constructor(
    private modal: TDSModalRef,
    private resourceService: ResourceService,
    private resourceTypeService: ResourceTypeService,
    private shiftService: ShiftService,
    private furloughKindService: FurloughKindService,
    private holidayService: HolidayService,
    private bioDeviceService: BioDeviceService,
    private WorkingKindService: WorkingKindService,
    private message: TDSMessageService,
    private roleService: RoleService,
    private destroy$: TDSDestroyService
  ) { }

  ngOnInit(): void {
    if (this.lstAccset) {
      this.listIdAccset = this.lstAccset.map((item: TDSSafeAny) => item.id)
    }
    if (this.lstAccsetType) {
      this.listIdAccetType = this.lstAccsetType.map((item: TDSSafeAny) => item.id)
    }
    if (this.lstShift) {
      this.listIdShift = this.lstShift.map((item: TDSSafeAny) => item.id)
    }
    if (this.lstFurloughKind) {
      this.listIdFurloughKind = this.lstFurloughKind.map((item: TDSSafeAny) => item.id)
    }
    if (this.lstHolidays) {
      this.listIdHolidays = this.lstHolidays.map((item: TDSSafeAny) => item.id)
    }
    if (this.lstBioDevice) {
      this.listIdBioDevice = this.lstBioDevice.map((item: TDSSafeAny) => item.serialNo)
    }
  }
  cancel() {
    this.modal.destroy(null);
  }

  onDelete() {
    switch (true) {
      case (TDSHelperArray.hasListValue(this.lstAccset)): {
        this.isSubmit = true;
        this.resourceService.deleteResourceDeleteMany_Response({
          listId: this.listIdAccset
        })
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.isSubmit = false
                this.message.success("Xóa tất cả tài sản thành công")
                this.modal.destroy(this.lstAccset);
              },
              error: (err) => {
                this.isSubmit = false
                this.message.error(err.code)
              }
            })
      }
        break;
      case (TDSHelperArray.hasListValue(this.lstAccsetType)): {
        this.isSubmit = true;
        this.resourceTypeService.deleteResourceTypeDeleteMany_Response({ listId: this.listIdAccetType })
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.isSubmit = false
                this.message.success("Xóa tất cả loại tài sản thành công")
                this.modal.destroy(this.listIdAccetType);
              },
              error: (err) => {
                this.isSubmit = false
                this.message.error(err.code)
              }
            })
      }
        break;
      case (TDSHelperArray.hasListValue(this.lstShift)): {
        this.isSubmit = true;
        this.shiftService.deleteShiftDeleteMany_Response({ listId: this.listIdShift })
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.isSubmit = false
                this.message.success("Xóa tất cả ca làm thành công")
                this.modal.destroy(this.listIdShift);
              },
              error: (err) => {
                this.isSubmit = false
                this.message.error(err.code)
              }
            })
      }
        break;
      case (TDSHelperArray.hasListValue(this.lstFurloughKind)): {
        this.isSubmit = true;
        this.furloughKindService.deleteFurloughKindDeleteMany_Response({ listId: this.listIdFurloughKind })
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.isSubmit = false
                this.message.success("Xóa tất cả loại nghỉ phép thành công")
                this.modal.destroy(this.listIdFurloughKind);
              },
              error: (err) => {
                this.isSubmit = false
                this.message.error(err.code)
              }
            })
      }
        break;
      case (TDSHelperArray.hasListValue(this.lstHolidays)): {
        this.isSubmit = true;
        this.holidayService.deleteHolidayDeleteMany_Response({ listId: this.listIdHolidays })
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.isSubmit = false
                this.message.success("Xóa tất cả ngày nghỉ lễ thành công")
                this.modal.destroy(this.listIdHolidays);
              },
              error: (err) => {
                this.isSubmit = false
                this.message.error(err.code)
              }
            })
      }
        break;
      case (TDSHelperArray.hasListValue(this.lstBioDevice)): {
        this.isSubmit = true;
        this.bioDeviceService.deleteBioDeviceDeleteMany_Response({ serialNos: this.listIdBioDevice })
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.isSubmit = false
                this.message.success("Xóa tất cả máy chấm công thành công")
                this.modal.destroy(this.listIdBioDevice);
              },
              error: (err) => {
                this.isSubmit = false
                this.message.error(err.code)
              }
            })
      }
        break;
      // case (this.userId): {
      //   this.isSubmit = true;
      //   let body: DeleteRoleUserDto = {
      //     userId: this.userId,
      //     roleNames: [...this.lstRoleUser]
      //   }
      //   this.roleService.deleteIdentityRoleDeleteRoleUser_Response({ body })
      //     .pipe(takeUntil(this.destroy$))
      //     .subscribe(
      //       {
      //         next: (res) => {
      //           this.isSubmit = false
      //           this.message.success("Xóa tất cả quyền thành công")
      //           this.modal.destroy(this.lstRoleUser);
      //         },
      //         error: (err) => {
      //           this.isSubmit = false
      //           this.message.error(err.code)
      //         }
      //       })
      // }
      //   break;
      default: this.modal.destroy(null)
    }
  }
}
