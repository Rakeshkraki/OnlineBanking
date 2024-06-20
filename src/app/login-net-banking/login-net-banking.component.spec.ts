import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNetBankingComponent } from './login-net-banking.component';

describe('LoginNetBankingComponent', () => {
  let component: LoginNetBankingComponent;
  let fixture: ComponentFixture<LoginNetBankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginNetBankingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginNetBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
