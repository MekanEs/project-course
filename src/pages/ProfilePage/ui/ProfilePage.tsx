import { memo, useEffect } from 'react';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { ProfileCard, ProfileReducer, fetchProfile } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks';

interface ProfilePageProps {
    className?: string;
}
const initialReducers: ReducersList = {
    profile: ProfileReducer,
};
const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchProfile());
    }, [dispatch]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <ProfileCard />
        </DynamicModuleLoader>
    );
});
export default ProfilePage;
