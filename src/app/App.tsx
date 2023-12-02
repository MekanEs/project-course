import { FC } from 'react';

import { useTheme } from './providers/themeProvider';

import { classNames } from 'shared/lib';
import { AppRouter } from './providers/router';

import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';

const App: FC = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-block'>
        <SideBar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
