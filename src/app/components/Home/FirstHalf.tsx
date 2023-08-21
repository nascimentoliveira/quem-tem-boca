import { Fab, Box } from '@mui/material';
import EastRoundedIcon from '@mui/icons-material/EastRounded';

import Logo from './Logo';
import styles from '../../page.module.css';

interface FirstHalfProps {
  onNext: () => void;
}

const FirstHalf = ({ onNext }: FirstHalfProps) => {
  return (
    <>
      <Logo />
      <Box className={styles.buttonNext}>
        <Fab
          color='secondary'
          variant='extended'
          onClick={onNext}
        >
          Ir
          <EastRoundedIcon sx={{ ml: 1 }} />
        </Fab>
      </Box>
    </>
  );
};

export default FirstHalf;
