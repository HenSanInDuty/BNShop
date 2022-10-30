import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userDTO } from 'src/app/model/user.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  host: { class: 'w-1/2 bg-white border border-neutral-2-200 shadow-xl p-8 rounded-20' },
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup
  loginWithPasswordData: userDTO = {phoneNumber: '', password: ''}
  submitted = false;
 constructor(
              private fb: FormBuilder,
              private accountService: AccountService,
              private router: Router 
            ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern(/^[0-9]{10}$/i)])],
      password: ['', Validators.required],
    });
  }
  onLogin(){
    if(this.loginForm.valid){
      this.accountService.login(this.loginForm.value).subscribe(
        res=> {
          if(res !=null){
            localStorage.setItem('accessToken', res.accessToken)
            this.router.navigate(['/account/store'])
            alert('Đăng nhập thành công!!');
          }
        },
        err => alert('Đăng nhập thất bại !!')
      )
    }
  }
}
