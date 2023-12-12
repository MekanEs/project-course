import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/themeProvider';
import { LangToggler } from './LangToggler';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'widget/LangToggler',
    component: LangToggler,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof LangToggler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightLangToggler: Story = {
    args: { short: false },
};
export const DarkLangToggler: Story = {
    args: { short: false },
};
DarkLangToggler.decorators = [ThemeDecorator(Theme.DARK)];
