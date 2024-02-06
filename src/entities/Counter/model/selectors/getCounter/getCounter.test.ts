import { type StateSchema } from 'app/providers/storeProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    it('return Counter', () => {
        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };

        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
