import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CoreAuthService } from '@core/authentication';
import { CoreUserInitDTO } from '@core/dto';
import { Observable, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { ModalAddImgTimeKeepingComponent } from '../../components/modal-add-img-time-keeping/modal-add-img-time-keeping.component';
import { TimeKeepingPersonalService } from '../../services/time-keeping-personal.service';

@Component({
  selector: 'hrm-timekeeping',
  templateUrl: './timekeeping.component.html',
  styleUrls: ['./timekeeping.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class TimekeepingComponent implements OnInit {

  user?: CoreUserInitDTO
  userProfile$!: Observable<CoreUserInitDTO | undefined>;
  constructor(
    private message: TDSMessageService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private authService: CoreAuthService,
    private destroy$: TDSDestroyService,
  ) { }

  ngOnInit(): void {
    this.userProfile$ = this.authService.getObsUserProfile().pipe(takeUntil(this.destroy$));
    this.userProfile$.subscribe({
      next: (res) => {
        this.user = res;
      },
    })
  }

  // Modal tải hình ảnh chấm công cá nhân
  postImdTimeKeeping() {
    const modalWorkingDate = this.modalService.create({
      title: 'Tải hình ảnh chấm công nhận diện khuôn mặt',
      content: ModalAddImgTimeKeepingComponent,
      size: "xl",
      footer: null,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
      },
    });
    modalWorkingDate.afterOpen.subscribe({
      next: (res) => {

      },
      error: (err) => {
      }
    }
    )
    modalWorkingDate.afterClose.subscribe({
      next: (res) => {
      },
      error: (err) => {
      }
    }
    )
  }
}
