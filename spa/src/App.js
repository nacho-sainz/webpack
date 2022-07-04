import { useState } from 'react';
import { Box, Button, Dialog, Divider, Typography } from '@mui/material';

import ContactList from './ContactList';
import ContactForm from './ContactForm/ContactForm';
import { Footer, Header, Main } from './Layout';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [contacts, setContacts] = useState([]);

  function openContactForm() {
    setShowContactForm(true);
  }
  function closeContactForm() {
    setShowContactForm(false);
  }
  function onCreate(contact) {
    setContacts([contact, ...contacts]);
    closeContactForm();
  }

  return (
    <>
      <Header>
        <Typography fontSize="2rem" fontWeight="bold" variant="h1">
          Contact
        </Typography>
      </Header>
      <Main>
        <ContactList contacts={contacts} />
      </Main>
      <Footer>
        <Button onClick={openContactForm} variant="contained">
          Create contact
        </Button>
      </Footer>
      <Dialog open={showContactForm} onClose={closeContactForm}>
        <ContactForm onCreate={onCreate} />
      </Dialog>
    </>
  );
}

export default App;
