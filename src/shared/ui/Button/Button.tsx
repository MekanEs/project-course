import { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react';
import { classNames } from 'shared/lib';
import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINED = 'outlined',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: ReactNode
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  theme = ButtonTheme.CLEAR,
  ...otherProps
}) => {
  return (
      <button className={classNames(styles.Button, {}, [className, styles[theme]])} {...otherProps}>
          {children}
      </button>
  );
};
