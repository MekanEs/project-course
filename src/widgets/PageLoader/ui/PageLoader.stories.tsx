import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/themeProvider';
import { PageLoader } from './PageLoader';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'widget/PageLoader',
    component: PageLoader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightPageLoader: Story = {
    args: {},
};
export const DarkPageLoader: Story = {
    args: {},
};
DarkPageLoader.decorators = [ThemeDecorator(Theme.DARK)];
