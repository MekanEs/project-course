import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/themeProvider';
import { SideBar } from './SideBar';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'widget/SideBar',
    component: SideBar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightSideBar: Story = {
    args: {},
};
export const DarkSideBar: Story = {
    args: {},
};
DarkSideBar.decorators = [ThemeDecorator(Theme.DARK)];
