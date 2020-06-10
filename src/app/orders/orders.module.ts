import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { LibraryModule } from '../library/library.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextModule } from '../text/text.module';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './pages/page-list-orders/page-list-orders.component';



@NgModule({
  declarations: [PageListOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    LibraryModule,
    TemplatesModule,
    TextModule,
    CoreModule
  ]
})
export class OrdersModule { }

