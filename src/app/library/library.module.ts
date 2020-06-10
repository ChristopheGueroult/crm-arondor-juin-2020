import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnComponent } from './components/btn/btn.component';
import { TableComponent } from './components/table/table.component';



@NgModule({
  declarations: [BtnComponent, TableComponent],
  imports: [
    CommonModule
  ],
  exports: [BtnComponent, TableComponent]
})
export class LibraryModule { }
