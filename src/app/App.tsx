import { type FC, Suspense } from 'react';

import { classNames } from 'shared/lib';
import { AppRouter } from './providers/router';

import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import 'shared/config/i18n/i18n';

const App: FC = () => {
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
