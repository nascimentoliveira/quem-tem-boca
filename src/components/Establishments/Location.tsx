import { Stack, Typography } from '@mui/material';
import { IoChevronDown, IoLocationOutline } from 'react-icons/io5';

import theme from '@/themes/theme';

const Location = () => {
  return (
    <Stack alignItems="end">
      <Typography variant="body2">Você está neste endereço?</Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <IoLocationOutline color={theme.palette.secondary.main} />
        <Typography variant="body2" color="secondary">
          Av. Leopoldino de Oliveira
        </Typography>
        <IoChevronDown color={theme.palette.secondary.main} />
      </Stack>
    </Stack>
  );
};

export default Location;
