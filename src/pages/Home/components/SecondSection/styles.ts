import styled from 'styled-components';

export const Container = styled.section`
  flex: 1;
  padding: 2rem;
`;

export const Title = styled.span`
  font-size: 2rem;
  font-family: 'Baloo 2';
  font-weight: bolder;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.base.subtitle};
`;

export const CoffeeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1100px) {
    & {
      grid-template-columns: repeat(3, 1fr)
    };
  }

  @media (max-width: 900px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 520px) {
    & {
      grid-template-columns:  1fr;
    }
  }
`;
