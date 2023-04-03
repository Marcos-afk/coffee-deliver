import { produce } from 'immer';
import { CartReducerStateProps } from './CartReducerProps';
import {
  CartActionsTypes,
  CartActionsTypesProps,
} from './actions/CartActionsProps';

export const cartReducer = (
  state: CartReducerStateProps,
  action: CartActionsTypesProps,
) => {
  switch (action.type) {
    case CartActionsTypes.ADD_NEW_ITEM_IN_CART: {
      const isExistItemInCart = state.cart.findIndex(
        (item) => item.coffee.id === action.payload.coffee.id,
      );

      if (isExistItemInCart >= 0) {
        return produce(state, (draft) => {
          draft.cart[isExistItemInCart].amount += action.payload.amount;
        });
      }

      return produce(state, (draft) => {
        draft.cart.push({
          coffee: action.payload.coffee,
          amount: action.payload.amount,
        });
      });
    }

    case CartActionsTypes.REMOVE_ITEM_TO_CART: {
      return produce(state, (draft) => {
        draft.cart = draft.cart.filter(
          (item) => item.coffee.id !== action.payload.coffeeId,
        );
      });
    }

    case CartActionsTypes.UPDATE_ITEM_TO_CART: {
      const cartItemIndex = state.cart.findIndex(
        (item) => item.coffee.id === action.payload.coffeeId,
      );

      if (cartItemIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.cart[cartItemIndex].amount = action.payload.amount;
      });
    }

    default:
      return state;
  }
};
