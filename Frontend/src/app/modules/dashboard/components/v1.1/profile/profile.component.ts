import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppUserProfileDto } from '@commom/hrm/models';
import { UserService } from '@commom/hrm/services';
import { CoreAuthService } from '@core/authentication';
import { CoreUserInitDTO } from '@core/dto';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { ModalRegisterPasswordComponent } from '../../modal-register-password/modal-register-password.component';

@Component({
  selector: 'hrm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  host: { class: '  w-full h-full justify-center flex ' },
  providers: [
    TDSDestroyService
  ]
})
export class ProfileComponent implements OnInit {

  userProfile$!: CoreUserInitDTO | undefined;
  nameProfile?: string;
  profileUser?: AppUserProfileDto;
  loading = false;
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
        // this.nameProfile = this.userProfile$?.userName.split(" ")[this.userProfile$?.userName.split(" ").length - 1].charAt(0);
        this.loading = false;
      },
    });
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
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
