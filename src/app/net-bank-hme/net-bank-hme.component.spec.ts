import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetBankHmeComponent } from './net-bank-hme.component';

describe('NetBankHmeComponent', () => {
  let component: NetBankHmeComponent;
  let fixture: ComponentFixture<NetBankHmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetBankHmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetBankHmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
