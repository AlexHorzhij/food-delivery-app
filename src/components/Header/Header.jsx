import { HeaderSection, HeaderContent } from './Header.styled';
import { Container } from '../../reusableComponents/Container.styled';
import Navigation from './Nav';
// import { useSelector } from 'react-redux';
// import { isLoading } from 'redux/shops/shopsSelector';
import { Toaster } from 'react-hot-toast';

export default function Header() {
  // const loading = useSelector(isLoading);
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
