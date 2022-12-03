import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { AccountService } from '@commom/hrm/services';
import { CoreAuthService } from '@core/authentication';
import { CoreUserInitDTO } from '@core/dto';
import { takeUntil } from 'rxjs';
import { getAgencyDTO, getCustomerDTO, getProductDTOAdmin } from 'src/app/dto/account.dto';
import { getProductDTO, ProductDTO } from 'src/app/dto/product.dto';
import { FilterStatusItemDTO } from 'src/app/modules/setting-resource/models/accset.dto';
import { AdminService } from 'src/app/services/admin.service';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';

@Component({
  selector: 'hrm-account-agency',
  templateUrl: './account-agency.component.html',
  styleUrls: ['./account-agency.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-white flex flex-col rounded-xl w-full h-full' },
  providers: [TDSModalService, TDSDestroyService]
})
export class AccountAgencyComponent implements OnInit {

  expandSet = new Set<number>();
  lstAccount: getAgencyDTO[] = []
  lstProduct: getProductDTO[] = []
  lstData: Array<FilterStatusItemDTO> = [
    {
      name: 'Kích hoạt',
      value: 1,
      count: 0,
      disabled: false
    },
    {
      name: "Chưa kích hoạt",
      value: 3,
      count: 0,
      disabled: false
    },
  ]
  listOfCurrentPageData: Array<string> = [];
  setOfCheckedId = new Set<TDSSafeAny>();
  selected = 1;
  pageIndex = 1;
  pageSize = 20;
  isSubmit: boolean = false;
  checked = false;
  skipCount = 0
  totalStatus = 0
  loading: boolean = false
  active: boolean = true;
  indeterminate = false;
  userProfile$?: CoreUserInitDTO
  private _jsonURL = 'assets/data.json';
  constructor(
    private destroy$: TDSDestroyService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private authService: CoreAuthService,
    private message: TDSMessageService,
    // private tdsContextMenuService: TDSContextMenuService,
    // private productService: ProductService,
    private cd: ChangeDetectorRef,
    private accountService: AccountService,
    private adminService: AdminService
    // private http: HttpClient
  ) { }

  ngOnInit(): void {
    // this.getAccount()
    // this.authService.getObsUserProfile().pipe(takeUntil(this.destroy$)).subscribe({
    //   next: (res: TDSSafeAny) => {
    //     this.userProfile$ = res;
    //     // this.params.agency = res?.id
    //     // this.getListProduct(this.params)
    //     // this.nameProfile = this.userProfile$?.name.split(" ")[this.userProfile$?.name.split(" ").length - 1].charAt(0);
    //     this.cd.detectChanges()
    //   },
    //   error: (err: TDSSafeAny) => {
    //     this.message.error(err.error.message)
    //     this.cd.detectChanges()
    //   },
    // });
  }


  // contextMenu($event: MouseEvent, menu: TDSDropdownMenuComponent): void {
  //   this.tdsContextMenuService.create($event, menu);
  // }

