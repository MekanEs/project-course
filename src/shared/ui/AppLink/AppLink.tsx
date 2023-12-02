import { FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './AppLink.module.scss';
import { LinkProps } from 'react-router-dom';
import { Link } from 'react-router-dom';
export enum AppLinkTheme {
  MAIN = 'main',
  ACCENT = 'accent',
}
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { className, children, to, theme = AppLinkTheme.MAIN, ...otherProps } = props;
  return (
    <Link
      to={to}
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
