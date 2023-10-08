'use client';
import { useSearchParams } from 'next/navigation';
import { Box, Container, Grid } from '@mui/material';

import theme from '../../themes/theme';
import EstablishmentCard from '../../components/Establishments/EstablishmentCard';
import Bar from '../../components/Establishments/AppBar';
import MobileBar from '../../components/Establishments/MobileBar';
import useEstablishments from '@/hooks/useEstablishments';

const Establishments = () => {
  const query = useSearchParams().get('name');
  const { establishments } = useEstablishments(query);

  if (establishments) {
    return (
      <main style={{ width: '100vw' }}>
        <Box width="100%" sx={{ backgroundColor: theme.palette.primary.main }}>
          <MobileBar />
          <Bar />
          <Container maxWidth="lg" sx={{ py: 10, px: 4 }}>
            <Grid container spacing={2}>
              {establishments.map((establishment) => (
                <Grid item xs={12} sm={6} md={4} key={establishment.id}>
                  <EstablishmentCard establishment={establishment} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </main>
    );
  } else {
    <></>;
  }
};

export default Establishments;
