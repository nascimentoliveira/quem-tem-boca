import { useState } from 'react';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import { IoMenu } from 'react-icons/io5';

import OptionsMenuLocation from './OptionsMenuLocation';
import Location from './Location';

const MobileBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        elevation={5}
        sx={{
          display: { xs: 'default', sm: 'none' },
          minHeight: 60,
          height: 'min-content',
        }}
      >
        <Toolbar sx={{ width: '100vw', px: 3 }}>
          <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
            <IoMenu />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box onClick={handleClick}>
            <Location />
          </Box>
        </Toolbar>
      </AppBar>
      <OptionsMenuLocation anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  );
};

export default MobileBar;
