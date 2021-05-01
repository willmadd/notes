import React from "react";
import { matchPath } from "react-router-dom";
import { routes, modalRoutes } from "./routes";

export const ReactLazyPreload = (importStatement) => {
    const Component = React.lazy(importStatement);
    Component.preload = importStatement;
    return Component;
};

export const preloadRouteComponent = (path) => {
    const allRoutes = [...modalRoutes, ...routes]
    const component = findComponentForRoute(path, allRoutes);
    if (component && component.preload) {
        component.preload();
    }
};

const findComponentForRoute = (path, routes) => {
    const matchingRoute = routes.find((route) =>
        matchPath(path, {
            path: route.path,
            exact: route.exact,
        })
    );
    return matchingRoute ? matchingRoute.component : null;
};
