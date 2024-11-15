import { type FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './PageLoader.module.scss';
import { Loader } from 'shared/ui';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    return (
        <div className={classNames(styles.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
