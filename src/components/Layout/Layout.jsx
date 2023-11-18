// import { Toaster } from 'react-hot-toast';
import { NavBar } from 'components/AppBar/NavBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CircularProgress, Container } from '@mui/material';

export const Layout = () => {
  const { isRefreshing } = useAuth();

  return (
    <Container sx={{ height: '100vh' }}>
      {isRefreshing ? (
        <CircularProgress disableShrink />
      ) : (
        <>
          <NavBar />
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </>
      )}
    </Container>
  );
};
