import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBlock = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin:15px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #000;

  font-weight: 500;

  &.active {
    color: white;
    background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
  }
`;


