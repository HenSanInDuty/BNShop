import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  selector: 'hrm-modal-add-promotions',
  templateUrl: './modal-add-promotions.component.html',
  styleUrls: ['./modal-add-promotions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalAddPromotionsComponent implements OnInit {

  isActiveEdit?: boolean
  isSubmit: boolean = false
  addaccsetForm!: FormGroup;
  public lstProduct: getProductDTO[] = []
  swtEdit = false
  body?: TDSSafeAny
  params: paramGetProductDTO = {}
  listUrlImg: string[] = []
  userProfile$?: CoreUserInitDTO
  constructor(
    private fb: FormBuilder,
    private modal: TDSModalRef,
    private message: TDSMessageService,
    private productService: ProductService,
    private destroy$: TDSDestroyService,
    private authService: CoreAuthService,
    private cd: ChangeDetectorRef
  ) {
    this.createForm();
  }

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

  }

  createForm() {
    this.addaccsetForm = this.fb.group({
      id: new FormControl(''),
      price: new FormControl('', [Validators.required]),
      price_end_datetime: new FormControl('', [Validators.required]),
      // name: [
      //   '',
      //   Validators.compose([
      //     Validators.minLength(8),
      //     Validators.maxLength(100),
      //   ])
      // ],
      // describe: [
      //   '',
      //   Validators.compose([
      //     Validators.minLength(0),
      //     Validators.maxLength(10000),
      //   ])
      // ],
    })
  }

  cancel() {
    this.listUrlImg = [],
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

  onSubmit(): void {
    console.log(this.addaccsetForm.value)
    if (this.addaccsetForm.valid && this.addaccsetForm.dirty) {
      this.isSubmit = true;
      let param: editProductDTO = {
        price:  this.addaccsetForm.controls['price'].value,
        price_end_datetime: this.addaccsetForm.controls['price_end_datetime'].value.toISOString()
      }
      this.productService.editProduct(this.addaccsetForm.controls['id'].value, param)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            this.isSubmit = false
            this.message.success("Thêm khuyến mãi thành công")
            this.modal.destroy(this.params);
          },
          error: (err) => {
            this.message.error("Thêm khuyến mãi thất bại")
            this.isSubmit = false
          }
        })

    }
  }
}
