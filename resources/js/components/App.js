import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, useLocation } from "react-router-dom";
import { routes, modalRoutes } from "../routes/routes";
import RouteFromArray, {ModalRouteFromArray} from "..//routes/RouteFromArray";
import LocationModal from './LocationModal';
import Header from './Header';
// import '../../sass/globalStyles.scss';


function App() {
    let location = useLocation();

    let overlay = location.state && location.state.overlay;

    return (
        <div className="container">
            {/* <LocationModal /> */}
            <Header />
            <Switch location={overlay || location}>
                {routes.map((route, index) => (
                    <RouteFromArray
                        key={index}
                        exact={route.exact}
                        {...route}
                    />
                ))}
            </Switch>
            {modalRoutes.map(
                (modalRoute, index) =>
                    overlay && (
                        <RouteFromArray
                            key={`${index}-modal`}
                            exact={modalRoute.exact}
                            {...modalRoute}
                        />
                    )
            )}
        </div>
    );
}

export default App;

