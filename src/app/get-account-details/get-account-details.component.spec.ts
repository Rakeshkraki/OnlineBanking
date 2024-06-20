import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAccountDetailsComponent } from './get-account-details.component';

describe('GetAccountDetailsComponent', () => {
  let component: GetAccountDetailsComponent;
  let fixture: ComponentFixture<GetAccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetAccountDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
