import React from "react";
import { matchPath } from "react-router-dom";
import { routes, modalRoutes } from "./routes";

export const ReactLazyPreload = (importStatement) => {
    console.log('import statement', importStatement);
    const Component = React.lazy(importStatement);
    Component.preload = importStatement;
    return Component;
};

export const preloadRouteComponent = (path) => {
    const allRoutes = [...modalRoutes, ...routes]
    // console.log(allRoutes);
    // console.log('preload hit', path);
    const component = findComponentForRoute(path, allRoutes);
    console.log('Component', component);

    if (component && component.preload) {
        component.preload();
    }
};

const findComponentForRoute = (path, routes) => {
    console.log('LLLLLLL',routes);
    const matchingRoute = routes.find((route) =>
        matchPath(path, {
            path: route.path,
            exact: route.exact,
        })
    );
    return matchingRoute ? matchingRoute.component : null;
};
