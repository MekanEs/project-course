import { useState, memo, useCallback } from 'react';
import { classNames } from 'shared/lib';
import styles from './SideBar.module.scss';
import { Button } from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeToggler } from 'widgets/ThemeToggler';
import { LangToggler } from 'widgets/LangToggler/ui/LangToggler';
import { SideBarItems } from '../model/items';
import { SideBarItem } from './SidebarItem/SideBarItem';
interface SideBarProps {
    className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const onToggle: () => void = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.SideBar, { [styles.collapsed]: collapsed }, [className])}
        >
            <div className={classNames(styles.items)}>
                {SideBarItems.map((item) => (
                    <SideBarItem key={item.path} item={item} collapsed={collapsed} />
                ))}
            </div>

            <Button
                className={styles.collapseBtn}
                data-testid="sidebar-toggle"
                theme={ButtonTheme.BACKGROUND_ACCENT}
                square={true}
                size={ButtonSize.L}
                onClick={onToggle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={classNames(styles.switchers)}>
                <ThemeToggler />
                <LangToggler short={collapsed} />
            </div>
        </div>
    );
});
