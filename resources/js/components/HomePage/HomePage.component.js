import React, { useEffect } from "react";
import NoteArea from "../NoteArea";
import PropTypes from "prop-types";

import "./HomePage.Styles.scss";
const HomePage = ({ __, getNotes }) => {
    useEffect(() => {
        getNotes();
    }, []);

    return (
        <div className="homepage">
            <h1>{__(`Notes`)}</h1>
            <NoteArea __={__} />
        </div>
    );
};

HomePage.propTypes = {
    __: PropTypes.func.isRequired,
    getNotes: PropTypes.func.isRequired,
};

export default HomePage;
