import { ReactNode } from 'react';
import { Box, CircularProgress, Stack, Typography, styled } from '@mui/material';

import theme, { ThemeWrapper } from '../themes/theme';
import Logo from './Logo';

const LoadingBackDrop = ({ message }: { message?: string }): ReactNode => {
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
        <Stack spacing={4} alignItems="center" px={2}>
          <Logo height="auto" width="20%" minWidth={140} />
          {message && (
            <Typography color="white" variant="subtitle1" textAlign="center">
              {message}
            </Typography>
          )}
          <CircularProgress />
        </Stack>
      </StyledMainBox>
    </ThemeWrapper>
  );
};

export default LoadingBackDrop;
