import { CoffeeDTO } from '@dtos/Coffee';
import { CartActionsTypes, CartActionsTypesProps } from './CartActionsProps';

export const AddCoffeeToCart = (
  coffee: CoffeeDTO,
  amount: number,
): CartActionsTypesProps => {
  return {
    type: CartActionsTypes.ADD_NEW_ITEM_IN_CART,
    payload: { coffee, amount },
  };
};

export const RemoveCoffeeToCart = (coffeeId: number): CartActionsTypesProps => {
  return {
    type: CartActionsTypes.REMOVE_ITEM_TO_CART,
    payload: { coffeeId },
  };
};

export const UpdateCoffeeToCart = (
  coffeeId: number,
  amount: number,
): CartActionsTypesProps => {
  return {
    type: CartActionsTypes.UPDATE_ITEM_TO_CART,
    payload: { coffeeId, amount },
  };
};
