import * as Pubnub from 'pubnub';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Order } from './order-list/orders.model'
import { addOrder } from './state/orders.actions';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private pubnub: Pubnub;

    constructor(private store: Store) {
        this.pubnub = new Pubnub({
            publishKey: "pub-c-09e03573-271f-46a5-9d64-27a9417e51d2",
            subscribeKey: "sub-c-4377ab04-f100-11e3-bffd-02ee2ddab7fe",
            uuid: Pubnub.generateUUID()
        });

        this.pubnub.subscribe({
            channels: ["pubnub-market-orders"]
        });
    }

    start() {
        this.pubnub.addListener({
            message: messageEvent => {
              const message = messageEvent.message;
              const order: Order = {
                  bidPrice: message.bid_price,
                  orderQuantity: message.order_quantity,
                  symbol: message.symbol,
                  timestamp: message.timestamp,
                  tradeType: message.trade_type,
                  total: message.bid_price * message.order_quantity  
              };

              // TODO: Generate an event that we could subscribe to?
              this.store.dispatch(addOrder({order: order}));
            }
        });
    }
}
