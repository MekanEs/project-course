import { FC, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { MainLazy } from './pages/MainPage/MainPage.async';
import { AboutLazy } from './pages/AboutPage/AboutPage.async';

import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

import './styles/index.scss';

const App: FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainLazy />} />
          <Route path={'/about'} element={<AboutLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
