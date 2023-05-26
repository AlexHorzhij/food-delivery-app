import { Main, Container } from '../../reusableComponents';
import { Button, Typography } from '@mui/material';
import OrderList from '../../components/Order/OrderList/OrderList';
import OrderForm from '../../components/Order/OrderForm/OrderForm';
import { OrderFormWrapper, SubmitWrapper } from './OrderPage.styled';
import { v4 } from 'uuid';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { orderList } from '../../redux/shops/shopsSelector';

export default function OrderPage() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();

  const orders = useSelector(orderList);
  const totalPrice = () => {
    return orders.reduce((acc, item) => acc + item.price * item.count, 0);
  };
  const orderData = {
    id: v4(),
    shopData: {
      shopName: '',
      shopId: '',
    },
    orders,
    userData: {
      name,
      email,
      phone,
      address,
    },
  };

  const setUser = () => {
    // orderData.user = userData;
    console.log(orderData);
  };

  return (
    <Main>
      <Container>
        <OrderFormWrapper>
          <OrderForm
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            setAddress={setAddress}
          />
          <OrderList />
        </OrderFormWrapper>
        <SubmitWrapper>
          <Typography
            component="p"
            variant="h5"
            style={{ marginRight: '30px' }}
          >
            Total price: {totalPrice()}
          </Typography>
          <Button variant="contained" onClick={setUser}>
            Submit
          </Button>
        </SubmitWrapper>
      </Container>
    </Main>
  );
}
