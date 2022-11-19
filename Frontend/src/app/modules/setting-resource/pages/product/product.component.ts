import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hrm-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  host: {class: 'h-full w-full flex'},
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
