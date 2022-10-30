import { NumberInput } from '@angular/cdk/coercion';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataReviewDTO, ReviewShopDTO } from 'src/app/model/review.model';
import { ReviewService } from 'src/app/services/review.service';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';

interface FilterStatusItemDTO {
  name: string;
  value: TDSSafeAny,
  count: number | null,
  disabled?: boolean,
}

@Component({
  selector: 'app-review-store',
  templateUrl: './review-store.component.html',
  styleUrls: ['./review-store.component.scss'],
  host: { class: 'h-full flex flex-col overflow-hidden ' },
})
export class ReviewStoreComponent implements OnInit {
 
  expandSet = new Set<number>();
  reviews:ReviewShopDTO[]=[];
  loading = true;
  total = 0;
  star = 0;
  filter=''
  filetername=''
  value: number = 0;
  pageSize = 10;
  pageIndex = 1;
  status = 0;
  rating = 0;
  totalRating=0;
  shopId = localStorage.getItem('shopid')
  starFilterReview = 0;
  message:string = ''

  lstStar: Array<FilterStatusItemDTO> = [
    {
      name: 'Tất cả',
      value: 0,
      count: 0,
      disabled: false
    },
    {
      name: '1',
      value: 1,
      count: 0,
      disabled: false
    },
    {
      name: '2',
      value: 2,
      count: 0,
      disabled: false
    },
    {
      name: '3',
      value: 3,
      count: 0,
      disabled: false
    },
    {
      name: '4',
      value: 4,
      count: 0,
      disabled: false
    },

    {
      name: '5',
      value: 5,
      count: 0,
      disabled: false
    },
  ]
  lstStatus:Array<FilterStatusItemDTO> = [
   
  ]
  productData = [
    {
        id: 1,
        IdOrder: 'T1261964561',
        img: 'DH 023165',
        NameProduct: "Giày thể thao hiphop đen trắng",
        IdProduct:"0910232",
        Price: '1.500.000',
        SL:"1",
        total:"1.500.000",
       

    },
    
    {
        id: 2,
        IdOrder: 'T1261964561',
        img: 'DH 023165',
        NameProduct: "Giày thể thao hiphop đen trắng",
        IdProduct:"0910232",
        Price: '1.500.000',
        SL:"1",
        total:"1.500.000",
       

    },
    
    {
        id: 3,
        IdOrder: 'T1261964561',
        img: 'DH 023165',
        NameProduct: "Giày thể thao hiphop đen trắng",
        IdProduct:"0910232",
        Price: '1.500.000',
        SL:"1",
        total:"1.500.000",
       

    },
    
  ]

  
  constructor(
    private  ReviewService: ReviewService
  ) { }
 
    reload$ = new BehaviorSubject<boolean>(true)
  ngOnInit(): void {
    this.ReviewService.ReviewSubject$
    this.loadStatusReview(this.shopId)
    
  }
 

  onModelChange(value: TDSSafeAny) {

    console.log('ngModelChange', value)
  }

  onSelectChangeRating(value: number) {
    this.resetPage()
    this.star = value
    this.getListStore(this.pageIndex, this.pageSize, this.filetername, value ,this.status)
  }
   
  
  getListStore(pageIndex: number, pageSize: number, filetername:string, star:number, status: number):any {
    
    
    this.loading=true
    this.ReviewService.getReviewShopList(pageIndex, pageSize, filetername, star, status)
    .subscribe(
        (res: DataReviewDTO) => {

          if (res) {
            this.reviews  = res.items;
            this.total = res.totalCount;
          } else {
            this.reviews = [];
            this.total = 0;
          }
          this.loading = false;
        },
        err => {
          this.loading = false;
          this.reviews = [];
          this.total = 0;
        }) 
        
    
        
      }   
    // phân trang
  onQueryParamsChange(params: TDSTableQueryParams): void {
    const { pageSize, pageIndex } = params;
  
    this.getListStore(pageIndex, pageSize, this.filetername, this.star, this.status);
  }
  
  
  resetPage() {
    this.pageIndex = 1;
    this.loadStatusReview(this.shopId)
  }
  ngOnChanges(): void {
    this.loadStatusReview(this.shopId);
  }
  onSelectChangeStatus(value: number) {
    this.resetPage()
    this.status = value
    this.getListStore(this.pageIndex, this.pageSize, this.filetername,  this.star, value)
  }
  searchName() {
    this.getListStore(this.pageIndex, this.pageSize, this.filetername, this.star, this.status)
  }
  ongetMessage(){
    this.getListStore(this.pageIndex, this.pageSize, this.filetername,  this.star, this.status)
  }
  onfilter() {
    if(this.filter){
      this.filetername = this.filter
      this.searchName()
      if(this.total==0){
        this.ongetMessage()
      }
    }
  }
 loadStatusReview(shopId: any) {
 console.log(this.shopId)
  shopId=localStorage.getItem('shopid')
    let rating = this.star > 0 ? [this.star] : [];
    this.ReviewService.getListStatusForShop({ ShopId: shopId, Rating: rating }).subscribe(res => {
     
      if (res) {
        let lstStatus = res.map((item: any) => {
          return {
            name: item.text,
            value: item.value,
            count: item.count,
            disabled: false
          }
        }).filter((f: any) => f.value > 0);
        let countAll = 0;
        lstStatus.forEach((f: any) => {
          countAll += f.count;
        });
        this.lstStatus = [
          {
            name: 'Tất cả',
            value: 0,
            count: countAll,
            disabled: false
          },
          ...lstStatus
        ]
      }
    })
  }
  

}
