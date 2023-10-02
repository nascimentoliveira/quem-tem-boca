import { Menu, MenuItem } from '@mui/material';
import { Dispatch, SetStateAction, useState } from 'react';

import OptionsMenuLocation from './OptionsMenuLocation';
import Location from './Location';

interface LocationMenuProps {
  anchorEl: HTMLElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
}

const LocationMenu = ({ anchorEl, setAnchorEl }: LocationMenuProps) => {
  const [optionsAnchorEl, setOptionsAnchorEl] = useState<null | HTMLElement>(null);

  const handleOptionsOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOptionsAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={handleOptionsOpen}>
          <Location />
        </MenuItem>
      </Menu>
      <OptionsMenuLocation anchorEl={optionsAnchorEl} setAnchorEl={setOptionsAnchorEl} />
    </>
  );
};

export default LocationMenu;
