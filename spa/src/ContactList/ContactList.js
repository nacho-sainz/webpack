import { Box } from '@mui/material';
import { EmptyContactsContainer } from './ContactList.styles';

function ContactList({ contacts = [] }) {
  if (!contacts.length) {
    return (
      <EmptyContactsContainer>
        You haven't add contacts. Please click on create contact to start.
      </EmptyContactsContainer>
    );
  }
  return (
    <Box component="ul">
      {contacts.map(contact => (
        <Box component="li" key={contact.firstName}>
          {contact.firstName} {contact.lastName}
        </Box>
      ))}
    </Box>
  );
}

export default ContactList;
