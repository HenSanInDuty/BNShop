import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-modal-block',
  templateUrl: './modal-block.component.html',
  styleUrls: ['./modal-block.component.scss']
})
export class ModalBlockComponent implements OnInit {
  isVisible = false;
  constructor() { }
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log("Button ok clicked!");
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log("Button cancel clicked!");
    this.isVisible = false;
  }

  ngOnInit(): void {
  }

}
