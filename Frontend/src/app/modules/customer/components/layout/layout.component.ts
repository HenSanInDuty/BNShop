import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MenuModel } from '@commom/hrm/models';
import { MenuService } from '@commom/hrm/services';
import { CoreAuthService } from '@core/authentication';
import { CoreUserInitDTO } from '@core/dto';
import { DATA_MENU } from '@shared/layout/data/menu.data';
import { Observable, takeUntil, switchMap } from 'rxjs';
import { getListOrderDTO, getOrderDTO } from 'src/app/dto/order.dto';
import { getOrderDetailDTO } from 'src/app/dto/orderDetail.dto';
import { getProductDTO } from 'src/app/dto/product.dto';
import { ModalRegisterPasswordComponent } from 'src/app/modules/dashboard/components/modal-register-password/modal-register-password.component';
import { ModalSettingNotificationComponent } from 'src/app/modules/dashboard/components/v1.2/modal-setting-notification/modal-setting-notification.component';
import { ProductDTO } from 'src/app/modules/setting-resource/models/product.dto';
import { ProductService } from 'src/app/modules/setting-resource/services/product.service';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { OrdersService } from 'src/app/services/orders.service';
import { TDSAutocompleteComponent, TDSAutocompleteTriggerDirective } from 'tds-ui/auto-complete';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSContextMenuService, TDSDropdownMenuComponent } from 'tds-ui/dropdown';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSSafeAny, TDSHelperObject, TDSHelperArray, TDSHelperString } from 'tds-ui/shared/utility';

@Component({
  selector: 'hrm-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService
  ],

})
export class LayoutComponent implements OnInit {

