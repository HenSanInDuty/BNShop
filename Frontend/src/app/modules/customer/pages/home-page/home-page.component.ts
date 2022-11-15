import { Component, OnInit } from '@angular/core';
import { routeFadeMotion } from '@shared/animation/routeFade';
import { TDSSafeAny } from 'tds-ui/shared/utility';

@Component({
  selector: 'hrm-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    routeFadeMotion
  ],
})
export class HomePageComponent implements OnInit {
  

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
