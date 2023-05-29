import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import { isLoading } from 'redux/shops/shopsSelector';

import { Divider, LinearProgress } from '@mui/material';

export default function SharedLayout() {
  const loading = useSelector(isLoading);

  return (
    <>
      <Header />
      <Suspense fallback={<LinearProgress />}>
        {loading ? <LinearProgress /> : <Divider />}

        <Outlet />
      </Suspense>
    </>
  );
}
