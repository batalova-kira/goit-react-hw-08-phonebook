import { useDispatch } from 'react-redux';
import { Layout } from './Layout/Layout';

// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operation';
import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operation';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
