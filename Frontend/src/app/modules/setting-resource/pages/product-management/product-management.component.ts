import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';

import { ModalAddEditProductComponent } from '../../components/modal-add-edit-product/modal-add-edit-product.component';
import { ModalDeleteAllComponent } from '../../components/modal-delete-all/modal-delete-all.component';
import { FilterStatusItemDTO, ParamGetListAccsetDTO } from '../../models/accset.dto';
import { TDSModalRef, TDSModalService } from 'tds-ui/modal';
import { TDSMessageModule, TDSMessageService } from 'tds-ui/message';
import { TDSTableQueryParams } from 'tds-ui/table';
import { TDSHelperObject, TDSHelperString, TDSSafeAny } from 'tds-ui/shared/utility';
import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSContextMenuService, TDSDropdownMenuComponent } from 'tds-ui/dropdown';
import { ProductService } from '../../services/product.service';
import { getProductDTO, ProductDTO } from '../../models/product.dto';
import { paramGetProductDTO } from 'src/app/dto/product.dto';
import { CoreUserInitDTO } from '@core/dto';
import { CoreAuthService } from '@core/authentication';
import { ModalAddPriceProductComponent } from '../../components/modal-add-price-product/modal-add-price-product.component';
import { ModalEditProductComponent } from '../../components/modal-edit-product/modal-edit-product.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ModalAddPromotionsComponent } from '../../components/modal-add-promotions/modal-add-promotions.component';


@Component({
  selector: 'hrm-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-white flex flex-col rounded-xl w-full h-full' },
  providers: [TDSModalService, TDSDestroyService]
})

export class ProductManagementComponent implements OnInit {
  params: paramGetProductDTO = {}
  public lstResource: getProductDTO[] = []
  public lstBackup: getProductDTO[] = []
  lstData: Array<FilterStatusItemDTO> = [
    {
      name: 'Tất cả',
      value: 0,
      count: 0,
      disabled: false
    },
    {
      name: "Đang hoạt động",
      value: 1,
      count: 0,
      disabled: false
    },
    {
      name: 'Đang chờ duyệt',
      value: 2,
      count: 0,
      disabled: false
    },
    {
      name: 'Đã xóa',
      value: 3,
      count: 0,
      disabled: false
    },

  ]
  listOfCurrentPageData: Array<string> = [];
  setOfCheckedId = new Set<TDSSafeAny>();

