import { Tab, Tabs } from '@mui/material';
import { NavList } from './Nav.styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
  const location = useLocation().pathname.split('/')[1];
  const [value, setValue] = useState(location || 'shops');
  const navigation = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <NavList>
      <Tabs value={value} onChange={handleChange} aria-label="navigation tabs">
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
