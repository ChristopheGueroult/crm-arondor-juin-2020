import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateOneColComponent } from './components/template-one-col/template-one-col.component';
import { TemplateTwoColComponent } from './components/template-two-col/template-two-col.component';



@NgModule({
  declarations: [TemplateOneColComponent, TemplateTwoColComponent],
  imports: [
    CommonModule
  ],
  exports: [TemplateOneColComponent, TemplateTwoColComponent]
})
export class TemplatesModule { }
