import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order.enum';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';
import { Btn } from 'src/app/core/interfaces/btn';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public btnRoute: Btn;
  public btnHref: Btn;
  public btnAction: Btn;
  public headers: string[];
  public collection: Order[];
  public states = Object.values(StateOrder);
  constructor(private os: OrdersService) { }

  ngOnInit(): void {
    this.os.collection.subscribe(
      (datas) => {
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

    this.btnRoute = {route: 'add', label: 'Add order'};
    this.btnHref = {href: 'http://www.google.fr', label: 'Go to Google'};
    this.btnAction = {action: true, label: 'Action'};
  }

  public changeState(item: Order, event) {
    this.os.changeState(item, event.target.value).subscribe((res) => {
      item.state = res.state;
    });
  }
}
