import { type Profile } from './types';

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    fetchError?: string;
    readonly: boolean;
}
