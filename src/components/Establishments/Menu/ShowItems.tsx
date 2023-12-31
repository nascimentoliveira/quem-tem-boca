import { MutableRefObject, useRef } from 'react';
import { Box, IconButton, Skeleton, Typography, styled } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

import ItemCard from '@/components/Establishments/Menu/ItemCard';
import Dish from '@/types/Dish';
import Drink from '@/types/Drink';
import NoData from '@/components/NoData';

interface ShowItemsProps {
  name: string;
  items: Dish[] | Drink[] | undefined;
  loading: boolean;
}

const ShowItems = ({ name, items, loading }: ShowItemsProps) => {
  const scrollDishesRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = (scrollContainerRef: MutableRefObject<HTMLDivElement | null>) => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = (scrollContainerRef: MutableRefObject<HTMLDivElement | null>) => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const StyledBox = styled(Box)(() => ({
    display: 'flex',
    overflowX: 'auto',
    flexWrap: 'nowrap',
    height: '100%',
    width: '100%',
    gap: 10,
    paddingBottom: 8,
    '&::-webkit-scrollbar': {
      height: 6,
      backgroundColor: 'lightgray',
      borderRadius: 3,
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'gray',
      borderRadius: 3,
    },
  }));

  const StyledIconButtonLeft = styled(IconButton)(() => ({
    position: 'absolute',
    top: '50%',
    left: '-20px',
    transform: 'translateY(-50%)',
    zIndex: 1,
    background: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      background: 'white',
    },
  }));

  const StyledIconButtonRight = styled(IconButton)(() => ({
    position: 'absolute',
    top: '50%',
    right: '-20px',
    transform: 'translateY(-50%)',
    zIndex: 1,
    background: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      background: 'white',
    },
  }));

  const StyledItemBox = styled(Box)(() => ({
    flexShrink: 0,
    flexGrow: 1,
    height: '100%',
    minHeight: 190,
    width: 220,
  }));

  return (
    <>
      <Typography variant="h6" color="text.primary" py={1}>
        {name}
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        flexGrow="1"
        justifyContent="center"
        sx={{ position: 'relative' }}
        py={1}
      >
        {loading ? (
          <StyledBox>
            {Array.from(new Array(15)).map((_, index) => (
              <StyledItemBox key={index}>
                <Skeleton key={index} variant="rectangular" width={220} height="100%" />
              </StyledItemBox>
            ))}
          </StyledBox>
        ) : items && items.length === 0 ? (
          <NoData />
        ) : (
          <>
            <StyledIconButtonLeft onClick={() => scrollLeft(scrollDishesRef)}>
              <ChevronLeft />
            </StyledIconButtonLeft>
            <StyledBox ref={scrollDishesRef}>
              {items?.map((item) => (
                <StyledItemBox key={item.id}>
                  <ItemCard key={item.id} item={item} />
                </StyledItemBox>
              ))}
            </StyledBox>
            <StyledIconButtonRight onClick={() => scrollRight(scrollDishesRef)}>
              <ChevronRight />
            </StyledIconButtonRight>
          </>
        )}
      </Box>
    </>
  );
};

export default ShowItems;
