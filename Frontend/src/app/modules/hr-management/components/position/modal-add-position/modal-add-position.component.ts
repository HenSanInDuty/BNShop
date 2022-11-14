import { finalize, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { PositionService } from '@commom/hrm/services';
import { PositionCreateDto, PositionDto, PositionUpdateDto } from '@commom/hrm/models';
import { TDSHelperObject } from 'tds-ui/shared/utility';

@Component({
  selector: 'hrm-modal-add-position',
  templateUrl: './modal-add-position.component.html',
  styleUrls: ['./modal-add-position.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ModalAddPositionComponent implements OnInit {
  @Input() positionId = '';
  positionForm!: FormGroup
  isSubmit: boolean = false;
  positionDetails!: PositionDto;

  constructor(
    private modal: TDSModalRef,
    private msg: TDSMessageService,
    private fb: FormBuilder,
    private positionService: PositionService,
    private destroy$: TDSDestroyService
  ) {
    this.positionForm = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null),
    })
  }

  ngOnInit(): void {
    if (this.positionId) {
      this.loadDataDetails();
    }
  }

  onSubmit() {
    this.isSubmit = true;
    if (this.positionId) {
      if (!this.positionForm.dirty && this.positionId) {
        return this.modal.destroy(null);
      } else {
        if (this.positionForm.valid) {
          const params: PositionUpdateDto =
          {
            name: this.positionForm.controls['name'].value,
            description: this.positionForm.controls['description'].value,
          }
          this.positionService.putPositionId({ id: this.positionId, body: params })
            .pipe(finalize(() => {
              this.isSubmit = false;
            }), takeUntil(this.destroy$))
            .subscribe({
              next: (res) => {
                this.msg.success('Cập nhật thông tin chức vụ thành công');
                this.modal.destroy(params);
              },
              error: (err) => {
                if (!err || !err.error) {
                  this.msg.error(err.code);
                } else {
                  this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
                }
              }
            })
        }
      }
    }
    else {
      if (this.positionForm.valid) {
        const params: PositionCreateDto = {
          name: this.positionForm.controls['name'].value,
          description: this.positionForm.controls['description'].value,
        }
        this.positionService.postPosition({ body: params })
          .pipe(finalize(() => {
            this.isSubmit = false;
          }), takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.msg.success('Tạo mới chức vụ thành công');
                this.modal.destroy(params);
              },
              error: (err) => {
                if (!err || !err.error) {
                  this.msg.error(err.code);
                } else {
                  this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
                }
              }
            }
          )
      }
    }
  }

  loadData() {
    this.positionForm?.patchValue({
      name: this.positionDetails?.name,
      description: this.positionDetails?.description
    });
  }

  loadDataDetails() {
    if (this.positionId) {
      this.isSubmit = true;
      this.positionService.getPositionId_Json({ id: this.positionId })
        .pipe(finalize(() => {
          this.isSubmit = false;
        }), takeUntil(this.destroy$))
        .subscribe({
          next: (res) => {
            if (res) {
              this.positionDetails = res;
              this.loadData();
            }
          },
          error: (err) => {
            if (TDSHelperObject.hasValue(err)) {
              this.positionDetails = {};
            }
          }
        })
    }
  }

  cancel() {
    this.modal.destroy(null);
  }

}
