import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChapteroneComponent } from './user-chapterone.component';

describe('UserChapteroneComponent', () => {
  let component: UserChapteroneComponent;
  let fixture: ComponentFixture<UserChapteroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserChapteroneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserChapteroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
