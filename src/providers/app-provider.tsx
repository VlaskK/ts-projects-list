import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import ErrorBoundary from "./error-boundary.tsx";


function AppProvider(props: React.PropsWithChildren<object>) {
    const { children } = props;

    return (
        <React.Suspense
            fallback={
                <div>loading...</div>
            }
        >
            <ErrorBoundary>
                <Router>{children}</Router>
            </ErrorBoundary>
        </React.Suspense>
    );
}

export default React.memo(AppProvider);
