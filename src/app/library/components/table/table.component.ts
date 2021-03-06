import { Component, OnInit, Input, OnChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit {
  @Input() headers: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
