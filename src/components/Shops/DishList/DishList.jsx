import { List, DishesBlock } from './DishList.styled';
import DishItem from '../DishItem/DishItem';
import { shopsList } from '../../../redux/shops/shopsSelector';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function DishList() {
  const dishData = useSelector(shopsList);
  const { shop } = useParams();
  const data = dishData.filter(item => item._id === shop);
  return (
    <DishesBlock>
      <List>
        {data[0].dishes.map(dish => {
          return <DishItem key={dish.id} data={dish} />;
        })}
      </List>
    </DishesBlock>
  );
}
