import React from 'react';
import {RouteObject, useRoutes} from 'react-router-dom';

export interface RouterProps {
    routes: RouteObject[];
}

function Router(props: RouterProps) {
    const { routes } = props;

    return useRoutes(routes);
}

export default React.memo(Router);
