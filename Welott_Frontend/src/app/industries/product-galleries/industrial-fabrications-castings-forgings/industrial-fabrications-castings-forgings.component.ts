import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { ImageService } from './services/image.service'; // Import the image service
import { IAlbum } from './models/album.interface'; // Import the album interface

@Component({
  selector: 'app-industrial-fabrications-castings-forgings',
  templateUrl: './industrial-fabrications-castings-forgings.component.html',
  styleUrls: ['./industrial-fabrications-castings-forgings.component.css']
})
export class IndustrialFabricationsCastingsForgingsComponent implements OnInit, AfterViewInit {
  album: IAlbum[] = [];
  isLoading: boolean = true;  // Track loading state
  email: string = 'contact@welott.com';
  private scrollPosition: number = 0; // To store the scroll position

  constructor(private _lightbox: Lightbox, private imageService: ImageService) {}

  ngOnInit() {
    this.loadImages('industrial-fabrications-castings-forgings');  // Load images for this gallery
  }

  ngAfterViewInit() {
    this.initializeMenuToggle(); // Initialize menu toggle after the view is rendered
  }

  // Load images from the API
  loadImages(galleryName: string) {
    this.imageService.getImages(galleryName).subscribe(
      (data: IAlbum[]) => {
        this.album = data;
        this.isLoading = false;
      },
      (error) => {
        console.error('Error fetching images', error);
        this.isLoading = false;
      }
    );
  }

  // Preload images
  preloadImages() {
    this.album.forEach(item => {
      const img = new Image();
      img.src = item.src; // Preload all images
    });
  }

  // Initialize the menu toggle functionality
  initializeMenuToggle() {
    const menuToggle = document.querySelector<HTMLAnchorElement>('.mtoggle');
    const mainNav = document.getElementById('main_nav') as HTMLElement;

    if (menuToggle && mainNav) {
      menuToggle.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault(); // Prevent default anchor behavior
        mainNav.classList.toggle('visible'); // Toggle class for visibility
      });
    }
  }

  // Open the lightbox
  openLightbox(index: number): void {
    this.scrollPosition = window.scrollY; // Save the current scroll position
    this._lightbox.open(this.album, index);
    this.toggleBodyScroll(false); // Prevent scrolling when lightbox is open
  }

  // Close the lightbox
  closeLightbox(): void {
    this._lightbox.close();
    this.toggleBodyScroll(true); // Allow scrolling when lightbox is closed
    window.scrollTo(0, this.scrollPosition); // Restore the previous scroll position
  }

  // Enable or disable body scroll
  private toggleBodyScroll(allowScroll: boolean = true) {
    const body = document.body;
    if (allowScroll) {
      // Enable scrolling
      body.classList.remove('lightbox-open');
      window.scrollTo(0, this.scrollPosition); // Restore previous scroll position
    } else {
      // Disable scrolling
      this.scrollPosition = window.scrollY;
      body.classList.add('lightbox-open');
    }
  }
}
