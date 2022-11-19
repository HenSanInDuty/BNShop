import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConfirmOtpComponent } from './modal-confirm-otp.component';

describe('ModalConfirmOtpComponent', () => {
  let component: ModalConfirmOtpComponent;
  let fixture: ComponentFixture<ModalConfirmOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalConfirmOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
