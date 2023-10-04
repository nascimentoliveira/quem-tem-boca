import { Box, styled } from '@mui/material';

const StyledMainBox = styled(Box)(({ theme }) => ({
  width: '100%',
  minWidth: 320,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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
