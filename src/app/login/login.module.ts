import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { LoginRoutingModule } from './login-routing.module';
import { PageLoginComponent } from './pages/page-login/page-login.component';



@NgModule({
  declarations: [PageLoginComponent],
  imports: [
    CommonModule,
    TextModule,
    TemplatesModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
