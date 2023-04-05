import styled from 'styled-components';

export const SectionContainer = styled.section`
  flex: 1;
  display: flex;
  background-size: cover;
  gap: 3.5rem;

`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

`;

export const Title = styled.span`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  line-height: 3.9rem;
  color: ${({ theme }) => theme.colors.yellow.dark};
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
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 6px 36px;
    border: 2px solid transparent;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

`;
