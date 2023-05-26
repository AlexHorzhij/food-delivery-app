import { ShopsContainer } from './ShopList.styled';
import ShopItem from '../ShopItem/ShopItem';
import { shops } from '../../../assets/shopsData';

export default function ShopList() {
  return (
    <ShopsContainer>
      {shops.map(shop => {
        return <ShopItem key={shop.id} name={shop.name} id={shop.id} />;
      })}
    </ShopsContainer>
  );
}
