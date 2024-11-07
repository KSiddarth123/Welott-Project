import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-galleries',
  templateUrl: './product-galleries.component.html',
  styleUrls: ['./product-galleries.component.css'] // Fixed 'styleUrl' to 'styleUrls'
})
export class ProductGalleriesComponent implements OnInit {
  stories: any;

  ngOnInit() {
    this.initializeMenuToggle(); // Call the method to set up the toggle
  }

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
}
