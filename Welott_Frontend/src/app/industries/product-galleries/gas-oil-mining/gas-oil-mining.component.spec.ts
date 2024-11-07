import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GasOilMiningComponent } from './gas-oil-mining.component';

describe('GasOilMiningComponent', () => {
  let component: GasOilMiningComponent;
  let fixture: ComponentFixture<GasOilMiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GasOilMiningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GasOilMiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
