import { Tab, Tabs } from '@mui/material';
import { NavList } from './Nav.styled';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
  const [value, setValue] = useState('shops');
  const navigation = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // navigation(`/${newValue}`);
  };

  return (
    <NavList>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab label="Shops" onClick={() => navigation('/shops')} value="shops" />
        <Tab
          label="Shopping Card"
          onClick={() => navigation('/order')}
          value="order"
        />
      </Tabs>
    </NavList>
  );
}
