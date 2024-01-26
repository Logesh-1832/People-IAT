import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthTrailComponent } from './fourth-trail.component';

describe('FourthTrailComponent', () => {
  let component: FourthTrailComponent;
  let fixture: ComponentFixture<FourthTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourthTrailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourthTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
