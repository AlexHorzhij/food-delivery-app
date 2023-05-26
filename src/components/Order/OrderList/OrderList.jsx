// import { Card, Image, Input } from './OrderItems.styled';
import { List, ListItem } from '@mui/material';
import { useSelector } from 'react-redux';
import { orderList } from '../../../redux/shops/shopsSelector';
import OrderItems from '../OrderItems/OrderItems';

export default function OrderList() {
  const orders = useSelector(orderList);
  console.log('orders: ', orders);
  return (
    <List
      sx={{ height: '100%', bgcolor: 'background.paper', overflowY: 'auto' }}
    >
      {orders.map(item => (
        <ListItem key={item.id}>
          <OrderItems data={item} />
        </ListItem>
      ))}
    </List>
  );
}
