import { FC, useState } from 'react';
import { classNames } from 'shared/lib';
import styles from './SideBar.module.scss';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeToggler } from 'widgets/ThemeToggler';

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(true);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div className={classNames(styles.SideBar, { [styles.collapsed]: collapsed }, [className])}>
      <Button theme={ButtonTheme.OUTLINED} onClick={onToggle}>
        toggle
      </Button>
      <div className={classNames(styles.switchers)}>
        <ThemeToggler />
      </div>
    </div>
  );
};
