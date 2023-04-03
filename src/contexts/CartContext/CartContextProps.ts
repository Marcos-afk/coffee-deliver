/* eslint-disable no-unused-vars */
import { CartDTO } from '@dtos/Cart';
import { CoffeeDTO } from '@dtos/Coffee';

export interface CartContextProps {
  cart: CartDTO[];
  addNewItemToCart: (coffee: CoffeeDTO, amount: number) => void;
  removeItemToCart: (coffeeId: number) => void;
  updateItemToCart: (coffeeId: number, amount: number) => void;
}

export interface CartProviderProps {
  children: React.ReactNode;
}
