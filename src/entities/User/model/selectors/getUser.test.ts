import { type StateSchema } from 'app/providers/storeProvider';
import { getUser } from './getUser';
describe('getUser', () => {
    it('return User', () => {
        const state: Partial<StateSchema> = {
            user: {
                Auth: { id: '2', username: 'test' },
            },
        };

        expect(getUser(state as StateSchema)).toEqual({ id: '2', username: 'test' });
    });
});
