
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HolidayUpdateDto } from '@commom/hrm/models';
import { HolidayService } from '@commom/hrm/services';
import { CoreAuthService } from '@core/authentication';
import { CoreUserInitDTO } from '@core/dto';
import { takeUntil } from 'rxjs';
import { paramGetProductDTO } from 'src/app/dto/product.dto';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { editProductDTO, getProductDTO } from '../../models/product.dto';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'hrm-modal-add-price-product',
  templateUrl: './modal-add-price-product.component.html',
  styleUrls: ['./modal-add-price-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService
  ],
})
export class ModalAddPriceProductComponent implements OnInit {
  params: paramGetProductDTO = {}
  userProfile$?: CoreUserInitDTO
  public lstProduct: getProductDTO[] = []
  fromToDayOff!: Array<Date>;
  offDayReal!: Array<Date>;
  isSubmit = false
  dayOff: TDSSafeAny = 0;
  dayOffParams!: TDSSafeAny
  addEditHolidaysForm!: FormGroup;
  error?: TDSSafeAny
  body?: HolidayUpdateDto
  constructor(
    private modal: TDSModalRef,
    private fb: FormBuilder,
    private destroy$: TDSDestroyService,
    private message: TDSMessageService,
    private productService: ProductService,
    private authService: CoreAuthService,
    private cd: ChangeDetectorRef
  ) { this.createForm() }

  ngOnInit(): void {
    this.authService.getObsUserProfile().pipe(takeUntil(this.destroy$)).subscribe({
      next: (res: TDSSafeAny) => {
        this.userProfile$ = res;
        this.params.agency = res?.id
        this.getListProduct(this.params)
        // this.nameProfile = this.userProfile$?.name.split(" ")[this.userProfile$?.name.split(" ").length - 1].charAt(0);
        this.cd.detectChanges()
      },
      error: (err: TDSSafeAny) => {
        this.message.error(err.error.message)
        this.cd.detectChanges()
      },
    });
  }

  ngAfterViewInit(): void {

    this.cd.detectChanges()
  }

  cancel() {
    this.modal.destroy(null);
  }

  // Lấy danh sách product từ api
  getListProduct(params: paramGetProductDTO) {
    this.isSubmit = true;
    this.productService.getProduct(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          if (res) {
            // this.getStatus()
            this.lstProduct = res;
            this.isSubmit = false;
          }
          this.isSubmit = false;
          this.cd.detectChanges()
        },
        error: (err) => {
          this.lstProduct = []
          this.isSubmit = false
          this.message.error(err.error.message)
          this.cd.detectChanges()
        }
      })
  }

  onChangeDayOff(result: Array<Date>): void {
    this.fromToDayOff = result
    this.dayOff = (Number(this.fromToDayOff[1]) - Number(this.fromToDayOff[0])) / (1000 * 60 * 60 * 24)
    this.dayOffParams = {
      fromTime: this.fromToDayOff[0].toISOString(),
      toTime: this.fromToDayOff[1].toISOString()
    }
  }

  createForm() {
    this.addEditHolidaysForm = this.fb.group({
      id: new FormControl('', [Validators.required]),
      quantity: new FormControl('', [Validators.required]),
      quantity_note: new FormControl(''),
    })
  }

  // updateForm() {
  //   if (this.lstHolidays) {
  //     let parse = [
  //       new Date(this.lstHolidays.fromTime),
  //       new Date(this.lstHolidays.toTime),
  //     ]
  //     this.dayOff = this.lstHolidays.quantityDayOff
  //     this.dayOffParams = {
  //       fromTime: parse[0],
  //       toTime: parse[1]
  //     }
  //     this.fromToDayOff = parse
  //     const item = { ...this.lstHolidays, ...parse };
  //     this.addEditHolidaysForm.patchValue(item);
  //   }
  // }

  onSubmit(): void {
    if (this.addEditHolidaysForm.valid && this.addEditHolidaysForm.dirty) {
      this.isSubmit = true;
      let param:editProductDTO = {
        quantity: this.lstProduct.filter(item => item.id == this.addEditHolidaysForm.controls['id'].value)[0].quantity + this.addEditHolidaysForm.controls['quantity'].value,
        quantity_note: this.addEditHolidaysForm.controls['quantity_note'].value

      }
      this.productService.editProduct(this.addEditHolidaysForm.controls['id'].value, param)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            this.isSubmit = false
            this.message.success("Ghi phiếu thành công")
            this.modal.destroy(this.params);
          },
          error: (err) => {
            this.isSubmit = false
            this.error = err.error.message
          }
        })

    }
  }

}
