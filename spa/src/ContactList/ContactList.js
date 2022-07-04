import { Box } from '@mui/material';
import ContactSummary from '../ContactSummary';
import { ContactsContainer, EmptyContactsContainer } from './ContactList.styles';

function ContactList({ contacts = [] }) {
  if (!contacts.length) {
    return (
      <EmptyContactsContainer>
        You haven't add contacts. Please click on create contact to start.
      </EmptyContactsContainer>
    );
  }
  return (
    <ContactsContainer>
      {contacts.map(contact => (
        <ContactSummary key={contact.firstName} contact={contact} />
      ))}
    </ContactsContainer>
  );
}

export default ContactList;
