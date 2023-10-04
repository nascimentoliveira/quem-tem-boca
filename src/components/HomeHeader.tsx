import { ReactNode } from 'react';
import { Box, styled } from '@mui/material';

interface HomeHeaderProps {
  children: ReactNode;
  showFirstHalf?: boolean;
}

const HomeHeader = ({ children, showFirstHalf }: HomeHeaderProps) => {
  const StyledHeaderBox = styled(Box)(() => ({
    background: 'linear-gradient(to bottom, #000000 0%, #000000e6 10%, #00000000 80%)',
    width: '100%',
    height: '70vh',
    display: 'flex',
    justifyContent: 'space-between',
    padding: 40,
  }));

  return (
    <StyledHeaderBox className={Boolean(showFirstHalf) ? 'first' : 'second'}>
      {children}
    </StyledHeaderBox>
  );
};

export default HomeHeader;
