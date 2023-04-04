import styled, { css } from 'styled-components';

export const FirstContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
`;

export const Title = styled.span`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.base.subtitle};
`;

export const Header = styled.div`
  display: flex;
  gap: 0.625rem;
`;

export const InternalItemsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px;
  padding: 2.5rem;


`;

export const FormTitle = styled.span`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.base.subtitle};
`;

export const FormSubtitle = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.colors.base.text};
`;

export const BaseInput = styled.input`
  background: ${({ theme }) => theme.colors.base.input};
  padding: 0.75rem;
  border-radius: 4px;
  border: 0;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.2rem;
`;

export const NormalInput = styled(BaseInput)`
  width: 100%;
`;

export const SmallerInput = styled(BaseInput)`
  max-width: 12rem;
`;

export const InternalFormInputContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 500px) {
    flex-direction: column;
  }

`;

export const PaymentCardContainer = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 650px) {
    flex-direction: column;
    width: 50%;
  }

`;

interface PaymentCardSelectedProps {
  isSelected: boolean;
}

export const PaymentCard = styled.button<PaymentCardSelectedProps>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: ${({ theme }) => theme.colors.base.button};
  height: 3rem;
  border-radius: 6px;
  border: 0;

  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.base.hover};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
    border: 1px solid ${({ theme }) => theme.colors.purple.default};
  `}
`;

export const PaymentCardTitle = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 1.25rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.base.text};

`;

export const SecondContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;

`;

export const CoffeeCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 1.125rem;
  padding: 1rem;

  & img {
    width: 4rem;
  }

  border-bottom: 1px solid ${({ theme }) => theme.colors.base.button};
`;

export const CoffeeCardPrice = styled.span`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.base.text};
`;

export const CoffeeCardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

`;

export const CoffeeCardInfoTitle = styled.span`
  font-size: 1rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.base.subtitle};
`;

export const CoffeeCardInfoActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

`;

export const CoffeeCardInfoInput = styled.input`
  text-align: center;
  width: 4rem;
  height: 2rem;
  background: ${({ theme }) => theme.colors.base.input};
  border: 0;
  border-radius: 6px;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors.base.title};
  line-height: 1.25rem;
`;

export const CoffeeCardInfoButton = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.base.button};
  height: 2rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: 0;

  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.base.text};
  line-height: 1.25rem;

  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.base.hover};
  }

`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

export const TotalItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NormalTotalItemsText = styled.span`
  font-size: 0.875rem;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.colors.base.text};

`;

export const BoldTotalItemsText = styled.span`
  font-size: 1.25rem;
  line-height: 1.7rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.base.subtitle};
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 2.5rem;
  border: 0;
  background: ${({ theme }) => theme.colors.yellow.default};
  border-radius: 6px;

  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.4rem;
  color: ${({ theme }) => theme.colors.base.white};
  text-transform: uppercase;

  transition: background 0.2s;


  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors.yellow.dark};
  }

  &:disabled {
    opacity: 70%;
    cursor: not-allowed;
  }
`;
