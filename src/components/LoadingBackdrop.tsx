import { Box, CircularProgress, Stack, styled } from '@mui/material';

import theme, { ThemeWrapper } from '../themes/theme';
import Logo from './Logo';

const LoadingBackDrop = () => {
  const StyledMainBox = styled(Box)(() => ({
    width: '100vw',
    height: '100vh',
    backgroundColor: theme.palette.secondary.light,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  return (
    <ThemeWrapper>
      <StyledMainBox component="main">
        <Stack spacing={4} alignItems="center">
          <Logo height="auto" width="20%" minWidth={140} />
          <CircularProgress />
        </Stack>
      </StyledMainBox>
    </ThemeWrapper>
  );
};

export default LoadingBackDrop;
