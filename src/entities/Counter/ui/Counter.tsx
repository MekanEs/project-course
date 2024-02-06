/* eslint-disable i18next/no-literal-string */
import { type FC } from 'react';
import { useSelector } from 'react-redux';
import { CounterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks';

export const Counter: FC = () => {
    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = (): void => {
        dispatch(CounterActions.increment());
    };
    const decrement = (): void => {
        dispatch(CounterActions.decrement());
    };
    return (
        <div>
            <h3 data-testid="value">{counterValue}</h3>
            <Button data-testid="increment" theme={ButtonTheme.OUTLINED_PRIMARY} onClick={increment}>
                increment
            </Button>
            <Button data-testid="decrement" theme={ButtonTheme.OUTLINED_PRIMARY} onClick={decrement}>
                decrement
            </Button>
        </div>
    );
};
