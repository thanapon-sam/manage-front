import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChapterfourComponent } from './user-chapterfour.component';

describe('UserChapterfourComponent', () => {
  let component: UserChapterfourComponent;
  let fixture: ComponentFixture<UserChapterfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChapterfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChapterfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
