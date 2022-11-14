import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSMessageService } from 'tds-ui/message';
import { TDSDestroyService } from 'tds-ui/core/services';
import { takeUntil } from 'rxjs';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { ResourceService } from '@commom/hrm/services';
@Component({
  selector: 'hrm-modal-active-resource',
  templateUrl: './modal-active-resource.component.html',
  styleUrls: ['./modal-active-resource.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ModalActiveResourceComponent implements OnInit {

  @Input() id: TDSSafeAny;
  @Input() isActiveStatus: TDSSafeAny;
  @Output() getResult$ = new EventEmitter<TDSSafeAny>();
  isSubmit: boolean = false
  isActive: boolean = false
  changActiveAccsetForm!: FormGroup;
  constructor(
    private modal: TDSModalRef,
    private fb: FormBuilder,
    private resourceService: ResourceService,
    private message: TDSMessageService,
    private destroy$: TDSDestroyService
  ) {
    this.changActiveAccsetForm = this.fb.group({ activeNote: new FormControl('', [Validators.required]) })
  }

  ngOnInit(): void {
  }

  cancel() {
    this.modal.destroy(null);
  }

  onSubmit(): void {
    if (this.changActiveAccsetForm.valid && this.changActiveAccsetForm.dirty) {
      this.isSubmit = true;
      let params: TDSSafeAny = {
        id: this.id,
        body:{
          activeNote: this.changActiveAccsetForm.controls['activeNote'].value,
        }
      }
      if (this.isActiveStatus) {
        this.resourceService.putResourceDisableActiveId_Response(params)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.message.success("Cập nhật trạng thái thành công")
                this.modal.destroy(params);
              },
              error: (err) => { }
            }
          )
      }
      else {
        this.resourceService.putResourceEnableActiveId(params)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          {
            next: (res) => {
              this.message.success("Cập nhật trạng thái thành công");
              this.modal.destroy(params);
            },
            error: (err) => { }
          })
      }
    }
  }
}
