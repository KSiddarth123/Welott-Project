import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';
import { ImageService } from './services/image.service'; // Import the image service
import { IAlbum } from './models/album.interface'; // Import the album interface

@Component({
  selector: 'app-truck-trailer',
  templateUrl: './truck-trailer.component.html',
  styleUrls: ['./truck-trailer.component.css'] // Fixed styleUrls (plural)
})
export class TruckTrailerComponent implements OnInit {
  album: Array<any> = [];
  email: string = 'contact@welott.com';
  isLoading: boolean = true; // Track loading state

  constructor(private _lightbox: Lightbox, private imageService: ImageService) {}

  ngOnInit() {
    this.loadImages('truck-trailer'); // Load images for this gallery
  }

  // Fetch and load images from the API
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
  // Preload images after loading from API
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
    this._lightbox.open(this.album, index);
  }

  // Close the lightbox
  closeLightbox(): void {
    this._lightbox.close();
  }
}
