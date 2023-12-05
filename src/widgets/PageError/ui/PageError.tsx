import { type FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();
    const onReload = (): void => {
        location.reload();
    };
    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <p>{t('Something went wrong')}</p>
            <Button theme={ButtonTheme.OUTLINED} onClick={onReload}>
                {t('Reload page')}
            </Button>
        </div>
    );
};
