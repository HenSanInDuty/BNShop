import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TDSSafeAny } from 'tds-ui/shared/utility';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  host: { class: ' w-1/2  border border-neutral-2-200 shadow-xl p-8  overflow-y-auto' },
})
export class RegisterFormComponent implements OnInit {
  public listSelected = [];
  public listData = [

  ]
  form!: FormGroup;
  onSubmit(): void {
    console.log(this.form);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      taiKhoan: ['', Validators.required],
      matKhau: ['', Validators.required],
    });
  }

  onChange(e: TDSSafeAny) {

    console.log(e)
  }
  onModelChange(e: TDSSafeAny) {

    console.log(e)
  }

}
