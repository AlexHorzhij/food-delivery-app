import { Main, Container } from '../../reusableComponents';
import { Button, Typography } from '@mui/material';
import OrderList from '../../components/Order/OrderList/OrderList';
import OrderForm from '../../components/Order/OrderForm/OrderForm';
import { OrderFormWrapper, SubmitWrapper } from './OrderPage.styled';
import { v4 } from 'uuid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { orderList, currentShop } from '../../redux/shops/shopsSelector';
import { postOrder } from '../../redux/shops/shopsOperation';

export default function OrderPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [inputs, setInputs] = useState([]);

  const dispatch = useDispatch();
  const orders = useSelector(orderList);
  const selectedShop = useSelector(currentShop);

  const addToInput = input => {
    if (input) {
      setInputs(prev => {
        const check = prev?.findIndex(item => {
          return item.name === input.name;
        });
        if (check !== -1) return prev;
        return [...prev, input];
      });
    }
  };

  const totalPrice = () => {
    return orders.reduce((acc, item) => acc + item.price * item.count, 0);
  };
  const orderData = {
    id: v4(),
    shopData: {
      shopName: selectedShop?.name,
      shopId: selectedShop?.id,
    },
    orders,
    userData: {
      name,
      email,
      phone,
      address,
    },
  };

  const submitForm = () => {
    const isValid = inputs.reduce((valid, input) => {
      valid = input.validate();
      return valid;
    }, true);

    if (isValid) {
      dispatch(postOrder(orderData));
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
    }
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
            data={{ name, email, phone, address }}
            addToInput={addToInput}
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
          <Button
            type="submit"
            sx={{ fontSize: 16 }}
            variant={orders.length > 0 ? 'contained' : 'disabled'}
            onClick={submitForm}
          >
            Submit
          </Button>
        </SubmitWrapper>
      </Container>
    </Main>
  );
}
