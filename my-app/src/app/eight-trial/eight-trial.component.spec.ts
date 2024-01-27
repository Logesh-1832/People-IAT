import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightTrialComponent } from './eight-trial.component';

describe('EightTrialComponent', () => {
  let component: EightTrialComponent;
  let fixture: ComponentFixture<EightTrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EightTrialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EightTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
