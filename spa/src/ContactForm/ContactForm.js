import { Box, Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';

function ContactForm({ onCreate }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  function createChangeHandler(stateSetter) {
    return function onChange({ target: { value } }) {
      stateSetter(value);
    };
  }

  function createContact() {
    onCreate({ firstName, lastName, phoneNumber });
  }

  return (
    <Box component="form" p={'16px'}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="First Name"
            InputLabelProps={{ shrink: true }}
            onChange={createChangeHandler(setFirstName)}
            value={firstName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Last Name"
            InputLabelProps={{ shrink: true }}
            onChange={createChangeHandler(setLastName)}
            value={lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            InputLabelProps={{ shrink: true }}
            onChange={createChangeHandler(setPhoneNumber)}
            value={phoneNumber}
          />
        </Grid>
        <Grid item xs={12}>
          <Button onClick={createContact} variant="contained">Create</Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactForm;
