import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  host: { class: 'h-full w-full flex flex-col bg-white' },
})
export class OrderComponent implements OnInit {

  expandSet = new Set<number>();
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
  listOfData = [
      {
          id: 1,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone:"012312321",
          Total: '1.500.000',
          StatusOrder: 'Đã giao hàng',
          StatusCount: 'Đã thanh toán',
          Trading:"Giao hàng tiết kiệm",
          Date:"30/08/2021",
         

      },
      {
          id: 2,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone:"012312321",
          Total: '1.500.000',
          StatusOrder: 'Đã giao hàng',
          StatusCount: 'Đã thanh toán',
          Trading:"Giao hàng tiết kiệm",
          Date:"30/08/2021",
          

      },
      {
          id: 3,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone:"012312321",
          Total: '1.500.000',
          StatusOrder: 'Đã giao hàng',
          StatusCount: 'Đã thanh toán',
          Trading:"Giao hàng tiết kiệm",
          Date:"30/08/2021",
         

      },
      {
          id: 4,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone:"012312321",
          Total: '1.500.000',
          StatusOrder: 'Đã giao hàng',
          StatusCount: 'Đã thanh toán',
          Trading:"Giao hàng tiết kiệm",
          Date:"30/08/2021",
         

      },
      {
          id: 5,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone:"012312321",
          Total: '1.500.000',
          StatusOrder: 'Đã giao hàng',
          StatusCount: 'Đã thanh toán',
          Trading:"Giao hàng tiết kiệm",
          Date:"30/08/2021",
         

      },
      {
          id: 6,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone:"012312321",
          Total: '1.500.000',
          StatusOrder: 'Đã hủy',
          StatusCount: 'Chưa thanh toán',
          Trading:"Giao hàng tiết kiệm",
          Date:"30/08/2021",
         

      },
      {
          id: 8,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone:"012312321",
          Total: '1.500.000',
          StatusOrder: 'Đang giao hàng',
          StatusCount: 'Đã thanh toán',
          Trading:"Giao hàng tiết kiệm",
          Date:"30/08/2021",
         

      },
      {
          id: 9,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone:"012312321",
          Total: '1.500.000',
          StatusOrder: 'Đã giao hàng',
          StatusCount: 'Đã thanh toán',
          Trading:"Giao hàng tiết kiệm",
          Date:"30/08/2021",
          

      },
      {
          id: 10,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone:"012312321",
          Total: '1.500.000',
          StatusOrder: 'Chờ xác nhận',
          StatusCount: 'Đã thanh toán',
          Trading:"Giao hàng tiết kiệm",
          Date:"30/08/2021",
          

      },
      {
          id: 11,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone:"012312321",
          Total: '1.500.000',
          StatusOrder: 'Chờ lấy hàng',
          StatusCount: 'Chưa thanh toán',
          Trading:"Giao hàng tiết kiệm",
          Date:"30/08/2021",
         

      },
      {
          id: 12,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone:"012312321",
          Total: '1.500.000',
          StatusOrder: 'Chờ lấy hàng',
          StatusCount: 'Chưa thanh toán',
          Trading:"Giao hàng tiết kiệm",
          Date:"30/08/2021",
         

      },
      {
          id: 13,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone:"012312321",
          Total: '1.500.000',
          StatusOrder: 'Chờ lấy hàng',
          StatusCount: 'Chưa thanh toán',
          Trading:"Giao hàng tiết kiệm",
          Date:"30/08/2021",
         

      },
      {
          id: 14,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone:"012312321",
          Total: '1.500.000',
          StatusOrder: 'Chờ lấy hàng',
          StatusCount: 'Chưa thanh toán',
          Trading:"Giao hàng tiết kiệm",
          Date:"30/08/2021",
         

      },
      {
          id: 15,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone:"012312321",
          Total: '1.500.000',
          StatusOrder: 'Chờ lấy hàng',
          StatusCount: 'Chưa thanh toán',
          Trading:"Giao hàng tiết kiệm",
          Date:"30/08/2021",
         

      },
      {
          id: 16,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone:"012312321",
          Total: '1.500.000',
          StatusOrder: 'Chờ lấy hàng',
          StatusCount: 'Chưa thanh toán',
          Trading:"Giao hàng tiết kiệm",
          Date:"30/08/2021",
         

      },
      {
          id: 17,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone:"012312321",
          Total: '1.500.000',
          StatusOrder: 'Chờ lấy hàng',
          StatusCount: 'Chưa thanh toán',
          Trading:"Giao hàng tiết kiệm",
          Date:"30/08/2021",
         

      },
  ];
  tabsIcon2 = [
    {
      name: 'Tất cả',
      count: 99,
      content: "Content of Tab Pane 1"
    },
    {
      name: 'Chờ xác nhận',
      count: 85,
      content: "Content of Tab Pane 2"
    },
    {
      name: 'Chờ lấy hàng',
      count: 80,
      content: "Content of Tab Pane 3"
    },
    {
      name: 'Đang giao',
      count: 99,
      content: "Content of Tab Pane 1"
    },
    {
      name: 'Đã giao',
      count: 85,
      content: "Content of Tab Pane 2"
    },
    {
      name: 'Đã hủy',
      count: 80,
      content: "Content of Tab Pane 3"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onSelectChange(value:TDSSafeAny){
    console.log(value);
  }
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
        this.expandSet.add(id);
    } else {
        this.expandSet.delete(id);
    }
}

}
