import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.4rem;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.base.card};
  border-radius: 6px 36px 6px 36px;
  padding: 1rem;

  & img{
    margin-top: calc(0px - 2.5rem + 6px);
  }
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 0.25rem;

`;

export const Tag = styled.div`
  margin-top: 0.75rem;
  color: ${({ theme }) => theme.colors.yellow.dark};
  background: ${({ theme }) => theme.colors.yellow.light};
  border-radius: 9999px;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  font-size: 0.625rem;
  line-height: 130%;
  font-weight: bold;
`;

export const Title = styled.span`
  margin-top: 1rem;
  font-size: 1.25rem;
  font-family: 'Baloo 2';
  line-height: 130%;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.base.subtitle};
  text-align: center;
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 130%;
  text-align: center;
  color: ${({ theme }) => theme.colors.base.label};
`;

export const Footer = styled.footer`
  margin-top: 2rem;
  display: flex;
  gap: 1.4rem;
  align-items: center;
`;

export const PriceContainer = styled.span`
  display: flex;
  gap: 0.2rem;
  align-items: center;
`;

export const Rubric = styled.span`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.base.text};
`;

export const Price = styled.span`
  font-size: 1.5rem;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.base.text};
  font-weight: bolder;
  font-family: 'Baloo 2';
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 4.5rem;
  height: 2.375rem;
  border: 0;
  color: ${({ theme }) => theme.colors.base.title};
  background: ${({ theme }) => theme.colors.purple.light};
  border-radius: 6px;
  padding: 0.5rem;

  &:focus {
    box-shadow: 0 0 0 0;
  }
`;

export const IconContainer = styled.button`
  background: ${({ theme }) => theme.colors.purple.dark};
  height: 2.375rem;
  border-radius: 6px;
  padding: 0.5rem;
  border: 0;
`;
