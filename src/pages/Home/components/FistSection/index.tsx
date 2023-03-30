import * as Styled from './styles';
import IntroImg from '@assets/intro-image.png';

import { Icons } from '@components/Icons';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useTheme } from 'styled-components';

export const FirstSection = () => {
  const { colors } = useTheme();
  return (
    <Styled.Container>
      <Styled.TextContainer>
        <Styled.Title>
          Encontre o café perfeito para qualquer hora do dia
        </Styled.Title>
        <Styled.SubTitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </Styled.SubTitle>
        <Styled.IconsContainer>
          <Icons
            icon={
              <ShoppingCart size={16} weight="fill" color={colors.base.white} />
            }
            background={colors.yellow.dark}
            title="Compra simples e segura"
          />
          <Icons
            icon={<Package size={16} weight="fill" color={colors.base.white} />}
            background={colors.base.text}
            title="Embalagem mantém o café intacto"
          />
          <Icons
            icon={<Timer size={16} weight="fill" color={colors.base.white} />}
            background={colors.yellow.default}
            title="Entrega rápida e rastreada"
          />
          <Icons
            icon={<Coffee size={16} weight="fill" color={colors.base.white} />}
            background={colors.purple.default}
            title="O café chega fresquinho até você"
          />
        </Styled.IconsContainer>
      </Styled.TextContainer>
      <Styled.Img src={IntroImg} alt="Coffee photo" />
    </Styled.Container>
  );
};
