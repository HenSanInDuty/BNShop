import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BioDeviceCreateDto, BioDeviceUpdateDto, BranchDto } from '@commom/hrm/models';
import { BioDeviceService, BranchService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'hrm-modal-add-edit-category',
  templateUrl: './modal-add-edit-category.component.html',
  styleUrls: ['./modal-add-edit-category.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ModalAddEditTimeKeepperComponent implements OnInit {

  // Máy chấm công cần chỉnh sửa
  @Input() lstCategory: TDSSafeAny;
  isActiveEdit?: boolean
  loading: boolean = false
  // Biến nhận danh sách các chi nhánh
  lstBranch: BranchDto[] = []
  addEditTimeKeeperForm!: FormGroup;
  params: TDSSafeAny
  body?: BioDeviceUpdateDto
  // Chi nhánh mặt định
  public selected = '';
  constructor(
    private fb: FormBuilder,
    private modal: TDSModalRef,
    private bioDeviceService: BioDeviceService,
    private message: TDSMessageService,
    private branchService: BranchService,
    private productService: ProductService,
    private destroy$: TDSDestroyService,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.updateForm();
  }

  createForm() {
    this.addEditTimeKeeperForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
    })
  }

  updateForm() {
    // this.loading = true
    if (this.lstCategory) {
      this.addEditTimeKeeperForm.patchValue(this.lstCategory);
    }
  }

  onSubmit(): void {
    if (this.addEditTimeKeeperForm.valid && this.addEditTimeKeeperForm.dirty) {
      this.loading = true;
      if (this.lstCategory) {
        this.productService.editCategory(this.lstCategory.id,this.addEditTimeKeeperForm.value).pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.loading = false
                this.message.success("Sửa danh mục thành công")
                this.modal.destroy(this.addEditTimeKeeperForm.value);
              },
              error: (err) => {
                this.loading = false
                this.modal.destroy(null);
                this.message.error("Sửa danh mục không thành công")
              }
            }
          )
      }
      else {
        this.productService.createCategory(this.addEditTimeKeeperForm.value).pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.loading = false
                this.message.success("Thêm danh mục thành công")
                this.modal.destroy(this.addEditTimeKeeperForm.value);
              },
              error: (err) => {
                this.loading = false
                this.modal.destroy(null);
                this.message.error("Thêm danh mục không thành công")
              }
            }
          )
      }
    }
  }

  cancel() {
    this.modal.destroy(null);
  }
}
