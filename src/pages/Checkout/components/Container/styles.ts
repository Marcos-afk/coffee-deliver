import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  margin-top: 8rem;
  gap: 1.5rem;

  @media (max-width: 1000px) {
    & {
      flex-direction: column;
     }
  }
`;
