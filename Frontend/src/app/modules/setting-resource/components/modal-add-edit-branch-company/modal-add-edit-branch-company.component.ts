import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BranchCreateDto, BranchDto, BranchUpdateDto } from '@commom/hrm/models';
import { BranchService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'hrm-modal-add-edit-branch-company',
  templateUrl: './modal-add-edit-branch-company.component.html',
  styleUrls: ['./modal-add-edit-branch-company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService
  ]
})
export class ModalAddEditBranchCompanyComponent implements OnInit {

  @Input() id?: string
  @Input() branch?: TDSSafeAny
  addEditBranchCompanyForm!: FormGroup;
  constructor(
    private modal: TDSModalRef,
    private fb: FormBuilder,
    private destroy$: TDSDestroyService,
    private branchService: BranchService,
    private message: TDSMessageService,
    private cd: ChangeDetectorRef,
  ) { this.createForm() }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.updateForm();
    this.cd.detectChanges()
  }

  createForm() {
    this.addEditBranchCompanyForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      shortName: new FormControl(''),
      address: new FormControl('', [Validators.required]),
      isMainOffice: new FormControl(false),
    })
  }
  updateForm() {
    this.addEditBranchCompanyForm.patchValue(this.branch);
  }

  cancel() {
    this.modal.destroy(null);
  }

  onSubmit(): void {
    if (this.addEditBranchCompanyForm.valid && this.addEditBranchCompanyForm.dirty) {
      if (this.branch) {
        let body: BranchUpdateDto = this.addEditBranchCompanyForm.value;
        this.branchService.putBranchId_Json({
          id: this.id!,
          body: body
        })
          .pipe(takeUntil(this.destroy$)).subscribe({
            next: (res) => {
              this.message.success("Chỉnh sửa chi nhánh thành công");
              this.modal.destroy(res)
            },
            error: (err) => {
              this.message.error(err.error.message)
              this.modal.destroy(null)
            },
          })
      }
      else {
        let body: BranchCreateDto = this.addEditBranchCompanyForm.value;
        this.branchService.postBranch_Json({ body: body })
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            this.message.success("Tạo chi nhánh mới thành công");
            this.modal.destroy(res)
          },
          error: (err) => {
            this.message.error(err.error.message)
            this.modal.destroy(null)
          },
        })
      }
    }
  }
}
