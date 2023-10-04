'use client';
import { Box, Container, styled } from '@mui/material';

import theme, { ThemeWrapper } from '@/themes/theme';
import Bar from '@/components/Establishments/AppBar';
import MobileBar from '@/components/Establishments/MobileBar';
import EstablishmentHeader from '@/components/Establishments/Menu/EstablishmentHeader';
import ShowItems from '@/components/Establishments/Menu/ShowItems';
import EstablishmentMenu from '@/types/EstablishmentMenu';
import mockData from '@/utils/mockData';

const Menu = ({ params }: { params: { id: string } }) => {
  const { dishes, drinks, ...establishment }: EstablishmentMenu = mockData[Number(params.id) - 1];

  const StyledBox = styled(Box)(() => ({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '60px',
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  }));

  const StyledContainer = styled(Container)(() => ({
    maxWidth: 'lg',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexGrow: 1,
    height: 'min-content',
    backgroundColor: theme.palette.primary.main,
  }));

  return (
    <ThemeWrapper>
      <StyledBox>
        <MobileBar />
        <Bar />
        <StyledContainer sx={{ width: '100%', pb: { xs: '60px', sm: '20px' }, px: 0 }}>
          <EstablishmentHeader establishment={establishment} />
          <StyledContainer sx={{ width: { xs: '90%', sm: '100%' } }}>
            <ShowItems name="Pratos" items={dishes} />
            <ShowItems name="Bebidas" items={drinks} />
          </StyledContainer>
        </StyledContainer>
      </StyledBox>
    </ThemeWrapper>
  );
};

export default Menu;
