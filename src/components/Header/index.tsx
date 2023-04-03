import * as Styled from './styles';
import LogoSvg from '@assets/logo.svg';
import { useCart } from '@hooks/useCart';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import { useTheme } from 'styled-components';

export const Header = () => {
  const { colors } = useTheme();
  const { cart } = useCart();

  return (
    <Styled.HeaderContainer>
      <NavLink to="/">
        <img src={LogoSvg} alt="Logo of application" />
      </NavLink>
      <Styled.ActionsContainer>
        <Styled.LocalizationContainer>
          <MapPin size={22} color={colors.purple.default} weight="fill" />
          <Styled.LocalizationText>Porto Alegre, RS</Styled.LocalizationText>
        </Styled.LocalizationContainer>
        <NavLink to="/checkout">
          <Styled.CartContainer>
            <Styled.CartIcon>
              <ShoppingCart
                size={24}
                color={colors.yellow.dark}
                weight="fill"
              />
            </Styled.CartIcon>
            {cart.length > 0 && (
              <Styled.CartCounter>{cart.length}</Styled.CartCounter>
            )}
          </Styled.CartContainer>
        </NavLink>
      </Styled.ActionsContainer>
    </Styled.HeaderContainer>
  );
};
