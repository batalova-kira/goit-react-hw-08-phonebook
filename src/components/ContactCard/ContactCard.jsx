import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';
import { Button, Card, CardContent, Typography } from '@mui/material';

const ContactCard = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Typography
          component="h5"
          sx={{
            color: 'primary.darker',

            fontWeight: 600,
            textAlign: 'start',
          }}
        >
          {name}
        </Typography>
        <Typography
          component="h5"
          sx={{
            color: 'primary.darker',
            fontWeight: 400,
            textAlign: 'start',
            mb: 1,
          }}
        >
          {number}
        </Typography>
        <Button
          size="small"
          sx={{
            color: 'primary.contrastText',
            backgroundColor: 'secondary.main',
            width: '30%',
            ':hover': {
              color: 'primary.contrastText',
              backgroundColor: 'secondary.dark',
            },
          }}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
