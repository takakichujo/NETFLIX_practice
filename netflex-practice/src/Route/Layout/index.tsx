import { FC } from 'react';
import { Nav } from '../../components/Nav/index';
import { Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
