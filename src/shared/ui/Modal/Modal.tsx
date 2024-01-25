import { type ReactNode, useEffect, useCallback, memo, useState } from 'react';
import { classNames } from 'shared/lib';
import styles from './Modal.module.scss';
import { Portal } from '../Portal/Portal';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpened: boolean;
    closeModal: () => void;
    lazy?: boolean;
}

// eslint-disable-next-line react/display-name
export const Modal = memo(
    (props: ModalProps) => {
        const { className, children, isOpened, closeModal, lazy } = props;
        const [isMounted, setIsMounted] = useState(false);
        useEffect(() => {
            if (isOpened) {
                setIsMounted(true);
            }
        }, [isOpened]);
        const stopPropagation: React.MouseEventHandler<HTMLDivElement> = (
            e
        ) => {
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
                window.removeEventListener('keydown', onKeyDown);
            };
        }, [isOpened, onKeyDown]);

        if (!isMounted && lazy) {
            return null;
        }
        return (
            <Portal>
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
    },
    (prev, next) => {
        return (
            prev.isOpened === next.isOpened && prev.children === next.children
        );
    }
);
