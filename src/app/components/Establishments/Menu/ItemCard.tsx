import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Dish from '@/app/types/Dish';
import Drink from '@/app/types/Drink';

interface MenuItemCardProps {
  item: Dish | Drink;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  return (
    <Box
      sx={{
        flexShrink: 0,
        flexGrow: 1,
        height: '100%',
        minHeight: 190,
        width: 220,
      }}
    >
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
                  R$ {(item.price / 100).toFixed(2).replace('.', ',')}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default MenuItemCard;
