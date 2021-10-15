import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';
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
    this.orders$ = store.select(selectOrders)
      .pipe(
        scan<Order[], Order[]>((acc, val) => {
          // Keep track of the last 20 trades
          acc.push(...val);
          return acc.slice(-20); 
        }, [])
      );

    this.averageOrderPrice$ = store.select(selectOrderAverage);
  }
}
