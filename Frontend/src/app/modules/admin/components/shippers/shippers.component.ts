import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { takeUntil } from 'rxjs';
import { shipperDTO } from 'src/app/dto/orderDetail.dto';
import { AdminService } from 'src/app/services/admin.service';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'hrm-shippers',
  templateUrl: './shippers.component.html',
  styleUrls: ['./shippers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService
  ]

})
export class ShippersComponent implements OnInit {
  @Input()  order: any
  isSubmit = false
  addShipper!: FormGroup
  error?: TDSSafeAny
  params?: shipperDTO
  lstShipper: any
  constructor(
    private modal: TDSModalRef,
    private fb: FormBuilder,
    private destroy$: TDSDestroyService,
    private message: TDSMessageService,
    private cd: ChangeDetectorRef,
    private adminService: AdminService
  ) { this.createForm() }

  ngOnInit(): void {
    this.getAccount();
  }

  ngAfterViewInit(): void {
  }

  cancel() {
    this.modal.destroy(null);
  }

  createForm() {
    this.addShipper = this.fb.group({
      id: new FormControl(null, [Validators.required]),
    })
  }


  getAccount(value?: number) {
    this.isSubmit = true;
    this.adminService.getAccount(5)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          this.lstShipper = res;
          this.isSubmit = false;
          this.cd.detectChanges()
        },
        error: () => {
          this.isSubmit = false;
          this.cd.detectChanges()
        }
      })
  }

  onSubmit(): void {
    if (this.addShipper.valid && this.addShipper.dirty) {
      this.isSubmit = true;
        this.params = {
          order_detail: [this.order.id].map(String)
        }
        this.adminService.onShiper(this.addShipper.controls["id"].value, this.params)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              this.isSubmit = false
              this.message.success("Bàn giao người vận chuyển thành công")
              this.modal.destroy(this.params);
            },
            error: (err) => {
              this.isSubmit = false
              this.message.error("Bàn giao người vận chuyển không thành công")
            }
          })
    }
  }

}
