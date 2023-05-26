import { NavList } from './Nav.styled';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <NavList>
      <li>
        <NavLink to={'/shops'}>Shop </NavLink>
      </li>
      <li>
        <NavLink to={'/order'}>Shopping Card </NavLink>
      </li>
      {/* <li>
        <p>History</p>
      </li> */}
    </NavList>
  );
}
