import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import { ThemeProvider } from 'app/providers/themeProvider';
import ErrorBoundary from 'app/providers/errorBoundary/ui/ErrorBoundary';
import { StoreProvider } from 'app/providers/storeProvider';
import 'app/styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>{' '}
        </StoreProvider>
    </BrowserRouter>
);
