import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialitiesListComponent } from './specialities-list.component';

describe('SpecialitiesListComponent', () => {
  let component: SpecialitiesListComponent;
  let fixture: ComponentFixture<SpecialitiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialitiesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
