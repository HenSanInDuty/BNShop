import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderRefundListComponent } from './order-refund-list.component';

describe('OrderRefundListComponent', () => {
  let component: OrderRefundListComponent;
  let fixture: ComponentFixture<OrderRefundListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderRefundListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderRefundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
