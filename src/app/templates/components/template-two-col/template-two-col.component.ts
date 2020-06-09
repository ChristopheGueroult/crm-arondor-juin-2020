import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-template-two-col',
  templateUrl: './template-two-col.component.html',
  styleUrls: ['./template-two-col.component.scss']
})
export class TemplateTwoColComponent implements OnInit {
  @Input() title: string;
  @Input() bgColorTwo: boolean;
  @Input() bgColorThree: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
