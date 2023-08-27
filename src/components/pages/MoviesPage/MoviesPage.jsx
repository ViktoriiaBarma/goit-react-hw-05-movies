import React, { useEffect, useState, useMemo } from 'react'
import {useLocation, useSearchParams } from 'react-router-dom'
import { getMoviesSearch } from 'services/api'
import { Icon,
  SearchForm,
  SearchFormBtn,
  SearchFormInput} from './MoviesPage.styled'
import { Loader } from 'components/Loader/Loader'
import { MovieGallery } from 'components/MovieGallery/MovieGallery';
import Pagination from 'components/Pagination/Pagination';

const MoviesPage = () => {
 const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
 const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    query: '',
    });
  
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  const page = Number(params.page || 1);
  let { query } = params;

  const location = useLocation();


    useEffect(() => {
    (async () => {
      try {
        const data = await getMoviesSearch(page, query);
        //console.log(data.results);
        setMovies(data.results);
        setTotalPages(data.total_results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, query, location.search]);

  useEffect(() => {
    const filtered = movies?.filter(movie =>
      movie?.title?.toLowerCase().includes(query?.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [movies, query]);



  const handleSearchChange = e => {
    const inputValue = e.target.value;
    query = inputValue;
    setSearchParams({ page: 1, query: query });
  };

  return (
    <>

 <SearchForm>
        <SearchFormInput         
type="text"
          value={query}
           debounceTimeout={500}
        onChange={handleSearchChange}
        placeholder={`Пошук фільмів`}
      />
      <SearchFormBtn type="submit" >
        <Icon size="24" />
      </SearchFormBtn>
      </SearchForm>
        {isLoading && <Loader />}

        {!error && query && !isLoading && (
          <MovieGallery movies={filteredMovies} />
        )}

        {movies.length > 0 && !isLoading && page <= totalPages && (
          <Pagination
            pageCount={totalPages}
            setSearchParams={setSearchParams}
            params={params}
            currentPage={page - 1}
          />
        )}
    </>
    );
};

export default MoviesPage;


