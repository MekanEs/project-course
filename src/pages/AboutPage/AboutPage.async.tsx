import { lazy } from 'react';

export const AboutLazy = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      setTimeout(() => resolve(import('./AboutPage')), 1000);
    }),
);
