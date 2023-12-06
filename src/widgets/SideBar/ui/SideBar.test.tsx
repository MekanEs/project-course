import { fireEvent, screen } from '@testing-library/react';
import { SideBar } from './SideBar';
import { renderWithTranslation } from 'shared/lib';

describe('Sidebar', () => {
    it('renders Sidebar', () => {
        const id = 'sidebar';
        renderWithTranslation(<SideBar />);
        expect(screen.getByTestId(id)).toBeInTheDocument();
    });
    it('toggle on click', () => {
        const id = 'sidebar';
        const BtnId = 'sidebar-toggle';
        const toggleBtn = screen.getByTestId(BtnId);

        renderWithTranslation(<SideBar />);

        expect(screen.getByTestId(id)).toHaveClass('collapsed');

        fireEvent.click(toggleBtn);
        expect(screen.getByTestId(id)).not.toHaveClass('collapsed');
    });
});
