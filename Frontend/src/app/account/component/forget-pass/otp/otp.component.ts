import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  move(e: any, p: any, c: any, n: any) {
    var length = c.value.length;
    console.log(length);
    var maxlenth = c.getAttribute('maxlength');
    console.log(maxlenth);
    if (length == maxlenth) {
      if (n != '') {
        n.focus();
      }
    }
    if (e.key === 'Backspace') {
      if (p != '') {
        p.focus();
      }
    }
  }
}
