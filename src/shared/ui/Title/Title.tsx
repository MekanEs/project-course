import { type FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './Title.module.scss';

export enum ThemeTitle {
    INLINE = 'inline',
    BLOCK = 'block',
}

interface TitleProps {
    className?: string;
    title: string;
    theme?: ThemeTitle;
}

export const Title: FC<TitleProps> = ({ className, title, theme = ThemeTitle.BLOCK }) => {
    return <h6 className={classNames(styles.Title, {}, [className, styles[theme]])}>{title}</h6>;
};
