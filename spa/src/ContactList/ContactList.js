import { Box } from '@mui/material';

function ContactList({ contacts = [] }) {
  if (!contacts.length) {
    return <Box>You haven't add contacts. Please click on create contact to start!</Box>;
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
