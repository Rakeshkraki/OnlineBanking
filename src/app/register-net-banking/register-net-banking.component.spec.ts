import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNetBankingComponent } from './register-net-banking.component';

describe('RegisterNetBankingComponent', () => {
  let component: RegisterNetBankingComponent;
  let fixture: ComponentFixture<RegisterNetBankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterNetBankingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterNetBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
