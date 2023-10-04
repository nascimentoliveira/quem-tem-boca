import { Dispatch, SetStateAction } from 'react';
import { Menu, MenuItem, Stack, Typography } from '@mui/material';
import { FaSearchLocation } from 'react-icons/fa';

import theme from '@/themes/theme';

interface LocationMenuProps {
  anchorEl: HTMLElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
}

const OptionsMenuLocation = ({ anchorEl, setAnchorEl }: LocationMenuProps) => {
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <FaSearchLocation color={theme.palette.secondary.main} />
          <Typography variant="body2">Alterar</Typography>
        </Stack>
      </MenuItem>
    </Menu>
  );
};

export default OptionsMenuLocation;
