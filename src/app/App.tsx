import { FC, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { useTheme } from './providers/themeProvider';

import { classNames } from 'shared/lib';
import { AppRouter } from './providers/router';

import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';

const App: FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
