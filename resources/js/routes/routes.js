import routeMap from "./routeMap";

import { ReactLazyPreload } from "./lazyLoad";

import translationsHOC from "../components/Translations";

const HomePage = ReactLazyPreload(() => import("../components/HomePage"));

const NoteInput = ReactLazyPreload(() => import("../components/NoteInput"));

const NoteView = ReactLazyPreload(() => import("../components/NoteView"));

const NotFound = ReactLazyPreload(() => import("../components/NotFound"));

export const routes = [
    { path: routeMap.home, exact: true, component: translationsHOC(HomePage) },
    { path: routeMap.new, exact: true, component: translationsHOC(NoteInput) },
    { path: routeMap.note, exact: true, component: translationsHOC(NoteView) },
    { path: routeMap.edit, exact: true, component: translationsHOC(NoteInput) },
    { path: null, exact: true, component: translationsHOC(NotFound) },
];

export const modalRoutes = [
    { path: routeMap.new, exact: true, component: translationsHOC(NoteInput) },
    { path: routeMap.note, exact: true, component: translationsHOC(NoteView) },
    { path: routeMap.edit, exact: true, component: translationsHOC(NoteInput) },
];
