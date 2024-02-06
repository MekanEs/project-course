import { type UserSchema } from '../types/UserSchema';
import { UserActions, UserReducer } from './userSlice';

describe('userSlice.test', () => {
    let state: DeepPartial<UserSchema> = { Auth: undefined };

    beforeEach(() => {
        state = { Auth: { id: '2', username: 'testName' } };
    });
    it('setUserData action works', () => {
        expect(UserReducer(state as UserSchema, UserActions.setUserData({ id: '1', username: 'name' }))).toEqual({
            Auth: { id: '1', username: 'name' },
        });
    });
    it('setUserData action works with empty state', () => {
        expect(UserReducer(undefined, UserActions.setUserData({ id: '1', username: 'name' }))).toEqual({
            Auth: { id: '1', username: 'name' },
        });
    });

    it('logout action works', () => {
        expect(UserReducer(state as UserSchema, UserActions.logout())).toEqual({
            Auth: undefined,
        });
    });
});
