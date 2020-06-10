import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public headers: string[];
  public collection: Order[];
  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.os.collection.subscribe(
      (datas) => {
        // console.log(datas);
        this.collection = datas;
      }
    );

    this.headers = [
      'Type',
      'Client',
      'Nb Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
    ];
  }
}
