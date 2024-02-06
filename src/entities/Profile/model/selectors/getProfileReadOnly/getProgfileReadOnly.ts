import { type StateSchema } from 'app/providers/storeProvider';

export const getProfileReadOnly = (state: StateSchema) => state.profile?.readonly || true;
