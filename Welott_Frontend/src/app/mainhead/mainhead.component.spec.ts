import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainheadComponent } from './mainhead.component';

describe('MainheadComponent', () => {
  let component: MainheadComponent;
  let fixture: ComponentFixture<MainheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainheadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
