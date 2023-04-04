import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChapterfiveComponent } from './user-chapterfive.component';

describe('UserChapterfiveComponent', () => {
  let component: UserChapterfiveComponent;
  let fixture: ComponentFixture<UserChapterfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChapterfiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChapterfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
