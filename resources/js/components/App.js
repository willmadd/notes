import React, {useState, useEffect} from 'react';
import { Switch, useLocation } from "react-router-dom";
import { routes, modalRoutes } from "../routes/routes";
import RouteFromArray  from "..//routes/RouteFromArray";
import LocationModal from './LocationModal';
import Header from './Header';
import { connect } from "react-redux";
import { chanegLocale } from "../store/locale/locale.actions";


function App({setLocale}) {
    let location = useLocation();

    let overlay = location.state && location.state.overlay;

    const [firstVisit, setFirstVisit] = useState(true);

    useEffect(()=>{
        const locale = localStorage.getItem("notes:locale");

        if (locale){
            setFirstVisit(false);
            setLocale(locale);
        }
    },[])

    return (
        <div className="container">
            {firstVisit && <LocationModal setFirstVisit={setFirstVisit}/>}
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


const mapStateToProps = _state => {
    return {
        locale: _state.localeReducer.locale
    };
};

const mapDispatchToProps = _dispatch => {
    return {
        setLocale: (locale) => {
            return _dispatch(chanegLocale(locale))}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
