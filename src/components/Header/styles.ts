import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 330px) {
    & {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const LocalizationContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.purple.light};
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;
`;

export const LocalizationText = styled.span`
  font-size: 0.875rem;
  line-height: 130%;
`;

export const CartContainer = styled.button`
  width: 3rem;
  border: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  padding: 0.5rem 0.75rem;
  background: ${({ theme }) => theme.colors.yellow.light};
`;

export const CartIcon = styled.div`
  width: 100%;
`;

export const CartCounter = styled.span`
  font-size: 0.75rem;
  line-height: 130%;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.base.white};
  background: ${({ theme }) => theme.colors.yellow.dark};
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  margin-top: -2.5rem;
`;
