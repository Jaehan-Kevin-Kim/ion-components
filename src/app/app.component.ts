import { Component } from '@angular/core';

// const appPages = [
//   {
//     title: 'Home',
//     url: '/home',
//     md: 'home',
//     ios: 'home-outline'
//   }, {
//     title: 'Accordion List',
//     url: '/accordion-list',
//     md: 'people',
//     ios: 'people-outline'
//   }
// ];
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages =
    [{
      title: 'Home',
      url: '/home',
      md: 'home',
      ios: 'home-outline'
    }, {
      title: 'Accordion List',
      url: '/accordion-list',
      md: 'people',
      ios: 'people-outline'
    }

    ];

  constructor() { }
}
