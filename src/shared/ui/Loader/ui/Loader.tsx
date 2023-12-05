import { type FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
    return <span className={classNames(styles.Loader, {}, [className])}></span>;
};
