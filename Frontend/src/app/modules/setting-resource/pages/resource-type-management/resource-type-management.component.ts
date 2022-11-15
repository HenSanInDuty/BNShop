import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { ResourceTypeDto } from '@commom/hrm/models';
import { ResourceTypeService } from '@commom/hrm/services';
import { takeUntil } from 'rxjs';
import { TDSDestroyService } from 'tds-ui/core/services';
import { TDSMessageService } from 'tds-ui/message';
import { TDSModalService } from 'tds-ui/modal';
import { TDSHelperObject, TDSSafeAny } from 'tds-ui/shared/utility';
import { ModalDeleteAllComponent } from '../../components/modal-delete-all/modal-delete-all.component';



@Component({
  selector: 'hrm-resource-type-management',
  templateUrl: './resource-type-management.component.html',
  styleUrls: ['./resource-type-management.component.scss'],
  
  providers:[
    TDSDestroyService
  ]
})
export class ResourceTypeManagementComponent implements OnInit {
  checked = false;
  indeterminate = false;
  loading:boolean = false;
  listOfCurrentPageData:  Array<string> = [];
  setOfCheckedId = new Set<TDSSafeAny>();
  public lstAccsetType:Array<ResourceTypeDto> = []

  constructor(
    private resourceTypeService: ResourceTypeService,
    private modalService: TDSModalService,
    private viewContainerRef: ViewContainerRef,
    private message: TDSMessageService,
    private destroy$ : TDSDestroyService
  ) { }

  ngOnInit(): void {
    this.getListAccsetType()
  }

  updateCheckedSet(item: string, checked: boolean): void {
    if (checked) {
        this.setOfCheckedId.add(item);
    } else {
        this.setOfCheckedId.delete(item);
    }
  }

  onSelectChange(value: TDSSafeAny) {


  }

  onModelChange(value: TDSSafeAny) {


  }
  onItemChecked(item: TDSSafeAny, checked: boolean): void {
      this.updateCheckedSet(item, checked);
      this.refreshCheckedStatus();
  }


  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item => {
      this.updateCheckedSet(item, value)
      });
      this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event:  TDSSafeAny): void {
      this.listOfCurrentPageData = $event;
      this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
      this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item));
      this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item)) && !this.checked;
  }

  getListAccsetType(){
    this.loading = true
    this.setOfCheckedId = new Set<TDSSafeAny>();
    this.refreshCheckedStatus();
    this.resourceTypeService.getResourceType_Json().pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (res:TDSSafeAny) => {
        this.lstAccsetType = res;
        this.loading = false
      },
      error: (err) => {
        this.lstAccsetType = [];
        this.loading = false
      }
    });
  }

  // showModalAdd(): void {
  //   let modalAdd = this.modalService.create({
  //     title: 'Thêm tài loại sản mới',
  //     content: ModalAddEditResourceTypeComponent,
  //     size: "md",
  //     viewContainerRef: this.viewContainerRef,
  //     componentParams:{
  //     },
  //   });
  //   modalAdd.afterClose.subscribe(
  //     {
  //       next: (res) =>{
  //       if(TDSHelperObject.hasValue(res))
  //       this.getListAccsetType();
  //       },
  //       error: (err) => {
  //       }
  //     }
  //   )
  // }

  // showModalEdit(data: TDSSafeAny): void {
  //   let modalEdit = this.modalService.create({
  //     title: 'Chỉnh sửa loại tài sản',
  //     content: ModalAddEditResourceTypeComponent,
  //     size: "md",
  //     viewContainerRef: this.viewContainerRef,
  //     componentParams:{
  //       lstAccsetType: data,
  //     },
  //   });
  //   modalEdit.afterClose.subscribe(
  //     {
  //       next: (res) =>{
  //       if(TDSHelperObject.hasValue(res))
  //         this.getListAccsetType();
  //       },
  //       error: (err) => {
  //       }
  //     }
  //   )
  // }

  onDeleteOne(data: TDSSafeAny): void {
    const modal = this.modalService.error({
      title: 'Xác nhận loại tài sản',
      content: `<span  class="text-error-500">
      Lưu ý: Không thể khôi phục thông tin  loại tài sản này sau khi xóa
    </span>`,
      onOk: () => {
        this.resourceTypeService.deleteResourceTypeId_Response({ id: data.id }).subscribe(
          {
            next: (res) => {
              modal.destroy(null);
              this.message.success("Xóa loại tài sản thành công")
              this.getListAccsetType()
            },
            error: (err) => {
              this.message.error(err.code)
              this.getListAccsetType()
            }
          })
      },
      onCancel: () => { },
      confirmIcon: 'tdsi-trash-fill',
      okText: "Xóa",
      cancelText: "Hủy"
    });
  }

   onDeleteAll(): void {
   let modalDelete = this.modalService.create({
      title: "Xác nhận xóa tài sản ",
      content: ModalDeleteAllComponent,
      size: "lg",
      viewContainerRef: this.viewContainerRef,
      footer: null,
      componentParams:{
        lstAccsetType: [...this.setOfCheckedId]
      },
    })
    modalDelete.afterClose.subscribe(
      {
        next: (res) =>{
        if(TDSHelperObject.hasValue(res))
          this.getListAccsetType();

        },
        error: (err) => {
        }
      }
    )
  }
}
