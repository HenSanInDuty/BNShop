import { Component, Input, OnInit } from '@angular/core';
import { getOrderDetailDTO } from 'src/app/dto/orderDetail.dto';

@Component({
  selector: 'hrm-modal-delivery-status',
  templateUrl: './modal-delivery-status.component.html',
  styleUrls: ['./modal-delivery-status.component.scss']
})
export class ModalDeliveryStatusComponent implements OnInit {

  @Input() order?: getOrderDetailDTO
  constructor() { }

  ngOnInit(): void {
  }

}
