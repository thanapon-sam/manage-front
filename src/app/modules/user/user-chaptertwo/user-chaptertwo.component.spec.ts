import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChaptertwoComponent } from './user-chaptertwo.component';

describe('UserChaptertwoComponent', () => {
  let component: UserChaptertwoComponent;
  let fixture: ComponentFixture<UserChaptertwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChaptertwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChaptertwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
