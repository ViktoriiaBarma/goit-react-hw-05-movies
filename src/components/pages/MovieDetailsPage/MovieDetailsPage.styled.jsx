import styled from 'styled-components';
import { NavLink as MovieLink } from 'react-router-dom';

export const WrapperMovie = styled.div`
  position: relative;
  display: flex;
 flex-direction: row;
  align-items: center;
  gap: 16px;

  padding: 0 16px;
  font-weight: 500;

  }
`;

export const WrapperPicVote = styled.div`
  position: relative;
  max-width: 100%;

  border-radius: 8px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;


export const WrapperDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  gap: 16px;

  padding: 16px;
  font-weight: 500;
  font-size:14px;
  }
`;

export const PosterMovie = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  object-position: center;
`;


export const MainTitle = styled.h2`
 margin-bottom: 16px;
        text-align: center;
        color: rgb(0, 0, 0);
        font-size: 32px;
        font-weight: 500;
        letter-spacing: 1.5px;
  }
`;


export const Rating = styled.p` 
font-size: 18px;
  margin: 0;
  padding: 20px;
  color: rgb(250, 175, 0);
  `;


  export const Genres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Genre = styled.li`
          background: linear-gradient(141.22deg, rgb(255, 194, 38) 9.4%, rgb(248, 65, 25) 91.91%);
        color: rgb(0, 0, 0);
        text-shadow: rgb(255, 255, 255) 0px 0.4px 0.4px;
        font-size: 14px;
        font-weight: bold;
        border-radius: 5px;
        padding: 6px;
  }
`;


export const MovieInfo = styled.div`
  display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 40px;
        height: auto;
        margin-top: 30px;
        padding: 20px;
        border-bottom: 1px solid black;
        background: linear-gradient(rgba(2, 0, 36, 0) 0%, rgba(121, 9, 9, 0) 10%, rgb(248, 170, 96) 100%);
        font-size: 20px;
`;

export const MovieInfoTitle = styled.h3`
 margin-bottom: 30px;
        color: rgb(0, 0, 0);
        font-size: 20px;
`;


export const NavLink = styled(MovieLink)`
  position: relative;
        z-index: 9;
        padding: 8px 16px;
        border-radius: 4px;
        text-decoration: none;
        color: rgb(0, 0, 0);
        font-size: 14px;
        font-weight: 500;
  &.active {
    color: #fff;
    background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #fd5523;
  }


`;