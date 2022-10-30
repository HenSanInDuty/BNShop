import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTransportersComponent } from './review-transporters.component';

describe('ReviewTransportersComponent', () => {
  let component: ReviewTransportersComponent;
  let fixture: ComponentFixture<ReviewTransportersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewTransportersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewTransportersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
