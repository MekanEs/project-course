import { type FormValues } from 'features/AuthByUserName/ui/LoginForm/LoginForm';
import { type InputHTMLAttributes, type FC } from 'react';
import { type UseFormRegister } from 'react-hook-form';
import { classNames } from 'shared/lib';
import styles from './FormInput.module.scss';
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    register: () => ReturnType<UseFormRegister<FormValues>>;
}

export const FormInput: FC<FormInputProps> = (props) => {
    const { className, register, ...otherProps } = props;
    const reg = register();
    return (
        <input
            autoComplete="off"
            className={classNames(styles.Input, {}, [className])}
            {...otherProps}
            {...reg}
        />
    );
};
