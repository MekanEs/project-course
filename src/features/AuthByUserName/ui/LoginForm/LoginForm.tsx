import { useCallback, type FC } from 'react';
import { type UseFormRegister, useForm } from 'react-hook-form';
import { classNames } from 'shared/lib';
import styles from './LoginForm.module.scss';
import { FormInput, FormInputWrapper } from 'shared/ui';

interface LoginFormProps {
    className?: string;
}

export interface FormValues {
    firstName: string;
    password: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormValues>({ mode: 'onChange' });
    const onSubmit = (data: FormValues): void => {
        console.log('handle', data);
        reset();
    };
    const registerFirstName = useCallback(
        (): ReturnType<UseFormRegister<FormValues>> => ({
            ...register('firstName', {
                required: {
                    value: true,
                    message: 'обязательное поле ввода',
                },
            }),
        }),
        [register]
    );
    const registerPassword = useCallback(
        (): ReturnType<UseFormRegister<FormValues>> => ({
            ...register('password', {
                required: {
                    value: true,
                    message: 'обязательное поле ввода',
                },

                minLength: {
                    value: 3,
                    message: 'минимум 3 знака',
                },
            }),
        }),
        [register]
    );
    return (
        <form
            onSubmit={(e) => {
                handleSubmit(onSubmit)(e);
            }}
            className={classNames(styles.LoginForm, {}, [className])}
        >
            <FormInputWrapper error={errors.firstName} name="firstName">
                <FormInput
                    type="text"
                    placeholder="First name"
                    register={registerFirstName}
                />
            </FormInputWrapper>

            <FormInputWrapper error={errors.password} name="password">
                <FormInput
                    type="password"
                    placeholder="Password"
                    register={registerPassword}
                />
            </FormInputWrapper>

            <input disabled={!isValid} type="submit" />
        </form>
    );
};
