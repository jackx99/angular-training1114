import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustDetailComponent } from './cust-detail.component';

describe('CustDetailComponent', () => {
  let component: CustDetailComponent;
  let fixture: ComponentFixture<CustDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
