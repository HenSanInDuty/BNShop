import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuModel } from '@commom/hrm/models';
import { MenuService } from '@commom/hrm/services';
import { CoreAuthService } from '@core/authentication';
import { CoreUserInitDTO } from '@core/dto';
import { routeFadeMotion } from '@shared/animation/routeFade';
import { map, Observable, of, switchMap, takeUntil } from 'rxjs';
import { ModalRegisterPasswordComponent } from 'src/app/modules/dashboard/components/modal-register-password/modal-register-password.component';
import { ModalSettingNotificationComponent } from 'src/app/modules/dashboard/components/v1.2/modal-setting-notification/modal-setting-notification.component';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSContextMenuService, TDSDropdownMenuComponent } from 'tds-ui/dropdown';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperArray, TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { DATA_MENU } from '../data/menu.data';

@Component({
  selector: 'hrm-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    routeFadeMotion
  ],
  providers: [
    TDSDestroyService
  ]
})
export class LayoutComponent implements OnInit {
  isClick = false;
  isLoading = false;
  isCollapsed = false;
  lstData: Array<TDSSafeAny> = DATA_MENU;
  nameProfile?: string;
  userProfile$!: CoreUserInitDTO | undefined;
  role$!: Observable<Array<string> | null>;
  constructor(
    public authService: CoreAuthService,
    public destroy$: TDSDestroyService,
    private message: TDSMessageService,
    public menuSevice: MenuService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private tdsContextMenuService: TDSContextMenuService
  ) {

  }

  ngOnInit(): void {
    // this.initUser();
    // this.authService.getObsUserProfile().pipe(takeUntil(this.destroy$)).subscribe({
    //   next: (res) => {
    //     this.userProfile$ = res;
    //     this.nameProfile = this.userProfile$?.name.split(" ")[this.userProfile$?.name.split(" ").length - 1].charAt(0);
    //   },
    //   error: (err) => {
    //     this.message.error(err.error.message)
    //   },
    // });
    // this.role$ = this.authService.getObsRole().pipe(takeUntil(this.destroy$));
  }

  contextMenu($event: MouseEvent, menu: TDSDropdownMenuComponent): void {
    this.tdsContextMenuService.create($event, menu);
  }

  showModalSettingNotification(): void {
    const modalAdd = this.modalService.create({
      title: 'Cài đặt thông báo',
      content: ModalSettingNotificationComponent,
      footer: null,
      size: "md",
      viewContainerRef: this.viewContainerRef,
      componentParams: {

      },
    });
    modalAdd.afterClose.subscribe(
      {
        next: (res) => {
          // if(TDSHelperObject.hasValue(res))

        },
        error: (err) => {

        }
      }
    )
  }

  initUser() {
    this.authService.getCacheToken().pipe(
      switchMap((data: TDSSafeAny) => {
        if (TDSHelperObject.hasValue(data)) {
          return this.authService.getUserProfile();
        }
        return (data);
      }),
      takeUntil(this.destroy$)
    ).subscribe();
  }

  closeDropdown() {
    this.isClick = false;
  }

  close(e: TDSSafeAny) {
    this.isClick = e;
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  onOpenChange(e: boolean) {
    this.isCollapsed = e;
  }
  onLogout(e: MouseEvent) {
    e.stopImmediatePropagation();
    e.preventDefault();
    this.authService.clearToken();
    this.authService.redirectLogin();
  }
  getOutletState(o: RouterOutlet) {
    return o.isActivated ? o.activatedRoute : '';
  }
  private checkRoleMenu(menu: MenuModel, role: Array<string> | null) {
    let flag = false;
    if (!menu.roles || menu.roles.length == 0 || !role || role.length == 0) {
      return true
    } else {
      for (let index = 0; index < menu.roles?.length; index++) {
        const role = menu.roles[index];
        if (role.indexOf(role) > -1) {
          flag = true;
          break;
        }
      }
    }
    return flag
  }

  showModalChangePassword(): void {
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
