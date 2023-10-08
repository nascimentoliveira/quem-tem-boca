import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

import Dish from '@/types/Dish';
import Drink from '@/types/Drink';

interface MenuItemCardProps {
  item: Dish | Drink;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const formatPrice = (cents: number): string => {
    return 'R$ ' + `${(cents / 100).toFixed(2)}`.replace('.', ',');
  };

  return (
    <Card elevation={5} sx={{ height: '100%' }}>
      <CardActionArea
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <Box sx={{ flexGrow: 1, height: '100%', width: '100%' }}>
          <CardMedia
            component="div"
            sx={{ height: '100%', width: '100%', flexGrow: 1 }}
            image={item.imageUrl}
          />
        </Box>
        <CardContent sx={{ py: 1, minHeight: 90, width: '100%' }}>
          <Typography variant="h6">{item.name}</Typography>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box flex="1">
              <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
                {item.description}
              </Typography>
            </Box>
            <Box ml={1}>
              <Typography
                variant="subtitle1"
                color="secondary"
                sx={{ width: 'min-content', whiteSpace: 'nowrap' }}
              >
                {formatPrice(item.price)}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MenuItemCard;
