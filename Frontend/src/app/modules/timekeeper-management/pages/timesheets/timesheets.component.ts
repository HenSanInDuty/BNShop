import { Component, OnInit } from '@angular/core';
import { endOfMonth, eachDayOfInterval } from 'date-fns';
import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSHelperObject, TDSHelperString, TDSSafeAny } from 'tds-ui/shared/utility';
import { TimesheetsService } from '../../services/timesheets.service';
import { TDSMessageService } from 'tds-ui/message';
import { BranchService, DepartmentService, UserService } from '@commom/hrm/services';
import { AppUserKeepingDto, BranchDto, DepartmentDto } from '@commom/hrm/models';
import * as saveAs from 'file-saver';

@Component({
  selector: 'hrm-timesheets',
  templateUrl: './timesheets.component.html',
  styleUrls: ['./timesheets.component.scss'],
  providers: [
    TDSDestroyService
  ]
})

export class TimesheetsComponent implements OnInit {

  listDataOfTimesheets: AppUserKeepingDto[] = [];
  public listDataOfBranch: BranchDto[] = [];
  public listDataOfDepartment: DepartmentDto[] = [];
  loadingPage: boolean = true;
  chooseMonth = new Date();
  firstDay?: Date;
  lastDay?: Date;
  skipCount = 0;
  total = 0;
  pageIndex = 1;
  pageSize = 10;
  searchText = '';
  branchId = '';
  departmentId = '';
  listDayOfMonth: Array<{ date: Date; dayOfWeek: string, dayOfMonth: number }> = [];

  constructor(
    private userService: UserService,
    private branchService: BranchService,
    private departmentService: DepartmentService,
    private timesheetsService: TimesheetsService,
    private destroy$: TDSDestroyService,
    private msg: TDSMessageService,
  ) { }

  ngOnInit(): void {
    this.getListBranch();
    this.getListDepartment();
  }

  getAllTimesheets() {
    this.getDaysArray(this.chooseMonth.getFullYear(), this.chooseMonth.getMonth() + 1);
    this.loadingPage = true;
    if (this.branchId == null)
      this.branchId = '';
    if (this.departmentId == null)
      this.departmentId = '';
    if (this.searchText == null)
      this.searchText = '';
    this.userService.getUserKeeping_Json(
      {
        Year: this.chooseMonth.getFullYear(),
        Month: this.chooseMonth.getMonth() + 1,
        BranchId: this.branchId,
        DepartmentId: this.departmentId,
        SearchText: this.searchText,
        MaxResultCount: this.pageSize,
        SkipCount: this.skipCount,
        Sorting: ''
      }
    )
      .pipe(finalize(() => {
        this.loadingPage = false;
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            if (TDSHelperObject.hasValue(res)) {
              this.listDataOfTimesheets = [...res.items!];
              this.total = res.totalCount!;
            } else {
              this.listDataOfTimesheets = [];
              this.total = 0;
            }
          },
          error: (err) => {
            this.listDataOfTimesheets = [];
            this.total = 0;
          }
        }
      )
  }

  // phân trang
  onQueryParamsChange(event: TDSSafeAny): void {
    this.skipCount = (event.pageIndex - 1) * this.pageSize;
    this.getAllTimesheets();
  }

  // lấy tất cả các ngày trong tháng
  getDaysArray(year: number, month: number) {
    const currentDate = new Date(year, month - 1, 1)
    const names = ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
    let _listDayOfMonth: Array<{ dayOfWeek: string, dayOfMonth: number, date: Date }> = [];
    this.listDayOfMonth = _listDayOfMonth;
    eachDayOfInterval({
      start: currentDate,
      end: endOfMonth(currentDate)
    }).forEach(date => {
      _listDayOfMonth.push({
        dayOfWeek: names[date.getDay()],
        dayOfMonth: date.getDate(),
        date: date
      });
    })
    this.listDayOfMonth = _listDayOfMonth;
    this.firstDay = this.listDayOfMonth[0]?.date;
    this.lastDay = this.listDayOfMonth[this.listDayOfMonth.length - 1].date;
    return this.listDayOfMonth;
  }

  // chọn tháng
  onChangeMonth(value: TDSSafeAny) {
    this.chooseMonth = value;
    this.getAllTimesheets();
  }

  getListBranch() {
    this.branchService.getBranch_Json({ MaxResultCount: 0 }).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.listDataOfBranch = [...res.items!];
    })
  }

  // lọc chi nhánh
  filterOfBranch(event: TDSSafeAny): void {
    this.branchId = event;
    this.getAllTimesheets();
  }

  getListDepartment() {
    this.departmentService.getDepartment_Json({ MaxResultCount: 0 }).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.listDataOfDepartment = [...res.items!];
    })
  }

  // lọc phòng ban
  filterOfDepartment(event: TDSSafeAny): void {
    this.departmentId = event;
    this.getAllTimesheets();
  }

  // Search theo tên nhân sự
  search(event: TDSSafeAny): void {
    this.searchText = event.value;
    this.getAllTimesheets();
  }

  // xuất file excel
  exportToExcelFile() {
    this.loadingPage = true;
    let brachName: string = '';
    let departmentName: string = '';
    if (TDSHelperString.hasValueString(this.branchId)) {
      brachName = ` - ${this.listDataOfBranch.find(x => x.id == this.branchId)?.name}`;
    }
    if (TDSHelperString.hasValueString(this.departmentId)) {
      departmentName = ` - phòng ban ${this.listDataOfDepartment.find(x => x.id == this.departmentId)?.name}`;
    }
    this.timesheetsService.exportExcelFile(
      {
        Year: this.chooseMonth.getFullYear(),
        Month: this.chooseMonth.getMonth() + 1,
        BranchId: this.branchId,
        DepartmentId: this.departmentId,
        SearchText: this.searchText,
        Sorting: ''
      }
    )
      .pipe(finalize(() => {
        this.loadingPage = false;
      }), takeUntil(this.destroy$))
      .subscribe(
        {
          next: (blob: TDSSafeAny) => {
            if (this.searchText) {
              saveAs(blob, 'Bảng chấm công nhân viên tháng' + ' ' + (this.chooseMonth.getMonth() + 1) + '-' + this.chooseMonth.getFullYear() + brachName + departmentName);
            }
            else {
              saveAs(blob, 'Bảng chấm công tháng' + ' ' + (this.chooseMonth.getMonth() + 1) + '-' + this.chooseMonth.getFullYear() + brachName + departmentName);
            }
          },
          error: (error) => {
            this.msg.error(JSON.parse(error).error ? JSON.parse(error).error.code : 'Có lỗi xảy ra xin vui lòng thử lại !');
          }
        }
      );
  }

}
