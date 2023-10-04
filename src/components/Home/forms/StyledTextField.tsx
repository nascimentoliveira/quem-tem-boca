import { TextField, styled } from '@mui/material';

import theme from '@/themes/theme';

const StyledTextField = styled(TextField)({
  background: theme.palette.primary.main,
  borderRadius: 4,
  '& label.Mui-focused': {
    color: theme.palette.primary.contrastText,
  },
});

export default StyledTextField;
