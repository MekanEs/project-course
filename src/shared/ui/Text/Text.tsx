import { type HtmlHTMLAttributes, type FC, type ReactNode, memo } from 'react';
import { classNames } from 'shared/lib';
import styles from './Text.module.scss';
export enum ThemeText {
    ERROR = 'error',
    SUCCES = 'succes',
    DEFAULT = 'default',
}

interface TextProps extends HtmlHTMLAttributes<HTMLElement> {
    className?: string;
    children?: ReactNode;
    theme?: ThemeText;
}

export const Text: FC<TextProps> = memo((props: TextProps) => {
    const { className, children, theme = ThemeText.DEFAULT, ...other } = props;
    return (
        <p {...other} className={classNames(styles.Text, {}, [className, styles[theme]])}>
            {children}
        </p>
    );
});
