import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hrm-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
  host: {class: 'h-full w-full flex'},
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
