import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAllTransComponent } from './user-all-trans.component';

describe('UserAllTransComponent', () => {
  let component: UserAllTransComponent;
  let fixture: ComponentFixture<UserAllTransComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAllTransComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserAllTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
