import { type ReactNode, type FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './FormInputWrapper.module.scss';
import { type FieldError } from 'react-hook-form';

interface FormInputProps {
    className?: string;
    name: string;
    error: FieldError;
    children: ReactNode;
}

export const FormInputWrapper: FC<FormInputProps> = (props) => {
    const { className, name, error, children } = props;
    return (
        <label
            className={classNames(styles.label, {}, [className])}
            htmlFor={name}
        >
            {children}
            {error ? (
                <span className={styles.errorMessage}>
                    {error?.message || 'Error!'}
                </span>
            ) : null}
        </label>
    );
};
