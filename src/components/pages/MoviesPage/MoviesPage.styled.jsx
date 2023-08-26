import styled from 'styled-components';
import DebounceInput from 'react-debounce-input';
import { HiMagnifyingGlass } from 'react-icons/hi2';


export const List = styled.ul`
display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        margin: 0px auto;
`

export const Item = styled.li`
position: relative;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 8px;
        max-width: 100%;
        width: 260px;
        height: 100%;
        border: none;
        transform: scale(1);
        border-radius: 8px;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
        backdrop-filter: blur(3.5px);
        transition: box-shadow 250ms linear 0s;
        cursor: pointer;

        &:hover{
            box-shadow: rgba(0, 0, 0, 0.74) 0px 2px 24px -5px;
        }
`

export const Link = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: #313131;
  transition: color 300ms ease-in;


&:hover {
  font-weight: 500;
  color: #abc2ff;
}
`

export const SearchForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;

  width: 100%;

  max-width: 20.4rem;
  height: 2.2rem;

  backdrop-filter: blur(2px);
  color: #fff;
  outline: 0;
  border: 0;
  border-radius: 30px;

  box-shadow: 1px 1px 1px #f84119, 1px 1px 1px #fff;

  overflow: hidden;
`;

export const Icon = styled(HiMagnifyingGlass)`
  position: absolute;
  right: -5px;
  margin-right: 10px;
  width: 20px;
  height: 20px;

  fill:rgba(255, 66, 8, 1);
  stroke: #fff;
  stroke-width: 1px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.2);
  }
`;

export const SearchFormBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 34px;
  height: 34px;
  border: 0;
  border-radius: 50%;

  background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }

  svg {
    fill: rgba(255, 66, 8, 1);
    stroke: #fff;
    stroke-width: 1px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
      transform: scale(1.2);
    }
  }
`;

export const SearchFormInput = styled(DebounceInput)`
  display: inline-block;
  width: 100%;
  min-height: 34px;

  border-radius: 0.1rem;

  font: inherit;

  font-size: 1.2rem;

  border: none;
  outline: none;

  padding-left: 16px;
  padding-right: 16px;

  background: none;

  color: rgba(255, 66, 8, 1);
  letter-spacing: 1.4px;

  :focus {
    outline: none;
  }

  ::placeholder {
    text-align: center;
    color: #fd5523;
    font-size: 20px;
    letter-spacing: 1.3px;
  }
`;

