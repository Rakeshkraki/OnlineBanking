import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedDetailsComponent } from './generated-details.component';

describe('GeneratedDetailsComponent', () => {
  let component: GeneratedDetailsComponent;
  let fixture: ComponentFixture<GeneratedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneratedDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneratedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
