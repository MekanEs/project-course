import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/themeProvider';
import AboutPage from './AboutPage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'page/AboutPage',
    component: AboutPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AboutPageDefault: Story = {
    args: {},
};

export const AboutPageDark: Story = {
    args: {},
};
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)];
