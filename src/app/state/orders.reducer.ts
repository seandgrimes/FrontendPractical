import { createReducer, on } from '@ngrx/store';
import { Order } from '../order-list/orders.model';

import { addOrder } from './orders.actions';
import { State } from './orders.state';

// export const initialState: State = {
//     orders: [],
//     averageOrderPrice: 0
// }

export const initialState: ReadonlyArray<Order> = [];

export const ordersReducer = createReducer(
    initialState,
    on(addOrder, (state, { order }) => [...state, order])
);