import { ReactNode, useState } from 'react';
import { Box, Fab, styled } from '@mui/material';
import { EastRounded, KeyboardBackspaceRounded } from '@mui/icons-material';

import Logo from './Logo';
import StyledMainBox from './StyledMain';
import HomeHeader from './HomeHeader';
import FormContainer from './forms/FormContainer';

interface MobileViewProps {
  button: ReactNode;
  form: ReactNode;
  isFirstHalf: boolean;
}

const MobileView = ({ button, form, isFirstHalf }: MobileViewProps) => {
  const [showFirstHalf, setShowFirstHalf] = useState(isFirstHalf);

  const StyledBottomBox = styled(Box)(() => ({
    background: 'linear-gradient(to top, #000000 0%, #000000e6 20%, #00000000 60%)',
    width: '100%',
    height: '40vh',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 40,
  }));

  const StyledButton = styled(Fab)(() => ({
    height: 48,
    fontFamily: 'Quicksand, Arial, sans-serif',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'none',
    color: '#ffffff',
    zIndex: 2,
  }));

  const handleClickNext = () => {
    setShowFirstHalf(false);
  };

  const handleClickReturn = () => {
    setShowFirstHalf(true);
  };

  return (
    <StyledMainBox className="mobile">
      {showFirstHalf ? (
        <>
          <HomeHeader showFirstHalf={showFirstHalf}>
            <Logo height="min-content" width="60%" minWidth={250} />
          </HomeHeader>
          <StyledBottomBox>
            <StyledButton color="secondary" variant="extended" onClick={handleClickNext}>
              Começar
              <EastRounded sx={{ ml: 1 }} />
            </StyledButton>
          </StyledBottomBox>
        </>
      ) : (
        <>
          <HomeHeader>
            <StyledButton color="secondary" variant="extended" onClick={handleClickReturn}>
              <KeyboardBackspaceRounded sx={{ mr: 1 }} />
              Voltar
            </StyledButton>
            {button}
          </HomeHeader>
          <FormContainer>{form}</FormContainer>
        </>
      )}
    </StyledMainBox>
  );
};

export default MobileView;
