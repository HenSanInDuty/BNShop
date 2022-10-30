import { Component, OnInit } from '@angular/core';
import { TDSContextMenuService } from 'tds-ui/dropdown';
import { TDSSafeAny } from 'tds-ui/shared/utility';

interface FilterStatusItemDTO {
  name: string;
  value: TDSSafeAny,
  count?: number,
  disabled?: boolean,
}
@Component({
  selector: 'app-review-transporters',
  templateUrl: './review-transporters.component.html',
  styleUrls: ['./review-transporters.component.scss'],
  host: { class: 'h-full flex flex-col overflow-hidden ' }
})
export class ReviewTransportersComponent implements OnInit {
  expandSet = new Set<number>();
  star = 0;
  value: number = 0;
  lstStar: Array<FilterStatusItemDTO> = [
    {
      name: 'Tất cả',
      value: 0,
      count: 100,
      disabled: false
    },
    {
      name: '1',
      value: 1,
      count: 20,
      disabled: false
    },
    {
      name: '2',
      value: 2,
      count: 60,
      disabled: false
    },
    {
      name: '3',
      value: 3,
      count: 20,
      disabled: false
    },
    {
      name: '4',
      value: 4,
      count: 20,
      disabled: false
    },

    {
      name: '5',
      value: 5,
      count: 20,
      disabled: true
    },
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
  listOfData = [
      {
          id: 1,
          Transporter: "Giao hàng tiết kiệm",
          IdOrder: 'T1261964561',
          Customer: "Sun Happy",
          Phone:"012312321",
          review: 5,
          product:"Nón hiphop s econdhand",
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Đã trả lời',
      },
      {
          id: 1,
          Transporter: "Giao hàng tiết kiệm",
          IdOrder: 'T1261964561',
          Customer: "Sun Happy",
          Phone:"012312321",
          review: 2,
          product:"Nón hiphop s econdhand",
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Đã trả lời',
      },
      {
          id: 1,
          Transporter: "Viettel Post",
          IdOrder: 'T1261964561',
          Customer: "Sun Happy",
          Phone:"012312321",
          review: 5,
          product:"Nón hiphop s econdhand",
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Chưa trả lời',
      },
      {
          id: 1,
          Transporter: "Giao hàng tiết kiệm",
          IdOrder: 'T1261964561',
          Customer: "Sun Happy",
          Phone:"012312321",
          review: 1,
          product:"Nón hiphop s econdhand",
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Đã trả lời',
      },
      {
          id: 1,
          Transporter: "Viettel Post",
          IdOrder: 'T1261964561',
          Customer: "Sun Happy",
          Phone:"012312321",
          review: 3,
          product:"Nón hiphop s econdhand",
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Đã trả lời',
      },
      {
          id: 1,
          Transporter: "Giao hàng tiết kiệm",
          IdOrder: 'T1261964561',
          Customer: "Sun Happy",
          Phone:"012312321",
          review: 5,
          product:"Nón hiphop s econdhand",
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Chưa trả lời',
      },
      {
          id: 1,
          Transporter: "Giao hàng tiết kiệm",
          IdOrder: 'T1261964561',
          Customer: "Sun Happy",
          Phone:"012312321",
          review: 5,
          product:"Nón hiphop s econdhand",
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Chưa trả lời',
      },
      {
          id: 1,
          Transporter: "Giao hàng tiết kiệm",
          IdOrder: 'T1261964561',
          Customer: "Sun Happy",
          Phone:"012312321",
          review: 5,
          product:"Nón hiphop s econdhand",
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Chưa trả lời',
      },
      {
          id: 1,
          Transporter: "Giao hàng tiết kiệm",
          IdOrder: 'T1261964561',
          Customer: "Sun Happy",
          Phone:"012312321",
          review: 5,
          product:"Nón hiphop s econdhand",
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Chưa trả lời',
      },
      {
          id: 1,
          Transporter: "Giao hàng tiết kiệm",
          IdOrder: 'T1261964561',
          Customer: "Sun Happy",
          Phone:"012312321",
          review: 5,
          product:"Nón hiphop s econdhand",
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Chưa trả lời',
      },
      {
          id: 1,
          Transporter: "Giao hàng tiết kiệm",
          IdOrder: 'T1261964561',
          Customer: "Sun Happy",
          Phone:"012312321",
          review: 5,
          product:"Nón hiphop s econdhand",
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Chưa trả lời',
      },
      {
          id: 1,
          Transporter: "Giao hàng tiết kiệm",
          IdOrder: 'T1261964561',
          Customer: "Sun Happy",
          Phone:"012312321",
          review: 5,
          product:"Nón hiphop s econdhand",
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Chưa trả lời',
      },
      {
          id: 1,
          Transporter: "Giao hàng tiết kiệm",
          IdOrder: 'T1261964561',
          Customer: "Sun Happy",
          Phone:"012312321",
          review: 5,
          product:"Nón hiphop s econdhand",
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Chưa trả lời',
      },
      {
          id: 1,
          Transporter: "Giao hàng tiết kiệm",
          IdOrder: 'T1261964561',
          Customer: "Sun Happy",
          Phone:"012312321",
          review: 5,
          product:"Nón hiphop s econdhand",
          content: 'Shop trả lời rất nhiệt tình, giải đáp thắc mắc vui vẻ',
          Date:"30/08/2021",
          Status: 'Chưa trả lời',
      },

     
  ];
  constructor(  private tdsContextMenuService: TDSContextMenuService) { }

  ngOnInit(): void {
  }
  onSelectChange(value: TDSSafeAny) {
    
    console.log('selectChange',value)
  }
  onModelChange(value: TDSSafeAny) {

    console.log('ngModelChange', value)
  }
  onChange(e: any) {
    console.log(e);
  }
  onFocus(e: any){
      console.log("onFocus",e)
  }
  onBlur(e: any){
      console.log("onBlur",e)
  }
  onKeyDown(e: any){
      console.log("onKeyDown",e)
  }
  onItemHover(e: any){
      console.log("onItemHover",e)
  }
  onClickDropdown(e: MouseEvent) {
    e.stopPropagation();
    e.preventDefault();
  }

  onClickFieldSearch(str: any) {
    this.fieldDropdown = str;
  }
  fieldDropdown: any = {
    id: 1,
    name: "Tên khách hàng",
  };
  listDataOfDropdown: Array<any> = [
    {
      id: 1,
      name: "Tên khách hàng",
    },
    {
      id: 2,
      name: "Nhà vận chuyển",
    },
    {
      id: 3,
      name: "Mã đơn vị",
    },
   
  ];

}
