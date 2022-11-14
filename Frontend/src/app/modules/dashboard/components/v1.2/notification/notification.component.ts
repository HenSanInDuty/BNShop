import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AppUserProfileDto } from '@commom/hrm/models';
import { UserService } from '@commom/hrm/services';
import { CoreAuthService } from '@core/authentication';
import { CoreUserInitDTO } from '@core/dto';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';

@Component({
  selector: 'hrm-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  host: { class: '  w-full h-full flex flex-col overflow-hidden' },
})
export class NotificationComponent implements OnInit {

  userProfile$!: CoreUserInitDTO | undefined;
  nameProfile?: string;
  profileUser?: AppUserProfileDto;
  constructor(
    private authService: CoreAuthService,
    private userService: UserService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private message: TDSMessageService,
    private destroy$: TDSDestroyService,
  ) { }

  ngOnInit(): void {
    this.authService.getObsUserProfile().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.userProfile$ = res;
        this.nameProfile = this.userProfile$?.userName.split(" ")[this.userProfile$?.userName.split(" ").length - 1].charAt(0);
      },
    });
    this.message.warning("Tính năng đang phát triển")
  }

}
