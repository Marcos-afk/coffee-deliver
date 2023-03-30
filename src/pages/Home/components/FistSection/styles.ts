import styled from 'styled-components';
import IntroBackgroundImg from '@assets/intro-background.png';

export const Container = styled.section`
  flex: 1;
  display: flex;
  background: url(${IntroBackgroundImg}) no-repeat center;
  background-size: cover;
  padding: 2rem;
  gap: 3.5rem;

`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

`;

export const Title = styled.span`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 3rem;
  line-height: 3.9rem;
  color: ${({ theme }) => theme.colors.base.title};
`;

export const SubTitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.625rem;
  color: ${({ theme }) => theme.colors.base.subtitle};
`;

export const Img = styled.img`
  max-width: 50%;
  height: auto;

@media (max-width: 940px) {
    & {
      display: none;
    }
  }
`;

export const IconsContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 330px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;
