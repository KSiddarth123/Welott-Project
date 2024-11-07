import { Component } from '@angular/core';


@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrl: './industries.component.css'
})
export class IndustriesComponent {
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



