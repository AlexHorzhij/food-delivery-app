import './App.css';
import { useEffect, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getShops } from './redux/shops/shopsOperation';
import SharedLayout from './components/SharedLayout/SharedLayout';
const ShopsPage = lazy(() => import('./page/ShopsPage/ShopsPage'));
const ErrorPage = lazy(() => import('./page/ErrorPage'));
const OrderPage = lazy(() => import('./page/OrderPage/OrderPage'));
const DishList = lazy(() => import('./components/Shops/DishList/DishList'));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getShops());
  }, [dispatch]);
  console.log(process.env.GOOGLE_MAP_API_KEY);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Navigate to={`shops`} />} />

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
