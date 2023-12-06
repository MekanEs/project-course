import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/themeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OutlinedButton: Story = {
    args: {
        theme: ButtonTheme.OUTLINED_PRIMARY,
        children: 'Text',
    },
};
export const OutlinedDarkButton: Story = {
    args: {
        theme: ButtonTheme.OUTLINED_PRIMARY,
        children: 'Text',
    },
};
OutlinedDarkButton.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearButton: Story = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};
