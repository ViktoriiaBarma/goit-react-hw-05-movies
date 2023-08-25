import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 15px;
`;

export const NavBlock = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: ${props => props.theme.fontSizes.s};

  font-weight: 500;

  &.active {
    color: white;
    background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
  }
`;


