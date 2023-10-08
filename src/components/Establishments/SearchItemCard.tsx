import { Avatar, Badge, Box, Card, Grid, Typography, styled } from '@mui/material';

import Dish from '@/types/Dish';
import Drink from '@/types/Drink';

interface MenuItemCardProps {
  name: string;
  items: Dish[] | Drink[];
  avatarUrl: string;
}

const SearchItemCard = ({ name, items, avatarUrl }: MenuItemCardProps) => {
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

  return (
    <Card elevation={3} sx={{ p: 1, mt: 1 }}>
      <Typography variant="subtitle2" color="secondary">
        {name}
      </Typography>
      <Grid container spacing={1} display="flex" justifyContent="center">
        {items.map((item: Dish | Drink) => (
          <Grid item key={item.id}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={<SmallAvatar src={avatarUrl} />}
              >
                <Avatar variant="rounded" src={item.imageUrl} />
              </Badge>
              <Typography variant="subtitle2" ml={2}>
                {item.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default SearchItemCard;
