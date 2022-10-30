import { Component, OnInit } from '@angular/core';
import { TDSModalService } from 'tds-ui/modal';
import { TDSSafeAny } from 'tds-ui/shared/utility';



@Component({
  selector: 'app-order-refund-detail',
  templateUrl: './order-refund-detail.component.html',
  styleUrls: ['./order-refund-detail.component.scss'],
  host: { class: 'h-full w-full' },
})
export class OrderRefundDetailComponent implements OnInit {
  isVisible = false;
  isVisible1 = false;

  constructor(private modalService: TDSModalService) { }

  ngOnInit(): void {
  }

  showModal1(): void {
      this.isVisible1 = true;
  }

  handleOk1(): void {
      setTimeout(() => {
          this.isVisible1 = false;
      }, 3000);
  }

  handleCancel1(): void {
      this.isVisible1 = false;
  }
  showModal(): void {
    this.isVisible1 = true;
}

handleOk(): void {
    setTimeout(() => {
        this.isVisible1 = false;
    }, 3000);
}

handleCancel(): void {
    this.isVisible1 = false;
}
  public selected = 1
  public contactOptions = [
    { id: 1, name: 'Elton John' },
    { id: 2, name: 'Elvis Presley' },
    { id: 3, name: 'Paul McCartney' },
    {id: 4, name: 'Elton John' },
    { id: 5, name: 'Elvis Presley' },
    { id: 6, name: 'Paul McCartney' },
]
onModelChange(e:TDSSafeAny)
    {
        console.log(e)
    }
}
