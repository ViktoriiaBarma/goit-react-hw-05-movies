import { Outlet } from 'react-router-dom';
import { Link, Nav, NavBlock } from './Header.styled';
import { Suspense } from 'react';
const Layout = () => {
  return (
    <>
      <Nav>
        <NavBlock>
          <Link
            style={({ isActive }) => ({
              color: isActive ? 'blue' : 'black',
            })}
            to="/"
          >
            Home
          </Link>
          <Link
            style={({ isActive }) => ({
              color: isActive ? 'blue' : 'black',
            })}
            to="/movies"
          >
            Movies
          </Link>
        </NavBlock>
      </Nav>
      <main>
        <Suspense fallback={<div>('loading')</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
export default Layout;