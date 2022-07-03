import { useState } from 'react';
import { Button, Dialog } from '@mui/material';

import ContactList from './ContactList';
import ContactForm from './ContactForm/ContactForm';

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
    <div>
      <ContactList contacts={contacts} />
      <Dialog open={showContactForm} onClose={closeContactForm}>
        <ContactForm onCreate={onCreate} />
      </Dialog>
      <Button onClick={openContactForm} variant="contained">
        Create contact
      </Button>
    </div>
  );
}

export default App;
