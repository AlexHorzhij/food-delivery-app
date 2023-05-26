import { ShopsContainer } from './ShopList.styled';
import ShopItem from '../ShopItem/ShopItem';
import { shopsList } from '../../../redux/shops/shopsSelector';
import { useSelector } from 'react-redux';

export default function ShopList() {
  const shops = useSelector(shopsList);
  return (
    <ShopsContainer>
      {shops.map(shop => {
        return <ShopItem key={shop._id} name={shop.name} id={shop._id} />;
      })}
    </ShopsContainer>
  );
}
