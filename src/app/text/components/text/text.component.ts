import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextComponent implements OnInit {
  @Input() colorLight: boolean;
  @Input() colorOne: boolean;
  @Input() colorTwo: boolean;
  @Input() colorThree: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
