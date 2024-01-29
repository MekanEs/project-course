import { type LoginSchema } from '../types/loginSchema';
import { LoginActions, LoginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    let state: Partial<LoginSchema> = { isLoading: false, fetchError: undefined };

    beforeEach(() => {
        state = { isLoading: false, fetchError: undefined };
    });
    it('setError action works', () => {
        expect(LoginReducer(state as LoginSchema, LoginActions.setError('fetchError'))).toEqual({
            isLoading: false,
            fetchError: 'fetchError',
        });
    });
});
