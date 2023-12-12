import { type FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './LangToggler.module.scss';
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';
interface LangTogglerProps {
    className?: string;
    short: boolean;
}

export const LangToggler: FC<LangTogglerProps> = ({ className, short }) => {
    const { t, i18n } = useTranslation();
    const onToggle = async (): Promise<void> => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
        console.log(i18n.languages);
    };

    return (
        <Button
            onClick={() => {
                onToggle();
            }}
            className={classNames(styles.LangToggler, {}, [className])}
        >
            {short ? t('Lang_short') : t('Lang')}
        </Button>
    );
};
