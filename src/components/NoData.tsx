import { Typography } from '@mui/material';

import theme from '@/themes/theme';

const NoData = () => {
  return (
    <Typography variant="h6" color={theme.palette.primary.contrastText}>
      Não há dados para mostrar
    </Typography>
  );
};

export default NoData;
