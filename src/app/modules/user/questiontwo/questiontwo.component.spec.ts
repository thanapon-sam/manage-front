import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestiontwoComponent } from './questiontwo.component';

describe('QuestiontwoComponent', () => {
  let component: QuestiontwoComponent;
  let fixture: ComponentFixture<QuestiontwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestiontwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestiontwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
