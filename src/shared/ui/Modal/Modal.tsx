import { type ReactNode, type FC, useEffect, useCallback } from 'react';
import { classNames } from 'shared/lib';
import styles from './Modal.module.scss';
import { Portal } from '../Portal/Portal';
import { useTheme } from 'app/providers/themeProvider';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpened: boolean;
    closeModal: () => void;
}

export const Modal: FC<ModalProps> = ({
    className,
    children,
    isOpened,
    closeModal,
}) => {
    const { theme } = useTheme();
    const stopPropagation: React.MouseEventHandler<HTMLDivElement> = (e) => {
        e.stopPropagation();
    };
    const onKeyDown = useCallback(
        (e: KeyboardEventInit): void => {
            if (e.key === 'Escape') {
                closeModal();
            }
        },
        [closeModal]
    );
    useEffect(() => {
        if (isOpened) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            console.log('unmount');
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpened, onKeyDown]);
    return (
        <Portal theme={theme}>
            <div
                className={classNames(
                    styles.Modal,
                    { [styles.opened]: isOpened },
                    [className]
                )}
            >
                <div
                    className={classNames(styles.overlay)}
                    onClick={() => {
                        closeModal();
                    }}
                >
                    <div
                        className={classNames(styles.content, {
                            [styles.showContent]: isOpened,
                        })}
                        onClick={stopPropagation}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
