import { type FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './Navbar.module.scss';
import { AppLink } from 'shared/ui';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
      <div className={classNames(styles.Navbar, {}, [className])}>
          <div className={styles.links}>
              <AppLink className={classNames(styles.link)} to={'/'}>
                  {t('Main')}
              </AppLink>
              <AppLink className={classNames(styles.link)} to={'/about'}>
                  {t('About')}
              </AppLink>
          </div>
      </div>
  );
};
