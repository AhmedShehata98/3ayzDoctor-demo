import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthStepsListComponent } from './health-steps-list.component';

describe('HealthStepsListComponent', () => {
  let component: HealthStepsListComponent;
  let fixture: ComponentFixture<HealthStepsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthStepsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HealthStepsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
