import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowRemovalRoadMaintenanceComponent } from './snow-removal-road-maintenance.component';

describe('SnowRemovalRoadMaintenanceComponent', () => {
  let component: SnowRemovalRoadMaintenanceComponent;
  let fixture: ComponentFixture<SnowRemovalRoadMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SnowRemovalRoadMaintenanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SnowRemovalRoadMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
