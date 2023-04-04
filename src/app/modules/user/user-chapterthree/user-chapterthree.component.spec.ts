import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChapterthreeComponent } from './user-chapterthree.component';

describe('UserChapterthreeComponent', () => {
  let component: UserChapterthreeComponent;
  let fixture: ComponentFixture<UserChapterthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChapterthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChapterthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
