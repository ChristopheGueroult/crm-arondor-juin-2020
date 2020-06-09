import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() navItems: any[];
  @Input() vertical: boolean;
  @Input() colorLight: boolean;
  @Input() colorOne: boolean;
  @Input() colorTwo: boolean;
  @Input() colorThree: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
