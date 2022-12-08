import { ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { CoreAuthService } from '@core/authentication';
import { takeUntil } from 'rxjs';
import { GetAddressDTO } from 'src/app/dto/address.dto';
import { getListOrderDTO, getOrderDTO, OrderDTO } from 'src/app/dto/order.dto';
import { getProductDTO } from 'src/app/dto/product.dto';
import { ProductService } from 'src/app/modules/setting-resource/services/product.service';
import { AddressService } from 'src/app/services/address.service';
import { OrdersService } from 'src/app/services/orders.service';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperArray, TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { ModalChosenAddressComponent } from '../../modal-chosen-address/modal-chosen-address.component';

@Component({
  selector: 'hrm-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  placeholder = "./assets/images/dowload.gif";
  fallback = "./assets/images/default.png";
  product?: getProductDTO
  start: number = 0
  quantity: number = 1
  paramCreateOrder: OrderDTO = {
    qty: 1,
    product: 0,
    customer: 0,
  }
  userProfile$: any;
  address?: string = '';
  lstAddress?: GetAddressDTO;
  idOrder$: any
  lstIdOrder: any
  lstOrder: getOrderDTO = [];
  lstOrderBackup: getListOrderDTO[] = [];
  lstOrderBackup2: getListOrderDTO[] = [];
  total: number = 0;
  loading = false;
  isTrue = true;
  constructor(
    private productSevice: ProductService,
    private destroy$: TDSDestroyService,
    private cd: ChangeDetectorRef,
    private message: TDSMessageService,
    private orderService: OrdersService,
    private authService: CoreAuthService,
    private addressService: AddressService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef
  ) { }

  listImage: string[] = []
  ngOnInit(): void {
    this.authService.getObsUserProfile().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res: TDSSafeAny) => {
        this.loading = true;
        this.userProfile$ = res;
        this.getListOrder()
        // this.nameProfile = this.userProfile$?.name.split(" ")[this.userProfile$?.name.split(" ").length - 1].charAt(0);
        this.getAddress()
        this.cd.detectChanges();
      },
      error: (err: TDSSafeAny) => {
        this.message.error(err.error.message)
        this.cd.detectChanges()
      },
    });
    this.productSevice.idProduct.subscribe({
      next: (value) => {
        if (value != 1) {
          console.log(value)
          this.getProductDetail(value)
        }
        else {
          let id: any = localStorage.getItem("idProduct")
          this.getProductDetail(id)
        }
      },
    })
    this.getList()
    this.orderService.listIdOrderObsevable.subscribe({
      next: (value) => {
        this.idOrder$ = value;
      },
    })
  }

  onChange(e: TDSSafeAny, index: number) {
    if (e == 0) {
      this.isTrue = true;
      this.orderService.deleteOrder(this.lstOrder[index].id).pipe(takeUntil(this.destroy$)).subscribe(
        {
          next: (item: any) => {
            // const a = {
            //   id: this.lstOrder[i].id,
            //   qty: this.lstOrder[i].qty,
            //   amount: this.lstOrder[i].amount,
            //   product: item,
            //   order_detail: this.lstOrder[i].order_detail,
            //   customer: this.lstOrder[i].customer,
            // }
            this.lstIdOrder.splice(this.lstIdOrder.indexOf(this.lstOrder[index].id), 1)
            this.orderService.listIdOrderObsevable.next(this.lstIdOrder)
            this.getListOrder();
            this.message.success("Đã xóa sản phẩm ra khỏi đơn hàng")
            this.cd.detectChanges()
          },
          error: (err) => {
            this.message.error("Xóa sản phẩm không thành công")
            this.cd.detectChanges()
          }
        }
      )
    }
    else {
      this.total = 0;
      this.orderService.editOrder(this.lstOrder[index].id, e).subscribe({
        next: (value) => {
          if (TDSHelperObject.hasValue(value)) {
            this.getListOrder();
          }
          this.cd.detectChanges()
        },
        error: (err) => {
          this.cd.detectChanges()

        },
      })
    }
    // this.total += (this.lstOrder[index].amount / this.lstOrder[index].qty)*e;
    this.cd.detectChanges()
  }

  getList() {
    for (let index = 0; index < 5; index++) {
      this.listImage.push(`https://picsum.photos/1000?random=${index}`);
    }
  }
  getProductDetail(id: number) {
    this.loading = true
    this.productSevice.getProductId(id)
      .pipe(takeUntil(this.destroy$)).subscribe(
        {
          next: (item: any) => {
            this.loading = false;
            this.product = item
            this.cd.detectChanges()
          },
          error: (err) => {
            this.loading = false;
            this.cd.detectChanges()
          }
        }
      )
  }
  getAddress() {
    if (TDSHelperObject.hasValue(this.userProfile$)) {
      this.loading = true;
      this.addressService.getAddress()
        .pipe(takeUntil(this.destroy$)).subscribe(
          {
            next: (item: any) => {
              this.lstAddress = item
              this.loading = false;
              this.cd.detectChanges()
            },
            error: (err) => {
              this.loading = false;
              this.cd.detectChanges()
            }
          }
        )
    }
  }
  changeQuantity(param: number) {
    if (param == 1) {
      if (this.quantity < this.product?.quantity!) {
        this.quantity += param
      }
      else {
        this.message.warning("Không được lựa chọn vượt quá số lượng shop đang có")
      }
    }
    if (param == -1) {
      if (this.quantity <= 0) {
        this.quantity = 0;
      }
      else {
        this.quantity += param;

      }
    }
  }

  addOrder(data: TDSSafeAny) {
    if (TDSHelperObject.hasValue(this.userProfile$)) {
      if (!this.idOrder$.includes(data.id)) {
        this.addAmountOrder(data)
        this.cd.detectChanges()
      }
      else {
        this.message.error("Sản phẩm đã có trong giỏ hàng")
      }
    }
    else {
      this.cd.detectChanges()
      this.message.error("Bạn phải đăng nhập trước khi mua hàng")
    }
  }

  addAmountOrder(data: TDSSafeAny) {
    this.paramCreateOrder = {
      qty: this.quantity,
      product: data.id,
      customer: this.userProfile$.id,
    }
    this.orderService.createOrder(this.paramCreateOrder).pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          if (res) {
            this.message.success("Đã thêm vào giỏ hàng")
            this.orderService.dataObsevable.next(true)
          }
          else {
          }
          this.cd.detectChanges()
        },
        error: (err) => {
          this.message.error("Thêm không thành công")
          this.cd.detectChanges()
        }
      })

  }
  // modal chỉnh sửa tài sản
  showAddress(): void {
    if (TDSHelperObject.hasValue(this.userProfile$)) {
      const modalEdit = this.modalService.create({
        title: 'Chọn địa chỉ vận chuyển',
        content: ModalChosenAddressComponent,
        size: "md",
        viewContainerRef: this.viewContainerRef,
        componentParams: {
        },
      });
      modalEdit.afterClose.subscribe(
        {
          next: (res) => {
            if (TDSHelperObject.hasValue(res)) {
              this.address = res;
            }
          },
          error: (err) => {
          }
        }
      )
    }
    else {
      this.message.warning("Bạn phải đăng nhập trước khi thực hiện thao tác")
      this.cd.detectChanges()
    }
  }

  // Lấy danh sách order từ api
  getListOrder() {
    if (TDSHelperObject.hasValue(this.userProfile$)) {
      this.loading = true;
      this.orderService.getOrder()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res: TDSSafeAny) => {
            if (TDSHelperArray.hasListValue(res)) {
              this.lstOrder = res
              this.lstIdOrder = []
              this.lstOrderBackup2 = []
              // this.getStatus()
              for (let i = 0; i < this.lstOrder.length; i++) {
                this.productSevice.getProductId(this.lstOrder[i].product)
                  .pipe(takeUntil(this.destroy$)).subscribe(
                    {
                      next: (item: any) => {
                        // const a = {
                        //   id: this.lstOrder[i].id,
                        //   qty: this.lstOrder[i].qty,
                        //   amount: this.lstOrder[i].amount,
                        //   product: item,
                        //   order_detail: this.lstOrder[i].order_detail,
                        //   customer: this.lstOrder[i].customer,
                        // }
                        if (!TDSHelperArray.hasListValue(this.lstIdOrder)) {
                          this.lstIdOrder.push(this.lstOrder[i].product)
                          this.orderService.listIdOrderObsevable.next(this.lstIdOrder)
                        }
                        else {
                          if (!this.lstIdOrder.includes(this.lstOrder[i].product)) {
                            this.lstIdOrder.push(this.lstOrder[i].product)
                            this.orderService.listIdOrderObsevable.next(this.lstIdOrder)
                          }
                        }
                        this.lstOrderBackup2.push({
                          id: this.lstOrder[i].id,
                          qty: this.lstOrder[i].qty,
                          amount: this.lstOrder[i].amount,
                          product: item,
                          order_detail: this.lstOrder[i].order_detail,
                          customer: this.lstOrder[i].customer,

                        })
                        this.total += this.lstOrder[i].amount;
                        this.cd.detectChanges();
                      },
                      error: (err) => {
                        this.cd.detectChanges()
                      }
                    }
                  )
              }
              // console.log(this.lstIdOrder)
              if (this.isTrue) {
                this.lstOrderBackup = this.lstOrderBackup2
                this.isTrue = false;
              }
              this.loading = false
              this.cd.detectChanges()
            }
            else {
              this.lstOrder = [];
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

  sumbmit() {
    this.ChosenAddress()
  }
  // 
  ChosenAddress(): void {
    if (TDSHelperObject.hasValue(this.userProfile$)) {
      const modalEdit = this.modalService.create({
        title: 'Xác nhận đơn hàng',
        content: ModalChosenAddressComponent,
        size: "lg",
        viewContainerRef: this.viewContainerRef,
        componentParams: {
          total: this.total,
          order: this.lstOrder.map(item => item.id)
        },
      });
      modalEdit.afterClose.subscribe(
        {
          next: (res) => {
            if (TDSHelperObject.hasValue(res)) {
              this.getListOrder()
              this.loading = false;
            }
          },
          error: (err) => {
          }
        }
      )
    }
    else {
      this.message.warning("Bạn phải đăng nhập trước khi thực hiện thao tác")
      this.cd.detectChanges()
    }
  }
}
