import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { TDSModalRef, TDSModalService } from 'tds-ui/modal';
import { TDSUploadFile } from 'tds-ui/upload';
import { catchError, map, tap, Observable, of, takeUntil, mergeMap } from 'rxjs';
import { TDSMessageService } from 'tds-ui/message';
import { TDSSafeAny } from 'tds-ui/shared/utility';
import { convertPhoneNumber, CoreValidators } from '@core/validators';
import { ModalDuplicateStaffComponent } from '../modal-duplicate-staff/modal-duplicate-staff.component';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { TDSDestroyService } from 'tds-ui/core/services';
import { AppUserCreateDto, AppUserDto, AppUserResultWhenCreateDto, BranchDto, DepartmentDto, PositionDto } from '@commom/hrm/models';
import { BranchService, DepartmentService, PositionService, UserService } from '@commom/hrm/services';
const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
@Component({
  selector: 'hrm-modal-add-staff',
  templateUrl: './modal-add-staff.component.html',
  styleUrls: ['./modal-add-staff.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ModalAddStaffComponent implements OnInit {

  addStaffForm!: FormGroup;
  staff: AppUserResultWhenCreateDto = {
    userId: '',
    code: ''
  }
  isSubmit: boolean = false;
  urlUploadAvatar: string = environment.apiTHRM + '/api/v1/user/upload-avatar-system';
  // urlUploadImage: string = environment.apiTHRM + 'user/image-timekeeping';
  radioValue = '1';
  public listDataOfBranch: BranchDto[] = [];
  public listDataOfDepartment: DepartmentDto[] = [];
  public listDataOfPosition: PositionDto[] = [];
  fileListAvatar: TDSUploadFile[] = [];
  fileListImage: TDSUploadFile[] = [];
  avatar: TDSSafeAny;
  previewVisible = false;
  previewAvatar: string[] = [];
  previewImage: string[] = [];
  duplicatePhoneNumberDetails!: AppUserDto;
  duplicateEmailDetails!: AppUserDto;
  name: string = '';
  surname: string = '';

  constructor(
    private userService: UserService,
    private branchService: BranchService,
    private departmentService: DepartmentService,
    private positionService: PositionService,
    private modal: TDSModalRef,
    private fb: FormBuilder,
    private msg: TDSMessageService,
    private modalService: TDSModalService,
    private http: HttpClient,
    private destroy$: TDSDestroyService
  ) {
    this.addStaffForm = this.fb.group({
      fullName: new FormControl(null, [Validators.required]),
      name: new FormControl({ value: null, disabled: true }, [Validators.required]),
      surname: new FormControl({ value: null, disabled: true }, [Validators.required]),
      vocative: new FormControl(null),
      sex: new FormControl(1),
      dateOfBirth: new FormControl(null),
      phoneNumber: new FormControl(null, {
        validators: [CoreValidators.isMobile, Validators.required],
        asyncValidators: this.checkPhoneNumber.bind(this)
      }),
      email: new FormControl(null, {
        validators: [CoreValidators.isEmail],
        asyncValidators: this.checkEmail.bind(this)
      }),
      residentAdress: new FormControl(null),
      temporaryAdress: new FormControl(null),
      homeTown: new FormControl(null),
      citizenIdentification: new FormControl(null, [Validators.pattern(/^[0-9]{9,15}$/i)]),
      grantDate: new FormControl(null),
      grantLocation: new FormControl(null),
      taxTodeIndividual: new FormControl(null),
      code: new FormControl({ value: null, disabled: true }),
      branch: new FormControl(null, [Validators.required]),
      department: new FormControl(null, [Validators.required]),
      position: new FormControl(null, [Validators.required]),
      startTime: new FormControl(null),
      companyEmail: new FormControl(null, {validators: [CoreValidators.isEmail]})
    })
  }

  ngOnInit(): void {
    this.getListBranch();
    this.getListDepartment();
    this.getListPosition();
  }

  // lấy danh sách chi nhánh
  getListBranch() {
    this.branchService.getBranch_Json({ MaxResultCount: 0 }).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.listDataOfBranch = [...res.items!];
    })
  }

  // lấy danh sách phòng ban
  getListDepartment() {
    this.departmentService.getDepartment_Json({ MaxResultCount: 0 }).pipe(takeUntil(this.destroy$)).subscribe(res => {
      this.listDataOfDepartment = [...res.items!];
    })
  }

  // lấy danh sách chức vụ, vị trí
  getListPosition() {
    this.positionService.getPosition_Json({ MaxResultCount: 0 }).subscribe(res => {
      this.listDataOfPosition = [...res.items!];
    })
  }

  getNameAndSurname(e: TDSSafeAny) {
    let fullName = e?.value;
    let fullNameSplit = fullName?.trim()?.split(' ');
    this.surname = fullNameSplit[0];
    this.name = fullNameSplit[fullNameSplit.length - 1];
  }
 
  onSubmit(): void {
    if (this.addStaffForm.valid) {
      this.isSubmit = true;
      const params: AppUserCreateDto =
      {
        fullName: this.addStaffForm.controls['fullName'].value,
        surname: this.surname,
        name: this.name,
        email: this.addStaffForm.controls['email'].value,
        phoneNumber: convertPhoneNumber(this.addStaffForm.controls['phoneNumber'].value),
        dateOfBirth: this.addStaffForm.controls['dateOfBirth'].value,
        branch: this.addStaffForm.controls['branch'].value,
        department: this.addStaffForm.controls['department'].value,
        sex: Number.parseInt(this.addStaffForm.controls['sex'].value),
        position: this.addStaffForm.controls['position'].value,
        vocative: this.addStaffForm.controls['vocative'].value,
        startTime: this.addStaffForm.controls['startTime'].value,
        companyEmail: this.addStaffForm.controls['companyEmail'].value,
        temporaryAdress: this.addStaffForm.controls['temporaryAdress'].value,
        residentAdress: this.addStaffForm.controls['residentAdress'].value,
        homeTown: this.addStaffForm.controls['homeTown'].value,
        citizenIdentification: this.addStaffForm.controls['citizenIdentification'].value,
        grantDate: this.addStaffForm.controls['grantDate'].value,
        grantLocation: this.addStaffForm.controls['grantLocation'].value,
        taxTodeIndividual: this.addStaffForm.controls['taxTodeIndividual'].value
      }
      this.userService.postUserCreate_Json({ body: params })
        .pipe(
          tap((result: TDSSafeAny) => {
            this.staff = result;
          }),
          mergeMap(() => {
            return this.handleUploadAvatar(this.urlUploadAvatar + '/' + this.staff.userId);
          }),
          // mergeMap(() => {
          //   return this.handleUploadImage(this.staff.userId!, this.urlUploadImage + '/' + this.staff.userId!);
          // }),
          takeUntil(this.destroy$)
        )
        .subscribe(
          {
            next: () => {
              this.msg.success('Tạo mới nhân viên thành công !');
              this.modal.destroy(params);
              this.isSubmit = false;
            },
            error: (err) => {
              if (!err || !err.error) {
                this.msg.error('Tạo mới nhân viên không thành công xin vui lòng thử lại !');
              } else {
                if (!err.error.validationErrors) {
                  this.msg.error(err?.error?.code);
                }
                else {
                  for (let i = 0; i < err.error?.validationErrors.length; i++) {
                    this.msg.error(err.error?.validationErrors[i]?.message + ' xin vui lòng thử lại !');
                  }
                }
              }
              this.isSubmit = false;
            }
          }
        )
    }
  }

  handleUploadAvatar(url: string): Observable<TDSSafeAny> {
    //đã chọn avatar
    if (this.fileListAvatar.length > 0) {
      const file = this.fileListAvatar[0] as TDSSafeAny;
      const formData = new FormData();
      formData.append('File', file, file.name);
      const req = new HttpRequest('POST', url, formData);
      return this.http.request(req.method, req.url, {
        body: req.body, responseType: 'text', headers: { accept: 'text/plain' }
      });
    }
    return of(true);
  }

  // handleUploadImage(id: string, url: string): TDSSafeAny {
  //   //đã chọn ảnh
  //   if (this.fileListImage.length > 0) {
  //     let formData = new FormData();
  //     this.fileListImage.forEach((file: TDSSafeAny) => {
  //       formData.append('Images', file, file.name);
  //     });
  //     const req = new HttpRequest('POST', url, formData);
  //     return this.http.request(req.method, req.url, { body: req.body, params: { userId: id } });
  //   }
  //   return of(true);
  // }

  beforeUploadAvatar = (file: TDSSafeAny): boolean => {
    this.fileListAvatar = this.fileListAvatar.concat(file);
    if (this.fileListAvatar.length > 0) {
      let length = this.fileListAvatar.length - 1;
      if (this.fileListAvatar[length].type == 'image/png' || this.fileListAvatar[length].type == 'image/jpeg' || this.fileListAvatar[length].type == 'image/jfif' || this.fileListAvatar[length].type == 'image/pdf') {
        getBase64(file).then((res: TDSSafeAny) => {
          this.previewAvatar = [res];
        });
      }
      else {
        this.msg.error('Avatar chỉ cho phép chọn ảnh (VD: jpg, PNG, jfif,...) !');
      }
    } else {
      this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
    }
    return false;
  };

  // beforeUploadImage = (file: TDSSafeAny): boolean => {
  //   this.fileListImage = this.fileListImage.concat(file);
  //   if (this.fileListImage.length > 0) {
  //     let length = this.fileListImage?.length - 1;
  //     if (this.fileListImage[length]?.type == 'image/png' || this.fileListImage[length]?.type == 'image/jpeg' || this.fileListImage[length]?.type == 'image/jfif' || this.fileListImage[length]?.type == 'image/pdf') {
  //       getBase64(file).then((res: TDSSafeAny) => {
  //         this.previewImage.push(res);
  //       });
  //     }
  //     else {
  //       this.msg.error('Chỉ cho phép chọn ảnh vui lòng thử lại !');
  //     }
  //   } else {
  //     this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
  //   }
  //   return false;
  // };

  // deleteImage(uid: string) {
  //   if (this.previewImage.length > 0) {
  //     const index = this.previewImage.findIndex(img => img === uid);
  //     this.previewImage.splice(index, 1);
  //   }
  // }

  deleteAvatar(event: TDSSafeAny) {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (this.previewAvatar.length > 0) {
      const index = this.previewAvatar.findIndex(img => img === event);
      this.previewAvatar.splice(index, 1)
    }
  }

  // kiểm tra số điện thoại đã trùng
  checkPhoneNumber(control: AbstractControl): Observable<ValidationErrors | null> {
    // return this.staffservice.checkByPhoneNumber({ phoneNumber: control.value })
    return this.userService.postUserCheckAvailablePhoneNumber_Json({ body: { phoneNumber: control.value } })
      .pipe(
        map(res => (
          this.duplicatePhoneNumberDetails = res.userExisted!,
          res && res?.isExisted ? {
            phoneNumberDuplicate: true
          } : null)
        ),
        catchError(() => of(null)),
        takeUntil(this.destroy$)
      );
  }

  // kiểm tra email trùng
  checkEmail(control: AbstractControl): Observable<ValidationErrors | null> {
    if (control.value == null || control.value == "") return of(null);
    return this.userService.postUserCheckAvailableEmail_Json({ body: { email: control.value } })
      .pipe(
        map(res => (
          this.duplicateEmailDetails = res.userExisted!,
          res && res?.isExisted ? {
            emailDuplicate: true
          } : null)
        ),
        catchError(() => of(null)),
        takeUntil(this.destroy$)
      );
  }

  // Hiển thị modal chi tiết nhân viên trùng
  showModalDuplicateDetail(param: AppUserDto) {
    this.modalService.create({
      title: 'Trùng nhân viên',
      content: ModalDuplicateStaffComponent,
      size: "xl",
      componentParams: {
        listDataOfStaffDuplicate: param
      }
    });
  }

  // đóng modal
  cancel() {
    this.modal.destroy(null);
  }

}
