import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMessegesComponent } from './admin-messeges.component';

describe('AdminMessegesComponent', () => {
  let component: AdminMessegesComponent;
  let fixture: ComponentFixture<AdminMessegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminMessegesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminMessegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
