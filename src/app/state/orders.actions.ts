import { createAction, props } from '@ngrx/store';
import { Order } from '../order-list/orders.model';

export const addOrder = createAction(
    '[Orders List] Add Order',
    props<{order: Order}>()
);