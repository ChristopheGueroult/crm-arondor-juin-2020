import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss']
})
export class PageAddOrderComponent implements OnInit {
  public initFormItem = new Order();
  constructor(
    private os: OrdersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public onSubmited(item: Order): void {
    this.os.addItem(item).subscribe((res) => {
      // console.log(res);
      this.router.navigate(['orders']);
    });
  }

}
