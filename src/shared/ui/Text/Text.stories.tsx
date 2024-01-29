import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Text, ThemeText } from './Text';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextDefault: Story = {
    args: { children: 'test', theme: ThemeText.DEFAULT },
};

export const TextDefaultDark: Story = {
    args: { children: 'test', theme: ThemeText.DEFAULT },
};

export const TextError: Story = {
    args: { children: 'test', theme: ThemeText.ERROR },
};
export const TextSucces: Story = {
    args: { children: 'test', theme: ThemeText.SUCCES },
};

TextDefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
