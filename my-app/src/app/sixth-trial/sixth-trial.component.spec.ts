import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthTrialComponent } from './sixth-trial.component';

describe('SixthTrialComponent', () => {
  let component: SixthTrialComponent;
  let fixture: ComponentFixture<SixthTrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixthTrialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SixthTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
