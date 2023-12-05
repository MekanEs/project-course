import { type FC, Suspense } from 'react';

import { useTheme } from './providers/themeProvider';

import { classNames } from 'shared/lib';
import { AppRouter } from './providers/router';

import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import 'shared/config/i18n/i18n';

const App: FC = () => {
    const { theme } = useTheme();

    return (
        <Suspense fallback={'Loading...'}>
            <div className={classNames('app', {}, [theme])}>
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
