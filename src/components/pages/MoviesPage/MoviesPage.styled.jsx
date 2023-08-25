import styled from 'styled-components';

export const MoviesBlock = styled.div`
  display: inline-block;
  width: 100%;
  min-height: 34px;
  border-radius: 0.1rem;
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  line-height: inherit;
  font-family: inherit;
  font-optical-sizing: inherit;
  font-kerning: inherit;
  font-feature-settings: inherit;
  font-variation-settings: inherit;
  font-size: 1.2rem;
  border: none;
  outline: none;
  padding-left: 32px;
  padding-right: 8px;
  background: none;
  color: rgb(255, 66, 8);
  letter-spacing: 1.4px;
  &:active {
    outline: none;
  }
`;

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 0px;
  border-radius: 50%;
  background: linear-gradient(
    141.22deg,
    rgb(255, 194, 38) 9.4%,
    rgb(248, 65, 25) 91.91%
  );
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    transform: scale(0.8);
  }
`;


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

