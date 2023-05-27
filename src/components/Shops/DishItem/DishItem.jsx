import { useState } from 'react';
import { Card, btnStyle, img, price } from './DishItem.styled';
import {
  Button,
  CardContent,
  Typography,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import {
  addToOrders,
  removeFromOrders,
  clearOrders,
} from '../../../redux/shops/shopsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { orderList, currentShop } from '../../../redux/shops/shopsSelector';
import { useParams } from 'react-router-dom';

export default function DishItem({ data }) {
  const orderedDish = useSelector(orderList);
  const selectedShop = useSelector(currentShop);
  const dispatch = useDispatch();
  const currentRoute = useParams();

  const checkOrder = orderedDish.findIndex(item => item.id === data.id);

  const [ordered, setOrdered] = useState(checkOrder !== -1);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAgree = () => {
    setOpen(false);
    dispatch(clearOrders());
    toggleOrder();
  };
  const toggleOrder = () => {
    setOrdered(prevState => !prevState);
    if (!ordered) {
      dispatch(addToOrders(data));
    } else {
      dispatch(removeFromOrders(data.id));
    }
  };

  const addToOrder = () => {
    const isCurrentShopDish = orderedDish.some(
      item => item.own !== (selectedShop?.id || currentRoute)
    );
    if (isCurrentShopDish) {
      handleClickOpen();
    } else {
      toggleOrder();
    }
  };

  return (
    <Card>
      <CardMedia
        component="img"
        style={img}
        image={data.url}
        title="food image"
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={price}>
          {data.price} USD
        </Typography>
        <Button
          variant={ordered ? 'outlined' : 'contained'}
          onClick={addToOrder}
          style={{ ...btnStyle }}
        >
          add to Card
        </Button>
      </CardContent>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'You have chosen a meal at another restaurant.'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to remove your pre-order?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
