import { render, screen } from '@testing-library/react';
import { Button } from './Button';
describe('Button', () => {
    it('renders Button with child', () => {
        const testChild = 'Test';
        render(<Button>Test</Button>);
        expect(screen.getByText(testChild)).toBeInTheDocument();
    });
    it('renders Button with className', () => {
        const testChild = 'Test';
        const cls = 'testClassName';
        render(<Button className={cls}>{testChild}</Button>);
        expect(screen.getByText(testChild)).toHaveClass(cls);
    });
});
