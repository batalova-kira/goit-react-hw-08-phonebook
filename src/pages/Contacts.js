import { Box, Typography } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/Contactlist';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operation';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        height: '100vh',
        color: 'primary.darker',

        background:
          'linear-gradient(0deg, rgba(224,246,250,1) 42%, rgba(253,234,232,0.8015581232492998) 75%)',
        p: 2,
        opacity: 0.9,
      }}
    >
      <Typography
        component="h3"
        variant="h5"
        sx={{
          color: 'primary.darker',
          textTransform: 'uppercase',
          fontWeight: 600,
          textAlign: 'center',
          pb: 2,
        }}
      >
        Phonebook
      </Typography>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <Typography
        component="h3"
        variant="h5"
        sx={{
          color: 'primary.darker',
          textTransform: 'uppercase',
          fontWeight: 600,
          textAlign: 'center',
          pb: 2,
        }}
      >
        Contacts
      </Typography>
      <Filter />
      <ContactList />
    </Box>
  );
}
