import { Outlet, useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { shopsList } from 'redux/shops/shopsSelector';
import { Container, Main } from '../../reusableComponents';
import Sidebar from '../../components/Shops/SideBar/SideBar';
import DishEmptyList from '../../components/Shops/DishList/DishEmptyList';

export default function Shops() {
  const shopList = useSelector(shopsList);
  const firstShop = shopList.length > 0 ? shopList[0]._id : null;

  const { shop } = useParams();
  const checkShop = shopList.find(item => item._id === shop);

  return (
    <Main>
      <Container style={{ display: 'flex' }}>
        <Sidebar />
        {checkShop ? (
          <Outlet />
        ) : firstShop ? (
          <Navigate to={`/shops/${firstShop}`} />
        ) : (
          <DishEmptyList />
        )}
      </Container>
    </Main>
  );
}
