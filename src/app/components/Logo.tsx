import Image from 'next/image';

import styles from '../page.module.css';

const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      className={styles.logo}
      width={1286}
      height={776}
      priority={true}
    />
  );
};

export default Logo;
