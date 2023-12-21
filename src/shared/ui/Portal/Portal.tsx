import { Theme } from 'app/providers/themeProvider';
import { type FC, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    container?: HTMLElement;
    theme?: Theme;
}

export const Portal: FC<PortalProps> = ({
    children,
    container = document.body,
    theme = Theme.LIGHT,
}) => {
    return createPortal(
        <div className={`app ${theme}`}>{children}</div>,
        container
    );
};
