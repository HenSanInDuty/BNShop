import { Component, OnInit } from '@angular/core';

import { UserService } from '@commom/hrm/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { ParamUserDTO } from '../../models/user.dto';


@Component({
  selector: 'hrm-summary-working-date',
  templateUrl: './summary-working-date.component.html',
  styleUrls: ['./summary-working-date.component.scss']
})
export class SummaryWorkingDateComponent implements OnInit {

  loading = false
  date = new Date();
  month?: Date
  rkPersonal: TDSSafeAny
  paramsTotalUserNew: ParamUserDTO = {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  }

  constructor(
    private userService: UserService,
    private message: TDSMessageService,
  ) { }

  ngOnInit(): void {
    this.getReportKeepingPersonal(this.paramsTotalUserNew)
  }

  onChangeDateTime(result: Date): void {
    this.paramsTotalUserNew.month = result?.getMonth() + 1
    this.paramsTotalUserNew.year = result?.getFullYear()
    this.getReportKeepingPersonal(this.paramsTotalUserNew)
  }

  getReportKeepingPersonal(param: ParamUserDTO) {
    this.loading = true
    this.userService.getUserReportKeepingPersonal_Json(param).subscribe({
      next: (res) => {
        if (res) {
          this.rkPersonal = res
        }
        this.loading = false
      },
      error: (err) => {
        if (!err || !err.error) {
          this.message.error('Lỗi tải dữ liệu');
        } else {
          if (!err.error.validationErrors) {
            this.message.error(err?.error?.message);
            this.loading = false
          }
          else {
            for (let i = 0; i < err.error?.validationErrors.length; i++) {
              this.message.error(err.error?.validationErrors[i]?.message);
            }
          }
        }
        this.loading = false
      }
    })

  }
}
