import { HeaderSection, HeaderContent } from './Header.styled';
import { Container } from '../../reusableComponents/Container.styled';
import Navigation from './Nav';
import { Toaster } from 'react-hot-toast';

export default function Header() {
  return (
    <>
      <HeaderSection>
        <Toaster position="top-center" reverseOrder={false} />
        <Container>
          <HeaderContent>
            <Navigation />
          </HeaderContent>
        </Container>
      </HeaderSection>
    </>
  );
}
