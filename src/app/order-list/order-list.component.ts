import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Order } from './orders.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders$: Observable<Order[]>;

  constructor(private store: Store<{orders: Order[]}>) {
    this.orders$ = store.select('orders');
  }

  ngOnInit(): void {
  }

}
