/* eslint-disable i18next/no-literal-string */

import { useState, type FC, useCallback } from 'react';

import { Button } from 'shared/ui';

import { classNames } from 'shared/lib';

import styles from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUserName/ui/LoginModal/LoginModal';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isAuthMdl, setIsAuthMdl] = useState<boolean>(false);
    const openModal = useCallback((): void => {
        setIsAuthMdl(true);
    }, []);
    const closeModal = useCallback((): void => {
        setIsAuthMdl(false);
    }, []);
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <Button
                className={styles.links}
                theme={ButtonTheme.CLEAR}
                onClick={openModal}
            >
                {t('Sign in')}
            </Button>

            <LoginModal isOpened={isAuthMdl} closeModal={closeModal} />
        </div>
    );
};
