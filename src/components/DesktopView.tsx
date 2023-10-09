import { ReactNode } from 'react';
import { Stack, styled } from '@mui/material';

import StyledMainBox from '@/components/StyledMain';
import FormContainer from '@/components/forms/FormContainer';
import HomeHeader from '@/components/HomeHeader';
import Logo from './Logo';

interface DesktopViewProps {
  button: ReactNode;
  form: ReactNode;
}

const DesktopView = ({ button, form }: DesktopViewProps) => {
  const StyledFormStack = styled(Stack)(() => ({
    background: 'linear-gradient(to left, #000000 0%, #000000e6 40%, #00000000 100%)',
    height: '100%',
    minHeight: 700,
    width: '30vw',
    minWidth: 400,
    position: 'absolute',
    right: '0',
    display: 'flex',
    flexDirection: 'column',
  }));

  return (
    <StyledMainBox className="desktop">
      <HomeHeader>
        <Logo height="min-content" width="50%" maxWidth={450} />
        {button}
      </HomeHeader>
      <StyledFormStack spacing={2} pt={12}>
        <FormContainer>{form}</FormContainer>
      </StyledFormStack>
    </StyledMainBox>
  );
};

export default DesktopView;
