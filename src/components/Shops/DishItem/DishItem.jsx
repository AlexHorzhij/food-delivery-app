import { useState } from 'react';
import { Card, Img, Title, Price, btnStyle } from './DishItem.styled';
import { ButtonApp } from '../../../reusableComponents';
import { addToOrders, removeFromOrders } from '../../../redux/shops/shopsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { orderList } from '../../../redux/shops/shopsSelector';

export default function DishItem({ data }) {
  const orderedDish = useSelector(orderList);
  const checkOrder = orderedDish.findIndex(item => item.id === data.id);
  const [ordered, setOrdered] = useState(checkOrder !== -1);
  const dispatch = useDispatch();
  const toggleOrder = () => {
    setOrdered(prevState => !prevState);
    if (!ordered) {
      dispatch(addToOrders(data));
    } else {
      dispatch(removeFromOrders(data.id));
    }
  };
  return (
    <Card>
      <Img src={data.url} />
      <Title>{data.name}</Title>
      <Price>{data.price} USD</Price>
      <ButtonApp
        style={{ ...btnStyle, backgroundColor: ordered && 'transparent' }}
        text={'add to Card'}
        onClick={toggleOrder}
      />
    </Card>
  );
}
