import * as Styled from './styles';
import { useTheme } from 'styled-components';
import { Container } from './components/Container';
import {
  Bank,
  CreditCard,
  CurrencyCircleDollar,
  MapPinLine,
  Money,
  Trash,
} from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckoutSchema, CheckoutSchemaSchemaProps } from './schemas';
import { useEffect, useState } from 'react';
import { useCart } from '@hooks/useCart';
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
  const { colors } = useTheme();
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const { cart, removeItemToCart, updateItemToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.coffee.price * item.amount;
    }, 0);

    setTotalPrice(total);
  }, [cart]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<CheckoutSchemaSchemaProps>({
    defaultValues: {
      cep: '',
      road: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
      number: 0,
    },
    resolver: zodResolver(CheckoutSchema),
  });

  const handleSubmittingForm = (data: CheckoutSchemaSchemaProps) => {
    navigate(`/success/${JSON.stringify(data)}`);
    reset();
  };

  const handleRemoveItem = (coffeeId: number) => {
    removeItemToCart(coffeeId);
  };

  const handleUpdateItem = (coffeeId: number, amount: number) => {
    updateItemToCart(coffeeId, amount);
  };

  const handleSelectPaymentMethod = (method: string) => {
    setPaymentMethod(method);
  };

  return (
    <Container>
      <Styled.FirstContainer>
        <Styled.Title>Complete seu pedido</Styled.Title>
        <Styled.InternalItemsContainer>
          <Styled.Header>
            <MapPinLine size={24} color={colors.yellow.dark} />
            <div>
              <Styled.FormTitle>Endereço de Entrega</Styled.FormTitle>
              <Styled.FormSubtitle>
                Informe o endereço onde deseja receber seu pedido
              </Styled.FormSubtitle>
            </div>
          </Styled.Header>

          <Styled.SmallerInput
            type="text"
            placeholder="CEP"
            {...register('cep')}
          />

          <Styled.NormalInput
            type="text"
            placeholder="Rua"
            {...register('road')}
          />

          <Styled.InternalFormInputContainer>
            <Styled.NormalInput
              type="text"
              placeholder="Número"
              {...register('number', { valueAsNumber: true })}
            />

            <Styled.NormalInput
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
          </Styled.InternalFormInputContainer>

          <Styled.InternalFormInputContainer>
            <Styled.NormalInput
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <Styled.NormalInput
              type="text"
              placeholder="Cidade"
              {...register('city')}
            />
            <Styled.NormalInput
              type="text"
              placeholder="UF"
              {...register('uf')}
            />
          </Styled.InternalFormInputContainer>
        </Styled.InternalItemsContainer>

        <Styled.InternalItemsContainer>
          <Styled.Header>
            <CurrencyCircleDollar size={24} color={colors.purple.default} />
            <div>
              <Styled.FormTitle>Pagamento</Styled.FormTitle>
              <Styled.FormSubtitle>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </Styled.FormSubtitle>
            </div>
          </Styled.Header>

          <Styled.PaymentCardContainer>
            <Styled.PaymentCard
              type="button"
              onClick={() => handleSelectPaymentMethod('creditCard')}
              isSelected={paymentMethod === 'creditCard'}
            >
              <CreditCard size={24} color={colors.purple.default} />
              <Styled.PaymentCardTitle>
                Cartão de crédito
              </Styled.PaymentCardTitle>
            </Styled.PaymentCard>
            <Styled.PaymentCard
              type="button"
              onClick={() => handleSelectPaymentMethod('debitCard')}
              isSelected={paymentMethod === 'debitCard'}
            >
              <Bank size={24} color={colors.purple.default} />
              <Styled.PaymentCardTitle>
                cartão de débito
              </Styled.PaymentCardTitle>
            </Styled.PaymentCard>
            <Styled.PaymentCard
              type="button"
              onClick={() => handleSelectPaymentMethod('money')}
              isSelected={paymentMethod === 'money'}
            >
              <Money size={24} color={colors.purple.default} />
              <Styled.PaymentCardTitle>dinheiro</Styled.PaymentCardTitle>
            </Styled.PaymentCard>
          </Styled.PaymentCardContainer>
        </Styled.InternalItemsContainer>
      </Styled.FirstContainer>
      <Styled.SecondContainer>
        <Styled.Title>Cafés selecionados</Styled.Title>
        <Styled.InternalItemsContainer>
          {cart.map((item) => (
            <Styled.CoffeeCardContainer key={item.coffee.id}>
              <img src={item.coffee.image} alt={item.coffee.name} />
              <Styled.CoffeeCardInfoContainer>
                <Styled.CoffeeCardInfoTitle>
                  {item.coffee.name}
                </Styled.CoffeeCardInfoTitle>
                <Styled.CoffeeCardInfoActionsContainer>
                  <Styled.CoffeeCardInfoInput
                    type="number"
                    value={item.amount}
                    min={1}
                    max={10}
                    onChange={(e) =>
                      handleUpdateItem(item.coffee.id, +e.target.value)
                    }
                  />
                  <Styled.CoffeeCardInfoButton
                    onClick={() => handleRemoveItem(item.coffee.id)}
                  >
                    <Trash size={16} color={colors.purple.default} />
                    Remover
                  </Styled.CoffeeCardInfoButton>
                </Styled.CoffeeCardInfoActionsContainer>
              </Styled.CoffeeCardInfoContainer>
              <Styled.CoffeeCardPrice>
                R${(item.coffee.price * item.amount).toPrecision(3)}
              </Styled.CoffeeCardPrice>
            </Styled.CoffeeCardContainer>
          ))}
          <Styled.TotalContainer>
            <Styled.TotalItemsContainer>
              <Styled.NormalTotalItemsText>
                Total de itens
              </Styled.NormalTotalItemsText>
              <Styled.NormalTotalItemsText>
                R$ {totalPrice.toPrecision(3)}
              </Styled.NormalTotalItemsText>
            </Styled.TotalItemsContainer>
            <Styled.TotalItemsContainer>
              <Styled.NormalTotalItemsText>Entrega</Styled.NormalTotalItemsText>
              <Styled.NormalTotalItemsText>R$ {3}</Styled.NormalTotalItemsText>
            </Styled.TotalItemsContainer>
            <Styled.TotalItemsContainer>
              <Styled.BoldTotalItemsText>Total</Styled.BoldTotalItemsText>
              <Styled.BoldTotalItemsText>
                R$ {(totalPrice + 3).toPrecision(3)}
              </Styled.BoldTotalItemsText>
            </Styled.TotalItemsContainer>
          </Styled.TotalContainer>
          <Styled.SubmitButton
            disabled={!isValid}
            onClick={handleSubmit(handleSubmittingForm)}
          >
            confirmar pedido
          </Styled.SubmitButton>
        </Styled.InternalItemsContainer>
      </Styled.SecondContainer>
    </Container>
  );
};
