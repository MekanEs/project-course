import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/themeProvider';
import { ThemeToggler } from './ThemeToggler';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'widget/ThemeToggler',
    component: ThemeToggler,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ThemeToggler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightThemeToggler: Story = {
    args: {},
};
export const DarkThemeToggler: Story = {
    args: {},
};
DarkThemeToggler.decorators = [ThemeDecorator(Theme.DARK)];
