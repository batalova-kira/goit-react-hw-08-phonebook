import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/operation';
import { Button } from '@mui/material';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Input, StyledForm } from './ContactForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('This field is required!'),
  number: Yup.string().min(8, 'Too Short!').required('This field is required!'),
});

export const ContactForm = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const onAddContact = newContact => {
    const hasContact = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (hasContact) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    const finalContact = {
      ...newContact,
    };
    dispatch(addContact(finalContact));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        onAddContact(values);
        actions.resetForm({
          values: {
            name: '',
            number: '',
          },
        });
      }}
    >
      <StyledForm>
        <label htmlFor="name">Name</label>
        <Input name="name" placeholder="Please enter your name" />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="number">Number</label>
        <Input
          name="number"
          placeholder="Please enter your number"
          type="text"
        />
        <ErrorMessage name="number" component="div" />

        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{
            backgroundColor: 'secondary.main',
            mb: 2,
            width: '30%',
            ':hover': {
              backgroundColor: 'secondary.dark',
            },
          }}
        >
          Add contact
        </Button>
      </StyledForm>
    </Formik>
  );
};
