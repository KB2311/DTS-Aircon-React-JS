import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../containers/Header/Header';
import Footer from '../containers/Footer/Footer';

function DashboardLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default DashboardLayout;
