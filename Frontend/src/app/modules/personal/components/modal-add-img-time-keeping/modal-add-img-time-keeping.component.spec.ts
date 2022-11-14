import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddImgTimeKeepingComponent } from './modal-add-img-time-keeping.component';

describe('ModalAddImgTimeKeepingComponent', () => {
  let component: ModalAddImgTimeKeepingComponent;
  let fixture: ComponentFixture<ModalAddImgTimeKeepingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddImgTimeKeepingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddImgTimeKeepingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
