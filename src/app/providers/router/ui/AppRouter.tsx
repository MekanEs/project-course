import { type FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter: FC = () => {
    return (
        <div className="page">
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    {Object.values(routeConfig).map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
};
