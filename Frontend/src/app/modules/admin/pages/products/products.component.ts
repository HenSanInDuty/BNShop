import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { finalize, takeUntil } from 'rxjs';
import { getProductDTOAdmin } from 'src/app/dto/account.dto';
import { getProductDTO } from 'src/app/dto/product.dto';
import { FilterStatusItemDTO } from 'src/app/modules/setting-resource/models/accset.dto';
import { ProductService } from 'src/app/modules/setting-resource/services/product.service';
import { AdminService } from 'src/app/services/admin.service';

import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSContextMenuService, TDSDropdownMenuComponent } from 'tds-ui/dropdown';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperString, TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';

@Component({
  selector: 'hrm-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-white flex flex-col rounded-xl w-full h-full' },
  providers: [TDSModalService, TDSDestroyService]
})
export class ProductsComponent implements OnInit {

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
  loading: boolean = false
  active: boolean = true;
  indeterminate = false;
  private _jsonURL = 'assets/data.json';
  constructor(
    private destroy$: TDSDestroyService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private message: TDSMessageService,
    private tdsContextMenuService: TDSContextMenuService,
    private productService: ProductService,
    private cd: ChangeDetectorRef,
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
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
      this.lstResource = this.lstResource.filter(item => (item.name.toLowerCase().includes(event.value.toLowerCase()) == true || item.agency.name.toLowerCase().includes(event.value.toLowerCase()) == true ));
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
    this.getListProduct();
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
  getListProduct() {
    this.loading = true
    this.productService.getProduct()
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
            // this.lstResource.totalCount = res.totalCount;
            this.loading = false
            this.cd.detectChanges()
          }
          else {
            this.getStatus()
            this.loading = false
            this.cd.detectChanges()
          }
          this.loading = false
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
                modal.destroy(data);
                this.message.success("Xóa sản phẩm thành công")
                this.getListProduct()
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
  // Modal kích hoạt tài khoản
  onActiveProduct(data: TDSSafeAny): void {
    const modal = this.modalService.warning({
      title: 'Bạn muốn kích hoạt sản phẩm này',
      //   content: `<span  class="text-yellow-500">
      //   Lưu ý: Không thể khôi phục thông tin sản phẩm này sau khi xóa
      // </span>`,
      onOk: () => {
        this.adminService.ActiveProduct(data.id)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.message.success("Kích hoạt sản phẩm thành công");
                this.getListProduct()
                modal.destroy(data.id);
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
  onDisableProduct(data: TDSSafeAny): void {
    const modal = this.modalService.error({
      title: 'Bạn muốn xóa sản phẩm của đại lý này',
      content: `<span  class="text-error-500">
        Lưu ý: Không thể khôi phục thông tin sản phẩm này sau khi xóa
      </span>`,
      onOk: () => {
        this.adminService.DisableProduct(data.id)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.message.success("Xóa sản phẩm của đại lý thành công")
                this.getListProduct()
                modal.destroy(data.id);
              },
              error: (err) => {
                this.message.error(err.message)
              }
            })
      },
      onCancel: () => { },
      confirmIcon: 'tdsi-close-fill',
      okText: "Xóa",
      cancelText: "Hủy"
    });
  }
}
