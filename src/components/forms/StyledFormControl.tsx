import { FormControl, styled } from '@mui/material';

import theme from '@/themes/theme';

const StyledFormControl = styled(FormControl)({
  background: theme.palette.primary.main,
  borderRadius: 4,
  '& label.Mui-focused': {
    color: theme.palette.primary.contrastText,
  },
});

export default StyledFormControl;
