import { useLocation } from 'react-router-dom';
import { MovieListStyled } from './MovieGallery.styled';
import { MovieGalleryItem } from 'MovieGalleryItem/MovieGalleryItem';

export const MovieGallery = ({ movies, genres }) => {
  const location = useLocation();
  return (
    <MovieListStyled>
      {movies.map(movie => (
        <MovieGalleryItem
          key={movie.id}
          movie={movie}
          genres={genres}
          state={{ from: location }}
        />
      ))}
    </MovieListStyled>
  );
};