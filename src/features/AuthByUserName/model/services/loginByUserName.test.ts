import axios from 'axios';
import { loginByUserName } from './loginByUserName';
import { UserActions } from 'entities/User';
import { AsyncThunkTest } from 'shared/lib/tests';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, { shallow: false });

describe('loginByUserName', () => {
    it('login with succes', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: { username: '123', id: '1' } }));
        const asyncThunk = new AsyncThunkTest(loginByUserName);
        const result = await asyncThunk.callThunk({ username: '123', password: '123' });

        expect(result.payload).toEqual({ username: '123', id: '1' });
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3);
        expect(asyncThunk.dispatch).toHaveBeenCalledWith(UserActions.setUserData({ username: '123', id: '1' }));
    });

    it('login with error', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const asyncThunk = new AsyncThunkTest(loginByUserName);
        const result = await asyncThunk.callThunk({ username: '123', password: '123' });

        expect(result.meta.requestStatus).toBe('rejected');
        expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.payload).toBe('fetchError');
    });
});
