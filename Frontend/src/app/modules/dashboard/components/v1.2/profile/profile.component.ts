import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppUserProfileDto, TrackingValue, UserLogDto } from '@commom/hrm/models';
import { UserService } from '@commom/hrm/services';
import { CoreAuthService } from '@core/authentication';
import { CoreUserInitDTO } from '@core/dto';
import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { ModalRegisterPasswordComponent } from '../../modal-register-password/modal-register-password.component';

@Component({
  selector: 'hrm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  host: { class: '  w-full h-full justify-center flex p-4 overflow-auto' },
  providers: [
    TDSDestroyService
  ]
})
export class ProfileComponent implements OnInit {

  userProfile$!: CoreUserInitDTO | undefined;
  nameProfile?: string;
  profileUser?: AppUserProfileDto;
  loading = false;
  listHistory: TrackingValue[] = [];
  userChangingHistory!: UserLogDto;
  constructor(
    private authService: CoreAuthService,
    private userService: UserService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private message: TDSMessageService,
    private destroy$: TDSDestroyService,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.authService.getObsUserProfile().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.userProfile$ = res;
        this.nameProfile = this.userProfile$?.name.split(" ")[this.userProfile$?.name.split(" ").length - 1].charAt(0);
        this.loading = false;
      },
    });
    this.message.warning("Tính năng đang phát triển")
  }

  getAllWorkProgress() {
    this.userService.getUserUserChangingHistory_Json({ userId: this.userProfile$?.id })
      .pipe(finalize(() => {
        // this.isLoadingHistory = false;
      }), takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          if (TDSHelperObject.hasValue(res)) {
            this.userChangingHistory = res;
            this.listHistory = res.trackingValues;
          }
        },
        error: (error) => {
          if (TDSHelperObject.hasValue(error)) {
            this.listHistory = [];
          }
        }
      })
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
