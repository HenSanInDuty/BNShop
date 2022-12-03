import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddPriceProductComponent } from './modal-add-price-product.component';

describe('ModalAddPriceProductComponent', () => {
  let component: ModalAddPriceProductComponent;
  let fixture: ComponentFixture<ModalAddPriceProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddPriceProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddPriceProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
