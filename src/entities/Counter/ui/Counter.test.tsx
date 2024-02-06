import { fireEvent, screen } from '@testing-library/react';
import { Counter } from './Counter';
import { type StateSchema } from 'app/providers/storeProvider';
import { ComponentRender } from 'shared/lib/tests';

describe('Counter', () => {
    let initialState: DeepPartial<StateSchema>;
    beforeEach(() => {
        initialState = {
            counter: { value: 10 },
        };
    });
    it('renders Counter with right value', () => {
        ComponentRender(<Counter />, {
            initialState,
        });
        expect(screen.getByTestId('value')).toHaveTextContent('10');
        screen.debug();
    });
    it('Counter increments value after interaction', () => {
        ComponentRender(<Counter />, { initialState });
        const incrementBtn = screen.getByTestId('increment');
        fireEvent.click(incrementBtn);
        expect(screen.getByTestId('value')).toHaveTextContent('11');

        screen.debug();
    });
    it('Counter decrements value after interaction', () => {
        ComponentRender(<Counter />, { initialState });
        const decrementBtn = screen.getByTestId('decrement');

        fireEvent.click(decrementBtn);
        expect(screen.getByTestId('value')).toHaveTextContent('9');
        screen.debug();
    });
});
