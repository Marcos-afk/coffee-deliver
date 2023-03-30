import * as Styled from './styles';
import { Container } from './components/Container';
import { FirstSection } from './components/FistSection';

export const Home = () => {
  return (
    <Container>
      <FirstSection />
      <Styled.HomeSecondSectionContainer>
        Segunda seção
      </Styled.HomeSecondSectionContainer>
    </Container>
  );
};
