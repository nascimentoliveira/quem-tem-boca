import { styled } from '@mui/material';

const StyledContainer = styled('main')(({ theme }) => ({
  width: '100vw',
  minWidth: 320,
  height: 700,
  minHeight: '100vh',
  background: 'center / cover no-repeat url("/home_background.png")',
  '& .mobile': {
    display: 'none',
  },
  [theme.breakpoints.down('md')]: {
    '& .desktop': {
      display: 'none',
    },
    '& .mobile': {
      minWidth: 320,
      display: 'flex',
    },
  },
}));

export default StyledContainer;
