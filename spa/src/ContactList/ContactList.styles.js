import { Box, styled } from '@mui/material';

const EmptyContactsContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ContactsContainer = styled(Box)`
  > div:nth-child(2n) {
    background-color: #d9d9d9;
  }
`;

export { EmptyContactsContainer, ContactsContainer };
