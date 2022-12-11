import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewContainerRef } from '@angular/core';
import { CoreAuthService } from '@core/authentication';
import { CoreUserInitDTO } from '@core/dto';
import { takeUntil } from 'rxjs';
import { getAgencyDTO, getProductDTOAdmin } from 'src/app/dto/account.dto';
import { getProductDTO } from 'src/app/dto/product.dto';
import { RatingDTO } from 'src/app/dto/rating.dto';
import { FilterStatusItemDTO } from 'src/app/modules/setting-resource/models/accset.dto';
import { AccountService } from 'src/app/services/account.service';
import { AdminService } from 'src/app/services/admin.service';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperString, TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSTableQueryParams } from 'tds-ui/table';

@Component({
  selector: 'hrm-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bg-white flex flex-col rounded-xl w-full h-full' },
  providers: [TDSModalService, TDSDestroyService]
})
export class ReviewComponent implements OnInit {

  expandSet = new Set<number>();
  lstAccount: RatingDTO[] = []
  lstAccountBackup: RatingDTO[] = []
  lstProduct: getProductDTO[] = []
  lstData: Array<FilterStatusItemDTO> = [
    {
      name: 'Tất cả',
      value: null,
      count: 0,
      disabled: false
    },
    {
      name: 'Kích hoạt',
      value: 2,
      count: 0,
      disabled: false
    },
    {
      name: "Chưa kích hoạt",
      value: 1,
      count: 0,
      disabled: false
    },
  ]
  selectedStatus = 2
  lstStatus: Array<TDSSafeAny> = [
    {
      name: "Đã duyệt",
      value: 2,
    },
    {
      name: "Chưa duyệt",
      value: 1,
    },
    {
      name: "Đã xóa",
      value: 3,
    },
  ]
  listOfCurrentPageData: Array<string> = [];
  setOfCheckedId = new Set<TDSSafeAny>();
  selected = null;
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
    private cd: ChangeDetectorRef,
    private accountService: AccountService,
    private adminService: AdminService
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
  search(event: TDSSafeAny): void {
    if (event.value != null) {
      this.lstAccount = this.lstAccountBackup
      this.lstAccount = this.lstAccount.filter(item => (item.product_info.product_no.toLowerCase().includes(event.value.toLowerCase()) == true || item.customer_info.name.toLowerCase().includes(event.value.toLowerCase()) == true || item.product_info.agency.name.toLowerCase().includes(event.value.toLowerCase()) == true));
    }
    if (!TDSHelperString.hasValueString(event.value)) {
      this.lstAccount = this.lstAccountBackup
    }
  }
  //Hàm thay đổi status của tab
  onSelectStatus(value: TDSSafeAny) {
    this.selected = value;
    let param: getProductDTOAdmin = {
      type: value.toString(),
      agency: Array.from(this.expandSet)[0],
    }
    this.getProduct(param)
    this.cd.detectChanges()
  }
  // checked selected
  onExpandChange(id: number, checked: boolean): void {

    // let param: getProductDTOAdmin = {
    //   type: this.selectedStatus.toString(),
    //   agency: id,
    // }
    if (checked) {
      // this.getProduct(param)
      // this.expandSet = new Set<number>();
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  getAccount(value: number) {
    this.loading = true;
    this.adminService.getRating(value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          this.lstAccount = res;
          this.lstAccountBackup = res;
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
    this.selected = value;
    this.getAccount(this.selected!);
  }

  onChange(isActive: TDSSafeAny, index: number, result: TDSSafeAny) {
  }

  onCurrentPageDataChange($event: TDSSafeAny): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item)) && !this.checked;
  }

  onQueryParamsChange(params: TDSTableQueryParams): void {
    this.getAccount(this.selected!)
    this.cd.detectChanges()
  }
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
                this.getAccount(this.selected!)
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
  onActiveProduct(data: TDSSafeAny): void {
    const modal = this.modalService.warning({
      title: 'Bạn muốn kích hoạt sản phẩm này',
      //   content: `<span  class="text-yellow-500">
      //   Lưu ý: Không thể khôi phục thông tin sản phẩm này sau khi xóa
      // </span>`,
      onOk: () => {
        this.adminService.ActiveRating(data.id)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.message.success("Kích hoạt đánh giá thành công");
                this.getAccount(this.selected!)
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
  onDisable(data: TDSSafeAny): void {
    const modal = this.modalService.warning({
      title: 'Bạn muốn hủy đánh giá này',
      //   content: `<span  class="text-yellow-500">
      //   Lưu ý: Không thể khôi phục thông tin sản phẩm này sau khi xóa
      // </span>`,
      onOk: () => {
        this.adminService.DisableRating(data.id)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.getAccount(this.selected!)
                this.message.success("Dừng đánh giá thành công thành công")
                modal.destroy(data.id);
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
                let param: getProductDTOAdmin = {
                  type: this.selectedStatus.toString(),
                  agency: Array.from(this.expandSet)[0],
                }
                this.getProduct(param)
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
