import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddPromotionsComponent } from './modal-add-promotions.component';

describe('ModalAddPromotionsComponent', () => {
  let component: ModalAddPromotionsComponent;
  let fixture: ComponentFixture<ModalAddPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddPromotionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
