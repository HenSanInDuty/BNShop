import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';


@Component({
  selector: 'app-order-refund-list',
  templateUrl: './order-refund-list.component.html',
  styleUrls: ['./order-refund-list.component.scss'],
  host: { class: 'h-full w-full flex flex-col bg-white' },
})
export class OrderRefundListComponent implements OnInit {

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
    
   
    
  ]
  listOfData = [
      {
          id: 1,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"Đã hủy", 
          RDate:"30/08/2021",
          Pdate:"07/09/2021",
          StatusRefund:"Từ chối",
          Stranfort:"Kiện hàng đã giao cho bưu cục",
        
      },
      {
          id: 2,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"Đã giao hàng",
          RDate:"30/08/2021",
          Pdate:"07/09/2021",
          StatusRefund:"Chưa xử lý",
          Stranfort:"Kiện hàng đã giao cho bưu cục",
        
      },
      {
          id: 3,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"Đã giao hàng",
          RDate:"30/08/2021",
          Pdate:"07/09/2021",
          StatusRefund:"Chưa xử lý",
          Stranfort:"Kiện hàng đã giao cho bưu cục",
        
      },
      {
          id: 4,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"Đã giao hàng",
          RDate:"30/08/2021",
          Pdate:"07/09/2021",
          StatusRefund:"Đang xử lý",
          Stranfort:"Kiện hàng đã giao cho bưu cục",
        
      },
      {
          id: 5,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"Đã giao hàng",
          RDate:"30/08/2021",
          Pdate:"07/09/2021",
          StatusRefund:"Đang xử lý",
          Stranfort:"Kiện hàng đã giao cho bưu cục",
        
      },
      {
          id: 6,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"Đã giao hàng",
          RDate:"30/08/2021",
          Pdate:"07/09/2021",
          StatusRefund:"Đã hoàn tiền",
          Stranfort:"Kiện hàng đã giao cho bưu cục",
        
      },
      {
          id: 7,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"Đã giao hàng",
          RDate:"30/08/2021",
          Pdate:"07/09/2021",
          StatusRefund:"Đã hoàn tiền",
          Stranfort:"Kiện hàng đã giao cho bưu cục",
        
      },
      {
          id: 8,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"Đã giao hàng",
          RDate:"30/08/2021",
          Pdate:"07/09/2021",
          StatusRefund:"Đã hoàn tiền",
          Stranfort:"Kiện hàng đã giao cho bưu cục",
        
      },
      {
          id: 9,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"Đã giao hàng",
          RDate:"30/08/2021",
          Pdate:"07/09/2021",
          StatusRefund:"Đã hoàn tiền",
          Stranfort:"Kiện hàng đã giao cho bưu cục",
        
      },
      {
          id: 10,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"Đã giao hàng",
          RDate:"30/08/2021",
          Pdate:"07/09/2021",
          StatusRefund:"Đã hoàn tiền",
          Stranfort:"Kiện hàng đã giao cho bưu cục",
        
      },
      {
          id: 11,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"Đã giao hàng",
          RDate:"30/08/2021",
          Pdate:"07/09/2021",
          StatusRefund:"Đã hoàn tiền",
          Stranfort:"Kiện hàng đã giao cho bưu cục",
        
      },
      {
          id: 12,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"Đã giao hàng",
          RDate:"30/08/2021",
          Pdate:"07/09/2021",
          StatusRefund:"Đã hoàn tiền",
          Stranfort:"Kiện hàng đã giao cho bưu cục",
        
      },
      {
          id: 13,
          IdOrder: 'DH 023165',
          Customer: "Sun Happy",
          Phone: "12321323",
          total:"120.000",
          StatusOrder:"Đã giao hàng",
          RDate:"30/08/2021",
          Pdate:"07/09/2021",
          StatusRefund:"Đã hoàn tiền",
          Stranfort:"Kiện hàng đã giao cho bưu cục",
        
      },
      
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
