import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/themeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightAppLink: Story = {
    args: { children: 'Link' },
};
export const LightAppLinkDark: Story = {
    args: { children: 'Link' },
};
export const AccentAppLink: Story = {
    args: { children: 'Link', theme: AppLinkTheme.ACCENT },
};
export const AccentAppLinkDark: Story = {
    args: { children: 'Link', theme: AppLinkTheme.ACCENT },
};
LightAppLink.decorators = [RouterDecorator];
LightAppLinkDark.decorators = [RouterDecorator, ThemeDecorator(Theme.DARK)];

AccentAppLink.decorators = [RouterDecorator];
AccentAppLinkDark.decorators = [RouterDecorator, ThemeDecorator(Theme.DARK)];
