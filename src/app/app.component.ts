import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHome = true;
  slideCls = 'slider_area'; // breadcrumb reveal animated
  breadcumText = '';
  breadcumLink = '';
  constructor(
    private router: Router
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (router.url === '/' || router.url === '/home') {
          this.isHome = true;
          this.slideCls = 'slider_area';
        } else {
          this.isHome = false;
          this.slideCls = 'breadcrumb reveal animated';
        }

        switch(router.url){
          case '/about':
            this.breadcumText = 'About Us';
            break
          case '/help':
            this.breadcumText = 'Help';
            break
          case '/contact':
            this.breadcumText = 'Contact Us';
            break
          case '/track':
            this.breadcumText = 'Track & Trace';
            break
        }
      }
    });
  }
}
