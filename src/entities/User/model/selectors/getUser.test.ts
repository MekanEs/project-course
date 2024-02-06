import { type StateSchema } from 'app/providers/storeProvider';
import { getUser } from './getUser';
describe('getUser', () => {
    it('return User', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                Auth: { id: '2', username: 'test' },
            },
        };

        expect(getUser(state as StateSchema)).toEqual({ id: '2', username: 'test' });
    });
});
