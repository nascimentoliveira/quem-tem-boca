import { SetStateAction, useEffect, useState } from 'react';
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';

import styles from '../../page.module.css';

const Logo = () => {
  const [textHeight, setTextHeight] = useState<SetStateAction<number>>(200);
  const isSmallScreen = useMediaQuery(useTheme().breakpoints.down('md'));

  useEffect(() => {
    const updateHeight = () => {
      const textElement = document.getElementById('text-element');
      if (textElement) {
        setTextHeight(textElement.offsetHeight);
      }
    };

    window.addEventListener('resize', updateHeight);
    updateHeight();

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <Box
      className={styles.gradientTop}
      sx={{
        justifyContent: isSmallScreen ? 'center' : 'none',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: 'auto',
          height: `${textHeight}px`,
        }}
      >
        <Box>
          <Typography
            id='text-element'
            variant='h1'
            sx={{
              fontSize: isSmallScreen ? '10vw' : '5vw',
            }}
          >
            Quem<br />tem<br />boca
          </Typography>
        </Box>
        <img
          src={'/logo.png'}
          width={'auto'}
          height={`${textHeight}px`}
          alt={'Logo'}
        />
      </Box>
    </Box>
  );
};

export default Logo;
