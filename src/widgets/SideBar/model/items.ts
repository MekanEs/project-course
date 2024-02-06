import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import HomeIcon from 'shared/assets/icons/home.svg';
export interface SideBarItemType {
    text: string;
    path: AppRoutes;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const SideBarItems: SideBarItemType[] = [
    { text: 'Main', path: AppRoutes.MAIN, Icon: HomeIcon },
    { text: 'About', path: AppRoutes.ABOUT, Icon: AboutIcon },
    { text: 'Profile', path: AppRoutes.PROFILE, Icon: HomeIcon },
];
