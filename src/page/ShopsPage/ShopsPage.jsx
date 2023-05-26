import { Outlet, useParams } from 'react-router-dom';
import { Container, Main } from '../../reusableComponents';
import Sidebar from '../../components/Shops/SideBar/SideBar';
import DishEmptyList from '../../components/Shops/DishList/DishEmptyList';

export default function Shops() {
  const { shop } = useParams();
  return (
    <Main>
      <Container style={{ display: 'flex' }}>
        <Sidebar />
        {shop ? <Outlet /> : <DishEmptyList />}
      </Container>
    </Main>
  );
}
