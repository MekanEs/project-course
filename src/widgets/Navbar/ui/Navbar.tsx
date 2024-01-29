/* eslint-disable i18next/no-literal-string */

import { useState, type FC, useCallback } from 'react';

import { Button } from 'shared/ui';

import { classNames } from 'shared/lib';

import styles from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getUser } from 'entities/User/model/selectors/getUser';
import { UserActions } from 'entities/User';
import { LoginModal } from 'features/AuthByUserName';
import { useAppDispatch } from 'app/providers/storeProvider';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isAuthMdl, setIsAuthMdl] = useState<boolean>(false);
    const userAuth = useSelector(getUser);
    const dispatch = useAppDispatch();
    const handleLogout = (): void => {
        dispatch(UserActions.logout());
    };
    const openModal = useCallback((): void => {
        setIsAuthMdl(true);
    }, []);
    const closeModal = useCallback((): void => {
        setIsAuthMdl(false);
    }, []);
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            {userAuth ? (
                <Button className={styles.links} theme={ButtonTheme.CLEAR} onClick={handleLogout}>
                    {t('Sign out')}
                </Button>
            ) : (
                <Button className={styles.links} theme={ButtonTheme.CLEAR} onClick={openModal}>
                    {t('Sign in')}
                </Button>
            )}

            <LoginModal isOpened={isAuthMdl} closeModal={closeModal} />
        </div>
    );
};
