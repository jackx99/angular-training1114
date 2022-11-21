import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustFormsComponent } from './cust-forms.component';

describe('CustFormsComponent', () => {
  let component: CustFormsComponent;
  let fixture: ComponentFixture<CustFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
