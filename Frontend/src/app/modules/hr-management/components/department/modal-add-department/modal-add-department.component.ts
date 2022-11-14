import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { AppUserDto, DepartmentCreateUpdateDto, ShiftDto } from '@commom/hrm/models';
import { DepartmentService, ShiftService, UserService } from '@commom/hrm/services';

@Component({
  selector: 'hrm-modal-add-department',
  templateUrl: './modal-add-department.component.html',
  styleUrls: ['./modal-add-department.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ModalAddDepartmentComponent implements OnInit {

  addDepartmentForm!: FormGroup
  isSubmit: boolean = false;
  public listDataOfStaff: AppUserDto[] = [];
  public listDataOfShift: ShiftDto[] = [];

  constructor(
    private userService: UserService,
    private shiftService: ShiftService,
    private departmentService: DepartmentService,
    private modal: TDSModalRef,
    private fb: FormBuilder,
    private msg: TDSMessageService,
    private destroy$: TDSDestroyService
  ) {
    this.addDepartmentForm = this.fb.group({
      departmentCode: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      managerId: new FormControl(null),
      description: new FormControl(null),
      mainShiftId: new FormControl(null),
    })
  }

  ngOnInit(): void {
    this.getAllStaff()
    this.getAllShift()
  }

  getAllStaff() {
    this.userService.getUser_Json({ MaxResultCount: 1000 })
      .pipe(takeUntil(this.destroy$))
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

  onSubmit() {
    if (this.addDepartmentForm.valid) {
      this.isSubmit = true;
      const params: DepartmentCreateUpdateDto = {
        name: this.addDepartmentForm.controls['name'].value,
        description: this.addDepartmentForm.controls['description'].value,
        managerId: this.addDepartmentForm.controls['managerId'].value,
        departmentCode: this.addDepartmentForm.controls['departmentCode'].value,
        mainShiftId: this.addDepartmentForm.controls['mainShiftId'].value,
      }
      this.departmentService.postDepartment_Json({ body: params })
        .pipe(finalize(() => {
          this.isSubmit = false;
        }), takeUntil(this.destroy$))
        .subscribe(
          {
            next: (res) => {
              this.msg.success('Tạo mới phòng ban thành công');
              this.modal.destroy(params);
            },
            error: (error) => {
              if (!error || !error.error) {
                this.msg.error('Tạo mới phòng ban thất bại');
              } else {
                if (!error.error?.message.validationErrors) {
                  this.msg.error(error?.error?.message);
                }
                else {
                  for (let i = 0; i < error.error?.validationErrors.length; i++) {
                    this.msg.error(error.error?.validationErrors[i]?.message);
                  }
                }
              }
            }
          }
        )
    }
  }

  cancel() {
    this.modal.destroy(null);
  }
}
