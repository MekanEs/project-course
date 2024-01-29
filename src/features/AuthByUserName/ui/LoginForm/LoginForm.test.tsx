import { fireEvent, screen, waitFor } from '@testing-library/react';

import { ComponentRender } from 'shared/lib';
import { LoginForm } from './LoginForm';
describe('Sidebar', () => {
    const btn = 'submit-btn';
    const form = 'form';
    const password = 'password input';
    const firstName = 'firstName input';
    const fetchError = 'fetchError';
    const testIds = [btn, form, password, firstName, fetchError];

    const closeModal = (): void => {};
    it('renders Sidebar', () => {
        ComponentRender(<LoginForm closeModal={closeModal} />, {
            initialState: { login: { isLoading: false, fetchError: 'error' } },
        });

        testIds.forEach((tesdId) => {
            expect(screen.getByTestId(tesdId)).toBeInTheDocument();
        });

        waitFor(() => {
            expect(screen.getByTestId(btn)).toHaveAttribute('disabled', true);
        });
    });
    it('renders changes state on interaction', () => {
        ComponentRender(<LoginForm closeModal={closeModal} />, {
            initialState: { login: { isLoading: false, fetchError: 'error' } },
        });
        const passwordInput = screen.getByTestId(password);
        const firstNameInput = screen.getByTestId(firstName);
        const submitBtn = screen.getByTestId(btn);

        fireEvent.change(passwordInput, { target: { value: '12345' } });
        fireEvent.change(firstNameInput, { target: { value: '12345' } });
        waitFor(() => {
            expect(screen.getByTestId(fetchError)).not.toBeInTheDocument();
            expect(submitBtn).toHaveAttribute('disabled', false);
        });
    });
    screen.debug();
});
