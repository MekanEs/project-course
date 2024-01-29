import { type StateSchema } from 'app/providers/storeProvider';
import { type LoginSchema } from '../types/loginSchema';

export const getLoginData = (state: StateSchema): LoginSchema => state?.login;
