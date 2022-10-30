import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { listStoreDTO, storeDTO } from 'src/app/model/store.model';
import { ReviewService } from 'src/app/services/review.service';
import { StoreService } from 'src/app/services/store.service';

import { TDSMenuDTO, TDSMenuOptionDTO } from 'tds-ui/menu';
import { TDSSafeAny } from 'tds-ui/shared/utility';


@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss'],
  host: {
    class: "flex w-full"
  }

})

export class LayoutAdminComponent implements OnInit {
  @Output() clickId:EventEmitter<any> =  new EventEmitter()
  isCollapsed = false;

  activeTab = 1;
  active = 1;
  active1 = 'top';
  setActiveTab(event: TDSSafeAny) {
    this.activeTab = event;
  }
  ngOnInit(): void {this.getListStore()
    this.ReviewService.ReviewSubject$ 
    this.clickId.emit("enil")}
  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  onOpenChange(e: boolean) {
    this.isCollapsed = e;   
  }

  breakpoint: number = 500;
  
  onResize(event: any) {
    const w = event.target.innerWidth;
    if (w > this.breakpoint) {
      this.isCollapsed = false;
      
    }
    if (w < this.breakpoint) {
      this.isCollapsed = true;

    }
  }
  constructor( private storeService:StoreService,
                private router: Router,
                private  ReviewService: ReviewService,
              ) { }
  public DataTag: Array<TDSMenuDTO> = [
    {
      name: "Trang chủ",
      icon: "tdsi-home-fill",
      link: '/admin',
    },

    {

      name: 'Trò truyện',
      icon: "tdsi-message-fill",
      listChild: [
        {
          link: '/admin/chat',
          name: 'Danh sách tin nhắn'
        },
        {
          link: '/admin/setting-message',
          name: 'Thiết lập nhanh'
        },

      ]
    },
    {

      name: 'Đơn hàng',
      icon: "tdsi-bag-fill",
      listChild: [
        {
          link: '/admin/order/order-list',
          name: 'Danh sách đơn hàng'
        },
        {
          link: '/admin/order/order-refund',
          name: 'Trả hàng/hoàn tiền'
        },
        
      ]
    },
    {

      name: 'Sản phẩm',
      icon: "tdsi-product-fill",
      listChild: [
        
        {
          link: '/admin/product/productList',
          name: 'Danh sách sản phẩm'
        },
        {
          link: '/admin/product/productAdd',
          name: 'Thêm sản phẩm',
          
        }
      ]
    },
    {

      name: 'Đánh giá',
      icon: "tdsi-star-2-fill",
      listChild: [
        {
          link: '/admin/review/reviewStore',
          name: 'Đánh giá shop'
        },
        {
          link: '/admin/review/reviewProduct',
          name: 'Đánh giá sản phẩm'
        },
        {
          link: '/admin/review/reviewTransporters',
          name: 'Đánh giá vận chuyển',
         
        }
      ]
    },
    {
      name: "Danh sách khách hàng",
      icon: "tdsi-user-fill",
      link: '/home',
    },
    {

      name: 'Khuyến mãi',
      icon: "tdsi-discount-fill",
      listChild: [
        {
          link: '/menu',
          name: 'Mã giảm giá'
        },
        {
          link: '/pagination',
          name: 'Sản phẩm giảm giá'
        },
        {
          link: '/step',
          name: 'Giảm giá vận chuyển',
          
        },
        {
          link: '/step',
          name: 'Cài đặng mã giảm giá',
          
        }
      ]
    },
    {
      name: "Quảng cáo sản phẩm",
      icon: "tdsi-marketing-fill",
      link: '/home',
    },
    {

      name: 'Quản lý shop',
      icon: "tdsi-shop-fill",
      listChild: [
        {
          link: '/menu',
          name: 'Hồ sơ shop'
        },
        {
          link: '/pagination',
          name: 'Trang trí gian hàng'
        },
        {
          link: '/step',
          name: 'Danh mục shop',
          
        }
      ]
    },
    {
      name: "Quản lý vận chuyển",
      icon: "tdsi-transport-fill",
      link: '/home',
    },
    {

      name: 'Quản lý kho',
      icon: "tdsi-supplier-fill",
      listChild: [
        {
          link: '/menu',
          name: 'Menu'
        },
        {
          link: '/pagination',
          name: 'Pagination'
        },
        {
          link: '/step',
          name: 'Step',
          tag: {
            type: 'outline',
            status: 'primary',
            rounded: 'rounded-full',
            text: 'primary',
          }
        }
      ]
    },
    {

      name: 'Quản lý tài chính',
      icon: "tdsi-wallet-fill",
      listChild: [
        {
          link: '/menu',
          name: 'Menu'
        },
        {
          link: '/pagination',
          name: 'Pagination'
        },
        {
          link: '/step',
          name: 'Step',
          tag: {
            type: 'outline',
            status: 'primary',
            rounded: 'rounded-full',
            text: 'primary',
          }
        }
      ]
    },
    {

      name: 'Báo cáo',
      icon: "tdsi-chart-pie-fill",
      listChild: [
        {
          link: '/menu',
          name: 'Menu'
        },
        {
          link: '/pagination',
          name: 'Pagination'
        },
        {
          link: '/step',
          name: 'Step',
          tag: {
            type: 'outline',
            status: 'primary',
            rounded: 'rounded-full',
            text: 'primary',
          }
        }
      ]
    },
    {

      name: 'Quản lý nhân viên',
      icon: "tdsi-user-fill",
      listChild: [
        {
          link: '/menu',
          name: 'Menu'
        },
        {
          link: '/pagination',
          name: 'Pagination'
        },
        {
          link: '/step',
          name: 'Step',
          tag: {
            type: 'outline',
            status: 'primary',
            rounded: 'rounded-full',
            text: 'primary',
          }
        }
      ]
    },
    {

      name: 'Cấu hình tài khoản',
      icon: "tdsi-gear-1-fill",
      listChild: [
        {
          link: '/menu',
          name: 'Menu'
        },
        {
          link: '/pagination',
          name: 'Pagination'
        },
        {
          link: '/step',
          name: 'Step',
          tag: {
            type: 'outline',
            status: 'primary',
            rounded: 'rounded-full',
            text: 'primary',
          }
        }
      ]
    },

  ]
  public contact: number = 1;
  stores:storeDTO[]=[]
  lstMenu2 = this.DataTag;
  getListStore():any {
      this.storeService.getStore().subscribe(
        (res:listStoreDTO) => {
          this.stores = [...res.items]
        
        },
        err => {
          console.log(err)
        }
        )
  }
  @Input() shopId = ''
  onModelChange(e:TDSSafeAny)
  {
    this.shopId = e
    localStorage.setItem('shopid',e)
  }
 
  public listSelected = localStorage.getItem('shopid')
  style1: TDSMenuOptionDTO =
    {
      background: 'first:bg-dark-900 bg-dark-700 ',
      backgroundItem: 'bg-dark-700 !text-neutral-3-900',
      backgroundItemSelected: 'bg-dark-700 !text-neutral-3-900',
      backgroundItemHover: 'hover:bg-dark-600'
    }


}
