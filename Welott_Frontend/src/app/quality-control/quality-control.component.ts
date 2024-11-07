import { Component } from '@angular/core';

@Component({
  selector: 'app-quality-control',
  templateUrl: './quality-control.component.html',
  styleUrl: './quality-control.component.css'
})
export class QualityControlComponent {
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
