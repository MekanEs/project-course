import { memo } from 'react';
import { classNames } from 'shared/lib';
import styles from './SideBarItem.module.scss';
import { AppLink } from 'shared/ui';
import { type SideBarItemType } from '../../model/items';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface SideBarItemProps {
    className?: string;
    item: SideBarItemType;
    collapsed: boolean;
}

export const SideBarItem = memo(({ className, item, collapsed }: SideBarItemProps) => {
    const { t } = useTranslation();

    return (
        <AppLink className={classNames(styles.item, { [styles.collapsed]: collapsed })} to={RoutePath[item.path]}>
            <item.Icon className={styles.icon} />
            <span className={classNames(styles.link)}>{t(item.text)}</span>
        </AppLink>
    );
});
