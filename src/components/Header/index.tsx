import * as Styled from './styles';
import LogoSvg from '@assets/logo.svg';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useTheme } from 'styled-components';

export const Header = () => {
  const { colors } = useTheme();

  return (
    <Styled.HeaderContainer>
      <img src={LogoSvg} alt="Logo of application" />
      <Styled.ActionsContainer>
        <Styled.LocalizationContainer>
          <MapPin size={22} color={colors.purple.default} weight="fill" />
          <Styled.LocalizationText>Porto Alegre, RS</Styled.LocalizationText>
        </Styled.LocalizationContainer>
        <Styled.CartContainer>
          <ShoppingCart size={24} color={colors.yellow.dark} weight="fill" />
        </Styled.CartContainer>
      </Styled.ActionsContainer>
    </Styled.HeaderContainer>
  );
};
