import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthGetAccountDetailsComponent } from './auth-get-account-details.component';

describe('AuthGetAccountDetailsComponent', () => {
  let component: AuthGetAccountDetailsComponent;
  let fixture: ComponentFixture<AuthGetAccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthGetAccountDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthGetAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
