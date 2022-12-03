import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { getProductDTO } from 'src/app/dto/product.dto';
import { TypeProductDTO } from 'src/app/dto/typeProduct.dto';
import { ProductService } from 'src/app/modules/setting-resource/services/product.service';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';

import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'hrm-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService
  ]
})
export class ProductComponent implements OnInit {
  loading = false;
  public lstProduct: getProductDTO[] = [];
  lstType: TypeProductDTO[] = []
  listOfData: Array<TDSSafeAny> = [
    {
      image: "assets/images/causual1.jpg",
    },
    {
      image: "assets/images/causual2.png",
    },
    {
      image: "assets/images/causual1.jpg",
    },
  ];

  effect = "scrollx";
  constructor(
    private productService: ProductService,
    private destroy$: TDSDestroyService,
    private cd: ChangeDetectorRef,
    private message: TDSMessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getType(),
    this.getListProduct()
  }
  productDetail(data: TDSSafeAny) {
    this.productService.idProduct.next(data.id)
    localStorage.setItem("idProduct", data.id);
    this.router.navigateByUrl('/customer/product-detail');
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


  getType() {
    this.productService.getType()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: TDSSafeAny) => {
        this.lstType = res;
      });
  }
}
