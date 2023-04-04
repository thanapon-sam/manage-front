import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChaptersixComponent } from './user-chaptersix.component';

describe('UserChaptersixComponent', () => {
  let component: UserChaptersixComponent;
  let fixture: ComponentFixture<UserChaptersixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChaptersixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChaptersixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
