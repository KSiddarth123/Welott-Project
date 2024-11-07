import { Component } from '@angular/core';

@Component({
  selector: 'app-capabilities',
  templateUrl:'./capabilities.component.html',
  styleUrl: './capabilities.component.css'
})
export class CapabilitiesComponent {
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