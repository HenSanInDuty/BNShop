import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalChosenAddressComponent } from './modal-chosen-address.component';

describe('ModalChosenAddressComponent', () => {
  let component: ModalChosenAddressComponent;
  let fixture: ComponentFixture<ModalChosenAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalChosenAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalChosenAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
