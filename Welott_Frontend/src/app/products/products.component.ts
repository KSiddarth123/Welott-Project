import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // 'styleUrls' should be plural
})
export class ProductsComponent implements OnInit {
  items = [
    { image: '../../assets/productsimages/072214-0016.jpg', alt: '072214-0016', desc: '25 LB DUCTILE IRON CASTING' },
    { image: '../../assets/productsimages/072214-0063.jpg', alt: '072214-0063', desc: '48 LB STEEL FORGING' },
    { image: '../../assets/productsimages/072214-0079.jpg', alt: '072214-0079', desc: '11 LB ALUMINUM DIE CASTING MACHINED' },
    { image: '../../assets/productsimages/072214-0222.jpg', alt: '072214-0222', desc: '7 LB STEEL CASTING ASSEMBLY' },
    { image: '../../assets/productsimages/072214-0086.jpg', alt: '072214-0086', desc: '28 LB STEEL CASTING MACHINED' },
    { image: '../../assets/productsimages/072214-0173.jpg', alt: '072214-0173', desc: '24 LB STEEL CASTING ASSEMBLY' },
    { image: '../../assets/productsimages/072214-0253.jpg', alt: '072214-0253', desc: 'MISC. STAINLESS STEEL FABRICATIONS' },
    { image: '../../assets/productsimages/072214-0320.jpg', alt: '072214-0320', desc: '16 LB ALUMINUM DIE CASTING' },
    { image: '../../assets/productsimages/072214-0323.jpg', alt: '072214-0323', desc: '22 LB STAINLESS STEEL CASTING' },
    { image: '../../assets/productsimages/072214-0356.jpg', alt: '072214-0356', desc: '47 LB ALUMINUM DIE CASTING' },
    { image: '../../assets/productsimages/072214-0443.jpg', alt: '072214-0443', desc: '98 LB STEEL FORGING MACHINED' },
    { image: '../../assets/productsimages/072214-0458.jpg', alt: '072214-0458', desc: '11 LB ALUMINUM PERMANENT MOLD CASTING' },
    { image: '../../assets/productsimages/072214-0495.jpg', alt: '072214-0495', desc: '3307 LB / 69" DIAMETER / STEEL CASTING' },
    { image: '../../assets/productsimages/072214-0171.jpg', alt: '072214-0171', desc: '3 LB ALUMINUM DIE CASTING MACHINED' },
    { image: '../../assets/productsimages/072914_0689.jpg', alt: '072914_0689', desc: '628 LB / STEEL FORGING/MACHINED' }
  ];

  customOptions: any = {
    loop: true,
    margin: 20,  // Adds space between carousel items
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1  // 1 item on small screens
      },
      600: {
        items: 3  // 3 items on medium screens
      },
      1000: {
        items: 5  // 5 items on larger screens, with blank space on sides
      }
    }
  };
  
  
  

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
