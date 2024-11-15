import { type AppDispatch } from 'app/providers/storeProvider';
import { useDispatch } from 'react-redux';

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
