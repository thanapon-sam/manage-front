import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustAtmosphereComponent } from './cust-atmosphere.component';

describe('CustAtmosphereComponent', () => {
  let component: CustAtmosphereComponent;
  let fixture: ComponentFixture<CustAtmosphereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustAtmosphereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustAtmosphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
