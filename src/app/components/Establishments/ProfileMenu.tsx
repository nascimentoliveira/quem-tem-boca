import { Dispatch, SetStateAction } from 'react';
import { Menu, MenuItem, Stack, Typography } from '@mui/material';
import { IoExitOutline } from 'react-icons/io5';

import theme from '@/app/themes/theme';
import { useRouter } from 'next/navigation';

interface ProfileMenuProps {
  anchorEl: HTMLElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
}

const ProfileMenu = ({ anchorEl, setAnchorEl }: ProfileMenuProps) => {
  const router = useRouter();

  const handleLogoutClick = () => {
    localStorage.removeItem('Quem-tem-boca');
    setAnchorEl(null);
    router.push('/');
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleLogoutClick}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IoExitOutline color={theme.palette.secondary.main} />
          <Typography variant="body2">Sair</Typography>
        </Stack>
      </MenuItem>
    </Menu>
  );
};

export default ProfileMenu;
