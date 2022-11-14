import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ResourceRentDetailDto, ResourceReportDto, ResourceTypeDto } from '@commom/hrm/models';
import { ResourceService, ResourceTypeService } from '@commom/hrm/services';
import { differenceInCalendarDays, eachDayOfInterval, endOfWeek, setDate, startOfWeek } from 'date-fns';
import { delay, mergeMap, pipe, takeUntil } from 'rxjs';
import { TDSBarChartComponent, TDSChartOptions } from 'tds-report';
import { TDSDestroyService } from 'tds-ui/core/services';
import { WeekDayIndex } from 'tds-ui/core/time';
import { TDSMessageService } from 'tds-ui/message';
import { TDSHelperArray, TDSSafeAny } from 'tds-ui/shared/utility';
import { ParamsResourceReportDTO } from '../../models/ResourceReportDTO';

@Component({
  selector: 'hrm-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
  host: { class: 'flex w-full h-full' },
  providers: [
    TDSDestroyService
  ]
})
export class StatisticComponent implements OnInit {

  public selected: TDSSafeAny;
  startTimePicker = new Date();
  endTimePicker = new Date();
  // param lấy danh sách resource report
  params?: ParamsResourceReportDTO
  fromTime = this.datePipe.transform(this.getPrevious7Day(new Date()), 'yyyy-MM-ddT00:00:00');
  toTime = this.datePipe.transform(this.getPreviousDay(new Date()), 'yyyy-MM-ddT23:59:59');
  ResourceTypeId?: string
  // Danh sách resourcetype
  listResourceTypes: ResourceTypeDto[] = [];
  // Danh sách resource report
  listResourceReport: ResourceReportDto[] = [];
  totalResourceReport = 0;
  loading = false;
  pageIndex = 1;
  skipCount = 0;
  pageSize = 10;
  isShowResourceReport = false;
  // Dánh sách ngày lấy từ api
  listRentDay: TDSSafeAny | undefined;
  listRentDayChart: TDSSafeAny | undefined;
  constructor(
    private resourceTypeService: ResourceTypeService,
    private destroy$: TDSDestroyService,
    private resourceService: ResourceService,
    private message: TDSMessageService,
    private datePipe: DatePipe,
  ) { }

