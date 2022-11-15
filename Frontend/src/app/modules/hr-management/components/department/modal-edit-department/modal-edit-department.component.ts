import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { DepartmentService, ShiftService, UserService } from '@commom/hrm/services';
import { AppUserDto, DepartmentCreateUpdateDto, DepartmentDto, ShiftDto } from '@commom/hrm/models';

@Component({
  selector: 'hrm-modal-edit-department',
  templateUrl: './modal-edit-department.component.html',
  styleUrls: ['./modal-edit-department.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ModalEditDepartmentComponent implements OnInit {

  @Input() departmentId = '';
  isLoadingStaff: boolean = false;
  isLoadingModal: boolean = false;
  editDepartmentForm!: FormGroup;
  departmentDetails!: DepartmentDto;
  public listDataOfStaff: AppUserDto[] = [];
  public listDataOfShift: ShiftDto[] = [];
  departmentDetail?: DepartmentDto;

  constructor(
    private userService: UserService,
    private shiftService: ShiftService,
    private departmentService: DepartmentService,
    private modal: TDSModalRef,
    private fb: FormBuilder,
    private msg: TDSMessageService,
    private destroy$: TDSDestroyService
  ) {
    this.editDepartmentForm = this.fb.group({
      departmentCode: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      managerId: new FormControl(null),
      description: new FormControl(null),
      mainShiftId: new FormControl(null),
    })
  }

  ngOnInit(): void {
    this.getAllStaff();
    this.getAllShift();
    this.loadDataDetails();
  }

  getAllStaff() {
    this.isLoadingStaff = true;
    this.userService.getUser_Json({ MaxResultCount: 1000 })
      .pipe(finalize(() => {
        this.isLoadingStaff = false;
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

  getAllShift() {
    this.shiftService.getShift_Json({ MaxResultCount: 0 })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.listDataOfShift = [...res.items!];
        },
        error: (err) => {
          this.listDataOfShift = [];
        }
      })
  }

  loadData() {
    this.editDepartmentForm?.patchValue({
      departmentCode: this.departmentDetails?.departmentCode,
      name: this.departmentDetails?.name,
      managerId: this.departmentDetails?.managerId,
      description: this.departmentDetails?.description,
      mainShiftId: this.departmentDetails?.mainShiftId,
    });
  }

  loadDataDetails() {
    this.isLoadingModal = true;
    this.departmentService.getDepartmentId_Json({ id: this.departmentId })
      .pipe(finalize(() => {
        this.isLoadingModal = false;
      }), takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.departmentDetails = res;
            this.loadData();
          }
        },
        error: (err) => {
          this.departmentDetails = {};
        },
      })
  }

  onSubmit() {
    if (!this.editDepartmentForm.dirty && this.departmentId) {
      return this.modal.destroy(null);
    }
    else {
      this.isLoadingModal = true;
      const params: DepartmentCreateUpdateDto =
      {
        departmentCode: this.editDepartmentForm.controls['departmentCode'].value,
        name: this.editDepartmentForm.controls['name'].value,
        managerId: this.editDepartmentForm.controls['managerId'].value,
        mainShiftId: this.editDepartmentForm.controls['mainShiftId'].value,
        description: this.editDepartmentForm.controls['description'].value,
      }
      this.departmentService.putDepartmentId_Plain({ id: this.departmentId, body: params })
        .pipe(finalize(() => {
          this.isLoadingModal = false;
        }), takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            this.msg.success('Cập nhật thông tin phòng ban thành công');
            this.modal.destroy(params);
          },
          error: (error) => {
           if (error) {
            this.msg.error(error?.code);
           } else {
            this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !')
           }
          },
        })
    }
  }

  cancel() {
    this.modal.destroy(null);
  }

}
