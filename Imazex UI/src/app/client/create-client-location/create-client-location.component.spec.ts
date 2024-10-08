import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClientLocationComponent } from './create-client-location.component';

describe('CreateClientLocationComponent', () => {
  let component: CreateClientLocationComponent;
  let fixture: ComponentFixture<CreateClientLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateClientLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClientLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
