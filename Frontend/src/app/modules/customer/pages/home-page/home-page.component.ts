import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Output, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreAuthService } from '@core/authentication';
import { routeFadeMotion } from '@shared/animation/routeFade';
import { finalize, takeUntil } from 'rxjs';
import { OrderDTO } from 'src/app/dto/order.dto';
import { TypeProductDTO } from 'src/app/dto/typeProduct.dto';
import { getProductDTO } from 'src/app/modules/setting-resource/models/product.dto';
import { ProductService } from 'src/app/modules/setting-resource/services/product.service';
import { OrdersService } from 'src/app/services/orders.service';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperArray, TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { ModalAddAmountComponent } from '../../components/modal-add-amount/modal-add-amount.component';

@Component({
  selector: 'hrm-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    routeFadeMotion
  ],
  providers: [
    TDSDestroyService
  ]
})
export class HomePageComponent implements OnInit {
  public lstProduct: getProductDTO[] = [];
  amount?: number | undefined
  paramCreateOrder: OrderDTO = {
    qty: 1,
    product: 0,
    customer: 0,
  }
  loading = false;
  start = 0
  lstType?: TypeProductDTO[] = []
  listOfData: Array<TDSSafeAny> = [
    {
      image: "assets/images/banner1.webp",
    },
    {
      image: "assets/images/banner7.webp",
    },
    {
      image: "assets/images/banner8.webp",
    },
  ];
  listOfData2: Array<TDSSafeAny> = [
    {
      image: "assets/images/banner3.webp",
    },
    {
      image: "assets/images/banner8.webp",
    },
    {
      image: "assets/images/banner7.webp",
    },
  ];

  effect = "scrollx";
  userProfile$: any;
  idOrder$: any;
  nameProfile: any;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private orderService: OrdersService,
    private productService: ProductService,
    private destroy$: TDSDestroyService,
    private cd: ChangeDetectorRef,
    private message: TDSMessageService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private router: Router,
    private authService: CoreAuthService) { }

  ngOnInit(): void {

    // console.log(this._activatedRoute.snapshot.params);
    this.getListProduct()
    this.authService.getObsUserProfile().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res: TDSSafeAny) => {
        this.userProfile$ = res;
        // this.nameProfile = this.userProfile$?.name.split(" ")[this.userProfile$?.name.split(" ").length - 1].charAt(0);
        this.cd.detectChanges()
      },
      error: (err: TDSSafeAny) => {
        this.message.error(err.error.message)
        this.cd.detectChanges()
      },
    });
    this.orderService.listIdOrderObsevable.subscribe({
      next: (value) => {
        this.idOrder$ = value;
      },
    })
    this.getType();
  }

  getType() {
    this.productService.getType()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (value) => {
          this.lstType = value;
        },
        error: (err) => {
          this.message.error("Đã có lỗi từ server")
        },

      });
  }

  // Lấy danh sách product từ api
  getListProduct() {
    this.loading = true
    this.productService.getProduct()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          if (res) {
            // this.getStatus()
            this.lstProduct = res;
            this.loading = false
          }
          else {
            this.lstProduct = []
            this.loading = false
          }
          this.cd.detectChanges()
        },
        error: (err) => {
          this.lstProduct = []
          this.loading = false
          this.message.error(err.error.message)
          this.cd.detectChanges()
        }
      })
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
    const modalAdd = this.modalService.create({
      title: 'Chọn số lượng',
      content: ModalAddAmountComponent,
      size: "md",
      viewContainerRef: this.viewContainerRef,
      componentParams: {
      },
    });
    modalAdd.afterClose.subscribe(
      {
        next: (res) => {
          this.amount = res.qty;
          this.paramCreateOrder = {
            qty: res.qty,
            product: data.id,
            customer: this.userProfile$.id,
          }
          this.orderService.createOrder(this.paramCreateOrder).pipe(takeUntil(this.destroy$))
            .subscribe({
              next: (res: TDSSafeAny) => {
                if (res) {
                  this.message.success("Đã thêm vào giỏ hàng")
                  this.orderService.dataObsevable.next(true)
                  this.loading = false
                }
                else {
                  this.loading = false
                }
                this.cd.detectChanges()
              },
              error: (err) => {

                this.message.error(err.error.message)
                this.cd.detectChanges()
              }
            })
          this.cd.detectChanges()
        },
        error: (err) => {
          this.cd.detectChanges()
        }
      }
    )
  }

  productDetail(data: TDSSafeAny) {
    this.productService.idProduct.next(data.id)
    localStorage.setItem("idProduct", data.id);
    this.router.navigateByUrl('/customer/product-detail');
  }
}

