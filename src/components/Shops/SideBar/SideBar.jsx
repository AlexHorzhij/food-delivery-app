import { SidebarTitle, SidebarContainer } from './Sidebar.styled';
// import ShopList from 'components/Shops/ShopList';
import ShopList from '../ShopList/ShopList';

export default function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarTitle>Shops:</SidebarTitle>
      <ShopList />
    </SidebarContainer>
  );
}
