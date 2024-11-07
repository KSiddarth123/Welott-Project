import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilitaryUSGovTComponent } from './military-u-s-gov-t.component';

describe('MilitaryUSGovTComponent', () => {
  let component: MilitaryUSGovTComponent;
  let fixture: ComponentFixture<MilitaryUSGovTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MilitaryUSGovTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MilitaryUSGovTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
