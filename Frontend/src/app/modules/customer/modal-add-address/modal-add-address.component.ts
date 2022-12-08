import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FurloughKindUpdateDto } from '@commom/hrm/models';
import { WorkingKindService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { provinceDTO } from 'src/app/dto/address.dto';
import { AddressService } from 'src/app/services/address.service';
import { ProvincesService } from 'src/app/services/provinces.service';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSI18nService } from 'tds-ui/i18n';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import * as data from '../../../../assets/data.json';  

@Component({
  selector: 'hrm-modal-add-address',
  templateUrl: './modal-add-address.component.html',
  styleUrls: ['./modal-add-address.component.scss']
})
export class ModalAddAddressComponent implements OnInit {

  radioValue: boolean = false
  @Input() userId: TDSSafeAny;
  isSubmit: boolean = false
  addAddress!: FormGroup;
  params: TDSSafeAny
  body?: FurloughKindUpdateDto
  lstProvince?:provinceDTO
  private _jsonURL = 'assets/data.json';
  constructor(
    private fb: FormBuilder,
    private destroy$: TDSDestroyService,
    private modal: TDSModalRef,
    private WorkingKindService: WorkingKindService,
    private message: TDSMessageService,
    private AddressService: AddressService,
    private provincesService: ProvincesService,
    private i18n: TDSI18nService
  ) {
   
  }

  ngOnInit(): void {
    this.createForm();
    console.log(data)
    // this.getProvince()
  }

  ngAfterViewInit(): void {
    this.updateForm();
  }

  createForm() {
    this.addAddress = this.fb.group({
      province: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      ward: new FormControl('', [Validators.required]),
      detail: new FormControl(''),
      type: new FormControl("Home"),
      user: new FormControl(this.userId),
    })
  }

  updateForm() {
   
  }
  // getProvince(){
  //   this.isSubmit = true
  //   this.provincesService.getProvinces().pipe(takeUntil(this.destroy$))
  //     .subscribe(
  //       {
  //         next: (res) => {
  //           this.isSubmit = false
  //           this.lstProvince = res;
  //           // this.modal.destroy(this.params);
  //         },
  //       }
  //     )
  // }
  cancel() {
    this.modal.destroy(null);
  }
  onSubmit(): void {
    if (this.addAddress.valid && this.addAddress.dirty) {
      this.AddressService.createAddress(this.addAddress.value)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            {
              next: (res) => {
                this.isSubmit = false
                this.message.success("Thêm  địa chỉ Giao Hàng thành công")
                this.modal.destroy(this.addAddress.value);
              },
            }
          )
      }
    }
  }

