import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CoreAuthService } from '@core/authentication';
import { CoreCustomerInitDTO, CoreUserInitDTO } from '@core/dto';
import { takeUntil } from 'rxjs';
import { GetAddressDTO } from 'src/app/dto/address.dto';
import { OrderDetailDTO } from 'src/app/dto/orderDetail.dto';
import { paymentDTO } from 'src/app/dto/payment.dto';
import { AddressService } from 'src/app/services/address.service';
import { OrderDetailService } from 'src/app/services/order-detail.service';
import { OrdersService } from 'src/app/services/orders.service';
import { PaymentService } from 'src/app/services/payment.service';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef, TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { ModalAddAddressComponent } from '../modal-add-address/modal-add-address.component';


@Component({
  selector: 'hrm-modal-chosen-address',
  templateUrl: './modal-chosen-address.component.html',
  styleUrls: ['./modal-chosen-address.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService
  ]
})
export class ModalChosenAddressComponent implements OnInit {
  @Input() total: any
  @Input() order: any
  userProfile$?: CoreCustomerInitDTO;
  lstAddress?: GetAddressDTO[] = [];
  address?: number = 0;
  listPayment?: paymentDTO
  isSubmit: boolean = false
  formOrder!: FormGroup;
  createOderDetail?: OrderDetailDTO;
  lstId: string[] = [];
  lstName: string[] = [];
  public selected = { id: 1 };
  public selected2 = { id: 1 };
  constructor(
    private modal: TDSModalRef,
    private message: TDSMessageService,
    private addressService: AddressService,
    // private productService: ProductService,
    private destroy$: TDSDestroyService,
    private authService: CoreAuthService,
    private orderService: OrdersService,
    private modalService: TDSModalService,
    private orderDetailService: OrderDetailService,
    private paymentService: PaymentService,
    private cd: ChangeDetectorRef,
    private viewContainerRef: ViewContainerRef,
    private fb: FormBuilder

  ) {

  }
  createOrder() {
    this.formOrder = this.fb.group({
      payment: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.authService.getObsUserProfile().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res: TDSSafeAny) => {
        this.userProfile$ = res;
        // this.nameProfile = this.userProfile$?.name.split(" ")[this.userProfile$?.name.split(" ").length - 1].charAt(0);
        this.cd.detectChanges();
      },
      error: (err: TDSSafeAny) => {
        this.message.error(err.error.message)
        this.cd.detectChanges()
      },
    });
    this.getAddress()
    this.getPayment()
    this.createOrder()
  }
  onChange(value: any): void {
    this.address = value
  }
  compareFun = (o1: any | string, o2: any) => {
    if (o1) {
      return typeof o1 === 'string' ? o1 === o2.id : o1.id === o2.id;
    } else {
      return false;
    }
  };

  addAddress() {
    if (TDSHelperObject.hasValue(this.userProfile$)) {
      const modal = this.modalService.create({
        title: 'Thêm địa chỉ vận chuyển',
        content: ModalAddAddressComponent,
        size: "md",
        viewContainerRef: this.viewContainerRef,
        componentParams: {
          userId: this.userProfile$?.id
        },
      });
      modal.afterClose.subscribe(
        {
          next: (res) => {
            if (TDSHelperObject.hasValue(res)) {
              this.getAddress()
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
  cancel() {
    this.modal.destroy(null);
  }
  create() {
    if(this.formOrder.valid && this.formOrder.dirty){
      this.isSubmit = true
      this.createOderDetail = {
        id: this.userProfile$?.id,
        order: this.order.map(String),
        address: this.address,
        payment: this.formOrder.controls["payment"].value
      }
      this.orderDetailService.createOrder(this.createOderDetail)
        .pipe(takeUntil(this.destroy$)).subscribe(
          {
            next: (item: any) => {
              this.isSubmit = false;
              this.orderService.dataObsevable.next(true)
              this.orderDetailService.dataObsevable.next(true)
              this.message.success("Đặt hàng thành công")
              this.modal.destroy(this.createOderDetail)
              this.cd.detectChanges()
            },
            error: (err) => {
              this.isSubmit = false;
              this.cd.detectChanges()
            }
          }
        )
    }
  }
  getAddress() {
    if (TDSHelperObject.hasValue(this.userProfile$)) {
      this.isSubmit = true;
      this.addressService.getAddress()
        .pipe(takeUntil(this.destroy$)).subscribe(
          {
            next: (item: any) => {
              this.lstAddress = item;
              this.address = item[0].id
              this.isSubmit = false;
              this.cd.detectChanges()
            },
            error: (err) => {
              this.isSubmit = false;
              this.cd.detectChanges()
            }
          }
        )
    }
  }
  getPayment() {
    this.isSubmit = true
    this.paymentService.getPayment().pipe(takeUntil(this.destroy$))
      .subscribe(
        {
          next: (res) => {
            this.isSubmit = false
            this.listPayment = res;
            this.cd.detectChanges()
          },
        }
      )
  }
}
