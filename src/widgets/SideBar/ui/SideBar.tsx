import { type FC, useState } from 'react';
import { classNames } from 'shared/lib';
import styles from './SideBar.module.scss';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeToggler } from 'widgets/ThemeToggler';
import { LangToggler } from 'widgets/LangToggler/ui/LangToggler';
import { useTranslation } from 'react-i18next';

interface SideBarProps {
    className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const { t } = useTranslation();
    const onToggle: () => void = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(
                styles.SideBar,
                { [styles.collapsed]: collapsed },
                [className]
            )}
        >
            <Button
                data-testid="sidebar-toggle"
                theme={ButtonTheme.OUTLINED_PRIMARY}
                onClick={onToggle}
            >
                {collapsed ? t('open') : t('close')}
            </Button>
            <div
                className={classNames(styles.switchers, {
                    [styles.colomned]: collapsed,
                })}
            >
                <ThemeToggler />
                <LangToggler />
            </div>
        </div>
    );
};
