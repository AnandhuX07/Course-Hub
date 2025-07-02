import React from 'react';
import Header from './Header';
import Samecomponent from './Samecomponent';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Samecomponent />
      <Outlet />  {/* This renders the page content */}
      <Footer />
    </>
  );
};

export default Layout;
