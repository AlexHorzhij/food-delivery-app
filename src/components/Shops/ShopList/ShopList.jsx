import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';
import { shopsList, currentShop } from '../../../redux/shops/shopsSelector';
import { setCurrentShop } from 'redux/shops/shopsSlice';

export default function ShopList() {
  const shops = useSelector(shopsList);
  const selectedShop = useSelector(currentShop);
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const [value, setValue] = useState(selectedShop.id);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const selectShop = (id, name) => {
    dispatch(setCurrentShop({ id, name }));
    navigator(`/shops/${id}`);
  };

  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      sx={{ borderRight: 1, borderColor: 'divider' }}
    >
      {shops.map(shop => {
        return (
          <Tab
            sx={{ mb: 2, fontSize: 18 }}
            value={shop._id}
            key={shop._id}
            label={shop.name}
            onClick={() => selectShop(shop._id, shop.name)}
            wrapped
          ></Tab>
        );
      })}
    </Tabs>
  );
}
