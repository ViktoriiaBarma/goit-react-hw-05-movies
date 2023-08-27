import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    padding-top: 32px;
    padding-bottom: 32px;
    text-align: center;
     background-color: rgb(248 170 96 / 39%);;
}
`;

export const CastItem = styled.li`
  display: flex;
  flex-flow: column wrap;
  max-width: 100%;
  width: 180px;
  height: 100%;
  border-radius: 8px;
  border: none;
  outline: none;
  box-shadow: rgba(42, 79, 42, 0.17) 9px 7px 19px 7px;
  font-size: 12px;
  font-weight: 700;
  overflow: hidden;
`;

export const CastPhotoThumb = styled.div`
  position: relative;
  overflow: hidden;
`;

export const CastPhoto = styled.img`
  display: block;
  min-height: 100%;
  height: 240px;
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
`;

export const Wrap = styled.div`
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
  padding: 4px;
  background-color: #fff;
`;

export const MovieHero = styled.span`
  color: rgb(255, 66, 8);
  padding-left:5px;
`;

export const ActorsName = styled.h3`
  margin-bottom: 16px;
  text-align: center;
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 500;
`;

export const ActorsCharacter = styled.p`
  margin-bottom: 16px;
  text-align: center;
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 500;
`;
