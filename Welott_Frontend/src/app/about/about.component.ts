import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  stories: any;
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