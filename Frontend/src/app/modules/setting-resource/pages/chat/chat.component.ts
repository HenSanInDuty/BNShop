import { Component, OnInit } from '@angular/core';
import { TDSContextMenuService, TDSDropdownMenuComponent, TDSPlacementType } from 'tds-ui/dropdown';
import { TDSModalService } from 'tds-ui/modal';

@Component({
  selector: 'hrm-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  host: { class: 'h-full w-full flex flex-col overflow-hidden border-t ' },
})
export class ChatComponent implements OnInit {

  listOfPosition: TDSPlacementType[] = ['bottomLeft',
    'bottomCenter', 'bottomRight', 'topLeft', 'topCenter', 'topRight'];
  show: boolean = false;
  showmore: boolean = false;
  isCollapsed = false;
  isVisible = false;
  isVisible2 = false;
  showModal(): void {
    this.isVisible = true;
  }
  showModal2(): void {
    this.isVisible2 = true;
  }
  clickEvent() {
    this.show = !this.show;
  }
  clickshowmessage() {
    this.showmore = !this.showmore;
  }
  constructor(
    private tdsContextMenuService: TDSContextMenuService,
    private modal: TDSModalService
  ) { }
  handleOk(): void {
    console.log("Button ok clicked!");
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log("Button cancel clicked!");
    this.isVisible = false;
  }
  handleOk1(): void {
    console.log("Button ok clicked!");
    this.isVisible2 = false;
  }

  handleCancel1(): void {
    console.log("Button cancel clicked!");
    this.isVisible2 = false;
  }

  ngOnInit(): void { }
  contextMenu($event: MouseEvent, menu: TDSDropdownMenuComponent): void {
    this.tdsContextMenuService.create($event, menu);
  }

  closeMenu(): void {
    this.tdsContextMenuService.close();
  }

  log(str: any) {
    console.log(str)
  }
  error(): void {
    this.modal.error({
      title: 'Chặn khách hàng này',
      content: 'Ngừng nhận tin nhắn và cuộc gọi từ Nguyen Van Huy',
      onOk: () => console.log(' OK'),
      onCancel: () => { console.log('cancel') },
      okText: "Chặn tin nhắn",
      cancelText: "Hủy bỏ",
      centered: true,

    });
  }

}
