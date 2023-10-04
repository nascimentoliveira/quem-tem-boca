import { useRouter } from 'next/navigation';
import { BsClockHistory, BsStarFill } from 'react-icons/bs';
import { IoTicketOutline } from 'react-icons/io5';
import {
  Avatar,
  Badge,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
  styled,
} from '@mui/material';

import theme from '@/themes/theme';
import Establishment from '@/types/Establishment';

interface EstablishmentCardProps {
  establishment: Establishment;
}

const EstablishmentCard = ({ establishment }: EstablishmentCardProps) => {
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/establishments/${id}/menu`);
  };

  const formatPrice = (cents: number): string => {
    return 'R$ ' + `${(cents / 100).toFixed(2)}`.replace('.', ',');
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      marginTop: 15,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '2px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.1)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  return (
    <Card elevation={5}>
      <CardActionArea onClick={() => handleCardClick(establishment.id)}>
        <CardMedia component="div" sx={{ pt: '25%' }} image={establishment.bannerUrl} />
        <CardHeader
          sx={{ py: 0 }}
          avatar={
            <StyledBadge overlap="circular" badgeContent=" ">
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  marginTop: -8,
                  border: 6,
                  borderColor: 'white',
                }}
                src={establishment.avatarUrl}
              />
            </StyledBadge>
          }
          title={
            <Typography variant="subtitle1" fontWeight="bold">
              {establishment.name}
            </Typography>
          }
          subheader={<Typography variant="subtitle2">{establishment.description}</Typography>}
        />
        <CardContent sx={{ py: 1 }}>
          <Stack
            direction="row"
            alignItems="center"
            flexWrap="wrap"
            sx={{ display: 'flex', justifyContent: 'space-evenly' }}
          >
            <Stack direction="row" alignItems="center" spacing={1} mr={1}>
              <Typography variant="subtitle2">
                <BsStarFill color={theme.palette.secondary.main} />
              </Typography>
              <Typography variant="subtitle2">4.5</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} mr={1}>
              <Typography variant="subtitle2">
                <BsClockHistory color={theme.palette.secondary.main} />
              </Typography>
              <Typography variant="subtitle2">
                {establishment.minServiceTime}-{establishment.maxServiceTime} min
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1} mr={1}>
              <Typography variant="subtitle2">
                <IoTicketOutline color={theme.palette.secondary.main} />
              </Typography>
              <Typography variant="subtitle2">{formatPrice(establishment.minTicket)}</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default EstablishmentCard;
