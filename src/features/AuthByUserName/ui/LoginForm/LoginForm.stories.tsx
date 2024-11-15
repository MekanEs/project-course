import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/themeProvider';
import LoginForm from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoginFormDefault: Story = {
    args: { closeModal: () => {} },
};

export const LoginFormPending: Story = {
    args: { closeModal: () => {} },
};
export const LoginFormError: Story = {
    args: { closeModal: () => {} },
};

export const LoginFormDark: Story = {
    args: { closeModal: () => {} },
};
LoginFormDark.decorators = [ThemeDecorator(Theme.DARK)];
LoginFormPending.decorators = [StoreDecorator({ login: { isLoading: true } })];
LoginFormError.decorators = [StoreDecorator({ login: { isLoading: false, fetchError: 'error' } })];
