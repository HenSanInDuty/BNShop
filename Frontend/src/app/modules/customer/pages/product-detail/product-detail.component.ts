import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CoreAuthService } from '@core/authentication';
import { takeUntil } from 'rxjs';
import { GetAddressDTO } from 'src/app/dto/address.dto';
import { OrderDTO } from 'src/app/dto/order.dto';
import { getProductDTO } from 'src/app/dto/product.dto';
import { ProductService } from 'src/app/modules/setting-resource/services/product.service';
import { AddressService } from 'src/app/services/address.service';
import { OrdersService } from 'src/app/services/orders.service';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { ModalChosenAddressComponent } from '../../modal-chosen-address/modal-chosen-address.component';

@Component({
  selector: 'hrm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService
  ]
})
export class ProductDetailComponent implements OnInit {

  loading = false;
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
  lstImg?:  any;
  idOrder$: any;
  constructor(
    private productSevice: ProductService,
    private destroy$: TDSDestroyService,
    private cd: ChangeDetectorRef,
    private message: TDSMessageService,
    private router: Router,
    private orderService: OrdersService,
    private authService: CoreAuthService,
    private addressService: AddressService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef
  ) { }

  listImage: string[] = []
  ngOnInit(): void {
    this.loading = true;
    this.authService.getObsUserProfile().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res: TDSSafeAny) => {
        this.userProfile$ = res;
        this.loading = false;
        // this.nameProfile = this.userProfile$?.name.split(" ")[this.userProfile$?.name.split(" ").length - 1].charAt(0);
        this.cd.detectChanges();
      },
      error: (err: TDSSafeAny) => {
        this.loading = false;
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
    this.orderService.listIdOrderObsevable.subscribe({
      next: (value) => {
        this.idOrder$ = value;
      },
    })
    this.getAddress()
  }

  getList() {
    this.lstImg
    for (let index = 0; index < this.lstImg.length; index++) {
      this.listImage.push(this.lstImg[index].url);
    }
  }
  getProductDetail(id: number) {
    this.loading = true;
    this.productSevice.getProductId(id)
      .pipe(takeUntil(this.destroy$)).subscribe(
        {
          next: (item: any) => {
            this.product = item
            this.lstImg = item.attachment
            this.getList()
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
  getAddress() {
    if (TDSHelperObject.hasValue(this.userProfile$)) {
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
      if (this.quantity <= 1) {
        this.quantity = 1;
      }
      else {
        this.quantity += param;

      }
    }
  }

  moveToOrder(){
    if(TDSHelperObject.hasValue(this.userProfile$)){
      this.router.navigate(["customer/order-detail"])
    }
    else {
      this.message.warning("Bạn phải đăng nhập trước khi thực hiện thao tác")
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
    this.loading = true;
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
          this.loading = false;
          this.cd.detectChanges()
        },
        error: (err) => {
          this.loading = false;
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
            if (TDSHelperObject.hasValue(res)){
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
}
