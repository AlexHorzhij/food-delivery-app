import { Shop, ShopName } from './ShopItem.styled';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentShop } from 'redux/shops/shopsSlice';

export default function ShopItem({ name, id }) {
  const dispatch = useDispatch();

  const selectShop = () => {
    dispatch(setCurrentShop({ id, name }));
  };
  return (
    <NavLink to={`/shops/${id}`} onClick={selectShop}>
      <Shop>
        <ShopName>{name}</ShopName>
      </Shop>
    </NavLink>
  );
}
