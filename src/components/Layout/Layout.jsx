import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar/AppBar';
import { SharedLayout } from './Layout.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <SharedLayout>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </SharedLayout>
  );
};
