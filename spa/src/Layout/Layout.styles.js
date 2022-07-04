import { Box, styled } from '@mui/material';

const headerHeight = '56px';
const footerHeight = '56px';

const Header = styled(Box)`
  border-bottom: 1px solid #a1a1a1;
  box-sizing: border-box;
  height: ${headerHeight};
  padding: 12px;
`;
Header.defaultProps = {
  component: 'header',
};
const Main = styled(Box)`
  background-color: #ededed;
  box-sizing: border-box;
  height: calc(100vh - ${headerHeight} - ${footerHeight});
  overflow: auto;
`;
Main.defaultProps = {
  component: 'main',
};
const Footer = styled(Box)`
  border-top: 1px solid #a1a1a1;
  height: ${footerHeight};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 12px;
  box-sizing: border-box;
`;
Footer.defaultProps = {
  component: 'footer',
};

export { Header, Main, Footer };
