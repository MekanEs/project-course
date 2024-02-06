import { type FormValues } from 'features/AuthByUserName/ui/LoginForm/LoginForm';
import { type InputHTMLAttributes, memo } from 'react';
import { type UseFormRegister } from 'react-hook-form';
import { classNames } from 'shared/lib';
import styles from './FormInput.module.scss';
interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    register: () => ReturnType<UseFormRegister<FormValues>>;
}

export const FormInput = memo((props: FormInputProps) => {
    const { className, register, ...otherProps } = props;
    const reg = register();
    return <input autoComplete="off" className={classNames(styles.Input, {}, [className])} {...reg} {...otherProps} />;
});