  // Biến cho biết status tab nào đang được chọn
  valueTab = 0;
  isClick = false;
  isClick2 = false;
  isLoading = false;
  isCollapsed = false;
  loadingOrder = false
  nameProfile?: string;
  lstIdOrder:number[] = []
  lstOrder: getOrderDTO = [];
  lstOrderDetail: getOrderDetailDTO [] = [];
  lstOrderDetailBackup: getOrderDetailDTO [] = [];
  lstOrderBackup: getListOrderDTO[] = [];
  lstProduct: getProductDTO[] = []
  lstProduct2: getProductDTO[] = []
  userProfile$!: CoreUserInitDTO | undefined;
  // Danh sách trạng thái của tab
  selectedStatus = 0
  options2: any[] = [];
  inputValue2: any = null;
  @ViewChild(TDSAutocompleteTriggerDirective)
  autoComplete?: TDSAutocompleteTriggerDirective;
  @ViewChild(TDSAutocompleteComponent)
  cmpAutoComplete?: TDSAutocompleteComponent;
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
    public authService: CoreAuthService,
    public destroy$: TDSDestroyService,
    private message: TDSMessageService,
    public menuSevice: MenuService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private tdsContextMenuService: TDSContextMenuService,
    private orderService: OrdersService,
    private OrderDetailService: OrderDetailService,
    private productSevice: ProductService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.getListProduct()
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    this.initUser();
    this.authService.getObsUserProfile().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.userProfile$ = res;
        this.nameProfile = this.userProfile$?.name.split(" ")[this.userProfile$?.name.split(" ").length - 1].charAt(0);
        this.cd.detectChanges()
      },
      error: (err) => {
        this.isLoading = false;
        this.message.error(err.error.message)
        this.cd.detectChanges()
      },
    });
    this.orderService.dataObsevable.subscribe({
      next: (value) => {
        if (value) {
          this.getListOrder();
        }
        this.cd.detectChanges()
      },
    })
    this.OrderDetailService.dataObsevable.subscribe({
      next: (value) => {
        if (value) {
          this.getListOrderDetail();
        }
        this.cd.detectChanges()
      },
    })
    this.cd.detectChanges()
  }

  onChange(data: { value: TDSSafeAny, keyupEvent: TDSSafeAny }): void {
    this.lstProduct = [];
    if(TDSHelperString.hasValueString(data.value)){
      this.lstProduct = this.lstProduct2
      this.lstProduct = this.lstProduct.filter(item => item.name.toLowerCase().includes(data.value.toLowerCase()) == true);
    }
  }
  onClick(e:any, str:any) {
    this.autoComplete?.closePanel();
    if (e) {
      this.productSevice.idProduct.next(str.id)
      localStorage.setItem("idProduct", str?.id.toString());   
      this.router.navigateByUrl('/customer/product-detail');
      this.inputValue2 = "";  
    }

  }
  compareFun = (o1: any | string, o2: any) => {
    if (o1) {
      // if (TDSHelperString.isString(o1)){
      //   // this.productService.idProduct.next(data.id)
        // localStorage.setItem("idProduct", this.lstProduct[0!]?.id.toString());
        // this.router.navigateByUrl('/customer/product-detail');   
      // }
      return typeof o1 === 'string' ? o1 === o2.name : o1.id === o2.id;
    } else {
      return false;
    }
  };
  search(event: TDSSafeAny): void {
    // this.key = event.value;
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
    // if (TDSHelperString.hasValueString(this.key)) {
    //   this.lstOrderDetail = this.lstOrderDetail.filter(item => item.agency.name.toLowerCase().includes(this.key.toLowerCase()) == true || item.order_detail_no.toLowerCase().includes(this.key.toLowerCase()) == true);
    //   this.detail = this.detailBackup;
    //   for (let index = 0; index < this.lstOrderDetail.length; index++) {
    //     a.push(this.lstOrderDetail[index].id)
    //   }
    //   this.detail = this.detail.filter(item => a.includes(item.id) == true);
    }
  
  //Hàm thay đổi status của tab
  onSelectStatus(value: TDSSafeAny) {
    switch (value) {
      case 0:
        this.lstOrderDetail = this.lstOrderDetailBackup;
        break;
      case 1:
        this.lstOrderDetail = this.lstOrderDetailBackup;
        this.lstOrderDetail=this.lstOrderDetail.filter(item => item.status == "Waiting for confirm")
        break;
      case 2:
        this.lstOrderDetail = this.lstOrderDetailBackup;
        this.lstOrderDetail=this.lstOrderDetail.filter(item => item.status == "2")
        break;
      case 3:
        this.lstOrderDetail = this.lstOrderDetailBackup;
        this.lstOrderDetail=this.lstOrderDetail.filter(item => item.status == "3")
        break;
      case 4:
        this.lstOrderDetail = this.lstOrderDetailBackup;
        this.lstOrderDetail=this.lstOrderDetail.filter(item => item.status == "4")
        break;
      case 5:
        this.lstOrderDetail = this.lstOrderDetailBackup;
        this.lstOrderDetail=this.lstOrderDetail.filter(item => item.status == "5")
        break;
    }
  }
  ngAfterViewInit(): void {

  }

  onActivate(event:any) {
    // window.scroll(0,0);

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    //or document.body.scrollTop = 0;
    //or document.querySelector('body').scrollTo(0,0)
  }

  orderDetail(data: TDSSafeAny) {
    // this.productService.idProduct.next(data.id)
    localStorage.setItem("Order", data.id);

    this.router.navigateByUrl('/customer/order-refund');
  }

  contextMenu($event: MouseEvent, menu: TDSDropdownMenuComponent): void {
    this.tdsContextMenuService.create($event, menu);
  }

  showModalSettingNotification(): void {
    const modalAdd = this.modalService.create({
      title: 'Cài đặt thông báo',
      content: ModalSettingNotificationComponent,
      footer: null,
      size: "md",
      viewContainerRef: this.viewContainerRef,
      componentParams: {

      },
    });
    modalAdd.afterClose.subscribe(
      {
        next: (res) => {
          // if(TDSHelperObject.hasValue(res))

        },
        error: (err) => {

        }
      }
    )
  }

  initUser() {
    this.isLoading = true;
    this.authService.getCacheToken().pipe(
      switchMap((data: TDSSafeAny) => {
        if (TDSHelperObject.hasValue(data)) {
          return this.authService.getUserProfile();
        }
        return (data);
      }),
      takeUntil(this.destroy$)
    ).subscribe(
      {
        next:(value) => {
          if(TDSHelperObject.hasValue(value)){
            this.getListOrder()
            this.getListOrderDetail()
          }
          this.isLoading = false;
          this.cd.detectChanges()
        },
      }
    );
    this.isLoading = false;
    this.cd.detectChanges()
  }

  // Lấy danh sách order từ api
  getListOrderDetail() {
    this.loadingOrder = true;
    this.lstOrderBackup = [];
    this.OrderDetailService.getOrderDetail()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          if (TDSHelperArray.hasListValue(res)) {
            this.lstOrderDetail = res;
            this.lstOrderDetailBackup = res;
            this.loadingOrder = false
            this.cd.detectChanges()
          }
          else {
            this.lstOrderDetail = [];
            this.lstOrderDetailBackup = [];
            this.cd.detectChanges()
          }
          this.loadingOrder = false
          this.cd.detectChanges()
        },
        error: (err) => {
          this.lstOrder = [];
          this.loadingOrder = false
          this.message.error("Đã có lỗi sảy ra trong quá trình thực hiện")
          this.cd.detectChanges()
        }
      })
      
  }
  getListProduct() {
    this.productSevice.getProduct()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          if (TDSHelperArray.hasListValue(res)) {
            this.lstProduct = res;
            this.lstProduct2 = res;
            this.cd.detectChanges()
          }
          else {
            this.lstProduct = [];
            this.cd.detectChanges()
          }
          this.cd.detectChanges()
        },
        error: (err) => {
          this.lstProduct = [];
          this.message.error("Đã có lỗi sảy ra trong quá trình thực hiện")
          this.cd.detectChanges()
        }
      })
      
  }
  // Lấy danh sách order từ api
  getListOrder() {
    this.loadingOrder = true;
    this.lstOrderBackup = [];
    this.orderService.getOrder()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          if (TDSHelperArray.hasListValue(res)) {
            this.lstOrder = res;
             this.lstIdOrder = []
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
                      if (!TDSHelperArray.hasListValue(this.lstIdOrder)){
                        this.lstIdOrder.push(this.lstOrder[i].product)
                        this.orderService.listIdOrderObsevable.next(this.lstIdOrder)
                      }
                      else {
                        if (!this.lstIdOrder.includes(this.lstOrder[i].product)){
                          this.lstIdOrder.push(this.lstOrder[i].product)
                          this.orderService.listIdOrderObsevable.next(this.lstIdOrder)
                        }
                      }
                      this.lstOrderBackup.push({
                        id: this.lstOrder[i].id,
                        qty: this.lstOrder[i].qty,
                        amount: this.lstOrder[i].amount,
                        product: item,
                        order_detail: this.lstOrder[i].order_detail,
                        customer: this.lstOrder[i].customer,

                      })
                      this.cd.detectChanges()
                    },
                    error: (err) => {
                      this.cd.detectChanges()
                    }
                  }
                )
            }
            this.loadingOrder = false
            this.cd.detectChanges()
          }
          else {
            this.lstOrder = [];
            this.cd.detectChanges()
          }
          this.loadingOrder = false
          this.cd.detectChanges()
        },
        error: (err) => {
          this.lstOrder = [];
          this.loadingOrder = false
          this.message.error("Đã có lỗi sảy ra trong quá trình thực hiện")
          this.cd.detectChanges()
        }
      })
      
  }

  closeDropdown() {
    this.isClick = false;
  }
   closeDropdown2() {
    this.isClick2 = false;
  }

  close(e: TDSSafeAny) {
    this.isClick = e;
  }
  close2(e: TDSSafeAny) {
    this.isClick2 = e;
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  onOpenChange(e: boolean) {
    this.isCollapsed = e;
  }
  //log out
  onLogout(e: MouseEvent) {
    e.stopImmediatePropagation();
    e.preventDefault();
    this.authService.clearToken();
    this.authService.redirectLogin("/customer/home");
  }
  getOutletState(o: RouterOutlet) {
    return o.isActivated ? o.activatedRoute : '';
  }
  showModalChangePassword(): void {
    const modalWorkingKind = this.modalService.create({
      title: 'Đổi mật khẩu',
      content: ModalRegisterPasswordComponent,
      size: "lg",
      viewContainerRef: this.viewContainerRef,
      componentParams: {
      },
    });
    modalWorkingKind.afterClose.subscribe(
      {
        next: (res) => {
        },
        error: (err) => {
        }
      }
    )
  }

  deleteOrder(data: any){
    this.orderService.deleteOrder(data.id).pipe(takeUntil(this.destroy$)).subscribe(
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
          this.lstIdOrder.splice(this.lstIdOrder.indexOf(data.product.id), 1)
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
}
