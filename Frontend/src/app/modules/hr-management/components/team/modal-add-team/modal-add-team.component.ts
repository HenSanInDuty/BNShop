import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { ModalAddMemberComponent } from './../modal-add-member/modal-add-member.component';
import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TDSModalRef, TDSModalService } from 'tds-ui/modal';
import { ResultDataDTO } from '../../../models/team.dto';
import { TDSMessageService } from 'tds-ui/message';
import { AppUserDisplayDto, AppUserDto, TeamCreateDto, TeamDto, TeamUpdateDto } from '@commom/hrm/models';
import { TeamService, UserService } from '@commom/hrm/services';

@Component({
  selector: 'hrm-modal-add-team',
  templateUrl: './modal-add-team.component.html',
  styleUrls: ['./modal-add-team.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ModalAddTeamComponent implements OnInit {

  @Input() teamId: string = '';
  teamDetails!: TeamDto;
  isSubmit: boolean = false;
  isLoadingOfLeader: boolean = false;
  addTeamForm!: FormGroup;
  public listDataOfStaff: AppUserDto[] = [];
  public listMember: AppUserDisplayDto[] = [];
  amountMember = 0;
  listIdOfMember = new Set<string>();

  constructor(
    private userService: UserService,
    private teamService: TeamService,
    private modal: TDSModalRef,
    private fb: FormBuilder,
    private modalService: TDSModalService,
    private msg: TDSMessageService,
    private viewContainerRef: ViewContainerRef,
    private destroy$: TDSDestroyService
  ) {
    this.teamForm();
  }

  teamForm() {
    this.addTeamForm = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      leaderId: new FormControl(null),
      description: new FormControl(null),
    })
  }

  ngOnInit(): void {

    this.getAllStaff();
    if (this.teamId) {
      this.loadDataDetails();
    }
  }

  getAllStaff() {
    this.isLoadingOfLeader = true;
    this.userService.getUser_Json({ MaxResultCount: 190 })
      .pipe(finalize(() => {
        this.isLoadingOfLeader = false;
      }), takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.listDataOfStaff = [...res.items!];
        },
        error: (err) => {
          this.listDataOfStaff = [];
        }
      })
  }

  onSubmit() {
    if (this.teamId) {
      this.isSubmit = true;
      if (!this.addTeamForm.dirty && this.teamId && !this.listIdOfMember) {
        return this.modal.destroy(null);
      } else {
        const params: TeamUpdateDto =
        {
          name: this.addTeamForm.controls['name'].value,
          leaderId: this.addTeamForm.controls['leaderId'].value,
          description: this.addTeamForm.controls['description'].value,
          members: [...this.listIdOfMember]
        }
        this.teamService.putTeamUpdate({ id: this.teamId, body: params })
          .pipe(finalize(() => {
            this.isSubmit = false;
          }), takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              this.msg.success('Cập nhật thông tin team thành công');
              this.modal.destroy(params);
            },
            error: (err) => {
              if (err) {
                this.msg.error(err?.code);
              } else {
                this.msg.error('Tạo mới Team thất bại xin vui lòng thử lại !');
              }
            }
          })
      }
    } else {
      if (this.addTeamForm.valid) {
        this.isSubmit = true;
        const params: TeamCreateDto = {
          name: this.addTeamForm.controls['name'].value,
          description: this.addTeamForm.controls['description'].value,
          leaderId: this.addTeamForm.controls['leaderId'].value,
          members: [...this.listIdOfMember]
        }
        this.teamService.postTeamCreate({ body: params })
          .pipe(finalize(() => {
            this.isSubmit = false;
          }), takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.msg.success('Tạo mới team thành công');
                this.modal.destroy(params);
              },
              error: (err) => {
                if (err) {
                  this.msg.error(err?.code);
                } else {
                  this.msg.error('Tạo mới Team thất bại xin vui lòng thử lại !');
                }
              }
            }
          )
      }
    }
  }

  cancel() {
    this.modal.destroy(null);
  }

  // modal thêm thành viên
  showModalAddMember(): void {
    const modal = this.modalService.create({
      title: 'Thêm thành viên',
      content: ModalAddMemberComponent,
      size: "xl",
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        setOfCheckedId: new Set([...this.listIdOfMember]),
        listOfdata: [...this.listMember],
      }
    });
    modal.afterClose.subscribe(
      {
        next: (res: ResultDataDTO) => {
          if (res) {
            this.listMember = [...res.data]
            this.listIdOfMember = res.ids;
            this.amountMember = this.listMember.length;
          }
        }
      }
    )
  }

  deleteMemberOfChoose(id: string) {
    const index = this.listMember.findIndex(member => member.id === id);
    this.listMember.splice(index, 1)
    this.listIdOfMember.delete(id);
    this.amountMember = this.listMember.length;
  }

  loadData() {
    this.addTeamForm?.patchValue({
      name: this.teamDetails?.name,
      description: this.teamDetails?.description,
      leaderId: this.teamDetails?.leaderId,
    });
  }

  loadDataDetails() {
    this.isSubmit = true;
    this.teamService.getTeamGetDetail_Json({ id: this.teamId })
      .pipe(finalize(() => {
        this.isSubmit = false;
      }), takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.teamDetails = res;
            this.listMember = [...res.members!];
            this.listMember.forEach((member: AppUserDisplayDto) => {
              this.listIdOfMember.add(member.id!)
            })
            this.amountMember = this.listMember.length;
            this.loadData();
          }
        },
        error: (err) => {
          this.teamDetails = {};
        }
      })
  }

}
