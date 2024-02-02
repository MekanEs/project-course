import { type StateSchema } from 'app/providers/storeProvider';
import { getLoginData } from './getLoginData';

describe('getLoginData', () => {
    it('return loginData', () => {
        const state: Partial<StateSchema> = {
            login: {
                isLoading: false,
            },
        };
        expect(getLoginData(state as StateSchema)).toEqual({
            isLoading: false,
        });
    });
    it('work with empty state', () => {
        const state: Partial<StateSchema> = {};
        expect(getLoginData(state as StateSchema)).toEqual(false);
    });
});