  //khai báo chart
  barCharOptions: TDSSafeAny;
  sizeBarChar: TDSSafeAny = [1520, 450];
  chartOptions = TDSChartOptions();
  chartComponent: TDSBarChartComponent = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
      },
    },
    legend: {
      show: true,
      "bottom": 0,
      "left": 10,
      "itemWidth": 24,
      "itemGap": 24,
      textStyle: {
        width: 150,
        "fontWeight": 400,
        "fontSize": 12,
        "lineHeight": 16,
        "color": "#424752"
      }
    },
    grid: {
      left: '2%',
      right: '2%',
      top: '10%',
    },
    axis: {
      xAxis: [
        {
          data: [],
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
          "minInterval": 1,
          "maxInterval": 12
        }
      ]
    },

    color: ['#3B82F6', '#84CC15', '#FF8F45','#9E54DE'],
    series: [
    ],

  }

  ngOnInit(): void {
    this.barCharOptions = this.chartOptions.BarChartOption(this.chartComponent);
  }

  ngAfterViewInit(): void {
  }

  onQueryParamsChange(event: TDSSafeAny) {
    this.skipCount = (event.pageIndex - 1) * this.pageSize;
    this.getAllResourceType()
  }

  //disable timepicker
  disabledDate(current: Date): boolean {
    let dayBefore = new Date();
    dayBefore.setDate(dayBefore.getDate() - 1)
    return differenceInCalendarDays(current, dayBefore) > 0;
  }

  // Thay đổi resourceType
  changeResourceType(event: TDSSafeAny) {
    this.ResourceTypeId = event;
    this.getResourceReport();
  }

  // Thay đổi ngày bắt đầu
  changeToTime(event: TDSSafeAny) {
    let end = event;
    end.setHours(23, 0);
    this.toTime = this.datePipe.transform(end, 'yyyy-MM-ddT23:59:59');
    this.endTimePicker = new Date(event);
    // validateTime
    let time = Math.floor((this.endTimePicker?.getTime() - this.startTimePicker?.getTime()) / (1000 * 3600 * 24));
    if (time >= 7 || time < 0) {
      let from = event;
      from.setDate(from.getDate() - 6);
      this.fromTime = this.datePipe.transform(from, 'yyyy-MM-ddT00:00:00');
      this.startTimePicker = from;
      this.getResourceReport();
    }
    else {
      let end = event;
      end.setHours(23, 0);
      this.toTime = this.datePipe.transform(end, 'yyyy-MM-ddT23:59:59');
      this.getResourceReport();
    }
  }

  // thay đổi ngày đến
  changeFromTime(event: TDSSafeAny) {
    this.startTimePicker = event;
    //pipe day to yyyy/mm/dd
    this.fromTime = this.datePipe.transform(this.startTimePicker, 'yyyy-MM-ddT00:00:00');
    let time = Math.floor((this.endTimePicker?.getTime() - this.startTimePicker?.getTime()) / (1000 * 3600 * 24));
    // //auto set 7 day
    if (time >= 7 || time < 0) {
      let afterSevenDay = new Date(event);
      afterSevenDay.setDate(afterSevenDay.getDate() + 6);
      afterSevenDay.setHours(23);
      let beforeNowOneDay = new Date()
      beforeNowOneDay.setDate(beforeNowOneDay.getDate() - 1);
      beforeNowOneDay.setHours(23);
      if (afterSevenDay <= beforeNowOneDay) {
        this.toTime = this.datePipe.transform(afterSevenDay, 'yyyy-MM-ddT23:59:59');
        this.endTimePicker = afterSevenDay;
      }
      else {
        this.toTime = this.datePipe.transform(beforeNowOneDay, 'yyyy-MM-ddT23:59:59');
        this.endTimePicker = beforeNowOneDay;
      }
      this.getResourceReport();
    }
    else {
      this.getResourceReport();
    }
  }

  // format ngày thành yyyy/MM/dd
  convertToYYMMDD(input: Array<ResourceRentDetailDto>) {
    let listday = [];
    for (let item of input) {
      let a = this.datePipe.transform(item.date, 'dd-MM-yyyy');
      listday.push(a);
    }
    return listday;
  }

  // format ngày thành dd/mm
  convertToDDMM(input: Array<ResourceRentDetailDto>) {
    let listday = [];
    for (let item of input) {
      let a = this.datePipe.transform(item.date, 'dd/MM');
      listday.push(a);
    }
    return listday;
  }

  // Lấy ngày hôm qua
  getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);

    return previous;
  }

  // Lấy 7 ngày trước
  getPrevious7Day(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 7);

    return previous;
  }

  //get ResourceType
  getAllResourceType() {
    this.resourceTypeService.getResourceType_Json()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.listResourceTypes = res;
          this.selected = this.listResourceTypes[1];
          this.ResourceTypeId = this.selected.id!
          this.getResourceReport()
        },
        error: (err) => {
          this.message.error(err.error.message)
        },
      })
  }

  //get Resource Report and pass value to chartBar
  getResourceReport() {
    this.loading = true;
    this.params = {
      FromTime: this.fromTime!,
      ToTime: this.toTime!,
      SkipCount: 0,
      MaxResultCount: 10,
      ResourceTypeId: this.ResourceTypeId
    }
    this.resourceService.getResourceReport_Json(this.params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.loading = false;
          this.totalResourceReport = res.totalCount!;
          this.listResourceReport = res.items!;
          //path value to chart
          if (TDSHelperArray.hasListValue(this.listResourceReport)) {
            if (this.listResourceReport[0].values) {
              this.listRentDayChart = this.convertToDDMM(this.listResourceReport[0].values);
            }
            this.isShowResourceReport = true
            this.barCharOptions.series.splice(0, this.barCharOptions.series.length)
            for (let i = 0; i < this.listResourceReport.length; i++) {
              this.barCharOptions.series[i] = {
                type: 'bar',
                name: `${this.listResourceReport[i].resourceName}`,
                barWidth: 30,
                data: [0, 0, 0, 0, 0, 0, 0],
                barGap: "20%",
                itemStyle: {
                  borderRadius: 5,
                },
              },
                this.barCharOptions.series[i].data = this.listResourceReport[i].values!.map((items: TDSSafeAny) => items.totalCount);
            }
            this.listRentDay = this.convertToYYMMDD(this.listResourceReport[0].values!);
            this.barCharOptions.xAxis[0].data = this.listRentDayChart
            this.barCharOptions = this.chartOptions.BarChartOption(this.chartComponent);
          }
          else {
            this.barCharOptions.xAxis[0].data.splice(0,  this.barCharOptions.xAxis[0].data.length)
            this.barCharOptions.series.splice(0, this.barCharOptions.series.length);
            this.barCharOptions = this.chartOptions.BarChartOption(this.chartComponent);
          }
        },
        error: (err) => {
          this.loading = false;
          this.message.error(err.error.message)
        },
      })
  }
}
