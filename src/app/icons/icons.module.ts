import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDeleteComponent } from './components/icon-delete/icon-delete.component';
import { IconEditComponent } from './components/icon-edit/icon-edit.component';
import { IconNavComponent } from './components/icon-nav/icon-nav.component';



@NgModule({
  declarations: [IconNavComponent, IconEditComponent, IconDeleteComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconNavComponent, IconEditComponent, IconDeleteComponent]
})
export class IconsModule { }
