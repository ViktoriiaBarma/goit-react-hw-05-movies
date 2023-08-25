import styled from 'styled-components';
import ReactPaginate from 'react-paginate';

export const Paginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
  font-size: 14px;

  .selected {
    border: 1px solid rgb(255, 255, 255);
        border-radius: 50%;
        background: rgb(236, 240, 243);
        box-shadow: rgb(255, 255, 255) -3px -3px 7px inset, rgb(206, 206, 209) 3px 3px 5px inset;
        text-shadow: rgb(255, 255, 255) 0.0625rem 0.0625rem 0.0625rem;
        color: rgb(255, 66, 8);
  }

  a {
    display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        width: 34px;
        height: 34px;
        border-radius: 50%;
        text-align: center;
        border: none;
        outline: none;
        box-shadow: rgb(255, 255, 255) -3px -3px 7px, rgba(185, 228, 201, 0.773) 3px 3px 7px;
        text-shadow: rgb(255, 255, 255) 0px 1px 1px;
        background-color: transparent;
        cursor: pointer;
    &:hover {
     background: rgb(236, 240, 243);
        box-shadow: rgb(255, 255, 255) -3px -3px 7px inset, rgb(206, 206, 209) 3px 3px 5px inset;
        color: rgb(255, 66, 8);
    }
  }
`;