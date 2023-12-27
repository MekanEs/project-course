import { Counter } from 'entities/Counter';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';

const Main: FC = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Counter />
            {t('Main')}
        </div>
    );
};

export default Main;
