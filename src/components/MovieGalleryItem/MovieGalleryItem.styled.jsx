import styled from 'styled-components';

export const MovieListItem = styled.li`
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
  &:hover {
    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);
  }

  img {
   display: block;
        min-height: 100%;
        height: 420px;
        width: 100%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        transition: transform 250ms linear 0s;
        transform: scale(1);
        object-fit: cover;
        object-position: center center;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const MoviePoster = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
`;

export const MovieTitle = styled.h2`
  padding: 8px 4px;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: rgb(0, 0, 0);
        text-shadow: rgb(255, 255, 255) 0px 0.4px 0.4px;
        text-align: center;
        font-size: 14px;
        font-weight: 700;
`;


