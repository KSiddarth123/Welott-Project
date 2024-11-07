import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected: 'styleUrls'
})
export class HomeComponent {
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  customOptions: any = {
    loop: true,               // Allows infinite loop of items
    margin: 10,               // Space between items
    nav: false,                // Navigation buttons (Next/Prev)
    dots: false,               // Pagination dots
    autoplay: true,           // Automatically play the carousel
    autoplayTimeout: 5000,    // Time between slide transitions
    autoplayHoverPause: true, // Pause on hover
    items: 1,                 // Number of items to show per slide
    animateOut: 'fadeOut',    // Fade out transition effect
    animateIn: 'fadeIn',      // Fade in transition effect
    responsive: {             // Adjust settings for different screen sizes
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
    },
    nav: true
  }
  }
  ngOnInit() {
    const menuToggle = document.querySelector<HTMLAnchorElement>('.mtoggle');
    const mainNav = document.getElementById('main_nav') as HTMLElement;
  
    if (menuToggle && mainNav) {
      menuToggle.addEventListener('click', (e: MouseEvent) => {
        e.preventDefault();
        mainNav.classList.toggle('visible');
      });
    }
  }
}




