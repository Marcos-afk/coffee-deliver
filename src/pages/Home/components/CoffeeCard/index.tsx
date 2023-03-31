import { ShoppingCart } from 'phosphor-react';
import { CoffeeCardProps } from './CoffeCardProps';
import * as Styled from './styles';
import { useTheme } from 'styled-components';

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const { colors } = useTheme();
  return (
    <Styled.Container>
      <img src={coffee.image} alt={coffee.name} />
      <Styled.TagContainer>
        {coffee.type.map((type) => (
          <Styled.Tag key={type}>{type}</Styled.Tag>
        ))}
      </Styled.TagContainer>
      <Styled.Title>{coffee.name}</Styled.Title>
      <Styled.Description>{coffee.description}</Styled.Description>
      <Styled.Footer>
        <Styled.PriceContainer>
          <Styled.Rubric>R$</Styled.Rubric>
          <Styled.Price>{coffee.price}</Styled.Price>
        </Styled.PriceContainer>
        <Styled.ButtonsContainer>
          <Styled.Input type="number" />
          <Styled.IconContainer>
            <ShoppingCart size={24} weight="fill" color={colors.base.white} />
          </Styled.IconContainer>
        </Styled.ButtonsContainer>
      </Styled.Footer>
    </Styled.Container>
  );
};
