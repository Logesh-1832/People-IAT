import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdTrialComponent } from './third-trial.component';

describe('ThirdTrialComponent', () => {
  let component: ThirdTrialComponent;
  let fixture: ComponentFixture<ThirdTrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdTrialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
