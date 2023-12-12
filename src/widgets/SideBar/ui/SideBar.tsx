import { type FC, useState } from 'react';
import { classNames } from 'shared/lib';
import styles from './SideBar.module.scss';
import { AppLink, Button } from 'shared/ui';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeToggler } from 'widgets/ThemeToggler';
import { LangToggler } from 'widgets/LangToggler/ui/LangToggler';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useTranslation } from 'react-i18next';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
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
            <div className={classNames(styles.items)}>
                <AppLink
                    className={classNames(styles.item)}
                    to={RoutePath.main}
                >
                    <HomeIcon className={styles.icon} />
                    <span className={classNames(styles.link)}>{t('Main')}</span>
                </AppLink>
                <AppLink
                    className={classNames(styles.item)}
                    to={RoutePath.about}
                >
                    <AboutIcon className={styles.icon} />
                    <span className={classNames(styles.link)}>
                        {t('About')}
                    </span>
                </AppLink>
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
};
