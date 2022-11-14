import { DatePipe } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppUserDto, ResourceTicketDto, ResourceTicketFromToTimeDto } from '@commom/hrm/models';
import { ResourceTicketService, UserService } from '@commom/hrm/services';
import { CoreAuthService } from '@core/authentication';
import { CoreUserInitDTO } from '@core/dto';
import { endOfMonth, format } from 'date-fns';
import { number } from 'echarts';
import { Observable, takeUntil } from 'rxjs';

import { TDSBarChartComponent, TDSChartOptions, TDSPieChartComponent } from 'tds-report';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSHelperArray, TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { UsePersonalDTO } from '../../models/user.dto';

@Component({
  selector: 'hrm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  host: { class: ' overflow-hidden  w-full h-full' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService
  ]
})
export class DashboardComponent implements OnInit {

  listYear = [
    { year: new Date().getFullYear() - 1, name: "Năm trước" },
    { year: new Date().getFullYear(), name: "Năm nay" },
  ]
  listMonth = [
    { month: 1, year: new Date().getFullYear(), name: 'Tháng một' },
    { month: 2, year: new Date().getFullYear(), name: 'Tháng hai' },
    { month: 3, year: new Date().getFullYear(), name: 'Tháng ba' },
    { month: 4, year: new Date().getFullYear(), name: 'Tháng bốn' },
    { month: 5, year: new Date().getFullYear(), name: 'Tháng năm' },
    { month: 6, year: new Date().getFullYear(), name: 'Tháng sáu' },
    { month: 7, year: new Date().getFullYear(), name: 'Tháng bảy' },
    { month: 8, year: new Date().getFullYear(), name: 'Tháng tám' },
    { month: 9, year: new Date().getFullYear(), name: 'Tháng chín' },
    { month: 10, year: new Date().getFullYear(), name: 'Tháng mười' },
    { month: 11, year: new Date().getFullYear(), name: 'Tháng mười một' },
    { month: 12, year: new Date().getFullYear(), name: 'Tháng mười hai' },

  ]
  userProfile$!: CoreUserInitDTO | undefined;
  nameProfile?: string;
  start: number = 0;
  startPage: number = 0;
  currenPage: number = 0;
  total?: TDSSafeAny = 0;
  loadingResourceTicket = false;
  loadingBirthDay = false;
  loading = false;
  loadingStatic = false;
  listStatisticalVolatility?: TDSSafeAny;
  listStatisticalPosition?: TDSSafeAny;
  listResourceCurrentTime?: ResourceTicketDto[] | null | undefined;
  listDataStaff: TDSSafeAny = 0;
  totalStaff: number = 0;
  totalNewStaff: number = 0;
  totalQuitJob: number = 0;
  listBirthDay: AppUserDto[] | null | undefined;
  totalBirthDayUser: TDSSafeAny = 0;
  paramsTotalUserNew: UsePersonalDTO = {
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear()
  }
  body: ResourceTicketFromToTimeDto = {
    from: this.getNextMinus(new Date()).toISOString(),
    to: this.datePipe.transform(endOfMonth(new Date()).toISOString(), 'yyyy-MM-ddT23:59:59')?.toString()
  }
  rkPersonal?: TDSSafeAny
  barCharOptions: TDSSafeAny;
  sizeBarChar: TDSSafeAny = [1130, 480];
  pieCharOptions: TDSSafeAny;
  sizePieChar: TDSSafeAny = [360, 490];
  //căn chỉnh width,height của chart layout. giá trị có thể là number hoặc 'auto'
  chartOptions = TDSChartOptions();
  //gọi hàm khởi tạo TDSCustomChartOption
  barChartComponent: TDSBarChartComponent = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
      },
      formatter: (params: TDSSafeAny) => {
        return ` <div class="flex flex-col gap-2 items-start">
        <div class="text-title-1 font-semibold text-neutral-1-900">Tháng ${params[0].name}</div>
        <div class="flex flex-col gap-2 items-start">
          <div class="flex flex-col gap-0.5 items-start">
            <div class="text-body-2 font-semibold text-neutral-1-900">${params[0].seriesName}</div>
            <div class="flex gap-1 items-center">
              <div class="w-2 h-2 rounded-md  bg-indigo-500"></div>
              <div class="text-body-2 font-regular text-neutral-1-700">${params[0].value}</div>
            </div>
          </div>
          <div class="flex flex-col gap-0.5 items-start">
            <div class="text-body-2 font-semibold text-neutral-1-900">${params[1].seriesName}</div>
            <div class="flex gap-1 items-center">
              <div class="w-2 h-2 rounded-full bg-sky-400"></div>
              <div class="text-body-2 font-regular text-neutral-1-700">${params[1].value}</div>
            </div>
          </div>
          <div class="flex flex-col gap-0.5 items-start  ">
            <div class="text-body-2 font-semibold text-neutral-1-900">${params[2].seriesName}</div>
            <div class="flex gap-1 items-center">
              <div class="w-2 h-2 rounded-full bg-primary-4"></div>
              <div class="text-body-2 font-regular text-neutral-1-700">${params[2].value}</div>
            </div>
          </div>
        </div>
      </div>`;
      },
    },
    legend: {
      show: true,
      "bottom": 0,
      "right": 30,
      "itemWidth": 24,
      "itemGap": 20,
      textStyle: {
        width: 120,
        "fontFamily": "Segoe UI",
        "fontStyle": "nomal",
        "fontWeight": 400,
        "color": "#424752",
        "fontSize": 12,
        "lineHeight": 16
      }
    },
    grid: {
      left: '7%',
      right: '0%',
      top: '10%',
    },
    axis: {
      xAxis: [
        {
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          "axisLine": {
            "show": false,
          },
          "axisTick": {
            "show": false
          },
          "boundaryGap": true
        },
      ],
      "yAxis": [
        {
          "show": true,
          "offset": 24
        }
      ]
    },
    color: ['#715AE6', '#52ABFF', '#DBEAFE'],
    series: [
      {
        type: 'bar',
        name: 'Doanh số bán',
        stack: "123",
        barWidth: 20,
        data: [0, 10, 0, 50, 0, 30, 0, 20, 10, 0, 60, 70],
      },
      {
        type: 'bar',
        name: 'Doanh thu',
        "stack": "123",
        "barWidth": 20,
        data: [12, 12, 200, 50, 10, 20, 0, 0, 0, 0, 0, 0]
      },
      {
        type: 'bar',
        name: 'Chi phí',
        "stack": "123",
        "barWidth": 20,
        data: [10, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0]
      },
    ]
  }
  pieChartComponent: TDSPieChartComponent = {
    color: ['#FFC53D', '#FF8F45', '#35C4AF', ' #FF797A', '#3B82F6'],
    legend: {
      show: true,
      orient: 'vertical',
      "bottom": 10,
      top: 'bottom',
      left: 0,
      "itemWidth": 24,
      "itemGap": 16,
      textStyle: {
        width: 320,
        "fontWeight": 600,
        "fontFamily": "sans-serif",
        "fontSize": 12,
        "lineHeight": 16,
        "rich": {
          "header": {
            width: 290,
            "fontFamily": "Segoe UI",
            "fontWeight": 400,
            "color": "#5A6271",
            "fontSize": 14,
            "lineHeight": 20
          },
          "body": {
            "fontFamily": "Segoe UI",
            "fontWeight": 600,
            "color": "#2C333A",
            "fontSize": 14,
            "lineHeight": 20
          }
        }
      },
      formatter: (params: TDSSafeAny) => {
        var series = this.pieCharOptions.series[0].data;
        var value = series.filter((item: TDSSafeAny) => item.name === params)[0].value;
        return `{header|${params}} {body|${value}}`;
      },
    },
    series: [
      {
        name: '',
        type: "pie",
        "center": [
          "50%",
          "35%"
        ],
        label: {
          show: true,
          position: 'center',
          padding: [65, 40],
          backgroundColor: '#EFF6FF',
          borderRadius: 999,
          rich: {
            header: {
              padding: [0, 0, 0, 0],
              color: "#3B82F6",
              "fontSize": 40,
              "lineHeight": 44
            },
            body: {
              color: '#929DAA',
              "fontSize": 14,
              "lineHeight": 20
            }
          }
        },

        data: [
          {
            name: 'Sản phẩm A',
            value: 10
          },
          {
            name: 'Sản phẩm B',
            value: 10
          },
          {
            name: 'Sản phẩm C',
            value: 10
          },
          {
            name: 'Sản phẩm D',
            value: 10
          },
          {
            name: 'Sản phẩm E',
            value: 10
          }
        ]
      },
    ]
  }
  // khởi tạo 1 object TDSBarChartComponent với 2 thành phần cơ bản axis, series
  constructor(
    private userService: UserService,
    private resourceTicketService: ResourceTicketService,
    private messageService: TDSMessageService,
    private destroy$: TDSDestroyService,
    private authService: CoreAuthService,
    private cd: ChangeDetectorRef,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.barCharOptions = this.chartOptions.BarChartOption(this.barChartComponent);
    this.pieCharOptions = this.chartOptions.DonutChartOption(this.pieChartComponent, 130, 100);
    // this.getTotalStaff()
    this.authService.getObsUserProfile().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.userProfile$ = res;
        this.nameProfile = this.userProfile$?.name.split(" ")[this.userProfile$?.name.split(" ").length - 1].charAt(0);
        this.cd.detectChanges();
      },
    });
    // this.getTotalUserNew(this.paramsTotalUserNew)
    // this.getTotalQuitJob(this.paramsTotalUserNew)
    // this.getListBirthDay(this.paramsTotalUserNew)
    // this.getReportKeepingPersonal(this.paramsTotalUserNew)
    // this.getResourceTicketRangeTime()
  }

  ngAfterViewInit(): void {
    // this.getStatisticalVolatility(this.paramsTotalUserNew.year)
    // this.getStatisticalPosition(this.paramsTotalUserNew)
    let sum = this.total;
    this.pieChartComponent.series[0].label!.formatter = function (params: TDSSafeAny) {
      return `{header|${sum}}\n{body| Tổng sản phẩm }`;
    }
    this.cd.detectChanges()
  }

  // Lấy ngày hôm qua
  getNextMinus(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setMinutes(date.getMinutes() + 1);
    return previous;
  }

  onModelChangeStatisticalVolatility(e: TDSSafeAny) {
    this.getStatisticalVolatility(e)
  }

  onModelChangeStatisticalPosition(e: TDSSafeAny) {
    this.paramsTotalUserNew.month = e
    this.getStatisticalPosition(this.paramsTotalUserNew)
  }

  getResourceTicketRangeTime() {
    this.loadingResourceTicket = true;
    this.resourceTicketService.postResourceTicketRelatedToCurrentUserWithRangeTime_Json({ body: this.body }).subscribe({
      next: (res) => {
        if (TDSHelperArray.hasListValue(res)) {
          this.listResourceCurrentTime = res;
        }
        this.cd.detectChanges();
      },
      error: (err) => {
        this.listResourceCurrentTime = undefined;
        this.cd.detectChanges();
      },
      complete: () => {
        this.loadingResourceTicket = false;
      },
    })
  }

  getTotalStaff() {
    this.userService.getUserTotalCount_Json()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.totalStaff = res;
          }
          this.cd.detectChanges();
        },
        error: (err) => {
          if (err) {
            this.messageService.error(err.error.message)
          }
          this.cd.detectChanges();
        }
      })

  }

  getTotalUserNew(param: UsePersonalDTO) {
    this.userService.getUserTotalNewbie_Json(param)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.totalNewStaff = res
          }
          this.cd.detectChanges();
        },
        error: (err) => {
          if (err) {
            // this.messageService.error(err.error.message)
          }
          this.cd.detectChanges();
        }
      })

  }

  getListBirthDay(param: UsePersonalDTO) {
    this.loadingBirthDay = true;
    this.userService.getUserListAndTotalBirthdayInMonth_Json({
      month: param.month
    }).subscribe({
      next: (res) => {
        if (TDSHelperArray.hasListValue(res.users)) {
          this.totalBirthDayUser = res.totalCount;
          this.listBirthDay = res.users;
          this.startPage = Math.ceil(this.listBirthDay!.length / 5);
          this.currenPage = 1;
        };
        this.cd.detectChanges();
      },
      error: (err) => {
        if (!err || !err.error) {
          this.messageService.error('Lỗi tải dữ liệu');
        } else {
          if (!err.error.validationErrors) {
            this.messageService.error(err?.error?.message);
            this.loadingBirthDay = false;
          }
          else {
            for (let i = 0; i < err.error?.validationErrors.length; i++) {
              this.messageService.error(err.error?.validationErrors[i]?.message);
            }
          }
        }
        this.loadingBirthDay = false;
        this.cd.detectChanges();
      },
      complete: () => {
        this.loadingBirthDay = false;
        this.cd.detectChanges();
      },
    })
  }

  getTotalQuitJob(param: UsePersonalDTO) {
    this.userService.getUserTotalQuitJob_Json(param)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.totalQuitJob = res;
          }
          this.cd.detectChanges();
        },
        error: (err) => {
          if (!err || !err.error) {
            this.messageService.error('Lỗi tải dữ liệu');
          } else {
            if (!err.error.validationErrors) {
              this.messageService.error(err?.error?.message);
              this.loading = false
            }
            else {
              for (let i = 0; i < err.error?.validationErrors.length; i++) {
                this.messageService.error(err.error?.validationErrors[i]?.message);
              }
            }
          }
          this.loading = false
          this.cd.detectChanges();
        }
      })
  }

  getReportKeepingPersonal(param: UsePersonalDTO) {
    this.userService.getUserReportKeepingPersonal_Json(param)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.rkPersonal = res;
          }
          this.cd.detectChanges();
        },
        error: (err) => {
          if (!err || !err.error) {
            this.messageService.error('Lỗi tải dữ liệu');
          } else {
            if (!err.error.validationErrors) {
              this.messageService.error(err?.error?.message);
              this.loading = false
            }
            else {
              for (let i = 0; i < err.error?.validationErrors.length; i++) {
                this.messageService.error(err.error?.validationErrors[i]?.message);
              }
            }
          }
          this.loading = false
          this.cd.detectChanges();
        }
      })
  }

  getStatisticalPosition(param: UsePersonalDTO) {
    this.loading = true
    this.userService.getUserStatisticalPositionAndCount_Json({
      Month: this.paramsTotalUserNew.month,
      Year: this.paramsTotalUserNew.year
    })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.pieCharOptions.series[0].data = [];
            for (let i = 0; i < res.data?.length!; i++) {
              this.pieCharOptions.series[0].data.push({
                name: res.data![i].positionName,
                value: res.data![i].count
              })
            }
            this.total = res.total
            let sum = this.total
            this.pieChartComponent.series[0].label!.formatter = function (params: TDSSafeAny) {
              return `{header|${sum}}\n{body| Tổng nhân viên }`;
            }
            this.pieCharOptions = this.chartOptions.DonutChartOption(this.pieChartComponent, 130, 100);
            this.cd.detectChanges();
          }
          this.loading = false;
          this.cd.detectChanges();
        },
        error: (err) => {
          if (!err || !err.error) {
            this.messageService.error('Lỗi tải dữ liệu');
          } else {
            if (!err.error.validationErrors) {
              this.messageService.error(err?.error?.message);
              this.loading = false
            }
            else {
              for (let i = 0; i < err.error?.validationErrors.length; i++) {
                this.messageService.error(err.error?.validationErrors[i]?.message);
              }
            }
          }
          this.loading = false;
          this.cd.detectChanges();
        }
      })
  }

  getStatisticalVolatility(param: number) {
    this.loadingStatic = true
    this.userService.getUserStatisticalVolatilityPersonnel_Json({ year: param })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.listStatisticalVolatility = res;
          }
          this.listStatisticalVolatility = this.listStatisticalVolatility.map((items: TDSSafeAny) => {
            return items.data
          })
          let joinCount = this.listStatisticalVolatility.map((item: TDSSafeAny) => item.joinCount)
          let currentCount = this.listStatisticalVolatility.map((item: TDSSafeAny) => item.currentCount)
          let quitCount = this.listStatisticalVolatility.map((item: TDSSafeAny) => item.quitCount)
          this.barChartComponent.series[0].data = quitCount
          this.barChartComponent.series[1].data = joinCount
          this.barChartComponent.series[2].data = currentCount
          this.barCharOptions = this.chartOptions.BarChartOption(this.barChartComponent);
          this.loadingStatic = false;
          this.cd.detectChanges();
        },
        error: (err) => {
          if (!err || !err.error) {
            this.messageService.error('Lỗi tải dữ liệu');
          } else {
            if (!err.error.validationErrors) {
              this.messageService.error(err?.error?.message);
              this.loadingStatic = false;
            }
            else {
              for (let i = 0; i < err.error?.validationErrors.length; i++) {
                this.messageService.error(err.error?.validationErrors[i]?.message);
              }
            }
          }
          this.loadingStatic = false;
          this.cd.detectChanges()
        }
      })
  }
  changeBirthDayUser(param: number) {
    if (param == 5) {
      if (TDSHelperObject.hasValue(this.listBirthDay)) {
        this.start += param
        if (this.start >= this.listBirthDay!.length) {
          this.start = this.listBirthDay!.length - this.listBirthDay!.length % 5
        }
        this.currenPage = Math.ceil(this.start / 5) + 1
      }
      else {
        this.start = 0;
        this.currenPage = 0;
      }
    }
    if (param == -5) {
      this.start += param
      if (TDSHelperObject.hasValue(this.listBirthDay)) {
        if (this.start <= 0) {
          this.start = 0
        }
        this.currenPage = Math.ceil(this.start / 5) + 1
      }
      else {
        this.start = 0;
        this.currenPage = 0;
      }
    }
  }

  readonly formatDistance = (date: string): string => {
    let birthday = new Date().getDate() - new Date(date).getDate();
    if (birthday > 0) {
      return `${Math.abs(birthday)} ngày trước`;
    }
    else if (birthday < 0) {
      return `${Math.abs(birthday)} ngày sau`;
    }
    else {
      return `Hôm nay`;
    }
  }
}


