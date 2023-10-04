import { ReactNode } from 'react';
import { Box, Stack, styled } from '@mui/material';

import Slogan from '../Slogan';

interface FormContainerProps {
  children: ReactNode;
}

const FormContainer = ({ children }: FormContainerProps) => {
  const StyledFormStack = styled(Stack)(({ theme }) => ({
    background: 'linear-gradient(to left, #000000 0%, #000000e6 40%, #00000000 100%)',
    height: '100%',
    width: '30vw',
    minWidth: '300px',
    position: 'absolute',
    top: '0',
    right: '0',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
      background: 'linear-gradient(to top, #000000 0%, #000000e6 10%, #00000000 50%)',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  }));

  const StyledFormBox = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('md')]: {
      maxWidth: 350,
      width: '100%',
    },
  }));

  return (
    <StyledFormStack spacing={2} pt={12}>
      <StyledFormBox px={5}>
        <Slogan />
        {children}
      </StyledFormBox>
    </StyledFormStack>
  );
};

export default FormContainer;
