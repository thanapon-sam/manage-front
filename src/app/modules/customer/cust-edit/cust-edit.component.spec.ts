import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustEditComponent } from './cust-edit.component';

describe('CustEditComponent', () => {
  let component: CustEditComponent;
  let fixture: ComponentFixture<CustEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
