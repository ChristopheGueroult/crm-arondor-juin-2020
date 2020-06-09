import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navItems: any[];
  constructor() {
    this.navItems = [
      {route: '/login', label: 'Login'},
      {route: '/orders', label: 'Orders'},
      {route: '/clients', label: 'Clients'}
    ];
  }
}
