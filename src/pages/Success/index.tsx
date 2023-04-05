import * as Styled from './styles';
import { useParams } from 'react-router-dom';
import { Container } from './components/Container';
import { Icons } from '@components/Icons';
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';
import DeliverySvg from '@assets/delivery.svg';
import { useEffect, useState } from 'react';
import { SuccessProps } from './SucessProps';

export const Success = () => {
  const [form, setForm] = useState({} as SuccessProps);
  const [paymentMethod, setPaymentMethod] = useState('');
  const { colors } = useTheme();
  const data = useParams();

  useEffect(() => {
    const jsonParse = JSON.parse(data.form as string);
    setForm(jsonParse);

    if (jsonParse.paymentMethod === 'creditCard') {
      setPaymentMethod('Cartão de Crédito');
    } else if (jsonParse.paymentMethod === 'money') {
      setPaymentMethod('Dinheiro');
    } else {
      setPaymentMethod('Cartão de Débito');
    }
  }, [data]);

  return (
    <Container>
      <>
        <Styled.TextContainer>
          <Styled.Title>Uhu! Pedido confirmado</Styled.Title>
          <Styled.SubTitle>
            Agora é só aguardar que logo o café chegará até você
          </Styled.SubTitle>
        </Styled.TextContainer>
        <Styled.SectionContainer>
          <Styled.IconsContainer>
            <Icons
              icon={
                <MapPin size={16} weight="fill" color={colors.base.white} />
              }
              background={colors.purple.default}
              title={`Entrega em Rua ${form.road}, ${form.number} ${form.city} - Maranhão, ${form.uf} `}
            />
            <Icons
              icon={<Timer size={16} weight="fill" color={colors.base.white} />}
              background={colors.yellow.default}
              title="Previsão de entrega 20 min - 30 min "
            />

            <Icons
              icon={
                <CurrencyDollar
                  size={16}
                  weight="fill"
                  color={colors.base.white}
                />
              }
              background={colors.yellow.dark}
              title={`Pagamento na entrega ${paymentMethod}`}
            />
          </Styled.IconsContainer>
          <Styled.Img src={DeliverySvg} alt="Coffee photo" />
        </Styled.SectionContainer>
      </>
    </Container>
  );
};
