import { ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { CoreAuthService } from '@core/authentication';
import { takeUntil } from 'rxjs';
import { getListOrderDTO, getOrderDTO } from 'src/app/dto/order.dto';
import { getOrderDetailAdminDTO, getOrderDetailDTO } from 'src/app/dto/orderDetail.dto';
import { ProductService } from 'src/app/modules/setting-resource/services/product.service';
import { AddressService } from 'src/app/services/address.service';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { OrdersService } from 'src/app/services/orders.service';

import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperArray, TDSHelperObject, TDSHelperString, TDSSafeAny } from 'tds-ui/shared/utility';
import { ModalFeedbackComponent } from '../../components/modal-feedback/modal-feedback.component';
import { ModalDeliveryStatusComponent } from '../../modal-delivery-status/modal-delivery-status.component';

@Component({
  selector: 'hrm-order-refund',
  templateUrl: './order-refund.component.html',
  styleUrls: ['./order-refund.component.scss']
})
export class OrderRefundComponent implements OnInit {

  selectedStatus = 0
  total: number = 0;
  loading = false;
  userProfile$: any;
  idOrder$: any
  lstIdOrder: any
  OrderDetailId?: any
  lstOrder: getOrderDetailDTO[] = [];
  lstOrderDetail: getOrderDetailDTO[] = [];
  lstOrderDetailBackup: getOrderDetailDTO[] = [];
  detail: {
    id: number
    price: number,
    quantity: number
  }[] = []
  detailBackup: {
    id: number
    price: number,
    quantity: number
  }[] = []
  key:string=''
  lstStatus: Array<TDSSafeAny> = [
    {
      name: 'Tất cả',
      value: 0,
    },
    {
      name: "Chờ duyệt",
      value: 1,
    },
    {
      name: "Đã duyệt",
      value: 2,
    },
    {
      name: "Đang giao hàng",
      value: 3,
    },
    {
      name: "Đã hủy",
      value: 4,
    },
    {
      name: "Đã nhận",
      value: 5,
    },
  ]

