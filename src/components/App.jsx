import { Routes, Route } from "react-router-dom";

import { getTrandingMovies } from '../services/api'
import Layout  from './Header/Header'
import { lazy } from "react";

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const MoviesPage = lazy(()=> import('../components/pages/MoviesPage/MoviesPage'))
const MovieDetails = lazy(()=> import('../components/pages/MovieDetailsPage/MovieDetailsPage'))
const Cast = lazy(() => import('./Cast/Cast'))

const Reviews = lazy(()=> import('./Reviews/Reviews'))

export const App = () => {
  return (
    
      <Routes>
         <Route path="/" element={<Layout />}>
          <Route index element={<HomePage list={getTrandingMovies()}/>} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
  );
};