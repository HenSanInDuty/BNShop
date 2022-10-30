import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.scss'],
})
export class ResetpassComponent implements OnInit {
  forgotForm!: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.forgotForm = this.fb.group({
      phoneNumber: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/i)
      ])],
    });
  }

  onSubmit(): void {
    console.log(this.forgotForm);
  }
}