  constructor(
    private destroy$: TDSDestroyService,
    private cd: ChangeDetectorRef,
    private message: TDSMessageService,
    private orderDetailService: OrderDetailService,
    private authService: CoreAuthService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.authService.getObsUserProfile().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res: TDSSafeAny) => {
        this.loading = true;
        this.userProfile$ = res;
        // this.OrderDetailId = localStorage.getItem("Order")
        // this.getListOrder(this.OrderDetailId)
        this.getListOrderDetail();
        // this.nameProfile = this.userProfile$?.name.split(" ")[this.userProfile$?.name.split(" ").length - 1].charAt(0);
        this.cd.detectChanges();
      },
      error: (err: TDSSafeAny) => {
        this.message.error(err.error.message)
        this.cd.detectChanges()
      },
    });
    this.cd.detectChanges()
  }

  search(event: TDSSafeAny): void {
    this.key = event.value;
    // if (event.value != null) {
    //   this.lstResource = this.lstBackup;
    //   this.lstResource = this.lstResource.filter(item => item.name.toLowerCase().includes(event.value.toLowerCase()) == true);
    //   this.lstData[0].count = this.lstResource.length
    //   this.lstData[1].count = this.lstResource.filter(item => (item.is_approved === true && item.is_delete === false)).length
    //   this.lstData[2].count = this.lstResource.filter(item => item.is_approved === false).length
    //   this.lstData[3].count = this.lstResource.filter(item => item.is_delete === true).length
    // }
    // if (!TDSHelperString.hasValueString(event.value)) {
    //   this.lstResource = this.lstBackup;
    //   this.lstData[0].count = this.lstResource.length
    //   this.lstData[1].count = this.lstResource.filter(item => (item.is_approved === true && item.is_delete === false)).length
    //   this.lstData[2].count = this.lstResource.filter(item => item.is_approved === false).length
    //   this.lstData[3].count = this.lstResource.filter(item => item.is_delete === true).length
    // }
  }
  onSearch() {
    let a: number[] = []
   if(TDSHelperString.hasValueString(this.key)){
     this.lstOrderDetail = this.lstOrderDetail.filter(item => item.agency.name.toLowerCase().includes(this.key.toLowerCase()) == true || item.order_detail_no.toLowerCase().includes(this.key.toLowerCase()) == true);
     this.detail = this.detailBackup;
     for (let index = 0; index < this.lstOrderDetail.length; index++) {
       a.push(this.lstOrderDetail[index].id)
     }
     this.detail = this.detail.filter(item => a.includes(item.id) == true);
   }
  }
  //Hàm thay đổi status của tab
  onSelectStatus(value: TDSSafeAny) {
    let a: number[] = []
    switch (value) {
      case 0:
        this.lstOrderDetail = this.lstOrderDetailBackup;
        this.detail = this.detailBackup;
        for (let index = 0; index < this.lstOrderDetail.length; index++) {
          a.push(this.lstOrderDetail[index].id)
        }
        this.detail = this.detail.filter(item => a.includes(item.id) == true);
        this.onSearch()
        break;
      case 1:

        this.lstOrderDetail = this.lstOrderDetailBackup;
        this.detail = this.detailBackup;
        this.lstOrderDetail = this.lstOrderDetail.filter(item => item.status == "Waiting for confirm");
        for (let index = 0; index < this.lstOrderDetail.length; index++) {
          a.push(this.lstOrderDetail[index].id)
        }
        this.detail = this.detail.filter(item => a.includes(item.id) == true);
        this.onSearch()
        break;
      case 2:

        this.lstOrderDetail = this.lstOrderDetailBackup;
        this.detail = this.detailBackup;
        this.lstOrderDetail = this.lstOrderDetail.filter(item => item.status == "2")
        for (let index = 0; index < this.lstOrderDetail.length; index++) {
          a.push(this.lstOrderDetail[index].id)
        }
        this.detail = this.detail.filter(item => a.includes(item.id) == true);
        this.onSearch()
        break;
      case 3:

        this.lstOrderDetail = this.lstOrderDetailBackup;
        this.detail = this.detailBackup;
        this.lstOrderDetail = this.lstOrderDetail.filter(item => item.status == "3")
        for (let index = 0; index < this.lstOrderDetail.length; index++) {
          a.push(this.lstOrderDetail[index].id)
        }
        this.detail = this.detail.filter(item => a.includes(item.id) == true);
        this.onSearch()
        break;
      case 4:

        this.lstOrderDetail = this.lstOrderDetailBackup;
        this.detail = this.detailBackup;
        this.lstOrderDetail = this.lstOrderDetail.filter(item => item.status == "4")
        for (let index = 0; index < this.lstOrderDetail.length; index++) {
          a.push(this.lstOrderDetail[index].id)
        }
        this.detail = this.detail.filter(item => a.includes(item.id) == true);
        this.onSearch()
        break;
      case 5:

        this.lstOrderDetail = this.lstOrderDetailBackup;
        this.detail = this.detailBackup;
        this.lstOrderDetail = this.lstOrderDetail.filter(item => item.status == "5")
        for (let index = 0; index < this.lstOrderDetail.length; index++) {
          a.push(this.lstOrderDetail[index].id)
        }
        this.detail = this.detail.filter(item => a.includes(item.id) == true);
        this.onSearch()
        break;
    }
  }
  // Lấy danh sách order từ api
  // getListOrder(id: number) {
  //   if (TDSHelperObject.hasValue(this.userProfile$)) {
  //     this.loading = true;
  //     this.orderDetailService.getOrderDetailId(id)
  //       .pipe(takeUntil(this.destroy$))
  //       .subscribe({
  //         next: (res: TDSSafeAny) => {
  //           if (TDSHelperArray.hasListValue(res)) {
  //             this.lstOrder = res;
  //             console.log(this.lstOrder)
  //             // this.lstIdOrder = []
  //             // this.getStatus()
  //             this.loading = false
  //             this.cd.detectChanges()
  //           }
  //           else {
  //             this.lstOrder = [];
  //             this.cd.detectChanges()
  //           }
  //           // this.loadingOrder = false
  //           this.cd.detectChanges()
  //         },
  //         error: (err) => {
  //           this.lstOrder = [];
  //           // this.loadingOrder = false
  //           this.message.error("Đã có lỗi sảy ra trong quá trình thực hiện")
  //           this.cd.detectChanges()
  //         }
  //       })
  //   }
  // }

  // Lấy danh sách order từ api
  getListOrderDetail() {
    // this.lstOrderBackup = [];
  if(TDSHelperObject.hasValue(this.userProfile$)){
    this.orderDetailService.getOrderDetail()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          if (TDSHelperArray.hasListValue(res)) {
            this.lstOrderDetail = res;
            this.lstOrderDetail = this.lstOrderDetail.reverse()
            this.lstOrderDetailBackup = this.lstOrderDetail
            let detail1: {
              id: number
              price: number,
              quantity: number
            }[] = []
            for (let index = 0; index < this.lstOrderDetail.length; index++) {
              let price: number[] = []
              let quantity: number[] = []
              for (let j = 0; j < this.lstOrderDetail[index].order.length; j++) {
                price.push(this.lstOrderDetail[index].order[j].amount * this.lstOrderDetail[index].order[j].buy)
                quantity.push(this.lstOrderDetail[index].order[j].buy)
              }
              detail1.push({
                id: this.lstOrderDetail[index].id,
                price: price.reduce((c, d) => c + d, 0),
                quantity: quantity.reduce((c, d) => c + d, 0),
              })
            }
            this.detail = detail1;
            this.detailBackup = this.detail;
            // this.loadingOrder = false
            this.cd.detectChanges()
          }
          else {
            this.lstOrderDetail = [];
            this.lstOrderDetailBackup = [];
            this.cd.detectChanges()
          }
          // this.loadingOrder = false
          this.cd.detectChanges()
        },
        error: (err) => {
          this.lstOrder = [];
          // this.loadingOrder = false
          this.message.error("Đã có lỗi sảy ra trong quá trình thực hiện")
          this.cd.detectChanges()
        }
      })

  }
  }

  showModalDeliveryStatus(order: getOrderDetailDTO): void {
    const modalWorkingDate = this.modalService.create({
      title: 'Trạng thái đơn hàng',
      content: ModalDeliveryStatusComponent,
      size: "xl",
      footer: null,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        order: order
      },
    });
    modalWorkingDate.afterClose.subscribe({
      next: (res) => {
      },
      error: (err) => {
      }
    }
    )
  }
  showModalFeedback(order: getOrderDetailDTO): void {
    const modalWorkingDate = this.modalService.create({
      title: 'Đánh giá đơn hàng',
      content: ModalFeedbackComponent,
      size: "md",
      footer: null,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        order: order,
        user: this.userProfile$
      },
    });
    modalWorkingDate.afterClose.subscribe({
      next: (res) => {
      },
      error: (err) => {
      }
    }
    )
  }
}
