import React, { useState, useEffect } from "react";
import * as api from "../../api";
import "./NoteView.styles.scss";
import "../NoteInput/NoteInput.styles.scss";
import { converter } from "../../utils";
import ReactMde from "react-mde";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import routeMap from "../../routes/routeMap";

const NoteView = ({ match, location }) => {
    let history = useHistory();

    const { id } = match.params;

    const { colour } = (location || {}).state || {};

    const [error, setError] = useState("");

    const [note, setNote] = useState({
        title: "",
        subtitle: "",
        content: "",
        colour: "#ffffff",
        updated_at: "",
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        api.getNote(id)
            .then((res) => {
                if (res.status === 201) {
                    setNote(res.data);
                    setLoading(false);
                }
            })
            .catch((e) => {
                setError(e.message);
                history.push("/notfound");
            });
    }, []);

    return (
        <div className="noteinput noteinput-view">
            <div
                className="noteinput__modal"
                style={{ backgroundColor: colour }}
            >
                <button
                    type="button"
                    onClick={() => history.push(routeMap.home)}
                    className="noteinput__close"
                >
                    <img src={"/images/close.icon.svg"} alt="close" />
                </button>
                {loading ? (
                    <>
                        <div className="placeholder placeholder-title"></div>
                        <div className="placeholder placeholder-subtitle"></div>
                        <div className="placeholder placeholder-content"></div>
                    </>
                ) : (
                    <>
                        <h1>{`${note.title}`}</h1>
                        <h2>{`${note.subtitle}`}</h2>
                        <ReactMde
                            value={note.content}
                            // onChange={setContent}
                            selectedTab={"preview"}
                            // onTabChange={setSelectedTab}
                            generateMarkdownPreview={(markdown) =>
                                Promise.resolve(converter.makeHtml(markdown))
                            }
                        />
                    </>
                )}
                <button
                    className="btn btn--secondary"
                    onClick={() => history.goBack()}
                >
                    Close
                </button>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

NoteView.propTypes = {
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

export default NoteView;
