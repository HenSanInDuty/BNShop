import { Component, OnInit } from '@angular/core';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'hrm-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  listOfData: Array<TDSSafeAny> = [
    {
      image: "assets/images/causual1.jpg",
    },
    {
      image: "assets/images/causual2.png",
    },
    {
      image: "assets/images/causual1.jpg",
    },
  ];

  effect = "scrollx";
  constructor() { }

  ngOnInit(): void {
  }

}
