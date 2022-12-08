import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkingKindService } from '@commom/hrm/services';
import { CoreUserInitDTO } from '@core/dto';
import { filter, takeUntil } from 'rxjs';
import { getOrderDetailDTO } from 'src/app/dto/orderDetail.dto';
import { ParamRatingDTO } from 'src/app/dto/rating.dto';
import { RatingService } from 'src/app/services/rating.service';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSI18nService } from 'tds-ui/i18n';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSHelperArray, TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSUploadFile } from 'tds-ui/upload';
const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
@Component({
  selector: 'hrm-modal-feedback',
  templateUrl: './modal-feedback.component.html',
  styleUrls: ['./modal-feedback.component.scss']
})
export class ModalFeedbackComponent implements OnInit {

  @Input() order?: getOrderDetailDTO;
  @Input() user?: CoreUserInitDTO;
  isSubmit: boolean = false
  addFeedback!: FormGroup;
  value: number = 0;
  tooltips = ['Rất tệ', 'Tệ', 'Bình thường', 'Tốt', 'Rất hài lòng'];
  listUrlImg: string[] = []
  fileListAvatar: TDSUploadFile[] = [];
  previewAvatar: string[] = [];
  params?: ParamRatingDTO
  constructor(
    private fb: FormBuilder,
    private destroy$: TDSDestroyService,
    private modal: TDSModalRef,
    private WorkingKindService: WorkingKindService,
    private message: TDSMessageService,
    private i18n: TDSI18nService,
    private http: HttpClient,
    private ratingService: RatingService
  ) {

  }

  ngOnInit(): void {
    this.createForm();
    // this.getProvince()
  }


  ngAfterViewInit(): void {
    this.updateForm();
  }

  createForm() {
    this.addFeedback = this.fb.group({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
    })
  }

  updateForm() {

  }

  onChange(e: any) {
    this.value =e;
  }

  cancel() {
    this.modal.destroy(null);
  }
  onSubmit(): void {
    if (this.addFeedback.valid && this.addFeedback.dirty) {
      this.params = {
        title: this.addFeedback.controls["title"].value,
        content: this.addFeedback.controls["content"].value,
        star: this.value,
        product: this.order?.order[0].product.id!,
        customer: this.user?.id
      }
      this.ratingService.createRating(this.order?.order[0].product.id!, this.params)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          {
            next: (res) => {
              this.isSubmit = false
              this.message.success("Đánh giá đã được gửi")
              this.modal.destroy(this.params);
            },
            error:(err) => {
              this.message.error("Đã có lỗi sảy ra")
              this.modal.destroy(this.params);
            },
          }
        )
    }
  }

  //check Img upload
  beforeUploadAvatar = (file: TDSSafeAny): boolean => {
    // dung lượng ảnh tối đa tải lên
    let maxSize = 5 * 1024 * 1024; // 5MB
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
            this.previewAvatar.push(res);
            // this.cd.detectChanges();
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

  handleUpload = (item: any) => {
    this.isSubmit = true;
    const formData = new FormData();
    formData.append('file', item.file as any, item.file.name);
    formData.append('upload_preset', 'angular_customer_bnshop');
    formData.append('cloud_name', 'duih0zkph');
    const req = new HttpRequest('POST', ' https://api.cloudinary.com/v1_1/duih0zkph/image/upload', formData);
    return this.http
      .request(req)
      .pipe(filter(e => e instanceof HttpResponse))
      .subscribe(
        (res: TDSSafeAny) => {
          if (res && res.body) {
            this.listUrlImg.push(res.body.url)
            const data = res.body;
            item.file.url = data.mediaUrl;
          }
          item.onSuccess(res, item.file);
          this.isSubmit = false;
        },
        (err) => {
          item.onError({ statusText: err.error?.error?.details }, item.file);
        }
      )
  }
  handleDownload = (file: TDSUploadFile) => {
    window.open(file.response.url);
  }

  handleChangeFile(file: TDSSafeAny): void {
  }
}
