'use client';
import { useSearchParams } from 'next/navigation';
import { Box, Container, Grid, Skeleton, styled } from '@mui/material';

import theme from '../../themes/theme';
import EstablishmentCard from '../../components/Establishments/EstablishmentCard';
import Bar from '../../components/Establishments/AppBar';
import MobileBar from '../../components/Establishments/MobileBar';
import useEstablishments from '@/hooks/useEstablishments';
import NoData from '@/components/NoData';

const Establishments = () => {
  const query = useSearchParams().get('query');
  const { establishments, loading } = useEstablishments(query);

  const StyledContainer = styled(Container)(() => ({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  return (
    <main style={{ width: '100vw' }}>
      <Box width="100%" sx={{ backgroundColor: theme.palette.primary.main }}>
        <MobileBar />
        <Bar />
        <StyledContainer maxWidth="lg" sx={{ py: 10, px: 4 }}>
          {!loading && establishments.length === 0 ? (
            <NoData />
          ) : (
            <Grid container spacing={2}>
              {(loading ? Array.from(new Array(15)) : establishments).map((establishment, index) =>
                loading ? (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Skeleton variant="rectangular" width="100%" height={200} />
                  </Grid>
                ) : (
                  <Grid item xs={12} sm={6} md={4} key={establishment.id}>
                    <EstablishmentCard establishment={establishment} />
                  </Grid>
                ),
              )}
            </Grid>
          )}
        </StyledContainer>
      </Box>
    </main>
  );
};

export default Establishments;
