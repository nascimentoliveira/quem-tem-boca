import { Button, styled } from '@mui/material';

import theme from '@/themes/theme';

const StyledSendButton = styled(Button)({
  height: '48px',
  fontSize: '18px',
  textTransform: 'none',
  '&.Mui-disabled': {
    backgroundColor: theme.palette.secondary.main,
  },
});

export default StyledSendButton;
