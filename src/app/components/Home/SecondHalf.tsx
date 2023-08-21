import { Box, Fab, Typography } from '@mui/material';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';

import Join from './Join';
import FormLogin from './FormLogin';
import styles from '../../page.module.css';

interface SecondHalfProps {
  onBack: () => void;
}

const SeconfHalf = ({ onBack }: SecondHalfProps) => {
  return (
    <>
      <Box className={styles.gradientTop}>
        <Box className={styles.buttonBack}>
          <Fab
            color='secondary'
            onClick={onBack}
            variant='extended'
          >
            <KeyboardBackspaceRoundedIcon sx={{ mr: 1 }} />
            Voltar
          </Fab>
        </Box>
        <Join />
      </Box>
      <Box className={styles.secondHalf}>
        <Typography variant='h3' sx={{ width: '100%' }}>
          Acesse seus<br />restaurantes<br />prediletos
        </Typography>
        <FormLogin />
      </Box>
    </>
  );
};

export default SeconfHalf;
