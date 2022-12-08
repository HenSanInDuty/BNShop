import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeliveryStatusComponent } from './modal-delivery-status.component';

describe('ModalDeliveryStatusComponent', () => {
  let component: ModalDeliveryStatusComponent;
  let fixture: ComponentFixture<ModalDeliveryStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeliveryStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeliveryStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
