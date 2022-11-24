import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { takeUntil } from 'rxjs';
import { TDSSafeAny, TDSHelperObject } from 'tds-ui/shared/utility';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { ModalAddEditTimeKeepperComponent } from '../../components/modal-add-edit-category/modal-add-edit-category.component';
import { ModalAdminDeviceComponent } from '../../components/modal-admin-device/modal-admin-device.component';
import { ModalDeleteAllComponent } from '../../components/modal-delete-all/modal-delete-all.component';
import { ParamGetBioDeviceDTO } from '../../models/time-keepper.dto';
import { BioDeviceDto } from '@commom/hrm/models';
import { BioDeviceService } from '@commom/hrm/services';
import { ProductService } from '../../services/product.service';
import { getCategoryDTO } from '../../models/category.dto';


@Component({
  selector: 'hrm-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.scss'],
  host: { class: 'w-full h-full flex flex-col ' },
  providers: [
    TDSDestroyService
  ]
})
export class CategoryManagementComponent implements OnInit {

  // biến nhận danh sách máy chấm công từ api
  public lstCategory: Array<getCategoryDTO> = []
  // check table
  checked = false;
  indeterminate = false;
  loading: boolean = true
  listOfCurrentPageData: Array<string> = [];
  setOfCheckedId = new Set<TDSSafeAny>();
  pageIndex = 1;
  pageSize = 20;
  total = 0
  skipCount = 0
  params: ParamGetBioDeviceDTO = {
    SkipCount: 0,
    MaxResultCount: 10,
    SearchText: '',
    Sorting: '',
  }
  constructor(
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private destroy$: TDSDestroyService,
    private message: TDSMessageService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getListCategory()
  }

  updateCheckedSet(item: string, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(item);
    } else {
      this.setOfCheckedId.delete(item);
    }
  }

  //checked item
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

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item)) && !this.checked;
  }
  //panigation
  onCurrentPageDataChange($event: TDSSafeAny): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  resetPage() {
    this.pageIndex = 1;
  }

  //filter with name
  searchName(event: TDSSafeAny): void {
    if (event.value != null) {
      this.params.SkipCount = 0;
      this.resetPage();
      this.params.SearchText = event.value;
      this.getListCategory();
    }
  }

  // Lấy danh sách danh mục
  getListCategory() {
    this.loading = true
    this.productService.getCategory().pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          this.lstCategory = res;
          this.loading = false
        },
        error: (err) => {
          this.lstCategory = [];
          this.loading = false
          this.message.error(err.error.message)
        }
      });
  }

  // Modal thêm danh mục mới                                                           mmm
  showModalAdd(): void {
    let modalAdd = this.modalService.create({
      title: 'Thêm danh mục mới',
      content: ModalAddEditTimeKeepperComponent,
      size: "md",
      viewContainerRef: this.viewContainerRef,
      componentParams: {
      },
    });
    modalAdd.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.getListCategory();
        },
        error: (err) => {
          this.message.error(err.error.message)
        }
      }
    )
  }

  //modal chỉnh sửa danh mục
  showModalEdit(data: TDSSafeAny): void {
    let modalEdit = this.modalService.create({
      title: 'Sửa danh mục',
      content: ModalAddEditTimeKeepperComponent,
      size: "md",
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        lstCategory: data,
      },
    });
    modalEdit.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res))
            this.getListCategory();
        },
      }
    )
  }

  // modal xóa máy danh mục
  onDeleteOne(data: TDSSafeAny): void {
    const modal = this.modalService.error({
      title: 'Xác nhận xóa danh mục?',
      content: `<span  class="text-error-500">
      Lưu ý: Không thể khôi phục danh mục này sau khi xóa
    </span>`,
      onOk: () => {
        this.productService.deleteCategory(data.id)
          .pipe(takeUntil(this.destroy$)).subscribe(
            {
              next: (res: TDSSafeAny) => {
                modal.destroy(this.params);
                this.message.success("Xóa danh mục thành công");
                this.getListCategory();
              },
              error: (err: TDSSafeAny) => {
                this.message.error("Đã có lỗi sảy ra");
                this.getListCategory();
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
