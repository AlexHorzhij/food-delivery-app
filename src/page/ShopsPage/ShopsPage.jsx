import { Outlet, useParams, Navigate } from 'react-router-dom';
import { Container, Main } from '../../reusableComponents';
import Sidebar from '../../components/Shops/SideBar/SideBar';
import DishEmptyList from '../../components/Shops/DishList/DishEmptyList';
import API from '../../api/api';
import { useSelector } from 'react-redux';
import { shopsList } from 'redux/shops/shopsSelector';

export default function Shops() {
  const shopList = useSelector(shopsList);
  const firstShop = shopList[0]._id;

  API.getAllShops();
  const { shop } = useParams();
  return (
    <Main>
      <Container style={{ display: 'flex' }}>
        <Sidebar />
        {shop ? (
          <Outlet />
        ) : firstShop ? (
          <Navigate to={`/shops/${firstShop}`} replace={true} />
        ) : (
          <DishEmptyList />
        )}
      </Container>
    </Main>
  );
}
