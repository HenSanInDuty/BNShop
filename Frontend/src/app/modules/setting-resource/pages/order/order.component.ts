import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ResourceTypeDto } from '@commom/hrm/models';
import { ResourceTypeService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { getOrderDetailDTO } from 'src/app/dto/orderDetail.dto';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { ModalDeleteAllComponent } from '../../components/modal-delete-all/modal-delete-all.component';



@Component({
  selector: 'hrm-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  
  providers:[
    TDSDestroyService
  ]
})
export class OrderComponent implements OnInit {
  checked = false;
  indeterminate = false;
  loading:boolean = false;
  listOfCurrentPageData:  Array<string> = [];
  setOfCheckedId = new Set<TDSSafeAny>();
  expandSet = new Set<number>();
  pageIndex = 1;
  pageSize = 20;
  public lstAccsetType: Array<getOrderDetailDTO> = []
  public lstAccsetTypeBackup: Array<getOrderDetailDTO> = []

  constructor(
    private resourceTypeService: ResourceTypeService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private message: TDSMessageService,
    private orderDetailService: OrderDetailService,
    private destroy$ : TDSDestroyService
  ) { }

  ngOnInit(): void {
    this.getListAccsetType()
  }

  search(event: TDSSafeAny): void {
    this.lstAccsetType = this.lstAccsetTypeBackup;
    if (event.value != null) {
      this.lstAccsetType = this.lstAccsetType.filter(item => item.order_detail_no.toLowerCase().includes(event.value.toLowerCase()) == true || item.customer.name.toLowerCase().includes(event.value.toLowerCase()) == true || 
        item.order[0].product.name.toLowerCase().includes(event.value.toLowerCase()) == true);
      if (this.lstAccsetType[0].order[0].product.name.toLowerCase().includes(event.value.toLowerCase()) == true){
        this.expandSet.add(this.lstAccsetType[0].id);
      }
    }
  }
  onExpandChange(id: number, checked: boolean): void {

    // let param: getProductDTOAdmin = {
    //   type: this.selectedStatus.toString(),
    //   agency: id,
    // }
    // this.getProduct(param)
    if (checked) {
      // this.expandSet = new Set<number>();
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

 

  onCurrentPageDataChange($event:  TDSSafeAny): void {
      this.listOfCurrentPageData = $event;
      this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
      this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item));
      this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item)) && !this.checked;
  }

  getListAccsetType(){
    this.loading = true
    this.orderDetailService.getOrderDetail().pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (res:TDSSafeAny) => {
        this.lstAccsetType = res
        this.lstAccsetTypeBackup = res
        localStorage.setItem("orderSuccess", this.lstAccsetType.filter(item => item.status == '5').length.toString())
        localStorage.setItem("order", this.lstAccsetType.length.toString())
        localStorage.setItem("orderError", this.lstAccsetType.filter(item => item.status == '4').length.toString())
        this.lstAccsetType = this.lstAccsetType.reverse();
        this.loading = false
      },
      error: (err) => {
        this.lstAccsetType = [];
        this.loading = false
      }
    });
  }

  accept(data: TDSSafeAny): void {
    const modal = this.modalService.info({
      title: 'Xác nhận phê duyệt đơn hàng',
      onOk: () => {
        this.orderDetailService.editOrderDetailId(data.id, 2).subscribe(
          {
            next: (res) => {
              modal.destroy(null);
              this.message.success("Phê duyệt đơn hàng thành công")
              this.getListAccsetType()
            },
            error: (err) => {
              this.message.error("Phê duyệt đơn hàng thất bại")
              this.getListAccsetType()
            }
          })
      },
      onCancel: () => { },
      okText: "Phê duyệt",
      cancelText: "Hủy"
    });
  }

  onship(data: TDSSafeAny): void {
    const modal = this.modalService.info({
      title: 'Xác nhận giao hàng',
      onOk: () => {
        this.orderDetailService.editOrderDetailId(data.id,3).subscribe(
          {
            next: (res) => {
              modal.destroy(null);
              this.message.success("Đã xác nhận giao hàng")
              this.getListAccsetType()
            },
            error: (err) => {
              this.message.error("Giao hàng không thành công")
              this.getListAccsetType()
            }
          })
      },
      onCancel: () => { },
      confirmIcon: 'tdsi-truck-fill',
      okText: "Xác nhận giao hàng",
      cancelText: "Hủy"
    });
  }

   onDeleteAll(): void {
   let modalDelete = this.modalService.create({
      title: "Xác nhận xóa tài sản ",
      content: ModalDeleteAllComponent,
      size: "lg",
      viewContainerRef: this.viewContainerRef,
      footer: null,
      componentParams:{
        lstAccsetType: [...this.setOfCheckedId]
      },
    })
    modalDelete.afterClose.subscribe(
      {
        next: (res) =>{
        if(TDSHelperObject.hasValue(res))
          this.getListAccsetType();

        },
        error: (err) => {
        }
      }
    )
  }
}
