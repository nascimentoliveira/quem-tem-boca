import { useState } from 'react';
import { AppBar, Box, Toolbar, styled } from '@mui/material';

import Search from './Search';
import AppBarIcons from './AppBarIcons';
import Logo from '../Logo';
import MobileSearchBar from './MobileSearchBar';

const Bar = () => {
  const [showSearch, setShowSearch] = useState(false);

  const StyledAppBar = styled(AppBar)(({ theme }) => ({
    position: 'fixed',
    top: '0',
    bottom: 'auto',
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.light,
    height: 60,
    [theme.breakpoints.down('sm')]: {
      top: 'auto',
      bottom: '0',
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
    },
  }));

  const StyledLogoBox = styled(Box)(({ theme }) => ({
    height: 64,
    display: 'flex',
    alignItems: 'center',
    '& img': {
      height: '80%',
      width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }));

  const StyledGrowBox = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }));

  return (
    <StyledAppBar>
      <Toolbar sx={{ width: '100vw' }}>
        <StyledGrowBox />
        <StyledLogoBox>
          <Logo />
        </StyledLogoBox>
        <StyledGrowBox />
        <Search />
        <StyledGrowBox />
        <AppBarIcons showSearch={showSearch} setShowSearch={setShowSearch} />
        <StyledGrowBox />
        {showSearch && <MobileSearchBar showSearch={showSearch} />}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Bar;
