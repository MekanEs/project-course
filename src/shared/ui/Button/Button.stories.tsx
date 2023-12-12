import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/StyleDecorator';
import { Theme } from 'app/providers/themeProvider';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OutlinedButton: Story = {
    args: {
        theme: ButtonTheme.OUTLINED_PRIMARY,
        children: 'Text',
    },
};
export const OutlinedDarkButton: Story = {
    args: {
        theme: ButtonTheme.OUTLINED_PRIMARY,
        children: 'Text',
    },
};
export const BackgoundButton: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_SECONDARY,
        children: 'Text',
    },
};
export const BackgoundDarkButton: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_SECONDARY,
        children: 'Text',
    },
};
OutlinedDarkButton.decorators = [ThemeDecorator(Theme.DARK)];

export const SquareButtonMBgAccent: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_ACCENT,
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareButtonLBgAccent: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_ACCENT,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareButtonXlBgAccent: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_ACCENT,
        square: true,
        size: ButtonSize.XL,
    },
};

export const SquareButtonMBgSecondary: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_SECONDARY,
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareButtonLBgSecondary: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_SECONDARY,
        square: true,
        size: ButtonSize.L,
    },
};

export const SquareButtonXlBgSecondary: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_SECONDARY,
        square: true,
        size: ButtonSize.XL,
    },
};

export const DarkSquareButtonMBgAccent: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_ACCENT,
        square: true,
        size: ButtonSize.M,
    },
};

export const DarkSquareButtonLBgAccent: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_ACCENT,
        square: true,
        size: ButtonSize.L,
    },
};

export const DarkSquareButtonXlBgAccent: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_ACCENT,
        square: true,
        size: ButtonSize.XL,
    },
};

export const DarkSquareButtonMBgSecondary: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_SECONDARY,
        square: true,
        size: ButtonSize.M,
    },
};

export const DarkSquareButtonLBgSecondary: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_SECONDARY,
        square: true,
        size: ButtonSize.L,
    },
};

export const DarkSquareButtonXlBgSecondary: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_SECONDARY,
        square: true,
        size: ButtonSize.XL,
    },
};

[
    DarkSquareButtonMBgAccent,
    DarkSquareButtonLBgAccent,
    DarkSquareButtonXlBgAccent,
    DarkSquareButtonMBgSecondary,
    DarkSquareButtonLBgSecondary,
    DarkSquareButtonXlBgSecondary,
].forEach((el) => {
    el.decorators = [ThemeDecorator(Theme.DARK)];
});
