import type { StateSchema } from 'app/providers/storeProvider';
import type { CounterSchema } from '../../types/CounterSchema';

export const getCounter = (state: StateSchema): CounterSchema => state.counter;
