import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionthreeComponent } from './questionthree.component';

describe('QuestionthreeComponent', () => {
  let component: QuestionthreeComponent;
  let fixture: ComponentFixture<QuestionthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
