import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAccountUsersComponent } from './all-account-users.component';

describe('AllAccountUsersComponent', () => {
  let component: AllAccountUsersComponent;
  let fixture: ComponentFixture<AllAccountUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllAccountUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllAccountUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
