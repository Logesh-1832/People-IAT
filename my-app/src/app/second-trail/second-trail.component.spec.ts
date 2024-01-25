import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTrailComponent } from './second-trail.component';

describe('SecondTrailComponent', () => {
  let component: SecondTrailComponent;
  let fixture: ComponentFixture<SecondTrailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondTrailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondTrailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
