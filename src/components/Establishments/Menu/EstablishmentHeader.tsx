import {
  Avatar,
  Badge,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { BsPhoneVibrate, BsClockFill } from 'react-icons/bs';
import { RiMapPinRangeFill } from 'react-icons/ri';

import theme from '@/themes/theme';
import Establishment from '@/types/Establishment';

interface EstablishmentHeaderProps {
  establishment: Establishment;
}

const EstablishmentHeader = ({ establishment }: EstablishmentHeaderProps) => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      top: 35,
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
    <Box sx={{ height: 'min-content', zIndex: 2 }}>
      <Card elevation={5} sx={{ flexGrow: 1, width: '100%' }}>
        <CardActionArea>
          <Box sx={{ height: 80 }}>
            <CardMedia
              component="div"
              sx={{ height: '100%', width: 'auto', objectFit: 'cover' }}
              image={establishment.bannerUrl}
            />
          </Box>
          <CardHeader
            sx={{ py: 0 }}
            avatar={
              <StyledBadge overlap="circular" variant="dot">
                <Avatar
                  sx={{
                    width: 80,
                    height: 80,
                    marginTop: -4,
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
          <CardContent sx={{ py: '4px' }}>
            <Stack
              direction="row"
              alignItems="center"
              flexWrap="wrap"
              sx={{ display: 'flex', justifyContent: 'space-evenly' }}
            >
              <Stack direction="row" alignItems="center" spacing={1} mr={1}>
                <Typography variant="subtitle2">
                  <RiMapPinRangeFill color={theme.palette.secondary.main} />
                </Typography>
                <Typography variant="subtitle2">{establishment.address}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1} mr={1}>
                <Typography variant="subtitle2">
                  <BsPhoneVibrate color={theme.palette.secondary.main} />
                </Typography>
                <Typography variant="subtitle2">{establishment.phone}</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1} mr={1}>
                <Typography variant="subtitle2">
                  <BsClockFill color={theme.palette.secondary.main} />
                </Typography>
                <Typography variant="subtitle2">
                  {establishment.opening} - {establishment.closing} hrs
                </Typography>
              </Stack>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default EstablishmentHeader;
