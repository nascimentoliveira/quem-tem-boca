import { Card, styled } from '@mui/material';

import Search from './Search';

interface MobileSearchBarProps {
  showSearch: boolean;
}

const MobileSearchBar = ({ showSearch }: MobileSearchBarProps) => {
  const StyledCard = styled(Card)(() => ({
    width: '90%',
    position: 'absolute',
    top: -60,
  }));

  return (
    <StyledCard elevation={6}>
      <Search showSearch={showSearch} />
    </StyledCard>
  );
};

export default MobileSearchBar;
