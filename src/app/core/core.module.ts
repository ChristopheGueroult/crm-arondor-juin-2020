import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent, TotalPipe, StateDirective],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, NavComponent, FooterComponent, TotalPipe, StateDirective]
})
export class CoreModule { }
