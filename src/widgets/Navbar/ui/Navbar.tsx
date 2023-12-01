import { FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Link className={classNames(styles.link)} to={'/'}>
        Main
      </Link>
      <Link className={classNames(styles.link)} to={'/about'}>
        About
      </Link>
    </div>
  );
};
