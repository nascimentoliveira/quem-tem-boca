import { ReactNode } from 'react';
import { Box, styled } from '@mui/material';

import Slogan from '../Slogan';

interface FormContainerProps {
  children: ReactNode;
}

const FormContainer = ({ children }: FormContainerProps) => {
  const StyledFormBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('md')]: {
      height: '80vh',
      maxWidth: 400,
    },
  }));

  return (
    <StyledFormBox px={5}>
      <Slogan />
      {children}
    </StyledFormBox>
  );
};

export default FormContainer;
