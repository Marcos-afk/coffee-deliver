import { CoffeeDTO } from '@dtos/Coffee';

export interface CartDTO {
  coffee: CoffeeDTO;
  amount: number;
}
