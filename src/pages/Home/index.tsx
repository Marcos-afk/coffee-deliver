import { Container } from './components/Container';
import { FirstSection } from './components/FistSection';
import { SecondSection } from './components/SecondSection';

export const Home = () => {
  return (
    <Container>
      <FirstSection />
      <SecondSection />
    </Container>
  );
};
