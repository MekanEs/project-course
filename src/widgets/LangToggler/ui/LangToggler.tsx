import { type FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './LangToggler.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
interface LangTogglerProps {
  className?: string
}

export const LangToggler: FC<LangTogglerProps> = ({ className }) => {
  const { t, i18n } = useTranslation();
  const onToggle = (): void => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
  };
  return (
      <Button onClick={onToggle} className={classNames(styles.LangToggler, {}, [className])}>
          {t('Lang')}
      </Button>
  );
};
