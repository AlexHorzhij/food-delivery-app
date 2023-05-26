import { changeOrderCount } from 'redux/shops/shopsSlice';
import { useDispatch } from 'react-redux';
import {
  TextField,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export default function OrderItems({ data }) {
  const dispatch = useDispatch();
  const addDish = e => {
    dispatch(changeOrderCount({ id: data.id, count: e.target.value }));
  };
  return (
    <Card sx={{ display: 'flex', p: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 300, height: 200 }}
        image={data.url}
        alt="food image"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {data.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {data.price} UAH
          </Typography>
        </CardContent>
        <TextField
          type="number"
          style={{ marginLeft: '16px' }}
          onChange={addDish}
          defaultValue={1}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}></Box>
      </Box>
    </Card>
  );
}
