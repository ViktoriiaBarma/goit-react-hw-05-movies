import { useEffect, useState, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getTrandingMovies } from 'services/api';
import { HomeBlock, Title } from './HomePage.styled';
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import { Loader } from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';

  const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const location = useLocation();

  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const page = Number(params.page || 1);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);

        const data = await getTrandingMovies(page);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, location.search]);
    
    
    
  return (
    <HomeBlock>
      {isLoading && <Loader />}
     <Title >ГОЛОВНІ ТРЕНДИ</Title>
          <MovieGallery movies={movies} />
          <Pagination
            pageCount={totalPages}
            setSearchParams={setSearchParams}
            params={params}
            currentPage={page - 1}
          />
    </HomeBlock>
  );
};
export default HomePage;
