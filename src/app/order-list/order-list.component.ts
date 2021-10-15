import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Order } from './orders.model';
import { State } from '../state/orders.state';
import { selectOrders, selectOrderAverage } from '../state/orders.selectors';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent {
  orders$: Observable<Order[]>;
  averageOrderPrice$: Observable<number>;

  constructor(private store: Store<State>) {
    this.orders$ = store.select(selectOrders);
    this.averageOrderPrice$ = store.select(selectOrderAverage);
  }
}
