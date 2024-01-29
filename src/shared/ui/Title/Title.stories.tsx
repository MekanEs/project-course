import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/themeProvider';
import { ThemeTitle, Title } from './Title';

const meta = {
    title: 'shared/Title',
    component: Title,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleDefault: Story = {
    args: { title: 'test', theme: ThemeTitle.BLOCK },
};

export const TitleInline: Story = {
    args: { title: 'test', theme: ThemeTitle.INLINE },
};

export const TitleDefaultDark: Story = {
    args: { title: 'test', theme: ThemeTitle.BLOCK },
};

export const TitleInlineDark: Story = {
    args: { title: 'test', theme: ThemeTitle.INLINE },
};

TitleDefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
TitleInlineDark.decorators = [ThemeDecorator(Theme.DARK)];
