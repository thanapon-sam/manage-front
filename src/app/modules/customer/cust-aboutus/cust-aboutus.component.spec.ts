import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustAboutusComponent } from './cust-aboutus.component';

describe('CustAboutusComponent', () => {
  let component: CustAboutusComponent;
  let fixture: ComponentFixture<CustAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustAboutusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
