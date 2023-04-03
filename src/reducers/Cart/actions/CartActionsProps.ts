/* eslint-disable no-unused-vars */

import { CoffeeDTO } from '@dtos/Coffee';

export enum CartActionsTypes {
  ADD_NEW_ITEM_IN_CART = 'ADD_NEW_ITEM_IN_CART',
  REMOVE_ITEM_TO_CART = 'REMOVE_ITEM_TO_CART',
  UPDATE_ITEM_TO_CART = 'UPDATE_ITEM_TO_CART',
}

export type CartActionsTypesProps =
  | {
      type: CartActionsTypes.ADD_NEW_ITEM_IN_CART;
      payload: { coffee: CoffeeDTO; amount: number };
    }
  | {
      type: CartActionsTypes.REMOVE_ITEM_TO_CART;
      payload: { coffeeId: number };
    }
  | {
      type: CartActionsTypes.UPDATE_ITEM_TO_CART;
      payload: { coffeeId: number; amount: number };
    };
