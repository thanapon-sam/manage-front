import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustOrderbillComponent } from './cust-orderbill.component';

describe('CustOrderbillComponent', () => {
  let component: CustOrderbillComponent;
  let fixture: ComponentFixture<CustOrderbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustOrderbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustOrderbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