  // closeMenu(): void {
  //   this.tdsContextMenuService.close(true)
  // }
  // checked selected
  onExpandChange(id: number, checked: boolean): void {
   
    let param: getProductDTOAdmin = {
      type: "2",
      agency: id,
    }
    if (checked) {
      this.getProduct(param)
      this.expandSet = new Set<number>();
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  getAccount(value: number) {
    this.loading = true;
    this.adminService.getAccount(value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          this.lstAccount = res;
          this.loading = false;
          this.cd.detectChanges()
        },
        error: () => {
          this.loading = false;
          this.cd.detectChanges()
        }
      })
  }
  getProduct(params: getProductDTOAdmin) {
    this.loading = true;
    this.adminService.getProduct(params)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          this.lstProduct = res;
          this.loading = false;
          this.cd.detectChanges()
        },
        error: () => {
          this.loading = false;
          this.cd.detectChanges()
        }
      })
  }
  updateCheckedSet(item: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(item);
    } else {
      this.setOfCheckedId.delete(item);
    }
  }

  // search(event: TDSSafeAny): void {
  //   if (event.value != null) {
  //     this.lstResource = this.lstBackup;
  //     this.lstResource = this.lstResource.filter(item => item.name.toLowerCase().includes(event.value.toLowerCase()) == true);
  //     this.lstData[0].count = this.lstResource.length
  //     this.lstData[1].count = this.lstResource.filter(item => (item.is_approved === true && item.is_delete === false)).length
  //     this.lstData[2].count = this.lstResource.filter(item => item.is_approved === false).length
  //     this.lstData[3].count = this.lstResource.filter(item => item.is_delete === true).length
  //   }
  //   if (!TDSHelperString.hasValueString(event.value)) {
  //     this.lstResource = this.lstBackup;
  //     this.lstData[0].count = this.lstResource.length
  //     this.lstData[1].count = this.lstResource.filter(item => (item.is_approved === true && item.is_delete === false)).length
  //     this.lstData[2].count = this.lstResource.filter(item => item.is_approved === false).length
  //     this.lstData[3].count = this.lstResource.filter(item => item.is_delete === true).length
  //   }
  // }

  onSelectChange(value: TDSSafeAny) {
    this.getAccount(value);
  }

  onChange(isActive: TDSSafeAny, index: number, result: TDSSafeAny) {
  }

  onItemChecked(item: TDSSafeAny, checked: boolean): void {
    this.updateCheckedSet(item, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => {
      this.updateCheckedSet(item, value)
    });
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: TDSSafeAny): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item)) && !this.checked;
  }

  // panigation
  resetPage() {
    this.pageIndex = 1;
  }

  onQueryParamsChange(params: TDSTableQueryParams): void {
    this.getAccount(this.selected)
    this.cd.detectChanges()
  }

  // // Lấy danh sách product từ api
  // getListProduct(params: paramGetProductDTO) {
  //   this.loading = true
  //   this.productService.getProduct(params)
  //     .pipe(finalize(() => {
  //     }), takeUntil(this.destroy$))
  //     .subscribe({
  //       next: (res: TDSSafeAny) => {
  //         if (res) {
  //           // this.getStatus()
  //           this.lstResource = res;
  //           this.lstBackup = res;
  //           this.lstData[0].count = this.lstResource.length
  //           this.lstData[1].count = this.lstResource.filter(item => (item.is_approved === true && item.is_delete === false)).length
  //           this.lstData[2].count = this.lstResource.filter(item => item.is_approved === false).length
  //           this.lstData[3].count = this.lstResource.filter(item => item.is_delete === true).length
  //           // this.lstResource.totalCount = res.totalCount;
  //           this.loading = false
  //         }
  //         else {
  //           this.getStatus()
  //           // this.lstResource.items = []
  //           // this.lstResource.totalCount = 0;
  //           this.loading = false
  //         }
  //         this.cd.detectChanges()
  //       },
  //       error: (err) => {
  //         this.lstResource = []
  //         this.loading = false
  //         // this.lstResource.totalCount = 0;
  //         this.message.error(err.error.message)
  //         this.cd.detectChanges()
  //       }
  //     })
  // }

  // // modal thêm mới sản phẩm
  // showModalAdd(): void {
  //   const modalAdd = this.modalService.create({
  //     title: 'Thêm sản phẩm mới',
  //     content: ModalAddEditProductComponent,
  //     size: "lg",
  //     viewContainerRef: this.viewContainerRef,
  //     componentParams: {
  //       // isActiveAdd: this.active,
  //     },
  //   });
  //   modalAdd.afterClose.subscribe(
  //     {
  //       next: (res) => {
  //         if (TDSHelperObject.hasValue(res))
  //           this.getListProduct(this.params!);
  //         this.selected = 1;
  //       },
  //       error: (err) => {
  //       }
  //     }
  //   )
  // }
  // // modal thêm mới sản phẩm
  // showModalAddPromotion(): void {
  //   const modalAdd = this.modalService.create({
  //     title: 'Thêm khuyễn mãi',
  //     content: ModalAddPromotionsComponent,
  //     size: "md",
  //     viewContainerRef: this.viewContainerRef,
  //     componentParams: {
  //       // isActiveAdd: this.active,
  //     },
  //   });
  //   modalAdd.afterClose.subscribe(
  //     {
  //       next: (res) => {
  //         if (TDSHelperObject.hasValue(res))
  //           this.getListProduct(this.params!);
  //         this.selected = 1;
  //       },
  //       error: (err) => {
  //       }
  //     }
  //   )
  // }
  // // modal nhập hàng sản phẩm
  // showModaladdPrice(): void {
  //   const modalAdd = this.modalService.create({
  //     title: 'Phiếu nhập hàng',
  //     content: ModalAddPriceProductComponent,
  //     size: "lg",
  //     viewContainerRef: this.viewContainerRef,
  //     componentParams: {
  //       // isActiveAdd: this.active,
  //     },
  //   });
  //   modalAdd.afterClose.subscribe(
  //     {
  //       next: (res) => {
  //         if (TDSHelperObject.hasValue(res))
  //           this.getListProduct(this.params!);
  //         this.selected = 1;
  //       },
  //       error: (err) => {
  //       }
  //     }
  //   )
  // }

  // // modal chỉnh sửa
  // showModalEdit(data: TDSSafeAny): void {
  //   const modalEdit = this.modalService.create({
  //     title: 'Chỉnh sửa sản phẩm',
  //     content: ModalEditProductComponent,
  //     size: "xl",
  //     viewContainerRef: this.viewContainerRef,
  //     componentParams: {
  //       lstResource: data,
  //     },
  //   });
  //   modalEdit.afterClose.subscribe(
  //     {
  //       next: (res) => {
  //         if (TDSHelperObject.hasValue(res))
  //           this.getListProduct(this.params!);
  //         this.selected = 2;
  //       },
  //       error: (err) => {
  //       }
  //     }
  //   )
  // }

  // Modal kích hoạt tài khoản
  onActive(data: TDSSafeAny): void {
    const modal = this.modalService.warning({
      title: 'Bạn muốn kích hoạt đại lý này',
      //   content: `<span  class="text-yellow-500">
      //   Lưu ý: Không thể khôi phục thông tin sản phẩm này sau khi xóa
      // </span>`,
      onOk: () => {
        this.adminService.ActiveAccount(data.id)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                modal.destroy(data.id);
                this.message.success("Kích hoạt người dùng thành công")
                this.getAccount(this.selected)
              },
              error: (err) => {
                this.message.error(err.message)
              }
            })
      },
      onCancel: () => { },
      confirmIcon: 'tdsi-checkbox-check-fill',
      okText: "Kích hoạt",
      cancelText: "Hủy"
    });
  }
  // Modal kích hoạt tài khoản
  onDisable(data: TDSSafeAny): void {
    const modal = this.modalService.warning({
      title: 'Bạn muốn hủy kích hoạt đại lý này',
      //   content: `<span  class="text-yellow-500">
      //   Lưu ý: Không thể khôi phục thông tin sản phẩm này sau khi xóa
      // </span>`,
      onOk: () => {
        this.adminService.DisableAccount(data.id)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                modal.destroy(data.id);
                this.message.success("Dừng kích hoạt người dùng thành công")
                this.getAccount(this.selected)
              },
              error: (err) => {
                this.message.error(err.message)
              }
            })
      },
      onCancel: () => { },
      confirmIcon: 'tdsi-close-fill',
      okText: "Ngừng kích hoạt",
      cancelText: "Hủy"
    });
  }

}
