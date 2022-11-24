import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, } from '@angular/core';

import { CoreAuthService } from '@core/authentication';
import { CoreUserInitDTO } from '@core/dto';
import { AttachmentRDto } from '@commom/hrm/models';
import { AttachmentRService, UserService } from '@commom/hrm/services';
import { finalize, Observable, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef, TDSModalService } from 'tds-ui/modal';
import { TDSHelperArray, TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSUploadFile, } from 'tds-ui/upload';
import { TimeKeepingPersonalService } from '../../services/time-keeping-personal.service';

@Component({
  selector: 'hrm-modal-add-img-time-keeping',
  templateUrl: './modal-add-img-time-keeping.component.html',
  styleUrls: ['./modal-add-img-time-keeping.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    TDSDestroyService,
    TDSModalService,
  ],
  host: { class: '' },
})
export class ModalAddImgTimeKeepingComponent implements OnInit {

  // check review
  isVisible = false;
  // index của hướng mặt
  index?: number;
  // biến check đủ ảnh chấm công chưa
  check = true;
  direction = ['Forward', 'Left', 'Right', 'Up', 'Down'];
  userId: TDSSafeAny
  loading = false
  //list img preview
  previewImage: string[] = [];
  // list Img upload
  fileListImage: TDSUploadFile[] = [];
  fileListMultiImage: TDSUploadFile[] = [];
  //list Img timekeepingUser get Api
  listImage: AttachmentRDto[] = [];
  listImageDirection = [
    { url: '', direction: 'Forward' },
    { url: '', direction: 'Left' },
    { url: '', direction: 'Right' },
    { url: '', direction: 'Up' },
    { url: '', direction: 'Down' }
  ];
  //Khởi tạo ảnh với gương mặt và hướng
  listSampleCheckingImage: { url: string; text: string; description: string; direction: string; id: string }[] = [];
  //Lấy thông tin user đang hiện hành
  userProfile$!: Observable<CoreUserInitDTO | undefined>;
  constructor(
    private message: TDSMessageService,
    private destroy$: TDSDestroyService,
    private readonly userService: UserService,
    private attachmentService: AttachmentRService,
    private authService: CoreAuthService,
    private modalRef: TDSModalRef,
    private modalService: TDSModalService,
    private cdr: ChangeDetectorRef,
    private timeKeepingPersonalService: TimeKeepingPersonalService,
  ) { }

  ngOnInit(): void {
    // Khởi tạo gương mặt và ảnh
    var listSampleImageText = [
      ['Ảnh 1: Chính diện', '(Mắt nhìn vào camera)', 'Forward', ''],
      ['Ảnh 2: Nghiêng nhẹ qua trái', '(Mắt nhìn vào camera)', 'Left', ''],
      ['Ảnh 3: Nghiêng nhẹ qua phải', '(Mắt nhìn vào camera)', 'Right', ''],
      ['Ảnh 4: Mặt ngước lên', '(Mắt nhìn vào camera)', 'Up', ''],
      ['Ảnh 5: Mặt hơi cúi xuống', '(Mắt nhìn vào camera)', 'Down', ''],
    ];
    for (var i = 1; i < 6; i++) {
      this.listSampleCheckingImage.push({
        url: `../../../../../../assets/images/personal/IOCheckingSample-${i}.svg`,
        text: listSampleImageText[i - 1][0],
        description: listSampleImageText[i - 1][1],
        direction: listSampleImageText[i - 1][2],
        id: listSampleImageText[i - 1][3]
      });
    }
    this.userProfile$ = this.authService.getObsUserProfile().pipe(takeUntil(this.destroy$));
    this.userProfile$.subscribe({
      next: (res) => {
        this.userId = res?.id;
        this.loadImgTimeKeepingUser();
      },
    })
  }

  // preview img
  showPreviewUploadImage(value: any) {
    this.previewImage = value;
    this.isVisible = true;
  }

