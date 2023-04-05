import { createContext, useEffect, useReducer } from 'react';
import { CartContextProps, CartProviderProps } from './CartContextProps';
import { cartReducer } from '@reducers/Cart';
import { version } from '../../../package.json';
import { CoffeeDTO } from '@dtos/Coffee';
import { CartActionsTypes } from '@reducers/Cart/actions/CartActionsProps';

export const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    () => {
      const stateJson = localStorage.getItem(
        `@coffee-deliver:cart-state-${version}`,
      );

      if (stateJson) {
        return JSON.parse(stateJson);
      }

      return {
        cart: [],
      };
    },
  );

  const addNewItemToCart = (coffee: CoffeeDTO, amount: number) => {
    dispatch({
      type: CartActionsTypes.ADD_NEW_ITEM_IN_CART,
      payload: {
        coffee,
        amount,
      },
    });
  };

  const removeItemToCart = (coffeeId: number) => {
    dispatch({
      type: CartActionsTypes.REMOVE_ITEM_TO_CART,
      payload: {
        coffeeId,
      },
    });
  };

  const updateItemToCart = (coffeeId: number, amount: number) => {
    dispatch({
      type: CartActionsTypes.UPDATE_ITEM_TO_CART,
      payload: {
        coffeeId,
        amount,
      },
    });
  };

  const clearCart = () => {
    dispatch({
      type: CartActionsTypes.CLEAR_CART,
    });
  };

  useEffect(() => {
    const stateJson = JSON.stringify(cartState);
    localStorage.setItem(`@coffee-deliver:cart-state-${version}`, stateJson);
  }, [cartState]);

  const { cart } = cartState;

  return (
    <CartContext.Provider
      value={{
        cart,
        addNewItemToCart,
        removeItemToCart,
        updateItemToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
