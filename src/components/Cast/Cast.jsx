import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'servises/api';
import {
  ActorsCharacter,
  ActorsName,
  CastItem,
  CastList,
  CastPhoto,
  CastPhotoThumb,
  MovieHero,
  Wrap,
} from './Cast.styled';
import Avatar from 'assets/avatar.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovieCast(`${movieId}`);
        setCast(response);
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    };
    fetchData();
  }, [movieId]);
  return (
    <>
      <CastList>
        {cast.length === 0 ? (
          <p>Інформація про акторський склад не знайдена</p>
        ) : (
          cast.map(({ cast_id, name, character, profile_path }) => {
            return (
              <CastItem key={cast_id}>
                <CastPhotoThumb>
                  <CastPhoto
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/original${profile_path}`
                        : Avatar
                    }
                    alt={name}
                    width={300}
                  />
                </CastPhotoThumb>

                <Wrap>
                  <ActorsName>{name}</ActorsName>
                  {character && (
                    <ActorsCharacter>
                      Персонаж
                      <MovieHero>{character}</MovieHero>
                    </ActorsCharacter>
                  )}
                </Wrap>
              </CastItem>
            );
          })
        )}
      </CastList>
    </>
  );
};

export default Cast;
