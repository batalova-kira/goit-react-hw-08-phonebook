import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/contacts/operation';
import { Button } from '@mui/material';
import { selectVisibleContacts } from 'redux/contacts/selectors';

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
      <Form>
        <label htmlFor="name">Name</label>
        <Field name="name" placeholder="Please enter your name" />
        <ErrorMessage name="name" component="div" />

        <label htmlFor="number">Number</label>
        <Field
          name="number"
          placeholder="Please enter your number"
          type="text"
        />
        <ErrorMessage name="number" component="div" />

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
