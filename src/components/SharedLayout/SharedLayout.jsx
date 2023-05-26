import React from 'react';
// import ApplicationBar from '../Header/Header/Header';
import { Outlet } from 'react-router';
import Header from '../Header/Header';

export default function SharedLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
