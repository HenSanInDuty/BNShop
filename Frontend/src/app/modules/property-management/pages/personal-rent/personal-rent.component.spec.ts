import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRentComponent } from './personal-rent.component';

describe('PersonalRentComponent', () => {
  let component: PersonalRentComponent;
  let fixture: ComponentFixture<PersonalRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
