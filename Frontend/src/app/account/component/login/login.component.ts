import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  host: { class: 'w-full flex justify-center item-center' },
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder ) { }

  ngOnInit(): void { 
    this.loginForm = this.fb.group({
      taiKhoan: ['' , Validators.required],
      matKhau: ['' , Validators.required],
    });
  }

   onSubmit(): void {
    console.log(this.loginForm);
  }
}
