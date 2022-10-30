import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-cus',
  templateUrl: './modal-cus.component.html',
  styleUrls: ['./modal-cus.component.scss'],
  host: { class: 'flex flex-col rounded-md w-1/4 h-1/2 bg-white gap-y-4  ' },
})
export class ModalCusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
