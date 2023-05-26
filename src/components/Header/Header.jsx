import { HeaderSection, HeaderContent } from './Header.styled';
import { Container } from '../../reusableComponents/Container.styled';
import Navigation from './Nav';

export default function Header() {
  return (
    <HeaderSection>
      <Container>
        <HeaderContent>
          <Navigation />
        </HeaderContent>
      </Container>
    </HeaderSection>
  );
}
