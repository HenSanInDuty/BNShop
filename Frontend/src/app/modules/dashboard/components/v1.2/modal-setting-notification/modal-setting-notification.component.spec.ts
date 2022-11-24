import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSettingNotificationComponent } from './modal-setting-notification.component';

describe('ModalSettingNotificationComponent', () => {
  let component: ModalSettingNotificationComponent;
  let fixture: ComponentFixture<ModalSettingNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSettingNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSettingNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
