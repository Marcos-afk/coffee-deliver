import * as Styled from './styles';
import { ShoppingCart } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CoffeeCardProps } from './CoffeeCardProps';
import { useTheme } from 'styled-components';
import { CoffeeCardSchema, CoffeeCardSchemaProps } from './schemas';
import { useCart } from '@hooks/useCart';

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const { colors } = useTheme();
  const { addNewItemToCart } = useCart();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<CoffeeCardSchemaProps>({
    defaultValues: {
      amount: 1,
    },
    resolver: zodResolver(CoffeeCardSchema),
  });

  const handleAddToCart = ({ amount }: CoffeeCardSchemaProps) => {
    addNewItemToCart(coffee, amount);
    reset();
  };

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
          <Styled.Input
            type="number"
            min={1}
            max={10}
            {...register('amount', { valueAsNumber: true })}
          />
          <Styled.IconContainer
            disabled={!isValid}
            onClick={handleSubmit(handleAddToCart)}
          >
            <ShoppingCart size={24} weight="fill" color={colors.base.white} />
          </Styled.IconContainer>
        </Styled.ButtonsContainer>
      </Styled.Footer>
    </Styled.Container>
  );
};
