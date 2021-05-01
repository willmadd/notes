import React, { useState, useEffect } from "react";
import "./NoteInput.styles.scss";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import PropTypes from "prop-types";
import * as api from "../../api";
import { useHistory } from "react-router-dom";
import routeMap from "../../routes/routeMap";
import { noteCols } from "../../settings";
import { converter } from "../../utils";

const NoteInput = ({ __, lastNoteCol, getNotes, location, match }) => {
    let history = useHistory();

    const [content, setContent] = useState("");
    const [selectedTab, setSelectedTab] = useState("write");
    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState("");
    const [colour, setColour] = useState("");

    useEffect(() => {
        const { id } = match.params;
        if (id) {
            setLoading(true);
            api.getNote(id)
                .then((res) => {
                    const { status, data } = res;
                    if (status === 201) {
                        const { content, title, subtitle, colour } = data;
                        setContent(content);
                        setTitle(title);
                        setSubTitle(subtitle);
                        setLoading(false);
                    }
                })
                .catch((e) => {
                    setError(e.message);
                });
        }
    }, []);

    const generateNoteColour = () => {
        //filter out the last coloured note, so no notes that are adjacent have the same colour
        const availableCols = noteCols.filter((col) => col !== lastNoteCol);
        // Pick random available colour
        return availableCols[~~(Math.random() * availableCols.length)];
    };

    useEffect(() => {
        const noteCol = location.state.colour || generateNoteColour();
        setColour(noteCol);
    }, []);

    const handleSubmit = () => {
        const data = {
            content,
            title,
            subTitle,
            colour,
            id: match.params.id,
        };
        api.createNote(data)
            .then((res) => {
                if (res.status === 201) {
                    getNotes();
                    history.push(routeMap.home);
                } else {
                    setError("Your note could not be created");
                }
            })
            .catch((e) => {
                setError(`A server error occured - ${e.message}`);
            });
    };

    return (
        <div className="noteinput">
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
                <h1>{__(`Edit/Add`)}</h1>
                <label htmlFor={"title"}>
                    {__("Title")}
                    <input
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder={__("Title")}
                    />
                </label>
                <label htmlFor={"subtitle"}>
                    {__("Subtitle")}
                    <input
                        name="subtitle"
                        value={subTitle}
                        onChange={(e) => setSubTitle(e.target.value)}
                        placeholder={__("Subtitle")}
                    />
                </label>
                <label htmlFor="content">
                    {__("Content")}
                    <ReactMde
                        name="content"
                        value={content}
                        onChange={setContent}
                        selectedTab={selectedTab}
                        onTabChange={setSelectedTab}
                        generateMarkdownPreview={(markdown) =>
                            Promise.resolve(converter.makeHtml(markdown))
                        }
                        childProps={{
                            textArea: {
                                placeholder: __("Type Here"),
                            },
                        }}
                    />
                </label>
                <div className="noteinput__buttons">
                    <button
                        type="button"
                        onClick={() => history.push(routeMap.home)}
                        className="btn btn--secondary"
                    >
                        {__("Cancel")}
                    </button>
                    <button
                        type="button"
                        onClick={() => handleSubmit()}
                        className="btn btn--primary"
                    >
                        {__("Save")}
                    </button>
                </div>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

NoteInput.propTypes = {
    __: PropTypes.func.isRequired,
    lastNoteCol: PropTypes.string.isRequired,
    getNotes: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

export default NoteInput;
