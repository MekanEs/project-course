import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from './SideBar';
import { ComponentRender } from 'shared/lib';

describe('Sidebar', () => {
    it('renders Sidebar', () => {
        const id = 'sidebar';
        ComponentRender(<SideBar />);
        expect(screen.getByTestId(id)).toBeInTheDocument();
    });
    it('toggle on click', () => {
        const id = 'sidebar';
        const BtnId = 'sidebar-toggle';
        ComponentRender(<SideBar />);

        const toggleBtn = screen.getByTestId(BtnId);

        expect(screen.getByTestId(id)).toHaveClass('collapsed');

        fireEvent.click(toggleBtn);
        expect(screen.getByTestId(id)).not.toHaveClass('collapsed');
    });
    screen.debug();
});
