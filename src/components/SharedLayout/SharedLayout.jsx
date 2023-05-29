import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import { Divider, LinearProgress } from '@mui/material';

export default function SharedLayout() {
  return (
    <>
      <Header />
      <Suspense fallback={<LinearProgress />}>
        <Divider />
        <Outlet />
      </Suspense>
    </>
  );
}
