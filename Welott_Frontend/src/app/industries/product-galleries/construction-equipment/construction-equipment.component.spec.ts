import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionEquipmentComponent } from './construction-equipment.component';

describe('ConstructionEquipmentComponent', () => {
  let component: ConstructionEquipmentComponent;
  let fixture: ComponentFixture<ConstructionEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConstructionEquipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstructionEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
