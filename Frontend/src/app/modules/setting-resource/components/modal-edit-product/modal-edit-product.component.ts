import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalRef } from 'tds-ui/modal';
import { TDSHelperArray, TDSSafeAny } from 'tds-ui/shared/utility';
import { TDSUploadFile } from 'tds-ui/upload';
import { getCategoryDTO } from '../../models/category.dto';
import { TypeProductDTO } from '../../models/typeProduct.dto';
import { ProductService } from '../../services/product.service';
const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
@Component({
  selector: 'hrm-modal-edit-product',
  templateUrl: './modal-edit-product.component.html',
  styleUrls: ['./modal-edit-product.component.scss'],
  providers: [
    TDSDestroyService
  ]
})
export class ModalEditProductComponent implements OnInit {

  @Input() lstResource: TDSSafeAny;
  isActiveEdit?: boolean
  isSubmit: boolean = false
  lstCategory: getCategoryDTO[] = []
  lstType: TypeProductDTO[] = []
  addaccsetForm!: FormGroup;
  swtEdit = false
  body?: TDSSafeAny
  params: TDSSafeAny
  listUrlImg: string[] = []
  fileUploadListAvatar: TDSUploadFile[] = [];
  fileListAvatar: TDSUploadFile[] = [];
  fileListImage: TDSUploadFile[] = [];
  previewAvatar: string[] = [];
  previewImage: string[] = [];
  type: string[] = [];
  category: string[] = [];
  public selected = { id: 1 };
  public selected2 = { id: 1 };
  data = "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat imperdiet turpis, at condimentum nunc rutrum in. Sed suscipit nunc tortor, sit amet tristique elit viverra sit amet. Donec elementum viverra placerat. Donec dapibus bibendum facilisis. Cras sit amet commodo massa. Pellentesque id nibh vitae erat venenatis sagittis eget ut turpis. Duis tristique lorem in magna pretium, ut dictum sem mattis.</p>"
  constructor(
    private fb: FormBuilder,
    private modal: TDSModalRef,
    private message: TDSMessageService,
    private productService: ProductService,
    private destroy$: TDSDestroyService,
    private http: HttpClient
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getCategory();
  }

  ngAfterViewInit(): void {
    this.updateForm();
  }

  onModelChange(e: TDSSafeAny) {
    this.type = e;
  }
  onModelChange2(e: TDSSafeAny) {
    this.category = e;
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
    formData.append('upload_preset', 'angular_bnshop');
    formData.append('cloud_name', 'dvfnndkgl');
    // You can use any AJAX library you like
    const req = new HttpRequest('POST', ' https://api.cloudinary.com/v1_1/dvfnndkgl/image/upload', formData);
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

  createForm() {
    this.addaccsetForm = this.fb.group({
      price: new FormControl(null),
      describe: [
        '',
        Validators.compose([
          Validators.minLength(0),
          Validators.maxLength(10000),
        ])
      ],
    })
  }

  updateForm() {
    if (this.lstResource) {
      this.addaccsetForm.patchValue(this.lstResource);
    }
  }

  cancel() {
    this.listUrlImg = [],
      this.modal.destroy(null);
  }
  onSubmit(): void {
    if (this.addaccsetForm.valid && this.addaccsetForm.dirty) {
      this.isSubmit = true;
      this.body = this.addaccsetForm.value
      this.body = {
        describe: this.addaccsetForm.controls["describe"].value,
        display_image: this.listUrlImg[0],
        attachment: this.listUrlImg.map(item => ({ url: item, type: '2D' }))
        ,
        category: this.category.map(String),
        ...this.addaccsetForm.value
      }
      this.productService.editProduct(this.lstResource.id,this.body)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          {
            next: (res) => {
              this.isSubmit = false
              this.message.success("Sửa sản phẩm thành công")
              this.modal.destroy(this.body);
            },
            error: (err) => {
              this.isSubmit = false
              this.message.error("sửa sản phẩm không thành công")
              this.modal.destroy(this.params);
            },
          }
        )

    }
  }
  getCategory() {
    this.productService.getCategory()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: TDSSafeAny) => {
        this.lstCategory = res;

      });
  }

}
