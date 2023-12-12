import { type Decorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: () => Decorator<Record<string, unknown>> =
    // eslint-disable-next-line react/display-name
    () => (Story) => (
        <BrowserRouter>
            <Story />
        </BrowserRouter>
    );
