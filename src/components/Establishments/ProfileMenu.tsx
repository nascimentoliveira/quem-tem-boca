import { Dispatch, SetStateAction } from 'react';
import { Menu, MenuItem, Stack, Typography } from '@mui/material';
import { IoExitOutline } from 'react-icons/io5';

import theme from '@/themes/theme';
import { useRouter } from 'next/navigation';
import useUser from '@/hooks/useUser';

interface ProfileMenuProps {
  anchorEl: HTMLElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
}

const ProfileMenu = ({ anchorEl, setAnchorEl }: ProfileMenuProps) => {
  const router = useRouter();
  const { signOut } = useUser();

  const handleLogoutClick = () => {
    signOut();
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
