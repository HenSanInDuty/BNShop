import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { ModalAddMemberComponent } from '../modal-add-member/modal-add-member.component';
import { TeamUserService } from '@commom/hrm/services';
import { AppUserDto } from '@commom/hrm/models';

@Component({
  selector: 'hrm-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class MemberListComponent implements OnInit {

  @Input() teamId: string = '';
  @Input() leaderId: string = '';
  @Output() onLstMember = new EventEmitter<TDSSafeAny>();
  indexOfLeader: number = 0;
  memberListByTeam: AppUserDto[] = [];
  isLoading: boolean = false;
  constructor(
    private teamUserService: TeamUserService,
    private modalService: TDSModalService,
    private msg: TDSMessageService,
    private destroy$: TDSDestroyService
  ) { }

  ngOnInit(): void {
    this.getMemberByTeam();
  }

  getMemberByTeam() {
    this.isLoading = true;
    this.teamUserService.getTeamUserGetMemberByTeamId_Json({ id: this.teamId })
      .pipe(finalize(() => {
        this.isLoading = false;
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            this.memberListByTeam = [...res];
            let model = {
              id: this.teamId,
              result: this.memberListByTeam
            }
            this.onLstMember.emit(model);
          },
          error: (err) => {
            this.msg.error(err.code);
          }
        }
      )
  }

  showModalAddMember(): void {
    const modal = this.modalService.create({
      title: 'Thêm thành viên',
      content: ModalAddMemberComponent,
      size: "xl",
      componentParams: {
        teamId: this.teamId
      }
    });
    modal.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.getMemberByTeam();        
        }
      }
    )
  }

  deleteMember(data: AppUserDto): void {
    this.modalService.error({
      title: 'Xóa thành viên',
      content: `Bạn có chắc chắn xóa thành viên <span class="font-semibold">${data.fullName}</span> ra khỏi team không ?<br><span class="text-error-500">Lưu ý: khi đã xóa sẽ không thể khôi phục dữ liệu</span>`,
      onOk: () => {
        this.isLoading = true;
        this.teamUserService.deleteTeamUserDelete({ teamId: this.teamId, userId: data.id! })
          .pipe(finalize(() => {
            this.isLoading = false;
          }), takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.msg.success('Xóa thành viên thành công');
                this.getMemberByTeam();
              },
              error: (err) => {
                this.msg.error(err.code);
              }
            }
          )
      },
      confirmIcon: 'tdsi-trash-fill',
      okText: "Xác nhận",
      cancelText: "Đóng"
    });
  }

}
