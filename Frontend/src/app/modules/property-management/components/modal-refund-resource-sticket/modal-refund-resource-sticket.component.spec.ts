import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRefundResourceSticketComponent } from './modal-refund-resource-sticket.component';

describe('ModalRefundResourceSticketComponent', () => {
  let component: ModalRefundResourceSticketComponent;
  let fixture: ComponentFixture<ModalRefundResourceSticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRefundResourceSticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRefundResourceSticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
