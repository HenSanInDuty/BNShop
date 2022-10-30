import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  host: { class: 'h-full w-full flex flex-col bg-white' },
})
export class OrderDetailComponent implements OnInit {

  orderData = [
    {
      id:1,
      tranfor: "Giao hàng tiết kiệm",
      data: "3/07/2021, 13:08",
      orderStatus: "Đang giao hàng",
      counrStatus: "Đã thanh toán",
      idOrder: "INV01238551",
      address: "12 Cn1 Tân Phú, Tp Hồ Chí Minh",
      tranforStatus: "",


    }
  ]
  productData = [
    {
        id: 1,
        IdOrder: 'T1261964561',
        img: 'DH 023165',
        NameProduct: "Giày thể thao hiphop đen trắng",
        IdProduct:"0910232",
        Price: '1.500.000',
        SL:"1",
        total:"1.500.000",
       

    },
    
    {
        id: 2,
        IdOrder: 'T1261964561',
        img: 'DH 023165',
        NameProduct: "Giày thể thao hiphop đen trắng",
        IdProduct:"0910232",
        Price: '1.500.000',
        SL:"1",
        total:"1.500.000",
       

    },
    
    {
        id: 3,
        IdOrder: 'T1261964561',
        img: 'DH 023165',
        NameProduct: "Giày thể thao hiphop đen trắng",
        IdProduct:"0910232",
        Price: '1.500.000',
        SL:"1",
        total:"1.500.000",
       

    },
    
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
