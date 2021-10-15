import { createSelector } from '@ngrx/store';
import { State } from './orders.state';
import { Order } from "../order-list/orders.model";
import { ordersReducer } from './orders.reducer';


// export const selectOrders = createSelector(
//     (state: State) => state.orders,
//     (orders: Order[]) => orders
// );

export const selectOrders = (state: State) => state.orders;

// export const selectOrderAverage = createSelector(
//     (state: State) => state.averageOrderPrice,
//     (average: number) => average
// );

export const selectOrderAverage = (state: State) => {
    if (state.orders.length === 0) return 0;

    let ordersTotal = state.orders.length > 0 
        ? state.orders.map(a => a.total).reduce((a,b) => a+b)
        : 0;
    
    return ordersTotal / state.orders.length;
}