import { Box, styled } from '@mui/material';

const StyledMainBox = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  background: 'center / cover no-repeat url("/home_background.png")',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.down('md')]: {
    '& .first': {
      justifyContent: 'center',
      backgroundPosition: '0% 0%',
    },
    '& .second': {
      backgroundPosition: '100% 0%',
      justifyContent: 'space-between',
    },
  },
}));

export default StyledMainBox;
