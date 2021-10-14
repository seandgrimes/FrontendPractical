import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-ticker-container',
  templateUrl: './ticker-container.component.html',
  styleUrls: ['./ticker-container.component.scss']
})
export class TickerContainerComponent implements OnInit {

  constructor(private store: Store, private ordersService: OrdersService) { 
    ordersService.start();
  }

  ngOnInit(): void {
  }

}