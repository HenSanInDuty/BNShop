import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { BranchDto, BranchDtoPagedResultDto, CompanyDto } from '@commom/hrm/models';
import { BranchService, CompanyService } from '@commom/hrm/services';
import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { ModalAddEditBranchCompanyComponent } from '../../components/modal-add-edit-branch-company/modal-add-edit-branch-company.component';
import { ModalAddEditCompanyComponent } from '../../components/modal-add-edit-company/modal-add-edit-company.component';


@Component({
  selector: 'hrm-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  host: { class: 'flex flex-col w-full h-full' },
  providers: [
    TDSDestroyService
  ]
})
export class CompanyComponent implements OnInit {

  loadingCompany = false
  loadingBranch = false
  fallback = "./assets/images/image/default.svg";
  company?: CompanyDto
  branch?: Array<BranchDto> | []
  constructor(
    private destroy$: TDSDestroyService,
    private companyService: CompanyService,
    private branchService: BranchService,
    private message: TDSMessageService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,) { }

  ngOnInit(): void {
    this.getCompany()
    this.getBranchCompany()
  }

  getCompany() {
    this.loadingCompany = true
    this.companyService.getCompanies_Json()
      .pipe(
        finalize(() => { }),
        takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.company = res;
          this.loadingCompany = false;
        },
        error: (err) => {
          this.message.error(err.error.code);
          this.loadingCompany = false;
        },
      })
  }

  getBranchCompany() {
    this.loadingBranch = true;
    this.branchService.getBranch_Json()
      .pipe(
        finalize(() => { }),
        takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.branch = res.items!;
          this.loadingBranch = false;
        },
        error: (err) => {
          this.message.error(err.error.code);
          this.loadingBranch = false;
        },
      })
  }

  // show add modal
  showModalAddCompany(): void {
    const modalAdd = this.modalService.create({
      title: 'Thông tin công ty',
      content: ModalAddEditCompanyComponent,
      size: "lg",
      footer: null,
      viewContainerRef: this.viewContainerRef,
      componentParams: {

      },
    });
    modalAdd.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res)) {
            this.getCompany()
          }

        },
        error: (err) => {
        }
      }
    )
  }

  // show edit modal
  showModaleditCompany(): void {
    const modalAdd = this.modalService.create({
      title: 'Thông tin công ty',
      content: ModalAddEditCompanyComponent,
      size: "lg",
      footer: null,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        company: this.company,
      },
    });
    modalAdd.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res)) {
            this.getCompany()
          }

        },
        error: (err) => {
        }
      }
    )
  }

  showModalEditCompanyBranch(data: BranchDto): void {
    const modalAdd = this.modalService.create({
      title: 'Chỉnh sửa chi nhánh',
      content: ModalAddEditBranchCompanyComponent,
      size: "md",
      footer: null,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
        id: data.id!,
        branch: data
      },
    });
    modalAdd.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res)) {
            this.getBranchCompany()
          }
        },
        error: (err) => {
        }
      }
    )
  }
  showModalAddCompanyBranch(): void {
    const modalAdd = this.modalService.create({
      title: 'Thêm chi nhánh mới',
      content: ModalAddEditBranchCompanyComponent,
      size: "md",
      footer: null,
      viewContainerRef: this.viewContainerRef,
      componentParams: {
      },
    });
    modalAdd.afterClose.subscribe(
      {
        next: (res) => {
          if (TDSHelperObject.hasValue(res)) {
            this.getBranchCompany()
          }
        },
        error: (err) => {
        }
      }
    )
  }

  onDeleteOne(data: TDSSafeAny): void {
    const modal = this.modalService.error({
      title: 'Xác nhận xóa chi nhánh',
      content: `<span  class="text-error-500">
      Lưu ý: Không thể khôi phục chi nhánh này sau khi xóa
    </span>`,
      onOk: () => {
        this.branchService.deleteBranchId_Response({ id: data.id })
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.message.success("Xóa hình thức làm việc thành công");
                this.getBranchCompany();
                modal.destroy(null);
              },
              error: (err) => {
                this.message.error(err.code);
                modal.destroy(null);
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
