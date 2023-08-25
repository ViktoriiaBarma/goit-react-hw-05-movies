import React, { useEffect, useState } from 'react'
import {useLocation, useSearchParams } from 'react-router-dom'
import { getMoviesSearch } from 'servises/api'
import {MoviesBlock, List, Btn, Item, Link} from './MoviesPage.styled'


const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams('query');
const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const query = searchParams.get('query') ?? '';

  const [array, setArray] = useState([]);
  const location = useLocation()

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await getMoviesSearch(`?query=${query}`);
        setArray(response);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [query])

  const handleSearch = () => {
    setSearchParams({ query: searchQuery });

  }
  return (
    <>
      {/* <ToastContainer /> */}
      <MoviesBlock
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='search movie'
      />
      <Btn onClick={handleSearch}>Search</Btn>

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