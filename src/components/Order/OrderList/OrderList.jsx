import { List, ListItem, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { orderList } from '../../../redux/shops/shopsSelector';
import OrderItems from '../OrderItems/OrderItems';

export default function OrderList() {
  const orders = useSelector(orderList);
  return (
    <List
      sx={{
        height: '100%',
        width: '570px',
        bgcolor: 'background.paper',
        overflowY: 'auto',
        border: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 3,
        padding: 1,
      }}
    >
      {orders.length > 0 ? (
        orders.map(item => (
          <ListItem key={item.id}>
            <OrderItems data={item} />
          </ListItem>
        ))
      ) : (
        <Typography variant="h4" sx={{ textAlign: 'center', mt: 10 }}>
          You don`t have any orders now.
        </Typography>
      )}
    </List>
  );
}
