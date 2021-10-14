import { createReducer, on, Action } from '@ngrx/store';

import { addOrder } from './orders.actions';
import { Order } from '../order-list/orders.model';

export const initialState: ReadonlyArray<Order> = [];

export const ordersReducer = createReducer(
    initialState,
    on(addOrder, (state, { order }) => [...state, order])
);