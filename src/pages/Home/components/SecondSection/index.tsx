import { coffeeList } from '@services/coffees/mock';
import { CoffeeCard } from '../CoffeeCard';
import * as Styled from './styles';

export const SecondSection = () => {
  return (
    <Styled.Container>
      <Styled.Title>Nossos cafés</Styled.Title>
      <Styled.CoffeeListContainer>
        {coffeeList.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </Styled.CoffeeListContainer>
    </Styled.Container>
  );
};
