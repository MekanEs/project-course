import { type CounterSchema } from '../types/CounterSchema';
import { CounterActions, CounterReducer } from './counterSlice';

describe('counterSlice.test', () => {
    let state: Partial<CounterSchema> = { value: 10 };

    beforeEach(() => {
        state = { value: 10 };
    });
    it('increment actions works', () => {
        expect(
            CounterReducer(state as CounterSchema, CounterActions.increment())
        ).toEqual({
            value: 11,
        });
    });
    it('decrement actions works', () => {
        expect(
            CounterReducer(state as CounterSchema, CounterActions.decrement())
        ).toEqual({
            value: 9,
        });
    });
    it('should work with empty state', () => {
        expect(CounterReducer(undefined, CounterActions.increment())).toEqual({
            value: 1,
        });
        expect(CounterReducer(undefined, CounterActions.decrement())).toEqual({
            value: -1,
        });
    });
});
