import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'services/api';
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
import { Loader } from 'components/Loader/Loader';
import Avatar from 'assets/avatar.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const response = await getMoviesCast(`${movieId}`);
        setCast(response);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);




  return (
    <>
       {isLoading && <Loader />}
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
                      Персонаж:
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
