import {Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom"
import { getMoviesDetails } from 'servises/api'
import {WrapperMovie,WrapperPicVote,WrapperDetails,PosterMovie,MainTitle,Rating,Genres,Genre,MovieInfo,MovieInfoTitle,NavLink} from './MovieDetailsPage.styled'
import NoPoster from 'assets/no-poster.jpg';
import {LinkToBack} from 'components/LinkToBack/LinkToBack'

const MovieDetails = () => {
  const {movieId} = useParams()
  const [movieDetails, setmovieDetails] = useState([]);
  const location = useLocation()
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies')


    
  useEffect(() => {
    const fetchData = async () => {
    try {
      const response = await getMoviesDetails(`${movieId}`)
      setmovieDetails(response);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };
    fetchData();
  },[movieId])

    const { title, release_date, poster_path, genres, overview, vote_average,original_title } = movieDetails 
      
    
   

  return (
    <>
      <WrapperMovie>
        <WrapperPicVote>
          {`https://image.tmdb.org/t/p/original${poster_path}` && (
                <PosterMovie
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/original${poster_path}`
                      : NoPoster
                  }
                  alt={title || original_title}
                  width="500"
                />
              )}
        </WrapperPicVote>
        <WrapperDetails>
          <MainTitle>
                {title || original_title}
                {release_date && <span> ({parseInt(release_date)})</span>}
              </MainTitle>
        <Rating>User Score: {Math.round((vote_average * 10))}%</Rating>
         {overview && (
                <>
                  <h2>{'moviesPage.overview'}</h2>
                  <p>{overview}</p>
                </>
              )}

         {genres && (
                <Genres>
                  {genres.map((genre, index) => (
                    <Genre key={index}>{genre.name}</Genre>
                  ))}
                </Genres>
              )}
        </WrapperDetails>
          </WrapperMovie>
          

 <MovieInfo>
            <MovieInfoTitle>
             Додаткова інформація
            </MovieInfoTitle>
            <LinkToBack
              to={backLinkLocationRef.current}
            >Назад</LinkToBack>
            <nav>
              <NavLink to="cast" state={location.state}>
                Aкторський склад
              </NavLink>
              <NavLink to="reviews" state={location.state}>
                Відгуки
              </NavLink>
            </nav>
          </MovieInfo>

          <Suspense fallback={<div> loading</div>}>
            <Outlet />
          </Suspense>
      
    </>
  )
}

export default MovieDetails