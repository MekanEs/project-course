import { useCallback, type FC, memo } from 'react';
import { type UseFormRegister, useForm } from 'react-hook-form';
import { DynamicModuleLoader, classNames } from 'shared/lib';
import styles from './LoginForm.module.scss';
import { Loader, Text, Title } from 'shared/ui';
import { useSelector } from 'react-redux';
import { getLoginData } from '../../model/selectors/getLoginData';
import { loginByUserName } from '../../model/services/loginByUserName';
import { useTranslation } from 'react-i18next';
import { ThemeText } from 'shared/ui/Text/Text';
import { FormInputWrapper } from '../FormInputWrapper/FormInputWrapper';
import { FormInput } from '../FormInput/FormInput';
import { LoginActions, LoginReducer } from '../../model/slice/loginSlice';
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks';

interface LoginFormProps {
    className?: string;
    closeModal?: () => void;
}

export interface FormValues {
    username: string;
    password: string;
}

const initialReducers: ReducersList = {
    login: LoginReducer,
};

const LoginForm: FC<LoginFormProps> = memo((props: LoginFormProps) => {
    const dispatch = useAppDispatch();

    const { closeModal, className } = props;
    const { fetchError, isLoading } = useSelector(getLoginData);
    const { t } = useTranslation();
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormValues>({ mode: 'onChange' });
    const onSubmit = async ({ username, password }: FormValues): Promise<void> => {
        reset();
        dispatch(loginByUserName({ username, password })).then((result) => {
            if (result.meta.requestStatus === 'fulfilled') closeModal && closeModal();
        });
    };

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
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={true}>
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
