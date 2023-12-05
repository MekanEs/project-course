import { type FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.NotFoundPage, {}, [className])}>
            {t('Page not found')}
        </div>
    );
};
