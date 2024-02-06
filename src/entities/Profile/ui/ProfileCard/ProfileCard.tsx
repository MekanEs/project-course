import { useEffect, type FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, Loader, Text, Title } from 'shared/ui';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadOnly } from 'entities/Profile/model/selectors/getProfileReadOnly/getProgfileReadOnly';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeText } from 'shared/ui/Text/Text';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readOnly = useSelector(getProfileReadOnly);
    const { t } = useTranslation('profile');
    useEffect(() => {
        console.log(error);
    }, [error]);
    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className={classNames(styles.ProfileCard, {}, [className])}>
            <div className={styles.header}>
                <Title title={t('Profile')} />
                <Button theme={ButtonTheme.OUTLINED_PRIMARY}>{t('edit')}</Button>
            </div>

            <div className={styles.data}>
                {error ? <Text theme={ThemeText.ERROR}>{t(error || 'error')}</Text> : null}
                {data ? (
                    <>
                        <input value={data.first} disabled={readOnly || true} />
                        <input value={data.lastname} disabled={readOnly || true} />{' '}
                    </>
                ) : null}
            </div>
        </div>
    );
};
