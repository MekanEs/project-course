import { type FC, Suspense, useEffect } from 'react';

import { classNames } from 'shared/lib';
import { AppRouter } from './providers/router';

import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import 'shared/config/i18n/i18n';

import { LOCALSTORAGE_USER_KEY } from 'shared/const/localStorage';
import { useAppDispatch } from './providers/storeProvider/config/store';
import { UserActions } from 'entities/User';

const App: FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        const savedUser = localStorage.getItem(LOCALSTORAGE_USER_KEY);
        if (localStorage.getItem(LOCALSTORAGE_USER_KEY)) {
            dispatch(UserActions.setUserData(JSON.parse(savedUser)));
        }
    });
    return (
        <Suspense fallback={'Loading...'}>
            <div className={classNames('app', {}, [])}>
                <Navbar />

                <div className="content-block">
                    <SideBar />

                    <AppRouter />
                </div>
            </div>
        </Suspense>
    );
};

export default App;
