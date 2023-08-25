import styled from 'styled-components';
import { Link as StyledLink } from 'react-router-dom';

export const Link = styled(StyledLink)`
  display: flex;

  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
  padding: 8px 16px;
  width: 100px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  text-align: center;
  background: linear-gradient(
    141.22deg,
    rgb(255, 194, 38) 9.4%,
    rgb(248, 65, 25) 91.91%
  );
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  transform: scale(1);
  &:hover,
  &:focus {
    transform: scale(0.9);
  }
`;
