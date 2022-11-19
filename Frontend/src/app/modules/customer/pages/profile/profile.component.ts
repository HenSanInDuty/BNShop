import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CoreAuthService } from '@core/authentication';
import { CoreCustomerInitDTO, CoreUserInitDTO } from '@core/dto';
import { takeUntil } from 'rxjs';
import { ModalRegisterPasswordComponent } from 'src/app/modules/dashboard/components/modal-register-password/modal-register-password.component';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';

@Component({
  selector: 'hrm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  host: { class: '  w-full h-full justify-center flex p-4 overflow-auto bg-neutral-3-50' },
  providers: [
    TDSDestroyService
  ]
})
export class ProfileComponent implements OnInit {
  loading= false;
  userProfile$!: CoreUserInitDTO | undefined;
  nameProfile?: string;
  constructor(
    private authService: CoreAuthService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private message: TDSMessageService,
    private destroy$: TDSDestroyService,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.authService.getObsUserProfile().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        console.log(res)
        this.userProfile$ = res;
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
}
