import { Component } from '@angular/core';
import { NavItemI } from './core/interfaces/nav-item-i';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navItems: NavItemI[];
  constructor() {
    this.navItems = [
      {route: '/login', label: 'Login'},
      {route: '/orders', label: 'Orders'},
      {route: '/clients', label: 'Clients'}
    ];
  }
}
