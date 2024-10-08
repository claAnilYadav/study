import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditPlansComponent } from './credit-plans.component';

describe('CreditPlansComponent', () => {
  let component: CreditPlansComponent;
  let fixture: ComponentFixture<CreditPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
