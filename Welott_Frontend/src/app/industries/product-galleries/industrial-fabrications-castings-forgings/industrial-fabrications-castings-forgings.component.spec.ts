import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialFabricationsCastingsForgingsComponent } from './industrial-fabrications-castings-forgings.component';

describe('IndustrialFabricationsCastingsForgingsComponent', () => {
  let component: IndustrialFabricationsCastingsForgingsComponent;
  let fixture: ComponentFixture<IndustrialFabricationsCastingsForgingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndustrialFabricationsCastingsForgingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndustrialFabricationsCastingsForgingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
