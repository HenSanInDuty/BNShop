import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeleteResourceSticketComponent } from './modal-delete-resource-sticket.component';

describe('ModalDeleteResourceSticketComponent', () => {
  let component: ModalDeleteResourceSticketComponent;
  let fixture: ComponentFixture<ModalDeleteResourceSticketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDeleteResourceSticketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDeleteResourceSticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
