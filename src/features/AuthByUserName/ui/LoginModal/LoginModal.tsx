import { type FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './LoginModal.module.scss';
import { Modal } from 'shared/ui';
import { LoginForm } from '../LoginForm/LoginForm';

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
            <LoginForm />
        </Modal>
    );
};
