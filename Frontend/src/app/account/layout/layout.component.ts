import { Component, OnInit } from '@angular/core';
import { storeDTO } from 'src/app/model/store.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  host: { class: 'overflow-hidden' },
})
export class LayoutComponent implements OnInit {
  constructor() {}
  public contact: number = 1;

  stores:storeDTO[]=[]
  ngOnInit(): void {}
}
