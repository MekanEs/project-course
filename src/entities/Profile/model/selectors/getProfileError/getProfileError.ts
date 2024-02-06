import { type StateSchema } from 'app/providers/storeProvider';

export const getProfileError = (state: StateSchema) => state.profile?.fetchError;
