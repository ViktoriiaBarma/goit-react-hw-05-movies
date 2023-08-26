import React, { useEffect, useState } from 'react'
import {useLocation, useSearchParams } from 'react-router-dom'
import { getMoviesSearch } from 'services/api'
import { Icon,
  SearchForm,
  SearchFormBtn,
  SearchFormInput, List, Item, Link} from './MoviesPage.styled'
import { Loader } from 'components/Loader/Loader'
const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams('query');
const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const query = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);
  const [array, setArray] = useState([]);
  const location = useLocation()

  useEffect(() => {

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const response = await getMoviesSearch(`?query=${query}`);
        setArray(response);
      } catch (error) {
        setError(error);
      }finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query])

  const handleSearch = () => {
    setSearchParams({ query: searchQuery });

  }
  return (
    <>
             {isLoading && <Loader />}
 <SearchForm>
        <SearchFormInput         
type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={`Пошук фільмів`}
      />
      <SearchFormBtn type="submit" onClick={handleSearch}>
        <Icon size="24" />
      </SearchFormBtn>
    </SearchForm>
      

      <List>
        {array.map(({ id, title }) =>
          <Item key={id} >
          <Link to={`${id}`} state={{ from: location }}>
            {title}
          </Link>
        </Item>)} 
        </List>
    </>
  );
};

export default MoviesPage;


