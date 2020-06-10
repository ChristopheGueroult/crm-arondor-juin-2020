import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [HeaderComponent, NavComponent, FooterComponent, TotalPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, NavComponent, FooterComponent, TotalPipe]
})
export class CoreModule { }
