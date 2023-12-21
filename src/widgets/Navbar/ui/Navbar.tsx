/* eslint-disable i18next/no-literal-string */

import { useState, type FC, useCallback } from 'react';

import { Button, Modal } from 'shared/ui';

import { classNames } from 'shared/lib';

import styles from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button/Button';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isAuthMdl, setIsAuthMdl] = useState<boolean>(false);
    const onToggleModal = useCallback((): void => {
        setIsAuthMdl((prev) => !prev);
    }, []);
    const { t } = useTranslation();
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <Button
                className={styles.links}
                theme={ButtonTheme.CLEAR}
                onClick={onToggleModal}
            >
                {t('Sign in')}
            </Button>
            <Modal isOpened={isAuthMdl} closeModal={onToggleModal}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                quidem reprehenderit excepturi, repellat magni non earum
                voluptate eveniet perspiciatis! Nihil magni inventore enim! In
                fugiat magni laborum, temporibus voluptatum excepturi.
            </Modal>
        </div>
    );
};
