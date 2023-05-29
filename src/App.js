import './App.css';
import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
// import ShopsPage from './page/ShopsPage/ShopsPage';
import ErrorPage from './page/ErrorPage';
import OrderPage from './page/OrderPage/OrderPage';
import DishList from './components/Shops/DishList/DishList';
import { getShops } from './redux/shops/shopsOperation';
import { useDispatch } from 'react-redux';
const ShopsPage = lazy(() => import('./page/ShopsPage/ShopsPage'));
console.log('ShopsPage: ', ShopsPage);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="shops" element={<ShopsPage />}>
          <Route path="/shops/:shop" element={<DishList />} />
        </Route>
        <Route path="order" element={<OrderPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
