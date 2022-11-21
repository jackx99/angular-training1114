import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFormsComponent } from './prod-forms.component';

describe('ProdFormsComponent', () => {
  let component: ProdFormsComponent;
  let fixture: ComponentFixture<ProdFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
