import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { ordersReducer } from './state/orders.reducer';

import { AppComponent } from './app.component';
import { TickerContainerComponent } from './ticker-container/ticker-container.component';
import { OrderListComponent } from './order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TickerContainerComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ orders: ordersReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
