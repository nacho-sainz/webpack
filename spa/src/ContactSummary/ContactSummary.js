import { Avatar, Box, Typography } from '@mui/material';
import { formatPhone } from 'webpack-package';

function ContactSummary({ contact }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, padding: '16px', boxSizing: 'border-box' }}>
      <Avatar></Avatar>
      <Box sx={{ ml: '16px', width: '100%' }}>
        <Typography>{`${contact.firstName ?? ''} ${contact.lastName ?? ''}`}</Typography>
        <Typography>{formatPhone(contact.phoneNumber)}</Typography>
      </Box>
    </Box>
  );
}

export default ContactSummary;
