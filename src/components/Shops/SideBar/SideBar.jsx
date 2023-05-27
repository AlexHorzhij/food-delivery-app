import { Divider } from '@mui/material';
import { SidebarTitle, SidebarContainer } from './Sidebar.styled';
import ShopList from '../ShopList/ShopList';

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarTitle>Shops:</SidebarTitle>
      <Divider sx={{ mb: 2 }} />
      <ShopList />
    </SidebarContainer>
  );
}
