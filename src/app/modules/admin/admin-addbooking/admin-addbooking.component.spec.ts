import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddbookingComponent } from './admin-addbooking.component';

describe('AdminAddbookingComponent', () => {
  let component: AdminAddbookingComponent;
  let fixture: ComponentFixture<AdminAddbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
