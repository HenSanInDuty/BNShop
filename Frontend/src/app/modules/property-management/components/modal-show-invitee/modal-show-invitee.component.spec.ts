import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalShowInviteeComponent } from './modal-show-invitee.component';

describe('ModalShowInviteeComponent', () => {
  let component: ModalShowInviteeComponent;
  let fixture: ComponentFixture<ModalShowInviteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalShowInviteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalShowInviteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
