import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
  host: { class: 'h-full flex flex-col overflow-hidden ' },

})
export class ReviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
