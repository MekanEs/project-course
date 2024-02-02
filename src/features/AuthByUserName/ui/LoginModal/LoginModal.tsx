import { Suspense, type FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './LoginModal.module.scss';
import { Loader, Modal } from 'shared/ui';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpened: boolean;
    closeModal: () => void;
}

export const LoginModal: FC<LoginModalProps> = (props) => {
    const { className, isOpened, closeModal } = props;
    return (
        <Modal
            isOpened={isOpened}
            closeModal={closeModal}
            className={classNames(styles.LoginModal, {}, [className])}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync closeModal={closeModal} />
            </Suspense>
        </Modal>
    );
};
