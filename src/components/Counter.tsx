import { FC, useState } from 'react';
import styles from './Counter.module.scss';

interface CounterProps {
  className?: string;
}

export const Counter: FC = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(count + 1);
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button className={styles.green} onClick={increment}>
        Inrement
      </button>
    </div>
  );
};
