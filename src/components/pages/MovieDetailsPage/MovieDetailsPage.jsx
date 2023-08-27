import {Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom"
import { getMoviesDetails } from 'services/api'
import {WrapperMovie,WrapperPicVote,WrapperDetails,PosterMovie,MainTitle,Rating,Genres,Genre,MovieInfo,MovieInfoTitle,NavLink} from './MovieDetailsPage.styled'
import NoPoster from 'assets/no-poster.jpg';
import { LinkToBack } from 'components/LinkToBack/LinkToBack'
import { Loader } from "components/Loader/Loader";


const MovieDetails = () => {
  const {movieId} = useParams()
  const [movieDetails, setmovieDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(false);

  const urlOriginal = 'https://image.tmdb.org/t/p/original'
  const location = useLocation()
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies')


    
  useEffect(() => {
    const fetchData = async () => {
      try {
      setIsLoading(true);
       // setError(false);
      const response = await getMoviesDetails(`${movieId}`)
      setmovieDetails(response);
      } catch (error) {
        console.log(error)
  //      setError(error);
    }finally {
        setIsLoading(false);
      }
  };
    fetchData();
  },[movieId])

    const { title, release_date, poster_path, genres, overview, vote_average } = movieDetails 
      
 

  return (
    <>
             {isLoading && <Loader />}

      <WrapperMovie>
        <WrapperPicVote>
          {`${urlOriginal+poster_path}` && (
                <PosterMovie
                  src={
                    poster_path
                      ? `${urlOriginal+poster_path}`
                      : NoPoster
                  }
                  alt={title}
                  width="500"
                />
              )}
        </WrapperPicVote>
        <WrapperDetails>
          <MainTitle>
                {title}
            {release_date && ` (${release_date.slice(0, 4)})`}
          </MainTitle>
        <Rating>Рейтинг: {Math.round((vote_average * 10))}%</Rating>
         {overview && (
                <>
                  <h2>Огляд фільму</h2>
                  <p>{overview}</p>
                </>
              )}

                  <Genres> Жанр
                  {genres && genres.map(({id, name}) => (
                    <Genre key={id}>{name}</Genre>
                  ))}
            </Genres>
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