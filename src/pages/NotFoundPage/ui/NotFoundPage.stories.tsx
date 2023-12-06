import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/themeProvider';
import { NotFoundPage } from './NotFoundPage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'page/NotFoundPage',
    component: NotFoundPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NotFoundPageDefault: Story = {
    args: {},
};

export const NotFoundPageDark: Story = {
    args: {},
};
NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)];
