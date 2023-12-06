import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from './SideBar';
import { renderWithTranslation } from 'shared/lib';

describe('Sidebar', () => {
    it('renders Sidebar', () => {
        const id = 'sidebar';
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId(id)).toBeInTheDocument();
        screen.debug();
    });
    it('toggle on click', () => {
        const id = 'sidebar';
        const BtnId = 'sidebar-toggle';
        renderWithTranslation(<SideBar />);

        const toggleBtn = screen.getByTestId(BtnId);

        expect(screen.getByTestId(id)).toHaveClass('collapsed');

        fireEvent.click(toggleBtn);
        expect(screen.getByTestId(id)).not.toHaveClass('collapsed');
    });
});
