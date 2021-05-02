import React from "react";
import "./AddNote.styles.scss";
import { Link, useLocation } from "react-router-dom";
import { preloadRouteComponent } from "../../routes/lazyLoad";
import routeMap from "../../routes/routeMap";

const AddNote = () => {
    const location = useLocation();

    return (
        <>
            <Link
                className="note note--addnote"
                onMouseEnter={() => preloadRouteComponent(routeMap.new)}
                to={{
                    pathname: routeMap.new,
                    state: {
                        overlay: location,
                    },
                }}
            >
                <img
                    loading="lazy"
                    src={"/images/plus.icon.svg"}
                    alt="plus icon"
                    height="38"
                    width="38"
                />
            </Link>
        </>
    );
};

export default AddNote;