  selected = 0;
  pageIndex = 1;
  pageSize = 20;
  isSubmit: boolean = false;
  checked = false;
  skipCount = 0
  totalStatus = 0
  loading: boolean = true
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
    private tdsContextMenuService: TDSContextMenuService,
    private productService: ProductService,
    private cd: ChangeDetectorRef,
    private http: HttpClient
  ) { }

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

  
  contextMenu($event: MouseEvent, menu: TDSDropdownMenuComponent): void {
    this.tdsContextMenuService.create($event, menu);
  }

  closeMenu(): void {
    this.tdsContextMenuService.close(true)
  }

  // checked selected
  updateCheckedSet(item: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(item);
    } else {
      this.setOfCheckedId.delete(item);
    }
  }

  search(event: TDSSafeAny): void {
    if (event.value != null) {
      this.lstResource = this.lstBackup;
      this.lstResource = this.lstResource.filter(item => item.name.toLowerCase().includes(event.value.toLowerCase()) == true);
      this.lstData[0].count = this.lstResource.length
      this.lstData[1].count = this.lstResource.filter(item => (item.is_approved === true && item.is_delete === false)).length
      this.lstData[2].count = this.lstResource.filter(item => item.is_approved === false).length
      this.lstData[3].count = this.lstResource.filter(item => item.is_delete === true).length
    }
    if (!TDSHelperString.hasValueString(event.value)) {
      this.lstResource = this.lstBackup;
      this.lstData[0].count = this.lstResource.length
      this.lstData[1].count = this.lstResource.filter(item => (item.is_approved === true && item.is_delete === false)).length
      this.lstData[2].count = this.lstResource.filter(item => item.is_approved === false).length
      this.lstData[3].count = this.lstResource.filter(item => item.is_delete === true).length
    }
  }

  onSelectChange(value: TDSSafeAny) {
    if (value == 1) {
      this.lstResource = this.lstBackup
      this.lstResource = this.lstResource.filter(item => item.is_approved === true && item.is_delete === false)
      this.cd.detectChanges()
    }
    else if (value == 2) {
      this.lstResource = this.lstBackup
      this.lstResource = this.lstResource.filter(item => (item.is_approved === false))
      this.cd.detectChanges()
    }
    else if (value == 3) {
      this.lstResource = this.lstBackup
      this.lstResource = this.lstResource.filter(item => item.is_delete === true)
      this.cd.detectChanges()
    }
    else {
      this.lstResource = this.lstBackup
      this.cd.detectChanges()
    }
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
  // Filter
  onFilterBranch(e: TDSSafeAny, data: TDSSafeAny) {
    if (e) {

    }
    else {

    }
  }

  onFilterResourceType(e: TDSSafeAny, data: TDSSafeAny) {
    if (e) {

    }
    else {

    }
  }

  onFilter() {
    // this.getListProduct();
  }

  // panigation
  resetPage() {
    this.pageIndex = 1;
  }

  onQueryParamsChange(params: TDSTableQueryParams): void {
    if (this.params.agency) {
      this.getListProduct(this.params!);
    }
    this.cd.detectChanges()
  }

  // get status Resource
  getStatus() {
    // this.resourceService.getResourceGetTotalByStatus_Json()
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe({
    //     next: (res: TDSSafeAny) => {
    //       this.lstData[0].count = res.total
    //       this.lstData[1].count = res.totalActive
    //       this.lstData[2].count = res.totalInActive
    //     },
    //     error: () => {

    //     }
    //   })
  }

  // Lấy danh sách product từ api
  getListProduct(params: paramGetProductDTO) {
    this.loading = true
    this.productService.getProduct(params)
      .pipe(finalize(() => {
      }), takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          if (res) {
            // this.getStatus()
            this.lstResource = res;
            this.lstBackup = res;
            this.lstData[0].count = this.lstResource.length
            this.lstData[1].count = this.lstResource.filter(item => (item.is_approved === true && item.is_delete === false)).length
            this.lstData[2].count = this.lstResource.filter(item => item.is_approved === false).length
            this.lstData[3].count = this.lstResource.filter(item => item.is_delete === true).length
            // this.lstResource.totalCount = res.totalCount;
            this.loading = false
          }
          else {
            this.getStatus()
            // this.lstResource.items = []
            // this.lstResource.totalCount = 0;
            this.loading = false
          }
          this.cd.detectChanges()
        },
        error: (err) => {
          this.lstResource = []
          this.loading = false
          // this.lstResource.totalCount = 0;
          this.message.error(err.error.message)
          this.cd.detectChanges()
        }
      })
  }

  // modal thêm mới sản phẩm
  showModalAdd(): void {
    const modalAdd = this.modalService.create({
      title: 'Thêm sản phẩm mới',
      content: ModalAddEditProductComponent,
      size: "lg",
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        // isActiveAdd: this.active,
      },
    });
    modalAdd.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.getListProduct(this.params!);
          this.selected = 1;
        },
        error: (err) => {
        }
      }
    )
  }
  // modal thêm mới sản phẩm
  showModalAddPromotion(): void {
    const modalAdd = this.modalService.create({
      title: 'Thêm khuyễn mãi',
      content: ModalAddPromotionsComponent,
      size: "md",
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        // isActiveAdd: this.active,
      },
    });
    modalAdd.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.getListProduct(this.params!);
          this.selected = 1;
        },
        error: (err) => {
        }
      }
    )
  }
  // modal nhập hàng sản phẩm
  showModaladdPrice(): void {
    const modalAdd = this.modalService.create({
      title: 'Phiếu nhập hàng',
      content: ModalAddPriceProductComponent,
      size: "lg",
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        // isActiveAdd: this.active,
      },
    });
    modalAdd.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.getListProduct(this.params!);
          this.selected = 1;
        },
        error: (err) => {
        }
      }
    )
  }

  // modal chỉnh sửa 
  showModalEdit(data: TDSSafeAny): void {
    const modalEdit = this.modalService.create({
      title: 'Chỉnh sửa sản phẩm',
      content: ModalEditProductComponent,
      size: "xl",
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        lstResource: data,
      },
    });
    modalEdit.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.getListProduct(this.params!);
          this.selected = 2;
        },
        error: (err) => {
        }
      }
    )
  }

  // Modal xóa sản phẩm
  onDeleteOne(data: TDSSafeAny): void {
    const modal = this.modalService.error({
      title: 'Xác nhận xóa sản phẩm',
      content: `<span  class="text-error-500">
      Lưu ý: Không thể khôi phục thông tin sản phẩm này sau khi xóa
    </span>`,
      onOk: () => {
        this.productService.deleteProduct(data.id)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                modal.destroy(this.params);
                this.message.success("Xóa sản phẩm thành công")
                this.getListProduct(this.params!)
                this.selected = 0;
              },
              error: (err) => {
                this.message.error(err.message)
              }
            })
      },
      onCancel: () => { },
      confirmIcon: 'tdsi-trash-fill',
      okText: "Xóa",
      cancelText: "Hủy"
    });
  }
}
