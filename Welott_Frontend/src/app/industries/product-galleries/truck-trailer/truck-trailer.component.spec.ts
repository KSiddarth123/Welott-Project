import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckTrailerComponent } from './truck-trailer.component';

describe('TruckTrailerComponent', () => {
  let component: TruckTrailerComponent;
  let fixture: ComponentFixture<TruckTrailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TruckTrailerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TruckTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
