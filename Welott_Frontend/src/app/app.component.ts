import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home';

  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(private titleService: Title, private router: Router) {
    // Subscribe to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateTitle();
    });
  }

  // Update the title based on the current route
  updateTitle() {
    const fullRoute = this.router.url; // Get full route
    const currentRoute = fullRoute.split('/')[1]; // Get the first part of the route
    let pageTitle = 'Home'; // Default title

    // Set title based on the route
    switch (currentRoute) {
      case 'about':
        pageTitle = 'About';
        break;
      case 'products':
        pageTitle = 'Products';
        break;
      case 'industries':
        if (fullRoute.includes('product-galleries/aftermarket-automotive')) {
          pageTitle = 'Aftermarket Automotive';
        } else if (fullRoute.includes('product-galleries/snow-removal-road-maintenance')) {
          pageTitle = 'Snow Removal & Road Maintenance';
        } else if (fullRoute.includes('product-galleries/industrial-fabrications-castings-forgings')) {
          pageTitle = 'Industrial Fabrications, Castings & Forgings';
        } else if (fullRoute.includes('product-galleries/truck-trailer')) {
          pageTitle = 'Truck & Trailer';
        } else if (fullRoute.includes('product-galleries/military-u-s-gov-t')) {
          pageTitle = 'Military & U.S. Gov\'t';
        } else if (fullRoute.includes('product-galleries/construction-equipment')) {
          pageTitle = 'Construction Equipment';
        } else if (fullRoute.includes('product-galleries/gas-oil-mining')) {
          pageTitle = 'Gas, Oil & Mining';
        } else if (fullRoute.includes('product-galleries/railroad')) {
          pageTitle = 'Railroad';
        } else if (fullRoute.includes('product-galleries')) {
          pageTitle = 'Product Galleries';
        } else {
          pageTitle = 'Industries';
        }
        break;
      case 'contact':
        pageTitle = 'Contact';
        break;
      case 'capabilities':
        pageTitle = 'Capabilities';
        break;
      case 'facilities':
        pageTitle = 'Facilities';
        break;
      case 'quality-control':
        pageTitle = 'Quality-Control';
        break;
      default:
        pageTitle = 'Home'; // Default page title
    }

    this.titleService.setTitle(pageTitle); // Set the new title
  }
}
