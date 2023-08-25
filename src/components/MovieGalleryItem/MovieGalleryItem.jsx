import {
  MovieListItem,
  MoviePoster,
  MovieTitle,
} from './MovieGalleryItem.styled';
import { Link } from 'react-router-dom';

import NoPoster from 'assets/no-poster.jpg';

export const MovieGalleryItem = ({
  movie: { id, poster_path, title, original_title },
  state,
}) => {
  return (
    <MovieListItem>
      <Link to={`/movies/${id}`} state={state}>
        <MoviePoster>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : NoPoster
            }
            alt={original_title}
            width="200"
          />
        </MoviePoster>

        <MovieTitle>{title}</MovieTitle>
      </Link>
    </MovieListItem>
  );
};
