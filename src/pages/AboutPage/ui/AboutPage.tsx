import { Counter } from 'entities/Counter';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage: FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            {t('About')}
            <Counter />
        </div>
    );
};

export default AboutPage;
