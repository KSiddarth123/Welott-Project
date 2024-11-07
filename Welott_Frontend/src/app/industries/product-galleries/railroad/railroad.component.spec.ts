import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailroadComponent } from './railroad.component';

describe('RailroadComponent', () => {
  let component: RailroadComponent;
  let fixture: ComponentFixture<RailroadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RailroadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RailroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
