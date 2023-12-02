import { FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './Navbar.module.scss';
import { AppLink } from 'shared/ui';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink className={classNames(styles.link)} to={'/'}>
          Main
        </AppLink>
        <AppLink className={classNames(styles.link)} to={'/about'}>
          About
        </AppLink>
      </div>
    </div>
  );
};
