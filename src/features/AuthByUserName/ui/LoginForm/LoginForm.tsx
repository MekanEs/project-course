import { useCallback, type FC, useEffect, memo } from 'react';
import { type UseFormRegister, useForm } from 'react-hook-form';
import { classNames } from 'shared/lib';
import styles from './LoginForm.module.scss';
import { Loader, Text, Title } from 'shared/ui';
import { useSelector } from 'react-redux';
import { getLoginData } from '../../model/selectors/getLoginData';
import { loginByUserName } from '../../model/services/loginByUserName';
import { useAppDispatch } from 'app/providers/storeProvider/config/store';
import { getUser } from 'entities/User/model/selectors/getUser';
import { LoginActions } from 'features/AuthByUserName';
import { useTranslation } from 'react-i18next';
import { ThemeText } from 'shared/ui/Text/Text';
import { FormInputWrapper } from '../FormInputWrapper/FormInputWrapper';
import { FormInput } from '../FormInput/FormInput';

interface LoginFormProps {
    className?: string;
    closeModal?: () => void;
}

export interface FormValues {
    username: string;
    password: string;
}
const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
    const { closeModal, className } = props;
    const { fetchError, isLoading } = useSelector(getLoginData);
    const user = useSelector(getUser);
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormValues>({ mode: 'onChange' });
    const onSubmit = ({ username, password }: FormValues): void => {
        reset();
        dispatch(loginByUserName({ username, password }));
    };

    useEffect(() => {
        if (user) {
            closeModal();
        }
    }, [user, closeModal]);

    const registerFirstName = useCallback(
        (): ReturnType<UseFormRegister<FormValues>> => ({
            ...register('username', {
                required: {
                    value: true,
                    message: t('required field'),
                },
                minLength: {
                    value: 5,
                    message: t('min5'),
                },
            }),
        }),
        [register, t]
    );
    const registerPassword = useCallback(
        (): ReturnType<UseFormRegister<FormValues>> => ({
            ...register('password', {
                required: {
                    value: true,
                    message: t('required field'),
                },

                minLength: {
                    value: 3,
                    message: t('min3'),
                },
            }),
        }),
        [register, t]
    );

    return (
        <form
            data-testid="form"
            autoComplete="off"
            onSubmit={(e) => {
                handleSubmit(onSubmit)(e);
            }}
            onChange={() => {
                dispatch(LoginActions.setError(undefined));
            }}
            className={classNames(styles.LoginForm, {}, [className])}
        >
            <Title title={t('login form')} />
            <Text data-testid="fetchError" theme={ThemeText.ERROR}>
                {fetchError ? t(fetchError) : null}
            </Text>
            <FormInputWrapper error={errors.username} name="firstName">
                <FormInput
                    data-testid="firstName input"
                    id="firstName"
                    type="text"
                    placeholder={t('username')}
                    register={registerFirstName}
                />
            </FormInputWrapper>

            <FormInputWrapper error={errors.password} name="password">
                <FormInput
                    data-testid="password input"
                    id="password"
                    type="password"
                    placeholder={t('password')}
                    register={registerPassword}
                />
            </FormInputWrapper>

            {isLoading ? (
                <Loader data-testid="loader" className={styles.loader} />
            ) : (
                <input
                    data-testid="submit-btn"
                    className={classNames(styles.loginBtn)}
                    disabled={!isValid}
                    type="submit"
                    value={t('Submit')}
                />
            )}
        </form>
    );
});

export default LoginForm;
