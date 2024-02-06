import { type ReactNode, type FC } from 'react';
import { classNames } from 'shared/lib';
import styles from './FormInputWrapper.module.scss';
import { type FieldError } from 'react-hook-form';
import { Text } from 'shared/ui';
import { ThemeText } from 'shared/ui/Text/Text';

interface FormInputProps {
    className?: string;
    name: string;
    error: FieldError | undefined;
    children: ReactNode;
}

export const FormInputWrapper: FC<FormInputProps> = (props) => {
    const { className, name, error, children } = props;

    return (
        <label className={classNames(styles.label, {}, [className])} htmlFor={name}>
            {children}
            {error ? <Text theme={ThemeText.ERROR}>{error?.message || 'Error!'}</Text> : null}
        </label>
    );
};
