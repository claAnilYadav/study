import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserLoginComponent } from './create-user-login.component';

describe('CreateUserLoginComponent', () => {
  let component: CreateUserLoginComponent;
  let fixture: ComponentFixture<CreateUserLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUserLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
