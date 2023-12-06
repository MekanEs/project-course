import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/themeProvider';
import { PageError } from './PageError';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'widget/PageError',
    component: PageError,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightPageError: Story = {
    args: {},
};
export const DarkPageError: Story = {
    args: {},
};
DarkPageError.decorators = [ThemeDecorator(Theme.DARK)];
