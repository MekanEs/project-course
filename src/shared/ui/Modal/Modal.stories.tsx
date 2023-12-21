import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro tempore dolorem molestiae quo impedit iusto iure atque veritatis corporis non quae optio officia dolores earum temporibus, neque deserunt quis!';
export const ModalWindow: Story = {
    args: {
        children: text,
        isOpened: true,
    },
};

export const DarkModalWindow: Story = {
    args: {
        children: text,
        isOpened: true,
    },
};

DarkModalWindow.decorators = [ThemeDecorator(Theme.DARK)];
