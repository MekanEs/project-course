import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
  const { t } = useTranslation();
  return <div className='orange'>{t('About')}</div>;
};

export default AboutPage;
