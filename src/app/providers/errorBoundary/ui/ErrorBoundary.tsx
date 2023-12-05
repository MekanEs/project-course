import React, { Suspense, type ErrorInfo, type ReactNode } from 'react';
import { PageError } from 'widgets/PageError';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(_error: Error): { hasError: boolean } {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log(error, errorInfo);
    }

    render(): ReactNode {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback={''}>
                    <PageError />
                </Suspense>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
