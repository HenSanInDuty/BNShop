import { catchError, finalize, map, mergeMap, Observable, of, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { CoreValidators } from '../../../../../core/validators/validators';
import { TDSModalRef, TDSModalService } from 'tds-ui/modal';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { TDSMessageService } from 'tds-ui/message';
import { AppUserDto, AppUserUpdateDto, AttachmentRDto, BranchDto, DepartmentDto, PositionDto, TrackingValue } from '@commom/hrm/models';
import { BranchService, DepartmentService, PositionService, UserService } from '@commom/hrm/services';
import { TDSUploadFile } from 'tds-ui/upload';
import { TDSHelperArray, TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ModalDuplicateStaffComponent } from '../modal-duplicate-staff/modal-duplicate-staff.component';
import { UploadFaceService } from '../../../services/upload-face.service';
const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

@Component({
  selector: 'hrm-modal-update-staff',
  templateUrl: './modal-update-staff.component.html',
  styleUrls: ['./modal-update-staff.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ModalUpdateStaffComponent implements OnInit {

  @Input() id = '';
  listSampleCheckingImage: { url: string; text: string; direction: string; id: string }[] = [];
  direction = ['Forward', 'Left', 'Right', 'Up', 'Down'];
  listImageDirection = [
    { url: '', direction: 'Forward' },
    { url: '', direction: 'Left' },
    { url: '', direction: 'Right' },
    { url: '', direction: 'Up' },
    { url: '', direction: 'Down' }
  ];
  urlUploadAvatar: string = environment.apiTHRM + '/api/v1/user/upload-avatar-system';
  isLoadingModal: boolean = false;
  isLoadingImg: boolean = false;
  isUpdatePopover: boolean = false;
  updateStaffForm!: FormGroup;
  updateBranchForm!: FormGroup;
  updatePositionForm!: FormGroup;
  updateDepartmentForm!: FormGroup;
  name: string = '';
  surname: string = '';
  branchId: string = '';
  departmentId: string = '';
  positionId: string = '';
  descriptionOfBranch: string = '';
  descriptionOfDepartment: string = '';
  descriptionOfPosition: string = '';
  code: string = '';
  duplicateEmailDetails!: AppUserDto;
  previewImage: string[] = [];
  fileListImage: TDSUploadFile[] = [];
  listHistory: TrackingValue[] = [];
  public listDataOfBranch: BranchDto[] = [];
  public listDataOfDepartment: DepartmentDto[] = [];
  listDataOfPosition: PositionDto[] = [];
  fileListAvatar: TDSUploadFile[] = [];
  listImage: AttachmentRDto[] = [];
  staffDetail?: AppUserDto;
  radioValue = '0';
  isEnglish: boolean = false;
  visibleBranch: boolean = false;
  visibleDepartment: boolean = false;
  visiblePosition: boolean = false;

  constructor(
    private userService: UserService,
    private branchService: BranchService,
    private departmentService: DepartmentService,
    private positionSevrvice: PositionService,
    private modalService: TDSModalService,
    private modal: TDSModalRef,
    private fb: FormBuilder,
    private msg: TDSMessageService,
    private destroy$: TDSDestroyService,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
    private uploadFaceByHr: UploadFaceService
  ) {
    this.staffForm();
    this.BranchForm();
    this.departmentForm();
    this.positionForm();
  }

  onChangePopover(event: boolean) {
    if (event) {
      this.loadDataOfBranch();
      this.loadDataOfDepartment();
      this.loadDataOfPosition();
    }
  }

  ngOnInit(): void {
    this.loadDataDetails();
    this.getListBranch();
    this.getListDepartment();
    this.getListPosition();
    var listSampleImageText = [
      ['Chính diện', 'Forward', ''],
      ['Nghiêng trái', 'Left', ''],
      ['Nghiêng phải', 'Right', ''],
      ['Ngước lên', 'Up', ''],
      ['Cúi xuống', 'Down', ''],
    ];
    for (var i = 1; i < 6; i++) {
      this.listSampleCheckingImage.push({
        url: `../../../../../../assets/images/personal/IOCheckingSample-${i}.svg`,
        text: listSampleImageText[i - 1][0],
        direction: listSampleImageText[i - 1][1],
        id: listSampleImageText[i - 1][2]
      });
    }
  }

  staffForm() {
    this.updateStaffForm = this.fb.group({
      fullName: new FormControl('', [Validators.required]),
      name: new FormControl({ value: null, disabled: true }),
      surname: new FormControl({ value: null, disabled: true }),
      vocative: new FormControl(),
      sex: new FormControl(0),
      dateOfBirth: new FormControl(),
      phoneNumber: new FormControl({ value: null, disabled: true }),
      email: new FormControl(null, {
        validators: [CoreValidators.isEmail],
        asyncValidators: this.checkEmail.bind(this)
      }),
      residentAdress: new FormControl(),
      temporaryAdress: new FormControl(),
      taxTodeIndividual: new FormControl(),
      startTime: new FormControl(),
      code: new FormControl({ value: null, disabled: true }),
      companyEmail: new FormControl(null, { validators: CoreValidators.isEmail }),
      homeTown: new FormControl(),
      citizenIdentification: new FormControl(null, [Validators.pattern(/^[0-9]{9,15}$/i)]),
      grantDate: new FormControl(),
      grantLocation: new FormControl(),
    })
  }

  BranchForm() {
    this.updateBranchForm = this.fb.group({
      description: new FormControl(null, [Validators.required]),
      branchId: new FormControl(null, [Validators.required])
    })
  }

  departmentForm() {
    this.updateDepartmentForm = this.fb.group({
      description: new FormControl(null, [Validators.required]),
      departmentId: new FormControl(null, [Validators.required])
    })
  }

  positionForm() {
    this.updatePositionForm = this.fb.group({
      description: new FormControl(null, [Validators.required]),
      positionId: new FormControl(null, [Validators.required])
    })
  }

  getListBranch() {
    this.branchService.getBranch_Json({ MaxResultCount: 0 })
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.listDataOfBranch = [...res.items!];
      })
  }

  getListDepartment() {
    this.departmentService.getDepartment_Json({ MaxResultCount: 0 })
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.listDataOfDepartment = [...res.items!];
      })
  }

  getListPosition() {
    this.positionSevrvice.getPosition_Json({ MaxResultCount: 0 })
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        this.listDataOfPosition = [...res.items!];
      })
  }

  loadDataDetails() {
    this.isLoadingModal = true
    this.userService.getUserDetailId_Json({ id: this.id })
      .pipe(finalize(() => {
        this.isLoadingModal = false;
      }), takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          if (res) {
            this.staffDetail = res;
            this.code = this.staffDetail?.code!;
            this.surname = this.staffDetail?.surname!;
            this.name = this.staffDetail?.name!;
            this.loadData();
            this.loadImgTimeKeepingUser();
            this.getAllWorkProgress();
          }
        },
        error: (err) => {
          if (TDSHelperObject.hasValue(err)) {
            this.isLoadingModal = false;
          }
        }
      })
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

  beforeUploadAvatar = (file: TDSSafeAny): boolean => {
    this.fileListAvatar = this.fileListAvatar.concat(file);
    if (this.fileListAvatar.length > 0) {
      let length = this.fileListAvatar.length - 1;
      if (this.fileListAvatar[length].type == 'image/png' || this.fileListAvatar[length].type == 'image/jpeg' || this.fileListAvatar[length].type == 'image/jfif') {
        getBase64(file).then((res: TDSSafeAny) => {
          if (this.staffDetail) {
            this.staffDetail.avatar = res;
          }
        });
      }
      else {
        this.msg.error('Avatar chỉ cho phép chọn ảnh có đuôi file (jpg, PNG, jfif) !');
      }
    } else {
      this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
    }
    return false;
  };

  handleUploadImage(item: File, index: number) {
    this.isLoadingModal = true;
    this.uploadFaceByHr.postImgTimeKeepingForUserByHr(this.id, this.listImageDirection[index].direction, item)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.isLoadingModal = false;
          this.msg.success("Tải lên hình ảnh thành công");
          this.loadImgTimeKeepingUser();
          this.cdr.detectChanges();
        },
        error: (err) => {
          if (TDSHelperObject.hasValue(err)) {
            this.msg.error(err.error?.code.replace("Failed_", '' ));
          }
          else {
            this.msg.error("Lỗi tải lên");
          }
          this.isLoadingModal = false;
          this.cdr.detectChanges();
        },
      })
  }

  beforeUploadImage = (file: TDSUploadFile): boolean => {
    // dung lượng ảnh tối đa tải lên
    let maxSize = 5 * 1024 * 1024; // 5MB
    // các loại file img tương thích
    let lstTypeFile = ['image/png', 'image/jpeg', 'image/jpg'];
    this.fileListImage = this.fileListImage.concat(file);
    if (file.size! < maxSize) {
      // khi có ảnh sẽ thực hiện
      if (TDSHelperArray.hasListValue(this.fileListImage)) {
        //lấy phần tử cuối cùng của mảng
        let lastfile = this.fileListImage[this.fileListImage?.length - 1];
        let arrName = lastfile.name.split('.');
        let typeName = arrName[arrName.length - 1];
        if (lstTypeFile.indexOf(lastfile.type!) > -1 && typeName != 'jfif') {
        }
        else {
          this.fileListImage.pop();
          this.msg.error('Chỉ cho phép chọn ảnh có dạng file PNG JPEG hoặc JPG!');
          return false;
        }
      } else {
        this.msg.error('Có lỗi xảy ra xin vui lòng thử lại !');
        return false;
      }
    }
    else {
      this.fileListImage.pop();
      this.msg.error('Dung lượng file tối đa của bạn tải lên là 5M !');
      return false;
    }
    return true;
  };

  handleChangeFile(file: TDSUploadFile[], index: number): void {
    this.handleUploadImage(file[file.length - 1].originFileObj!, index);
  }

  loadImgTimeKeepingUser() {
    this.isLoadingImg = true;
    this.userService.getUserFaceUserId_Json({ userId: this.id }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (res) => {
        this.listImage = res;
        this.listImageDirection = [
          { url: '', direction: 'Forward' },
          { url: '', direction: 'Left' },
          { url: '', direction: 'Right' },
          { url: '', direction: 'Up' },
          { url: '', direction: 'Down' }
        ];
        for (let i = 0; i < res.length; i++) {
          switch (res[i].direction) {
            case 'Forward':
              this.listImageDirection[0].url = res[i]?.urlImageProxy!
              this.listSampleCheckingImage[0].id = res[i].id!
              break;
            case 'Left':
              this.listImageDirection[1].url = res[i]?.urlImageProxy!
              this.listSampleCheckingImage[1].id = res[i].id!
              break;
            case 'Right':
              this.listImageDirection[2].url = res[i]?.urlImageProxy!
              this.listSampleCheckingImage[2].id = res[i].id!
              break;
            case 'Up':
              this.listImageDirection[3].url = res[i]?.urlImageProxy!
              this.listSampleCheckingImage[3].id = res[i].id!
              break;
            case 'Down':
              this.listImageDirection[4].url = res[i]?.urlImageProxy!
              this.listSampleCheckingImage[4].id = res[i].id!
              break;
          }
        }
        let face = [];
        for (let i = 0; i < res.length; i++) {
          let statusFace = this.direction.includes(res[i].direction!);
          if (statusFace) {
            face.push(res[i].direction!);
            this.direction = this.direction.filter(item => item !== res[i].direction!);
          }
        }
        this.isLoadingImg = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.isLoadingImg = false;
        this.cdr.detectChanges();
      },
    })
  }

  loadData() {
    this.updateStaffForm?.patchValue({
      fullName: this.staffDetail?.fullName,
      vocative: this.staffDetail?.vocative,
      sex: this.staffDetail?.sex,
      dateOfBirth: this.staffDetail?.dateOfBirth ? new Date(this.staffDetail?.dateOfBirth) : null,
      phoneNumber: this.staffDetail?.phoneNumber,
      email: this.staffDetail?.email,
      residentAdress: this.staffDetail?.residentAdress,
      temporaryAdress: this.staffDetail?.temporaryAdress,
      taxTodeIndividual: this.staffDetail?.taxTodeIndividual,
      code: this.staffDetail?.code,
      startTime: this.staffDetail?.startTime ? new Date(this.staffDetail?.startTime) : null,
      companyEmail: this.staffDetail?.companyEmail,
      homeTown: this.staffDetail?.homeTown,
      citizenIdentification: this.staffDetail?.citizenIdentification,
      grantDate: this.staffDetail?.grantDate ? new Date(this.staffDetail?.grantDate) : null,
      grantLocation: this.staffDetail?.grantLocation,
    });
  }

  loadDataOfBranch() {
    this.updateBranchForm?.patchValue({
      branchId: this.branchId,
      description: this.descriptionOfBranch
    })
  }

  loadDataOfDepartment() {
    this.updateDepartmentForm?.patchValue({
      departmentId: this.departmentId,
      description: this.descriptionOfDepartment
    })
  }

  loadDataOfPosition() {
    this.updatePositionForm?.patchValue({
      positionId: this.positionId,
      description: this.descriptionOfPosition
    })
  }

  checkEmail(control: AbstractControl): Observable<ValidationErrors | null> {
    if (control.value == null || this.staffDetail?.email == control.value || control?.value == "") return of(null);
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

  checkValue(e: TDSSafeAny) {
    if (!e) {
      this.updateStaffForm?.controls["email"]?.setValue(null);
    }
  }

  onSubmit() {
    if (!this.updateStaffForm.dirty && this.fileListAvatar.length == 0 && this.isUpdatePopover == false) {
      return this.modal.destroy(null);
    }
    else {
      if (this.updateStaffForm.invalid) {
        this.msg.error('Cập nhật thông tin nhân viên thất bại, xin vui lòng thử lại !');
      } else {
        let fullName = this.updateStaffForm.controls['fullName'].value;
        let surname = fullName.slice(0, fullName.indexOf(' '));
        this.isLoadingModal = true;
        const params: AppUserUpdateDto =
        {
          fullName: this.updateStaffForm.controls['fullName'].value,
          name: this.name,
          surname: surname,
          email: this.updateStaffForm.controls['email'].value,
          dateOfBirth: this.updateStaffForm.controls['dateOfBirth'].value,
          sex: Number.parseInt(this.updateStaffForm.controls['sex'].value),
          vocative: this.updateStaffForm.controls['vocative'].value,
          startTime: this.updateStaffForm.controls['startTime'].value,
          companyEmail: this.updateStaffForm.controls['companyEmail'].value,
          temporaryAdress: this.updateStaffForm.controls['temporaryAdress'].value,
          residentAdress: this.updateStaffForm.controls['residentAdress'].value,
          homeTown: this.updateStaffForm.controls['homeTown'].value,
          citizenIdentification: this.updateStaffForm.controls['citizenIdentification'].value,
          grantDate: this.updateStaffForm.controls['grantDate'].value,
          grantLocation: this.updateStaffForm.controls['grantLocation'].value,
          taxTodeIndividual: this.updateStaffForm.controls['taxTodeIndividual'].value
        }
        if (this.updateStaffForm.dirty || this.fileListAvatar.length > 0) {
          this.userService.putUserUpdateId({ id: this.id, body: params })
            .pipe(
              mergeMap(() => {
                return this.handleUploadAvatar(this.urlUploadAvatar + '/' + this.id);
              }),
              finalize(() => {
                this.isLoadingModal = false;
              }), takeUntil(this.destroy$)
            )
            .subscribe({
              next: () => {
                this.msg.success('Cập nhật thông tin nhân viên thành công');
                this.modal.destroy(params);
              },
              error: (err) => {
                if (TDSHelperObject.hasValue(err)) {
                  this.msg.error('Cập nhật thông tin nhân viên thất bại, xin vui lòng thử lại !');
                }
              }
            })
        } else {
          this.msg.success('Cập nhật thông tin nhân viên thành công');
          this.modal.destroy();
        }
      }
    }
  }

  endTypingFullName(e: TDSSafeAny) {
    let fullName = e?.value;
    let fullNameSplit = fullName?.trim()?.split(' ');
    this.surname = fullNameSplit[0];
    this.name = fullNameSplit[fullNameSplit.length - 1];
  }

  cancelUpdateStaffForm() {
    this.modal.destroy(null);
  }

  getAllWorkProgress() {
    this.userService.getUserUserChangingHistory_Json({ userId: this.id })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: TDSSafeAny) => {
          if (TDSHelperObject.hasValue(res)) {
            this.listHistory = res.trackingValues;
            this.getValuesChangeOfUpdateBranchForm();
            this.getValuesChangeOfUpdateDepartmentForm();
            this.getValuesChangeOfUpdatePositionForm();
          }
        },
        error: (error) => {
          if (TDSHelperObject.hasValue(error)) {
            this.listHistory = [];
          }
        }
      })
  }

  getValuesChangeOfUpdateBranchForm() {
    if (this.listHistory && this.listHistory.find(x => x.kind == 0)) {
      let lengthOfBranch = this.listHistory?.map(d => d.kind).lastIndexOf(0);
      this.branchId = this.listHistory[lengthOfBranch]?.newValue!;
      this.descriptionOfBranch = this.listHistory[lengthOfBranch]?.description!;
    } else {
      this.branchId = this.staffDetail?.branchId!;
    }
  }

  getValuesChangeOfUpdateDepartmentForm() {
    if (this.listHistory && this.listHistory.find(x => x.kind == 1)) {
      let lengthOfDepartment = this.listHistory?.map(d => d.kind).lastIndexOf(1);
      this.departmentId = this.listHistory[lengthOfDepartment]?.newValue!;
      this.descriptionOfDepartment = this.listHistory[lengthOfDepartment]?.description!;
    } else {
      this.departmentId = this.staffDetail?.departmentId!;
    }
  }

  getValuesChangeOfUpdatePositionForm() {
    if (this.listHistory && this.listHistory.find(x => x.kind == 2)) {
      let lengthOfPosition = this.listHistory?.map(d => d.kind).lastIndexOf(2);
      this.positionId = this.listHistory[lengthOfPosition]?.newValue!;
      this.descriptionOfPosition = this.listHistory[lengthOfPosition]?.description!;
    } else {
      this.positionId = this.staffDetail?.positionId!;
    }
  }

  onSubmitUpdateBranch(): void {
    if (!this.updateBranchForm.dirty) {
      this.closeUpdateBranchForm();
    } else {
      if (this.updateBranchForm.valid) {
        this.isLoadingModal = true;
        this.userService.putUserUserIdUpdateBranch({ userId: this.id, body: this.updateBranchForm.value })
          .pipe(finalize(() => {
            this.isLoadingModal = false;
          }), takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              if (this.staffDetail) {
                let name = this.listDataOfBranch.find(x => x.id == this.updateBranchForm.controls['branchId'].value);
                if (name)
                  this.staffDetail.branchName = name.name;
              }
              this.msg.success('Cập nhật chi nhánh thành công');
              this.getAllWorkProgress();
              this.isUpdatePopover = true;
              this.closeUpdateBranchForm();
            },
            error: (err) => {
              if (!err || !err.error) {
                this.msg.error('Cập nhật chi nhánh thất bại');
              } else {
                if (!err.error.validationErrors) {
                  this.msg.error(err?.error?.message);
                }
                else {
                  for (let i = 0; i < err.error?.validationErrors.length; i++) {
                    this.msg.error(err.error?.validationErrors[i]?.message);
                  }
                }
              }
            }
          })
      }
    }
  }

  closeUpdateBranchForm() {
    this.BranchForm()
    this.visibleBranch = false;
  }

  onSubmitUpdateDepartment() {
    if (!this.updateDepartmentForm.dirty) {
      this.closeUpdateDepartmentForm();
    } else {
      if (this.updateDepartmentForm.valid) {
        this.isLoadingModal = true;
        this.userService.putUserUserIdUpdateDepartment({ userId: this.id, body: this.updateDepartmentForm.value })
          .pipe(finalize(() => {
            this.isLoadingModal = false;
          }), takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              if (this.staffDetail) {
                let name = this.listDataOfDepartment.find(x => x.id == this.updateDepartmentForm.controls['departmentId'].value);
                if (name)
                  this.staffDetail.departmentName = name.name;
              }
              this.msg.success('Cập nhật phòng ban thành công');
              this.getAllWorkProgress();
              this.isUpdatePopover = true;
              this.closeUpdateDepartmentForm();
            },
            error: (err) => {
              if (!err || !err.error) {
                this.msg.error('Cập nhật phòng ban thất bại');
              } else {
                if (!err.error.validationErrors) {
                  this.msg.error(err?.error?.message);
                }
                else {
                  for (let i = 0; i < err.error?.validationErrors.length; i++) {
                    this.msg.error(err.error?.validationErrors[i]?.message);
                  }
                }
              }
            }
          })
      }
    }
  }

  closeUpdateDepartmentForm() {
    this.departmentForm();
    this.visibleDepartment = false;
  }

  onSubmitUpdatePosition() {
    if (!this.updatePositionForm.dirty) {
      this.closeUpdatePosition();
    } else {
      if (this.updatePositionForm.valid) {
        this.isLoadingModal = true;
        this.userService.putUserUserIdUpdatePosition({ userId: this.id, body: this.updatePositionForm.value })
          .pipe(finalize(() => {
            this.isLoadingModal = false;
          }), takeUntil(this.destroy$))
          .subscribe({
            next: (res) => {
              if (this.staffDetail) {
                let name = this.listDataOfPosition.find(x => x.id == this.updatePositionForm.controls['positionId'].value);
                if (name)
                  this.staffDetail.positionName = name.name;
              }
              this.msg.success('Cập nhật chức vụ thành công');
              this.getAllWorkProgress();
              this.isUpdatePopover = true;
              this.closeUpdatePosition();
            },
            error: (err) => {
              if (!err || !err.error) {
                this.msg.error('Cập nhật chức vụ thất bại');
              } else {
                if (!err.error.validationErrors) {
                  this.msg.error(err?.error?.message);
                }
                else {
                  for (let i = 0; i < err.error?.validationErrors.length; i++) {
                    this.msg.error(err.error?.validationErrors[i]?.message);
                  }
                }
              }
            }
          })
      }
    }
  }

  closeUpdatePosition() {
    this.positionForm();
    this.visiblePosition = false;
  }

}
