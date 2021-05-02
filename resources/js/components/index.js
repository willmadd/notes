import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "../store/index.reducers";
import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import SiteLoading from "./SiteLoading";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

if (document.getElementById("root")) {
    ReactDOM.render(
        <React.StrictMode>
            <React.Suspense fallback={<SiteLoading />}>
                <Provider store={store}>
                    <Router>
                        <App />
                    </Router>
                </Provider>
            </React.Suspense>
        </React.StrictMode>,
        document.getElementById("root")
    );
}
