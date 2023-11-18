import ContactCard from 'components/ContactCard/ContactCard';
import React from 'react';
import { ContactItem } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul>
      {contacts.map(item => (
        <ContactItem key={item.id}>
          <ContactCard contact={item} />
        </ContactItem>
      ))}
    </ul>
  );
};

export default ContactList;
