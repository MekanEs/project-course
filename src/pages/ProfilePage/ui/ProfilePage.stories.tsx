import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/themeProvider';
import ProfilePage from './ProfilePage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'page/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProfilePageDefault: Story = {
    args: {},
};

export const ProfilePageDark: Story = {
    args: {},
};
ProfilePageDark.decorators = [ThemeDecorator(Theme.DARK)];
