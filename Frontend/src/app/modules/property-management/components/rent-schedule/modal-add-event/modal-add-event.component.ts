import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberDto, ParticipantCreateDto, ParticipantDto, ResourceDto, ResourceTicketCheckBusyTimeAndSuggestDto, ResourceTicketCheckBusyTimeDto, ResourceTicketCreateDto, ResourceTicketDto, ResourceTicketParamCheckBusyTimeAndSuggestDto, ResourceTicketParamSuggestResourceByTime, ResourceTicketParamSuggestTimeByDateAndResourceId, ResourceTicketSuggestTimeDto, ResourceTicketUpdateDto, ResourceTypeDto } from '@commom/hrm/models';
import { ResourceService, ResourceTicketService } from '@commom/hrm/services';
import { differenceInCalendarDays, setHours, setMinutes, setSeconds } from 'date-fns';
import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef, TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { ModalAddGuestComponent } from '../modal-add-guest/modal-add-guest.component';
export interface ResultDataDTO {
  data: ResourceTicketCheckBusyTimeDto[],
  ids: Set<string>
}

@Component({
  selector: 'hrm-modal-add-event',
  templateUrl: './modal-add-event.component.html',
  styleUrls: ['./modal-add-event.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ModalAddEventComponent implements OnInit {

  @Input() resourceTypes: ResourceTypeDto[] = [];
  @Input() resourceTypeId: string = '';
  @Input() idOfEdit: string = '';
  @Input() idOfCopy: string = '';
  @Input() choosedDate: TDSSafeAny;
  @Input() currentUser: string = '';
  @Input() resourceId: string = '';
  @Input() branchId: string = '';
  suggestTimeWhenAddParticipant!: ResourceTicketCheckBusyTimeAndSuggestDto;
  userAndIsBusy: ResourceTicketCheckBusyTimeDto[] = [];
  listSuggestRangeTimeFreeByDateAndResource!: ResourceTicketSuggestTimeDto;
  scheduleDetails!: ResourceTicketDto;
  listDataOfResource: ResourceDto[] = [];
  listResourceSuggest: ResourceDto[] = [];
  resourceTypeName: string = '';
  toDay: Date = new Date();
  addEventForm!: FormGroup;
  isLoading: boolean = false;
  isLoadingCheckFreeTimeOfParticipant: boolean = false;
  isLoadingCheckFreeTimeOfResource: boolean = false;
  isLoadingSuggestResource: boolean = false;
  amountMember: number = 0;
  timeData: TDSSafeAny;
  startTime: TDSSafeAny;
  endTime: TDSSafeAny;
  startTimeOldValue!: Date;
  endTimeOldValue!: Date;
  listIdOfMember = new Set<string>();
  listMember: ResourceTicketCheckBusyTimeDto[] = [];

  constructor(
    private resourceService: ResourceService,
    private resourceTicketService: ResourceTicketService,
    private modal: TDSModalRef,
    private fb: FormBuilder,
    private msg: TDSMessageService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private destroy$: TDSDestroyService,
  ) {
    this.eventForm();
  }

  ngOnInit(): void {
    this.getNameResource();
    this.getAllResource();
    this.getDateAndResourceName();
    if (this.idOfEdit) {
      this.loadDataDetailsOfEdit();
    }
    if (this.idOfCopy) {
      this.loadDataDetailsOfCoppy();
    }
  }

  getDateAndResourceName() {
    if (this.choosedDate && this.resourceId) {
      this.addEventForm.controls['startDate'].setValue(this.choosedDate);
      this.addEventForm.controls['resourceId'].setValue(this.resourceId);
    }
    this.checkFreeTimeOfResource();
  }

  eventForm() {
    this.addEventForm = this.fb.group({
      title: new FormControl(null, [Validators.required]),
      resourceId: new FormControl(null, [Validators.required]),
      startDate: new FormControl(this.toDay),
      startTime: new FormControl(null, [Validators.required]),
      endTime: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
    }, {
      validators: this.creatDateRangeValidator('startTime', 'endTime', 'startDate')
    })
  }

  disabledDate = (current: Date): boolean => {
    return differenceInCalendarDays(current, new Date()) < 0;
  }

  creatDateRangeValidator(startTime: string, endTime: string, dateBook: string) {
    return (FormGroup: FormGroup) => {
      let toDay: Date = new Date();
      const startTimeControl = FormGroup.controls[startTime];
      const endTimeControl = FormGroup.controls[endTime];
      const dateBookControl = FormGroup.controls[dateBook];
      let invalidStartTimeOfFutureDate = this.buildTime(dateBookControl.value, 8, 0);
      let invalidEndTimeOfFutureDate = this.buildTime(dateBookControl.value, 17, 30);
      let startActual = this.buildTime(dateBookControl.value, startTimeControl.value?.getHours(), startTimeControl.value?.getMinutes());
      let endActual = this.buildTime(dateBookControl.value, endTimeControl.value?.getHours(), endTimeControl.value?.getMinutes());
      if (startTimeControl.value && endTimeControl.value) {
        if (dateBookControl.value < toDay) {
          //lỗi chọn thời gian trong quá khứ
          startTimeControl.setErrors({ startTimeInvalid: true });
          endTimeControl.setErrors({ endTimeInvalid: true });
        } else {
          //lỗi chọn thời gian bắt đầu > kết thúc
          if (startActual.getTime() >= endActual.getTime()) {
            endTimeControl.setErrors({ timeInvalid: true });
            startTimeControl.setErrors({ timeInvalid: true });
          } else {
            //lỗi bắt đầu trước 8h hoặc kết thúc sau 17h30
            if (startActual < invalidStartTimeOfFutureDate || startActual > invalidEndTimeOfFutureDate) {
              startTimeControl.setErrors({ startTimeMorningAndEveningInvalid: true });
            }
            if (endActual < invalidStartTimeOfFutureDate || endActual > invalidEndTimeOfFutureDate) {
              endTimeControl.setErrors({ endTimeMorningAndEveningInvalid: true });
            }
          }
        }
      } else {
        startTimeControl.setErrors({ required: true });
        endTimeControl.setErrors({ required: true });
      }
    }
  }

  getAllResource() {
    this.resourceService.getResource_Json({
      IsActive: true,
      BranchId: this.branchId,
      ResourceTypeId: this.resourceTypeId,
      MaxResultCount: 100,
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            this.listDataOfResource = res.items!
          },
          error: (err) => {
            this.msg.error(`Có lỗi xảy ra khi tải dữ liệu ${this.resourceTypeName}`);
          }
        }
      )
  }

  getNameResource() {
    this.resourceTypeName = `${this.resourceTypes.find(x => x.id == this.resourceTypeId)?.name}`;
  }

  loadData() {
    this.addEventForm?.patchValue({
      title: this.scheduleDetails?.title,
      resourceId: this.scheduleDetails?.resourceId,
      startDate: this.scheduleDetails?.startTime ? new Date(this.scheduleDetails?.startTime) : null,
      startTime: this.scheduleDetails?.startTime ? new Date(this.scheduleDetails?.startTime) : null,
      endTime: this.scheduleDetails?.endTime ? new Date(this.scheduleDetails?.endTime) : null,
      description: this.scheduleDetails?.description
    });
  }

  loadDataDetailsOfEdit() {
    this.isLoading = true;
    this.resourceTicketService.getResourceTicketId_Json({ id: this.idOfEdit })
      .pipe(finalize(() => {
        this.isLoading = false;
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            this.scheduleDetails = res!;
            this.listMember = [...(res.members! || [])];
            this.listMember?.forEach((member: MemberDto) => {
              this.listIdOfMember.add(member.userId!);
            })
            this.amountMember = this.listMember?.length;
            this.loadData();
            this.checkResourceFreeTime();
          },
          error: (err) => {
            this.scheduleDetails = {};
          }
        }
      )
  }

  loadDataDetailsOfCoppy() {
    this.isLoading = true;
    this.resourceTicketService.getResourceTicketId_Json({ id: this.idOfCopy })
      .pipe(finalize(() => {
        this.isLoading = false;
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            this.scheduleDetails = res!;
            this.listMember = [...(res.members! || [])];
            this.listMember?.forEach((member: MemberDto) => {
              this.listIdOfMember.add(member.userId!)
            })
            this.amountMember = this.listMember?.length;
            this.loadData();
            this.checkResourceFreeTime();
          },
          error: (err) => {
            this.scheduleDetails = {};
          }
        }
      )
  }

  onSubmit() {
    if (this.idOfEdit) {
      this.isLoading = true;
      let member: ParticipantDto[] = [];
      this.listIdOfMember.forEach(x => {
        let model = { userId: x } as ParticipantDto;
        member = [...member, ...[model]];
      })
      this.timeData = this.addEventForm.value;
      this.startTime = setMinutes(setHours(this.timeData.startDate, this.timeData.startTime.getHours()), this.timeData.startTime.getMinutes());
      this.endTime = setMinutes(setHours(this.timeData.startDate, this.timeData.endTime.getHours()), this.timeData.endTime.getMinutes());
      const param: ResourceTicketUpdateDto = {
        title: this.addEventForm.controls['title'].value,
        resourceId: this.addEventForm.controls['resourceId'].value,
        startTime: this.startTime.toISOString(),
        endTime: this.endTime.toISOString(),
        description: this.addEventForm.controls['description'].value,
        participants: [...member]
      }
      this.resourceTicketService.putResourceTicketId({ id: this.idOfEdit, body: param })
        .pipe(finalize(() => {
          this.isLoading = false;
        }), takeUntil(this.destroy$))
        .subscribe(
          {
            next: (res) => {
              this.msg.success('Cập nhật thông tin lịch đặt sự kiện thành công');
              this.modal.destroy(param);
            },
            error: (err) => {
              if (TDSHelperObject.hasValue(err)) {
                this.msg.error(err.code);
              } else {
                this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
              }
            }
          }
        )
    } else {
      this.isLoading = true;
      if (this.addEventForm.value?.startTime && this.addEventForm.value?.endTime) {
        this.timeData = this.addEventForm.value;
        this.startTime = setMinutes(setHours(this.timeData?.startDate, this.timeData.startTime?.getHours()), this.timeData.startTime?.getMinutes());
        this.endTime = setMinutes(setHours(this.timeData?.startDate, this.timeData.endTime?.getHours()), this.timeData.endTime?.getMinutes());
        let member: ParticipantCreateDto[] = [];
        this.listIdOfMember.forEach(x => {
          let model = { userId: x } as ParticipantCreateDto;
          member = [...member, ...[model]];
        })
        const param: ResourceTicketCreateDto = {
          title: this.addEventForm.controls['title'].value,
          resourceId: this.addEventForm.controls['resourceId'].value,
          startTime: this.startTime.toISOString(),
          endTime: this.endTime.toISOString(),
          description: this.addEventForm.controls['description'].value,
          participants: [...member]
        }
        this.resourceTicketService.postResourceTicket_Json({ body: param })
          .pipe(finalize(() => {
            this.isLoading = false;
          }), takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.msg.success('Tạo mới sự kiện thành công');
                this.modal.destroy(param);
              },
              error: (err) => {
                if (TDSHelperObject.hasValue(err)) {
                  this.msg.error('Thông tin thời gian hoặc tài sản chưa hợp lệ xin vui lòng thử lại !');
                } else {
                  this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
                }
              }
            }
          )
      } else {
        // nếu chưa chọn startTime và End Time
        this.msg.error('Vui lòng chọn thời gian cho sự kiện !');
        this.isLoading = false;
      }
    }
  }

  checkFreeTimeOfParticipant() {
    this.isLoadingCheckFreeTimeOfParticipant = true;
    this.timeData = this.addEventForm.value;
    this.startTime = setMinutes(setHours(this.timeData.startDate, this.timeData.startTime?.getHours()), this.timeData.startTime?.getMinutes());
    this.endTime = setMinutes(setHours(this.timeData.startDate, this.timeData.endTime?.getHours()), this.timeData.endTime?.getMinutes());
    const param: ResourceTicketParamCheckBusyTimeAndSuggestDto = {
      dateBook: this.addEventForm.controls['startDate'].value,
      startTime: this.startTime,
      endTime: this.endTime,
      timeZoneDifferent: -7,
      userIds: [...this.listIdOfMember]
    }
    this.resourceTicketService.postResourceTicketCheckBusyTimeAndGetFreetime_Json({ body: param })
      .pipe(finalize(() => {
        this.isLoadingCheckFreeTimeOfParticipant = false;
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            this.suggestTimeWhenAddParticipant = res;
            if (res.userAndIsBusy) {
              this.userAndIsBusy = res.userAndIsBusy;
            }
          },
          error: (err) => {
            this.msg.error(err.error?.message);
          }
        }
      )
  }

  setTimeSuggestParticipants(data: TDSSafeAny) {
    let start = new Date(data.startTime);
    let end = new Date(data.endTime);
    this.addEventForm.controls['startTime'].setValue(start);
    this.addEventForm.controls['endTime'].setValue(end);
  }

  setResourceSuggest(data: TDSSafeAny) {
    this.addEventForm.controls['resourceId'].setValue(data.id);
  }

  checkFreeTimeOfResource() {
    if (this.addEventForm.value.resourceId) {
      this.isLoadingCheckFreeTimeOfResource = true;
      this.timeData = this.addEventForm.value;
      this.startTime = setMinutes(setHours(this.timeData.startDate, this.timeData.startTime?.getHours()), this.timeData.startTime?.getMinutes());
      this.endTime = setMinutes(setHours(this.timeData.startDate, this.timeData.endTime?.getHours()), this.timeData.endTime?.getMinutes());
      const param: ResourceTicketParamSuggestTimeByDateAndResourceId = {
        dateBook: this.addEventForm.controls['startDate'].value,
        startTime: this.startTime,
        endTime: this.endTime,
        timeZoneDifferent: -7,
        resourceId: this.addEventForm.controls['resourceId'].value
      }
      this.resourceTicketService.postResourceTicketSuggestTimeByDateAndResourceId_Json({ body: param })
        .pipe(finalize(() => {
          this.isLoadingCheckFreeTimeOfResource = false;
          this.isLoading = false;
        }), takeUntil(this.destroy$))
        .subscribe(
          {
            next: (res) => {
              this.listSuggestRangeTimeFreeByDateAndResource = res;
            },
            error: (err) => {
              this.msg.error(err.error?.code);
            }
          }
        )
    }
  }

  suggestResource() {
    this.isLoadingSuggestResource = true;
    this.timeData = this.addEventForm.value;
    this.startTime = setMinutes(setHours(this.timeData.startDate, this.timeData.startTime?.getHours()), this.timeData.startTime?.getMinutes());
    this.endTime = setMinutes(setHours(this.timeData.startDate, this.timeData.endTime?.getHours()), this.timeData.endTime?.getMinutes());
    const param: ResourceTicketParamSuggestResourceByTime = {
      branchId: this.branchId,
      startTime: this.startTime,
      endTime: this.endTime,
      resourceTypeId: this.resourceTypeId
    }
    if (this.addEventForm.value?.startTime && this.addEventForm.value?.endTime) {
      this.resourceTicketService.postResourceTicketSuggestResourceByTime_Json({ body: param })
        .pipe(finalize(() => {
          this.isLoadingSuggestResource = false;
        }), takeUntil(this.destroy$))
        .subscribe(
          {
            next: (res) => {
              this.listResourceSuggest = res;
            },
            error: (err) => {
              if (TDSHelperObject.hasValue(err)) {
                this.msg.error(err.error?.code);
              }
            }
          }
        )
    }
  }

  checkResource() {
    if (this.addEventForm.value?.startDate) {
      this.checkFreeTimeOfResource();
      this.suggestResource();
      this.checkFreeTimeOfParticipant();
    }
  }

  checkResourceFreeTime() {
    this.checkFreeTimeOfResource();
    this.suggestResource();
  }

  showModalAddGuest(): void {
    const modal = this.modalService.create({
      title: 'Thêm khách mời theo phòng ban',
      content: ModalAddGuestComponent,
      size: "lg",
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        setOfCheckedId: new Set([...this.listIdOfMember]),
        listOfdata: [...(this.listMember || [])],
      }
    });
    modal.afterClose.subscribe(
      {
        next: (res: ResultDataDTO) => {
          if (res) {
            this.listMember = [...(res.data || [])];
            this.listIdOfMember = res.ids;
            this.amountMember = this.listMember?.length;
            this.checkFreeTimeOfParticipant();
          }
        }
      }
    )
  }

  deleteMemberOfChoose(id: string) {
    const index = this.listMember.findIndex(member => member.userId === id);
    this.listMember.splice(index, 1);
    this.listIdOfMember.delete(id);
    this.amountMember = this.listMember.length;
    this.checkFreeTimeOfParticipant();
  }

  cancel() {
    this.modal.destroy(null);
  }

  private buildTime(date: Date, hours: number, minutes: number, seconds: number = 0) {
    return setSeconds(setMinutes(setHours(date, hours), minutes), seconds);
  }

}
