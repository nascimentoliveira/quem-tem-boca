'use client';
import { Box, Container, Skeleton, styled } from '@mui/material';

import theme from '@/themes/theme';
import Bar from '@/components/Establishments/AppBar';
import MobileBar from '@/components/Establishments/MobileBar';
import EstablishmentHeader from '@/components/Establishments/Menu/EstablishmentHeader';
import ShowItems from '@/components/Establishments/Menu/ShowItems';
import useEstablishmentMenu from '@/hooks/useEstablishmentMenu';

const Menu = ({ params }: { params: { id: string } }) => {
  const { establishmentMenu, loading } = useEstablishmentMenu(Number(params.id));

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
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexGrow: 1,
    height: 'min-content',
    backgroundColor: theme.palette.primary.main,
  }));

  return (
    <StyledBox>
      <MobileBar />
      <Bar />
      <StyledContainer sx={{ pb: { xs: '60px', sm: '20px' }, px: 0 }}>
        {loading ? (
          <Skeleton variant="rectangular" width="100%" height={160} />
        ) : (
          establishmentMenu && <EstablishmentHeader establishment={establishmentMenu} />
        )}
        <StyledContainer sx={{ width: { xs: '90%', sm: '100%' } }}>
          {establishmentMenu?.dishes && (
            <ShowItems name="Pratos" items={establishmentMenu.dishes} loading={loading} />
          )}
          {establishmentMenu?.drinks && (
            <ShowItems name="Bebidas" items={establishmentMenu.drinks} loading={loading} />
          )}
        </StyledContainer>
      </StyledContainer>
    </StyledBox>
  );
};

export default Menu;
