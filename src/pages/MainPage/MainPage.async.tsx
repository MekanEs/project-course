import { lazy } from 'react';

export const MainLazy = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import('./MainPage')), 1000);
    }),
);
