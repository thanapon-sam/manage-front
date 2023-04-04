import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionfiveComponent } from './questionfive.component';

describe('QuestionfiveComponent', () => {
  let component: QuestionfiveComponent;
  let fixture: ComponentFixture<QuestionfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionfiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
