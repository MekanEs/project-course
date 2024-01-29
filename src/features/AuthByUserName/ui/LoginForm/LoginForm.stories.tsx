import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/themeProvider';
import { LoginForm } from './LoginForm';

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

export const LoginFormDark: Story = {
    args: { closeModal: () => {} },
};
LoginFormDark.decorators = [ThemeDecorator(Theme.DARK)];
