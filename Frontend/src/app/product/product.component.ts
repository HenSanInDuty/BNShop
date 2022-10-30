import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  host: { class: 'h-full flex flex-col overflow-hidden ' },
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
