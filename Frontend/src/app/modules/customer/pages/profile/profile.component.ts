import { ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { CoreAuthService } from '@core/authentication';
import { CoreCustomerInitDTO, CoreUserInitDTO } from '@core/dto';
import { takeUntil } from 'rxjs';
import { getOrderDetailDTO } from 'src/app/dto/orderDetail.dto';
import { ModalRegisterPasswordComponent } from 'src/app/modules/dashboard/components/modal-register-password/modal-register-password.component';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperArray, TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'hrm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  host: { class: '  w-full h-full justify-center flex p-4 overflow-hidden bg-neutral-3-50' },
  providers: [
    TDSDestroyService
  ]
})
export class ProfileComponent implements OnInit {
  loading = false;
  userProfile$!: CoreUserInitDTO | undefined;
  nameProfile?: string;
  lstOrderDetail: getOrderDetailDTO[] = [];
  lstOrderDetailBackup: getOrderDetailDTO[] = [];
  constructor(
    private authService: CoreAuthService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private message: TDSMessageService,
    private destroy$: TDSDestroyService,
    private cd: ChangeDetectorRef,
    private orderDetailService: OrderDetailService,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.authService.getObsUserProfile().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.userProfile$ = res;
        this.getListOrderDetail();
        this.nameProfile = this.userProfile$?.name.split(" ")[this.userProfile$?.name.split(" ").length - 1].charAt(0);
        this.loading = false;
      },
    });
    this.message.warning("Tính năng đang phát triển")
  }

  showModaChangePassword(): void {
    const modalWorkingKind = this.modalService.create({
      title: 'Đổi mật khẩu',
      content: ModalRegisterPasswordComponent,
      size: "lg",
      viewContainerRef: this.viewContainerRef,
      componentParams: {
      },
    });
    modalWorkingKind.afterClose.subscribe(
      {
        next: (res) => {
        },
        error: (err) => {
        }
      }
    )
  }
  getListOrderDetail() {
    // this.lstOrderBackup = [];
    this.orderDetailService.getOrderDetail()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          if (TDSHelperArray.hasListValue(res)) {
            this.lstOrderDetail = res;
            this.lstOrderDetail = this.lstOrderDetail.reverse()
            this.lstOrderDetailBackup = this.lstOrderDetail
            this.cd.detectChanges()
          }
          else {
            this.lstOrderDetail = [];
            this.lstOrderDetailBackup = [];
            this.cd.detectChanges()
          }
          // this.loadingOrder = false
          this.cd.detectChanges()
        },
        error: (err) => {
          // this.loadingOrder = false
          this.message.error("Đã có lỗi sảy ra trong quá trình thực hiện")
          this.cd.detectChanges()
        }
      })
  }
}
