import { List, DishesBlock } from './DishList.styled';
import DishItem from '../DishItem/DishItem';
import { dishData } from '../../../assets/dishData';
import { useParams } from 'react-router-dom';

export default function DishList() {
  const { shop } = useParams();
  const data = dishData.filter(item => item.id === shop);
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
