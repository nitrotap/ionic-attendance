import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    }, 
    {
      title: 'Roster',
      url: '/roster',
      icon: 'people'
    }
  ]
  selectedIndex=0;
}



