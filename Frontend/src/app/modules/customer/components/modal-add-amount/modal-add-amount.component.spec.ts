import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddAmountComponent } from './modal-add-amount.component';

describe('ModalAddAmountComponent', () => {
  let component: ModalAddAmountComponent;
  let fixture: ComponentFixture<ModalAddAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddAmountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
