import { type StateSchema } from 'app/providers/storeProvider';
import { type User } from '../types/user';

export const getUser = (state: StateSchema): User => state.user.Auth;
