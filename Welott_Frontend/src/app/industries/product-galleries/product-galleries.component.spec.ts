import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGalleriesComponent } from './product-galleries.component';

describe('ProductGalleriesComponent', () => {
  let component: ProductGalleriesComponent;
  let fixture: ComponentFixture<ProductGalleriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductGalleriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductGalleriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
