import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { takeUntil } from 'rxjs';
import { getOrderDetailAdminDTO, getOrderDetailDTO } from 'src/app/dto/orderDetail.dto';
import { FilterStatusItemDTO } from 'src/app/modules/setting-resource/models/accset.dto';
import { AdminService } from 'src/app/services/admin.service';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSHelperString, TDSSafeAny } from 'tds-ui/shared/utility';
import { ShippersComponent } from '../../components/shippers/shippers.component';

@Component({
  selector: 'hrm-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class OrderDetailComponent implements OnInit {

  expandSet = new Set<number>();
  selected = 0;
  checked = false;
  indeterminate = false;
  loading: boolean = false;
  listOfCurrentPageData: Array<string> = [];
  setOfCheckedId = new Set<TDSSafeAny>();
  public lstOrderDetail: Array<getOrderDetailAdminDTO> = []
  public lstOrderDetailBackup: Array<getOrderDetailAdminDTO> = []
  lstData: Array<FilterStatusItemDTO> = [
    {
      name: 'Tất cả',
      value: 0,
      count: 0,
      disabled: false
    },
    {
      name: 'Đang chờ',
      value: 1,
      count: 0,
      disabled: false
    },
    {
      name: "Đại lý đã duyệt",
      value: 2,
      count: 0,
      disabled: false
    },
    {
      name: "Bàn giao vận chuyển",
      value: 3,
      count: 0,
      disabled: false
    },
    {
      name: "Đã hủy",
      value: 4,
      count: 0,
      disabled: false
    },
    {
      name: "Đã nhận",
      value: 5,
      count: 0,
      disabled: false
    },
  ]
  constructor(
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private message: TDSMessageService,
    private adminService: AdminService,
    private destroy$: TDSDestroyService
  ) { }

  ngOnInit(): void {
    this.getListAccsetType()
  }

  search(event: TDSSafeAny): void {
    if (event.value != null) {
      this.lstOrderDetail = this.lstOrderDetailBackup;
      this.lstOrderDetail = this.lstOrderDetail.filter(item => item.order_detail_no.toLowerCase().includes(event.value.toLowerCase()) == true);
     
    }
    if (!TDSHelperString.hasValueString(event.value)) {
      this.lstOrderDetail = this.lstOrderDetailBackup;
  
    }
  }

  onExpandChange(id: number, checked: boolean): void {

    // let param: getProductDTOAdmin = {
    //   type: this.selectedStatus.toString(),
    //   agency: id,
    // }
    if (checked) {
      // this.getProduct(param)
      // this.expandSet = new Set<number>();
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  onSelectChange(value: TDSSafeAny) {
    switch (value) {
      case 0:
        this.lstOrderDetail = this.lstOrderDetailBackup;
        break;
      case 1:
        this.lstOrderDetail = this.lstOrderDetailBackup;
        this.lstOrderDetail = this.lstOrderDetail.filter(item => item.status == "Waiting for confirm")
        break;
      case 2:
        this.lstOrderDetail = this.lstOrderDetailBackup;
        this.lstOrderDetail = this.lstOrderDetail.filter(item => item.status == "2")
        break;
      case 3:
        this.lstOrderDetail = this.lstOrderDetailBackup;
        this.lstOrderDetail = this.lstOrderDetail.filter(item => item.status == "3")
        break;
      case 4:
        this.lstOrderDetail = this.lstOrderDetailBackup;
        this.lstOrderDetail = this.lstOrderDetail.filter(item => item.status == "4")
        break;
      case 5:
        this.lstOrderDetail = this.lstOrderDetailBackup;
        this.lstOrderDetail = this.lstOrderDetail.filter(item => item.status == "5")
        break;
    }

  }

  onModelChange(value: TDSSafeAny) {


  }

  onCurrentPageDataChange($event: TDSSafeAny): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item)) && !this.checked;
  }

  getListAccsetType() {
    this.loading = true
    this.refreshCheckedStatus();
    this.adminService.getOrder().pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          this.lstOrderDetail = res;
          this.lstOrderDetailBackup = res;
          this.loading = false
        },
        error: (err) => {
          this.lstOrderDetail = [];
          this.lstOrderDetailBackup = [];
          this.loading = false
        }
      });
  }

  // showModalAdd(): void {
  //   let modalAdd = this.modalService.create({
  //     title: 'Thêm tài loại sản mới',
  //     content: ModalAddEditResourceTypeComponent,
  //     size: "md",
  //     viewContainerRef: this.viewContainerRef,
  //     componentParams:{
  //     },
  //   });
  //   modalAdd.afterClose.subscribe(
  //     {
  //       next: (res) =>{
  //       if(TDSHelperObject.hasValue(res))
  //       this.getListAccsetType();
  //       },
  //       error: (err) => {
  //       }
  //     }
  //   )
  // }

  // showModalEdit(data: TDSSafeAny): void {
  //   let modalEdit = this.modalService.create({
  //     title: 'Chỉnh sửa loại tài sản',
  //     content: ModalAddEditResourceTypeComponent,
  //     size: "md",
  //     viewContainerRef: this.viewContainerRef,
  //     componentParams:{
  //       lstAccsetType: data,
  //     },
  //   });
  //   modalEdit.afterClose.subscribe(
  //     {
  //       next: (res) =>{
  //       if(TDSHelperObject.hasValue(res))
  //         this.getListAccsetType();
  //       },
  //       error: (err) => {
  //       }
  //     }
  //   )
  // }
  accept(data: TDSSafeAny): void {
    // const modal = this.modalService.info({
    //   title: 'Xác nhận phê duyệt đơn hàng',
    //   onOk: () => {
    //     this.orderDetailService.editOrderDetailId(data.id, 2).subscribe(
    //       {
    //         next: (res) => {
    //           modal.destroy(null);
    //           this.message.success("Phê duyệt đơn hàng thành công")
    //           this.getListAccsetType()
    //         },
    //         error: (err) => {
    //           this.message.error("Phê duyệt đơn hàng thất bại")
    //           this.getListAccsetType()
    //         }
    //       })
    //   },
    //   onCancel: () => { },
    //   okText: "Phê duyệt",
    //   cancelText: "Hủy"
    // });
  }

  onship(data: TDSSafeAny): void {
    let modal = this.modalService.create({
      title: "Tiến hành giao hàng",
      content: ShippersComponent,
      size: "md",
      viewContainerRef: this.viewContainerRef,
      footer: null,
      componentParams: {
        order: data
      },
    })
    modal.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.getListAccsetType();

        },
        error: (err) => {
        }
      }
    )
  }

  onDeleteAll(): void {
    // let modalDelete = this.modalService.create({
    //   title: "Xác nhận xóa tài sản ",
    //   content: ModalDeleteAllComponent,
    //   size: "lg",
    //   viewContainerRef: this.viewContainerRef,
    //   footer: null,
    //   componentParams: {
    //     lstAccsetType: [...this.setOfCheckedId]
    //   },
    // })
    // modalDelete.afterClose.subscribe(
    //   {
    //     next: (res) => {
    //       if (TDSHelperObject.hasValue(res))
    //         this.getListAccsetType();

    //     },
    //     error: (err) => {
    //     }
    //   }
    // )
  }

}
