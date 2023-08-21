import { Box, Button, Typography } from '@mui/material';

const Join = () => {
  const joinStyles = {
    color: 'white',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'end',
  };

  const buttonTextStyles = {
    color: 'white',
    fontSize: '18px',
    height: 'max-content',
    boxSizing: 'border-box',
    fontFamily: 'Quicksand, sans-serif',
    textTransform: 'none',
    flexDirection: 'column',
    alignItems: 'end',
    zIndex: 2,
  };

  return (
    <Box sx={joinStyles}>
      <Button variant='text'sx={buttonTextStyles}>
        <Typography sx={{ whiteSpace: 'nowrap' }}>
          Não tem conta?
        </Typography>
        <Typography color='secondary' sx={{ whiteSpace: 'nowrap' }}>
          Cadastre-se
        </Typography>
      </Button>
    </Box>
  );
};

export default Join;
