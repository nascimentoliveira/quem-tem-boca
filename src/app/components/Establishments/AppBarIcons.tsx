import { Dispatch, SetStateAction, useState } from 'react';
import { Badge, Box, IconButton } from '@mui/material';
import { IoTicketOutline, IoSearch, IoPersonCircleOutline, IoLocationSharp } from 'react-icons/io5';
import { BiHomeAlt2 } from 'react-icons/bi';

import ProfileMenu from './ProfileMenu';
import LocationMenu from './LocationMenu';
import { usePathname, useRouter } from 'next/navigation';

interface AppBarIconsProps {
  showSearch: boolean;
  setShowSearch: Dispatch<SetStateAction<boolean>>;
}

const AppBarIcons = ({ showSearch, setShowSearch }: AppBarIconsProps) => {
  const router = useRouter();
  const [locationAnchorEl, setLocationAnchorEl] = useState<null | HTMLElement>(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);

  const isOnEstablishmentsPage = usePathname() === '/establishments';

  const handleLocationMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setLocationAnchorEl(event.currentTarget);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <Box display="flex" justifyContent="space-around" sx={{ width: { xs: '100%', sm: 'auto' } }}>
      <IconButton
        size="large"
        color={isOnEstablishmentsPage ? 'secondary' : 'inherit'}
        onClick={() => router.push('/establishments')}
      >
        <BiHomeAlt2 />
      </IconButton>
      <IconButton
        size="large"
        color={Boolean(locationAnchorEl) ? 'secondary' : 'inherit'}
        onClick={handleLocationMenuOpen}
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        <IoLocationSharp />
      </IconButton>
      <IconButton size="large" color="inherit">
        <Badge badgeContent={2} color="error">
          <IoTicketOutline />
        </Badge>
      </IconButton>
      <IconButton
        size="large"
        color={showSearch ? 'secondary' : 'inherit'}
        onClick={toggleSearch}
        sx={{ display: { xs: 'default', sm: 'none' } }}
      >
        <IoSearch />
      </IconButton>
      <IconButton
        size="large"
        color={Boolean(profileAnchorEl) ? 'secondary' : 'inherit'}
        onClick={handleProfileMenuOpen}
      >
        <IoPersonCircleOutline />
      </IconButton>
      <ProfileMenu anchorEl={profileAnchorEl} setAnchorEl={setProfileAnchorEl} />
      <LocationMenu anchorEl={locationAnchorEl} setAnchorEl={setLocationAnchorEl} />
    </Box>
  );
};

export default AppBarIcons;
