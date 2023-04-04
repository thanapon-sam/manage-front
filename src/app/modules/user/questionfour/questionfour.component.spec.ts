import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionfourComponent } from './questionfour.component';

describe('QuestionfourComponent', () => {
  let component: QuestionfourComponent;
  let fixture: ComponentFixture<QuestionfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
