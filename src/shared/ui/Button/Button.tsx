import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react';
import { classNames } from 'shared/lib';
import styles from './Button.module.scss';
export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINED_PRIMARY = 'outlined_primary',
    OUTLINED_SECONDARY = 'outlined_secondary',
    BACKGROUND = 'background',
    BACKGROUND_SECONDARY = 'background_secondary',
    BACKGROUND_ACCENT = 'background_accent',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ButtonTheme.CLEAR,
        square = false,
        size = ButtonSize.M,
        ...otherProps
    } = props;
    return (
        <button
            className={classNames(styles.Button, { [styles.square]: square }, [
                className,
                styles[theme],
                styles[size],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
