import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AftermarketAutomotiveComponent } from './aftermarket-automotive.component';

describe('AftermarketAutomotiveComponent', () => {
  let component: AftermarketAutomotiveComponent;
  let fixture: ComponentFixture<AftermarketAutomotiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AftermarketAutomotiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AftermarketAutomotiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
