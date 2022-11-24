import { filter, finalize, of, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSModalService } from 'tds-ui/modal';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TDSSafeAny, TDSHelperObject } from 'tds-ui/shared/utility';
import { ModalUpdateStaffComponent } from '../../components/staff/modal-update-staff/modal-update-staff.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TDSMessageService } from 'tds-ui/message';
import { AppUserDto, BranchDto, DepartmentDto, PositionDto, TrackingValue, UserLogDto } from '@commom/hrm/models';
import { BranchService, DepartmentService, PositionService, UserService } from '@commom/hrm/services';
import { TDSUploadFile } from 'tds-ui/upload';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
@Component({
  selector: 'hrm-staff-detail',
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class StaffDetailComponent implements OnInit {

  updatePositionForm!: FormGroup;
  updateBranchForm!: FormGroup;
  listDepartment: DepartmentDto[] = [];
  userChangingHistory!: UserLogDto;
  listHistory: TrackingValue[] = [];
  departmentByUser!: DepartmentDto;
  fileListImage: TDSUploadFile[] = [];
  previewImage: string = '';
  id: TDSSafeAny;
  staffDetail?: AppUserDto;
  startWorkingDate: string = '';
  branch: string = '';
  department: string = '';
  position: string = '';
  code: string = '';
  branchId: string = '';
  departmentId: string = '';
  positionId: string = '';
  descriptionOfBranch: string = '';
  descriptionOfDepartment: string = '';
  descriptionOfPosition: string = '';
  isShowImage: boolean = false;
  isLoadingData: boolean = false;
  isLoadingHistory: boolean = false;
  public listDataOfBranch: BranchDto[] = [];
  visibleBranch: boolean = false;
  visibleDepartment: boolean = false;
  visiblePosition: boolean = false;
  updateDepartmentForm!: FormGroup;
  listDataOfPosition: PositionDto[] = [];
  public listDataOfDepartment: DepartmentDto[] = [];

  constructor(
    private userService: UserService,
    private branchService: BranchService,
    private departmentService: DepartmentService,
    private positionService: PositionService,
    private route: ActivatedRoute,
    private modalService: TDSModalService,
    private msg: TDSMessageService,
    private fb: FormBuilder,
    private viewContainerRef: ViewContainerRef,
    private destroy$: TDSDestroyService,
  ) {
    this.BranchForm();
    this.departmentForm();
    this.positionForm();
  }

  ngOnInit(): void {
    this.loadDataDetails();
    this.getListBranch();
    this.getListDepartment();
    this.getListPosition();
  }

  onChangePopover(event: boolean) {
    if (event) {
      this.loadDataOfBranch();
      this.loadDataOfDepartment();
      this.loadDataOfPosition();
    }
  }

  getListBranch() {
    this.branchService.getBranch_Json({ MaxResultCount: 0 })
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.listDataOfBranch = [...res.items!];
      })
  }

  getListDepartment() {
    this.departmentService.getDepartment_Json({ MaxResultCount: 0 })
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.listDataOfDepartment = [...res.items!];
      })
  }

  getListPosition() {
    this.positionService.getPosition_Json({ MaxResultCount: 0 })
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.listDataOfPosition = [...res.items!];
      })
  }

  BranchForm() {
    this.updateBranchForm = this.fb.group({
      description: new FormControl(null, [Validators.required]),
      branchId: new FormControl(null, [Validators.required])
    })
  }

  departmentForm() {
    this.updateDepartmentForm = this.fb.group({
      description: new FormControl(null, [Validators.required]),
      departmentId: new FormControl(null, [Validators.required])
    })
  }

  positionForm() {
    this.updatePositionForm = this.fb.group({
      description: new FormControl(null, [Validators.required]),
      positionId: new FormControl(null, [Validators.required])
    })
  }

  loadDataDetails() {
    this.isLoadingData = true;
    this.id = this.route.snapshot.paramMap.get("id");
    this.userService.getUserDetailId_Json({ id: this.id })
      .pipe(finalize(() => {
        this.isLoadingData = false;
      }), takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (TDSHelperObject.hasValue(res)) {
            this.staffDetail = res;
            this.getAllWorkProgress();
          }
        },
        error: (err) => {
          if (TDSHelperObject.hasValue(err)) {
            this.staffDetail = {};
          }
        }
      })
  }

  loadDataOfBranch() {
    this.updateBranchForm?.patchValue({
      branchId: this.branchId,
      description: this.descriptionOfBranch
    })
  }

  loadDataOfDepartment() {
    this.updateDepartmentForm?.patchValue({
      departmentId: this.departmentId,
      description: this.descriptionOfDepartment
    })
  }

  loadDataOfPosition() {
    this.updatePositionForm?.patchValue({
      positionId: this.positionId,
      description: this.descriptionOfPosition
    })
  }



  onSubmitUpdateDepartment() {
    if (this.updateDepartmentForm.valid) {
      this.isLoadingData = true;
      this.userService.putUserUserIdUpdateDepartment({ userId: this.id, body: this.updateDepartmentForm.value })
        .pipe(finalize(() => {
          this.isLoadingData = false;
        }), takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            if (this.staffDetail) {
              let name = this.listDataOfDepartment.find(x => x.id == this.updateDepartmentForm.controls['departmentId'].value);
              if (name)
                this.staffDetail.departmentName = name.name;
            }
            this.msg.success('Cập nhật phòng ban thành công');
            this.getAllWorkProgress();
            this.closeUpdateDepartmentForm();
          },
          error: (err) => {
            if (!err || !err.error) {
              this.msg.error('Cập nhật phòng ban thất bại');
            } else {
              if (!err.error.validationErrors) {
                this.msg.error(err?.error?.message);
              }
              else {
                for (let i = 0; i < err.error?.validationErrors.length; i++) {
                  this.msg.error(err.error?.validationErrors[i]?.message);
                }
              }
            }
          }
        })
    }
  }

  closeUpdateDepartmentForm() {
    this.departmentForm();
    this.visibleDepartment = false;
  }

  onSubmitUpdateBranch(): void {
    if (this.updateBranchForm.valid) {
      this.isLoadingData = true;
      this.userService.putUserUserIdUpdateBranch({ userId: this.id, body: this.updateBranchForm.value })
        .pipe(finalize(() => {
          this.isLoadingData = false;
        }), takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            if (this.staffDetail) {
              let name = this.listDataOfBranch.find(x => x.id == this.updateBranchForm.controls['branchId'].value);
              if (name)
                this.staffDetail.branchName = name.name;
            }
            this.msg.success('Cập nhật chi nhánh thành công');
            this.getAllWorkProgress();
            this.closeUpdateBranchForm();
          },
          error: (err) => {
            if (!err || !err.error) {
              this.msg.error('Cập nhật chi nhánh thất bại');
            } else {
              if (!err.error.validationErrors) {
                this.msg.error(err?.error?.message);
              }
              else {
                for (let i = 0; i < err.error?.validationErrors.length; i++) {
                  this.msg.error(err.error?.validationErrors[i]?.message);
                }
              }
            }
          }
        })
    }
  }

  closeUpdateBranchForm() {
    this.BranchForm()
    this.visibleBranch = false;
  }

  onSubmitUpdatePosition() {
    if (this.updatePositionForm.valid) {
      this.isLoadingData = true;
      this.userService.putUserUserIdUpdatePosition({ userId: this.id, body: this.updatePositionForm.value })
        .pipe(finalize(() => {
          this.isLoadingData = false;
        }), takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            if (this.staffDetail) {
              let name = this.listDataOfPosition.find(x => x.id == this.updatePositionForm.controls['positionId'].value);
              if (name)
                this.staffDetail.positionName = name.name;
            }
            this.msg.success('Cập nhật chức vụ thành công');
            this.getAllWorkProgress();
            this.closeUpdatePosition();
          },
          error: (err) => {
            if (!err || !err.error) {
              this.msg.error('Cập nhật chức vụ thất bại');
            } else {
              if (!err.error.validationErrors) {
                this.msg.error(err?.error?.message);
              }
              else {
                for (let i = 0; i < err.error?.validationErrors.length; i++) {
                  this.msg.error(err.error?.validationErrors[i]?.message);
                }
              }
            }
          }
        })
    }
  }

  closeUpdatePosition() {
    this.positionForm();
    this.visiblePosition = false;
  }

  showModalUpdateStaff() {
    const modal = this.modalService.create({
      title: 'Cập nhật thông tin nhân viên',
      content: ModalUpdateStaffComponent,
      size: "xl",
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        id: this.id,
      },
      centered: true
    });
    modal.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res)) {
            this.getAllWorkProgress();
            this.loadDataDetails();
          }
        }
      }
    )
  }

  // beforeUploadImage = (file: TDSSafeAny): boolean => {
  //   if (this.fileListImage.length > 0) {
  //     if (!this.fileListImage.find(f => { return f.name === file.name }))
  //       this.fileListImage = this.fileListImage.concat(file);
  //     else {
  //       return false;
  //     }
  //   } else {
  //     this.fileListImage = this.fileListImage.concat(file);
  //   }
  //   if (this.fileListImage.length > 0) {
  //     let length = this.fileListImage.length - 1;
  //     if (this.fileListImage[length].type == 'image/png' || this.fileListImage[length].type == 'image/jpeg' || this.fileListImage[length].type == 'image/jfif' || this.fileListImage[length].type == 'image/pdf') {
  //       if (this.staffDetail?.attachments != null) {
  //         getBase64(file).then((res: TDSSafeAny) => {
  //           let model = {} as TDSSafeAny;
  //           model.content = res;
  //           if (this.staffDetail?.attachments) {
  //             this.staffDetail.attachments = [...(this.staffDetail.attachments || []), ...[model]];
  //           }
  //         });
  //       } 
  // else {
  // const formData = new FormData();
  // this.fileListImage.forEach((file: TDSSafeAny) => {
  //   formData.append('Files', file, file.name);
  // });
  // formData.append('Code', this.code);
  // const req = new HttpRequest('POST', `https://api.hrm.rke.dev.tmtco.org/api/v1/attachment/upload-file-and-insert-attachment/ + ${this.id}`, formData);
  // return this.http.request(req)
  // return this.http.request(req)
  // getBase64(file).then((res: TDSSafeAny) => {
  //   this.previewImage.push(res);
  // })
  // }
  // }
  //     else {
  //       this.msg.error('Chỉ cho phép chọn ảnh vui lòng thử lại !');
  //     }
  //   } else {
  //     this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
  //   }
  //   return false;
  // };

  showImage(value: string) {
    this.previewImage = value;
    this.isShowImage = true;
  }

  handleCancel() {
    this.isShowImage = false;
  }

  // deleteImage(uid: string) {
  //   this.isLoadingData = true;
  //   if (this.staffDetail?.attachments != null) {
  //     if (this.staffDetail?.attachments?.length! > 0) {
  //       const index = this.staffDetail?.attachments?.findIndex(img => img.id === uid);
  //       this.staffDetail?.attachments?.splice(index!, 1);
  //     }
  //   }
  //   // else {
  //   //   if (this.previewImage.length > 0) {
  //   //     const index = this.previewImage.findIndex(img => img === uid);
  //   //     this.previewImage.splice(index, 1);
  //   //   }
  //   //   this.isLoadingData = false;
  //   // }
  // }

  // hiển thị quá trình làm việc tại công ty
  getAllWorkProgress() {
    this.isLoadingHistory = true;
    this.userService.getUserUserChangingHistory_Json({ userId: this.id })
      .pipe(finalize(() => {
        this.isLoadingHistory = false;
      }), takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          if (TDSHelperObject.hasValue(res)) {
            this.userChangingHistory = res;
            this.listHistory = res.trackingValues;
            this.getFirstValuesOfWorkProgress();
            this.getValuesChangeOfUpdateBranchForm();
            this.getValuesChangeOfUpdateDepartmentForm();
            this.getValuesChangeOfUpdatePositionForm();
          }
        },
        error: (error) => {
          if (TDSHelperObject.hasValue(error)) {
            this.listHistory = [];
          }
        }
      })
  }

  getFirstValuesOfWorkProgress() {
    if (this.userChangingHistory) {
      this.startWorkingDate = this.userChangingHistory?.startWorkingDate!;
      this.branch = this.userChangingHistory?.branchName!;
      this.department = this.userChangingHistory?.departmentName!;
      this.position = this.userChangingHistory?.positionName!;
    }
  }

  getValuesChangeOfUpdateBranchForm() {
    if (this.listHistory && this.listHistory.find(x => x.kind == 0)) {
      let lengthOfBranch = this.listHistory?.map(d => d.kind).lastIndexOf(0);
      this.branchId = this.listHistory[lengthOfBranch]?.newValue!;
      this.descriptionOfBranch = this.listHistory[lengthOfBranch]?.description!;
    } else {
      this.branchId = this.staffDetail?.branchId!;
    }
  }

  getValuesChangeOfUpdateDepartmentForm() {
    if (this.listHistory && this.listHistory.find(x => x.kind == 1)) {
      let lengthOfDepartment = this.listHistory?.map(d => d.kind).lastIndexOf(1);
      this.departmentId = this.listHistory[lengthOfDepartment]?.newValue!;
      this.descriptionOfDepartment = this.listHistory[lengthOfDepartment]?.description!;
    } else {
      this.departmentId = this.staffDetail?.departmentId!;
    }
  }

  getValuesChangeOfUpdatePositionForm() {
    if (this.listHistory && this.listHistory.find(x => x.kind == 2)) {
      let lengthOfPosition = this.listHistory?.map(d => d.kind).lastIndexOf(2);
      this.positionId = this.listHistory[lengthOfPosition]?.newValue!;
      this.descriptionOfPosition = this.listHistory[lengthOfPosition]?.description!;
    } else {
      this.positionId = this.staffDetail?.positionId!;
    }
  }

}
