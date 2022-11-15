import { HttpClient, HttpRequest } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CompanyDto, CompanyUpdateDto } from '@commom/hrm/models';
import { CompanyService } from '@commom/hrm/services';
import { catchError, concat, delay, forkJoin, mergeMap, Observable, of, pipe, takeUntil, tap } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';

import { TDSModalRef } from 'tds-ui/modal';
import { TDSHelperArray, TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSUploadChangeParam, TDSUploadFile } from 'tds-ui/upload';
import { CompanyServiceCustom } from '../../services/company.service';

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

@Component({
  selector: 'hrm-modal-add-edit-company',
  templateUrl: './modal-add-edit-company.component.html',
  styleUrls: ['./modal-add-edit-company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService
  ]
})
export class ModalAddEditCompanyComponent implements OnInit {

  @Input() company?: CompanyDto
  loading = false;
  date = null;
  fileUploadListAvatar: TDSUploadFile[] = [];
  fileListAvatar: TDSUploadFile[] = [];
  fileListImage: TDSUploadFile[] = [];
  previewAvatar: string = '';
  previewImage: string[] = [];
  addEditCompanyForm!: FormGroup;
  previewVisible = false;
  constructor(
    private fb: FormBuilder,
    private modal: TDSModalRef,
    private cd: ChangeDetectorRef,
    private companyService: CompanyService,
    private destroy$: TDSDestroyService,
    private message: TDSMessageService,
    private companyServiceCustom: CompanyServiceCustom
  ) {
    this.createForm()
  }

  ngOnInit(): void {
  }

  updateForm() {
    if (this.company) {
      this.addEditCompanyForm.patchValue(this.company)
    }
  }

  ngAfterViewInit(): void {
    this.updateForm();
    this.cd.detectChanges();
  }

  onChange(result: Date): void {
  }

  //check Img upload
  beforeUploadAvatar = (file: TDSSafeAny): boolean => {
    // dung lượng ảnh tối đa tải lên
    let maxSize = 85 * 1024 * 1024; // 5MB
    // các loại file img tương thích
    let lstTypeFile = ['image/png', 'image/jpeg', 'image/jpg'];
    this.fileListAvatar = this.fileListAvatar.concat(file);
    if (file.size < maxSize) {
      // khi có ảnh sẽ thực hiện
      if (TDSHelperArray.hasListValue(this.fileListAvatar)) {
        //lấy phần tử cuối cùng của mảng
        let lastfile = this.fileListAvatar[this.fileListAvatar?.length - 1];
        let arrName = lastfile.name.split('.');
        let typeName = arrName[arrName.length - 1];
        if (lstTypeFile.indexOf(lastfile.type!) > -1 && typeName != 'jfif') {
          getBase64(file).then((res: TDSSafeAny) => {
            this.previewAvatar = res;
            this.cd.detectChanges();
          });
        }
        else {
          this.fileListAvatar.pop();
          this.message.error('Chỉ cho phép chọn ảnh có dạng file PNG JPEG hoặc JPG!');
        }
      } else {
        this.message.error('Có lỗi xảy ra xin vui lòng thử lại !');
      }
    }
    else {
      this.fileListAvatar.pop();
      this.message.error('Dung lượng file tối đa của bạn tải lên là 5M !');
    }
    return true;
  };

  handleChangeFile(file: TDSUploadFile[]): void {
    this.fileUploadListAvatar = file;
  }

  createForm() {
    this.addEditCompanyForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      shortName: new FormControl(''),
      representative: new FormControl(''),
      address: new FormControl(''),
      establishDay: new FormControl(''),
      phoneNumber: new FormControl(''),
      email: new FormControl(''),
      taxCode: new FormControl(''),
      fax: new FormControl(''),
      websiteUrl: new FormControl(''),
    })
  }

  cancel() {
    this.modal.destroy(null);
  }

  onSubmit(): void {
    this.loading = true;
    if ((this.addEditCompanyForm.valid && this.addEditCompanyForm.dirty) || TDSHelperArray.hasListValue(this.fileListAvatar)) {
      if (this.addEditCompanyForm.valid && this.addEditCompanyForm.dirty && TDSHelperArray.hasListValue(this.fileListAvatar)) {
        const obser1$ = this.companyServiceCustom.putImgCompany(this.company?.id!, this.fileUploadListAvatar[this.fileUploadListAvatar.length - 1].originFileObj!).pipe(catchError(error => of(error)),
        );
        const obser2$ = this.companyService.putCompanies_Json({
          id: this.company?.id!,
          body: this.addEditCompanyForm.value
        }).pipe(catchError(error => of(error),))
        concat(obser1$, obser2$)
          .subscribe({
            next: (res) => {
              this.modal.destroy(res);
            },
            error: (err) => {
              this.message.error(err)
            },
            complete: () => {
              this.loading = false;
              this.message.success("Cập nhật thông tin công ty thành công");
            },
          })
      }
      else if (TDSHelperArray.hasListValue(this.fileListAvatar)) {
        this.companyServiceCustom.putImgCompany(this.company?.id!, this.fileUploadListAvatar[this.fileUploadListAvatar.length - 1].originFileObj!).pipe(catchError(error => of(error)), takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              this.loading = false;
              this.message.success("Cập nhật ảnh công ty thành công");
              this.modal.destroy(res);
            },
            error: (err) => {
              this.message.error(err.code);
              this.loading = false;
            },
          })
      }
      else {
        this.companyService.putCompanies_Json({
          id: this.company?.id!,
          body: this.addEditCompanyForm.value
        }).pipe(catchError(error => of(error)), takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              this.modal.destroy(res);
            },
            error: (err) => {
              this.message.error(err)
            },
            complete: () => {
              this.loading = false;
              this.message.success("Cập nhật thông tin công ty thành công");
            },
          })
      }
    }
  }
}
