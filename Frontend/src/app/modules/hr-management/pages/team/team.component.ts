import { TDSDestroyService } from 'tds-ui/core/services';
import { Component, OnInit } from '@angular/core';
import { finalize, takeUntil } from 'rxjs';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';
import { ModalAddTeamComponent } from '../../components/team/modal-add-team/modal-add-team.component';
import { ParamsGetListTeamDTO } from '../../models/team.dto';
import { TeamDto } from '@commom/hrm/models';
import { TeamService } from '@commom/hrm/services';

@Component({
  selector: 'hrm-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class TeamComponent implements OnInit {

  indeterminate = false;
  checked = false;
  loadingTeamList: boolean = true;
  expandSet = new Set<string>();
  listDataOfTeam: readonly TeamDto[] = [];
  total = 0;
  pageIndex = 1;
  pageSize = 10;
  skipCount = 0;
  countMembers = 0;
  params: ParamsGetListTeamDTO = {
    SkipCount: 0,
    MaxResultCount: 10,
    SearchText: ''
  };

  constructor(
    private teamService: TeamService,
    private modalService: TDSModalService,
    private msg: TDSMessageService,
    private destroy$: TDSDestroyService
  ) { }

  ngOnInit(): void {
  }

  loadDataOfTeam() {
    this.loadingTeamList = true;
    if (this.params.SearchText == null)
      this.params.SearchText = '';
    this.teamService.getTeam_Json(this.params)
      .pipe(finalize(() => {
        this.loadingTeamList = false;
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            if (res) {
              this.listDataOfTeam = [...res.items!];
              this.total = res.totalCount!;
            } else {
              this.listDataOfTeam = [];
              this.total = 0;
            }
          },
          error: (err) => {
            this.listDataOfTeam = [];
            this.total = 0;
          }
        }
      )
  }

  onQueryParamsChange(params: TDSTableQueryParams): void {
    this.params.SkipCount = (params.pageIndex - 1) * this.pageSize;
    this.params.MaxResultCount = params.pageSize;
    this.skipCount = this.params.SkipCount;
    this.loadDataOfTeam();
  }

  search(event: TDSSafeAny): void {
    if (event.value != null) {
      this.params.SkipCount = 0;
      this.pageIndex = 1;
    }
    this.params.SearchText = event.value;
    this.loadDataOfTeam();
  }

  onExpandChange(departmentId: string, checked: boolean): void {
    if (checked) {
      this.expandSet.add(departmentId);
    } else {
      this.expandSet.delete(departmentId);
    }
  }

  showModalAddTeam(): void {
    const modal = this.modalService.create({
      title: 'Thêm mới team',
      content: ModalAddTeamComponent,
      size: "xl",
    });
    modal.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.loadDataOfTeam();
        }
      }
    )
  }

  deleteTeam(data: TeamDto): void {
    this.modalService.error({
      title: 'Xóa team',
      content: `Bạn có chắc chắn xóa team <span class="font-semibold">${data.name}</span> không ?<br><span class="text-error-500">Lưu ý: khi đã xóa sẽ không thể khôi phục dữ liệu</span>`,
      onOk: () => {
        this.teamService.deleteTeamDelete({ id: data.id! })
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.msg.success('Xóa team thành công');
                this.loadDataOfTeam();
              },
              error: (err) => {
                this.msg.error('Team có nhân sử không được xóa');
              }
            }
          )
      },
      confirmIcon: 'tdsi-trash-fill',
      okText: "Xác nhận",
      cancelText: "Đóng"
    });
  }

  // modal chỉnh sửa team
  showModalEditTeam(id: string) {
    const modal = this.modalService.create({
      title: 'Chỉnh sửa team',
      content: ModalAddTeamComponent,
      size: "xl",
      componentParams: {
        teamId: id
      },
    });
    modal.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.loadDataOfTeam();
        }
      }
    )
  }

  onLstMember(event: any){
    if(event){
      let index = this.listDataOfTeam.findIndex(x=>x.id == event.id)
      if(index > -1){
        this.listDataOfTeam[index].members = [...event.result]; 
        this.listDataOfTeam = this.listDataOfTeam.filter(x=> x != 0);
      }
    }
  }
}
