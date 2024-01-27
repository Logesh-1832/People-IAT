import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthTrialComponent } from './fifth-trial.component';

describe('FifthTrialComponent', () => {
  let component: FifthTrialComponent;
  let fixture: ComponentFixture<FifthTrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FifthTrialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FifthTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
