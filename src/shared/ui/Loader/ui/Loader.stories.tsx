import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/themeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderDefault: Story = {
    args: {},
};

export const LoaderDark: Story = {
    args: {},
};
LoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
