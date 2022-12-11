import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { getProductDTO, paramGetProductDTO } from 'src/app/dto/product.dto';
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
  item = null;
  isTrue = true;
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
  params: paramGetProductDTO = {
    type: "",
  }
  effect = "scrollx";
  constructor(
    private productService: ProductService,
    private destroy$: TDSDestroyService,
    private cd: ChangeDetectorRef,
    private message: TDSMessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getType();
    // this.getListProduct(this.params);
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    if(this.isTrue){
      this.params.type = localStorage.getItem('idType')!
      this.getListProduct(this.params);
    }
  }
  
  onChangeProduct(data: any) {
    this.params.type = data;
    this.getListProduct(this.params)
  }
  productDetail(data: TDSSafeAny) {
    this.productService.idProduct.next(data.id)
    localStorage.setItem("idProduct", data.id);
    this.router.navigateByUrl('/customer/product-detail');
  }
  // Lấy danh sách product từ api
  getListProduct(params: paramGetProductDTO) {
    this.loading = true;
    this.productService.getProduct(params)
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
