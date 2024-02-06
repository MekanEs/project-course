import { type StateSchema } from 'app/providers/storeProvider';
import { getLoginData } from './getLoginData';

describe('getLoginData', () => {
    it('return loginData', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: false,
            },
        };
        expect(getLoginData(state as StateSchema)).toEqual({
            isLoading: false,
        });
    });
    it('work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginData(state as StateSchema)).toEqual({
            isLoading: false,
        });
    });
});
