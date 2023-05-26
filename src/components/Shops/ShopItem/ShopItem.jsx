import { Shop, ShopName } from './ShopItem.styled';
import { NavLink } from 'react-router-dom';

export default function ShopItem({ name, id }) {
  return (
    <NavLink to={`/shops/${id}`}>
      <Shop>
        <ShopName>{name}</ShopName>
      </Shop>
    </NavLink>
  );
}
