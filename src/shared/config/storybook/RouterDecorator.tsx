import { type Decorator } from '@storybook/react';

import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator: Decorator<Record<string, unknown>> = (Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
