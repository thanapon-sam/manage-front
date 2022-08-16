import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustManageComponent } from './cust-manage.component';

describe('CustManageComponent', () => {
  let component: CustManageComponent;
  let fixture: ComponentFixture<CustManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
