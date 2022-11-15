import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSModalService } from 'tds-ui/modal';
import { TDSMessageService } from 'tds-ui/message';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddShiftToDepartmentDto, ShiftDto } from '@commom/hrm/models';
import { DepartmentService, ShiftService } from '@commom/hrm/services';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'hrm-table-shift',
  templateUrl: './table-shift.component.html',
  styleUrls: ['./table-shift.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class TableShiftComponent implements OnInit {

  isLoadingTable: boolean = false;
  @Input() departmentId = '';
  @Output() onDeleteShift = new EventEmitter<TDSSafeAny>();
  listDataShiftOfDepartment: ShiftDto[] = [];
  checked = false;
  indeterminate = false;
  setOfCheckedId = new Set<string>();
  listOfCurrentPageData: readonly ShiftDto[] = [];
  public listDataOfShift: ShiftDto[] = [];
  addShiftForm!: FormGroup

  constructor(
    private shiftService: ShiftService,
    private departmentService: DepartmentService,
    private fb: FormBuilder,
    private msg: TDSMessageService,
    private modalService: TDSModalService,
    private destroy$: TDSDestroyService
  ) {
    this.creatForm();
  }

  creatForm() {
    this.addShiftForm = this.fb.group({
      shiftIds: new FormControl(null),
    })
  }

  ngOnInit(): void {
    this.getAllShift();
    if (this.departmentId) {
      this.getShiftByDepartment();
    }
  }

  updateCheckedSet(id: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: string, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.id!, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly ShiftDto[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.id!));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.id!)) && !this.checked;
  }

  onDeleteSetOfCheck() {
    this.setOfCheckedId = new Set<string>();
    this.refreshCheckedStatus();
  }


  getShiftByDepartment() {
    this.isLoadingTable = true;
    this.shiftService.getShiftByDept_Json({ deptId: this.departmentId })
      .pipe(finalize(() => {
        this.isLoadingTable = false;
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            this.listDataShiftOfDepartment = res;
          },
          error: (err) => {
            this.listDataShiftOfDepartment = [];
          }
        }
      )
  }

  getAllShift() {
    this.shiftService.getShift_Json({ MaxResultCount: 0 })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.listDataOfShift = [...res.items!]
        },
        error: (err) => {
          this.listDataOfShift = []
        }
      })
  }

  onSubmit() {
    if (this.addShiftForm.value.shiftIds) {
      const params: AddShiftToDepartmentDto = {
        shiftIds: this.addShiftForm.controls['shiftIds'].value,
        departmentId: this.departmentId
      }
      this.departmentService.postDepartmentAddShiftsToDepartment({ body: params })
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          {
            next: (res) => {
              this.msg.success('Thêm ca làm việc thành công');
              this.creatForm();
              this.getShiftByDepartment();
            },
            error: (error) => {
              if (error) {
                this.msg.error('Đã có ca làm việc đã tồn tại !');
              } else {
                this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
              }
            }
          }
        )
    } else {
      this.msg.error('Vui lòng chọn ca làm việc');
    }
  }

  deleteShiftForDepartment(): void {
    const shiftIds = [...this.setOfCheckedId]
    this.modalService.error({
      title: 'Xóa ca làm việc',
      content: `Bạn có chắc chắn xóa ca làm việc này không ?<br><span class="text-error-500">lưu ý: Khi đã xóa sẽ không thể khôi phục dữ liệu</span>`,
      onOk: () => {
        this.isLoadingTable = true;
        this.departmentService.deleteDepartmentDeleteShiftsFromDepartment({ departmentId: this.departmentId, body: shiftIds })
          .pipe(finalize(() => {
            this.isLoadingTable = false;
          }), takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.msg.success('xóa ca làm việc thành công');
                this.getShiftByDepartment();
                this.onDeleteSetOfCheck();
                this.onDeleteShift.emit(shiftIds);
              },
              error: (error) => {
                this.msg.error(JSON.parse(error).error ? JSON.parse(error).error.code : 'Có lỗi xảy ra xin vui lòng thử lại !');
              }
            }
          )
      },
      okText: "Xác nhận",
      cancelText: "Đóng"
    });
  }

}
