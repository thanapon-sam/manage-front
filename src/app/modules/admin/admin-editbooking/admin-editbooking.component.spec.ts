import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditbookingComponent } from './admin-editbooking.component';

describe('AdminEditbookingComponent', () => {
  let component: AdminEditbookingComponent;
  let fixture: ComponentFixture<AdminEditbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditbookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