  //cancel view
  handleCancel(): void {
    this.isVisible = false;
  }
  // hàm sử lý upload ảnh
  handleChangeFile(file: TDSUploadFile[], index: number): void {
    this.handleUpload(file[file.length - 1].originFileObj!, index);
  }
  //check Img upload
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
          this.message.error('Chỉ cho phép chọn ảnh có dạng file PNG JPEG hoặc JPG!');
          return false;
        }
      } else {
        this.message.error('Có lỗi xảy ra xin vui lòng thử lại !');
        return false;
      }
    }
    else {
      this.fileListImage.pop();
      this.message.error('Dung lượng file tối đa của bạn tải lên là 5M !');
      return false;
    }
    return true;
  };

  // Function tải từng hình ảnh chấm công cá nhân
  handleUpload(item: File, index: number) {
    this.loading = true;
    this.timeKeepingPersonalService.postImgTimeKeepingUser(this.userId, this.listImageDirection[index].direction, item)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.loading = false;
          this.message.success("Tải lên hình ảnh thành công");
          this.loadImgTimeKeepingUser();
          this.cdr.detectChanges()
        },
        error: (err) => {
          if (TDSHelperObject.hasValue(err)) {
            this.message.error(err.error?.code.replace("Failed_", '' ));
          }
          else {
            this.message.error("Lỗi tải lên");
          }
          this.loading = false;
          this.cdr.detectChanges();
        },
      })
  }

  // Hàm sử lý upload multi ảnh
  uploadMultiImg(event: TDSSafeAny) {
    if (TDSHelperArray.hasListValue(event.target.files)) {
      this.loading = true;
      let files = event.target.files;
      this.timeKeepingPersonalService.postMultiImgTimeKeepingUser(this.userId, event.target.files)
        .pipe(takeUntil(this.destroy$)).subscribe({
          next: (res) => {
            if (res.body) {
              if (TDSHelperArray.hasListValue(res.body.message.error)) {
                this.message.error("Đã có ảnh không tải lên do ảnh không đúng qui định")
              }
              else {
                this.message.success("Tải ảnh lên thành công")
              }
              this.loading = false;
              this.loadImgTimeKeepingUser();
              this.cdr.detectChanges();
            }
          },
          error: (err) => {
            this.loading = false;
            if (err.error.code) {
              this.message.error(err.error.code.replace("Failed_", '' ));
            }
            else {
              this.message.error("Kiểm tra hình ảnh thất bại");
            }
            this.cdr.detectChanges();
          },
        })
    }
  }

  //get Img Api
  loadImgTimeKeepingUser() {
    this.loading = true;
    this.userService.getUserFaceUserId_Json({ userId: this.userId }).pipe(takeUntil(this.destroy$)).subscribe({
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
        if (TDSHelperArray.hasListValue(this.direction) && this.check) {
          setTimeout(() => {
            this.message.warning("Bạn chưa cập nhật đủ hình ảnh chấm công vui lòng cập nhật để được ghi nhận chấm công hằng ngày!");
          }, 2000);
          this.check = false;
        }
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.loading = false;
        this.cdr.detectChanges();
      },
    })
  }

  //Delete Img Timekeeping User
  onDeleteOne(id: TDSSafeAny): void {
    const modal = this.modalService.error({
      title: 'Xác nhận xóa hình ảnh máy chấm công',
      content: `<span  class="text-error-500">
      Lưu ý: Không thể khôi phục thông tin này sau khi xóa
    </span>`,
      onOk: () => {
        this.deleteImgTimeKeepingUser(id);
      },
      onCancel: () => { },
      confirmIcon: 'tdsi-trash-fill',
      okText: "Xóa",
      cancelText: "Hủy"
    });
  }

  deleteImgTimeKeepingUser(id: string) {
    this.attachmentService.deleteAttachmentRId_Json({ id: id }).subscribe({
      next: (res) => {
        this.message.success('Xóa hình ảnh thành công');
        this.loadImgTimeKeepingUser();
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.message.error(err.error.code);
        this.cdr.detectChanges();
      },
    }
    )
  }

  // hủy modal
  cancel() {
    this.modalRef.destroy(null);
  }

}
