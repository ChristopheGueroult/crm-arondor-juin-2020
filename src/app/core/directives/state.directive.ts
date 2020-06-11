import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: string;
  @HostBinding('class') classPropertyTd: string;
  constructor() {
  }

  ngOnChanges() {
    this.classPropertyTd = this.formatClass(this.appState);
  }

  private formatClass(state: string): string {
    return `state-${state.replace(/ /g, '').toLowerCase()}`;
  }

}

// récupérer un state
// state === CANCELED => state-canceled
// state === OPTION => state-option
// state === CONFIRMED => state-confirmed
// Binder la propriété class de mon host element td avec state-canceled, state-option ou state-confirmed
