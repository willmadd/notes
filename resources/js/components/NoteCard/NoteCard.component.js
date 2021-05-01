import React, { useState } from "react";
import { dateFormat } from "../../settings";
import * as api from "../../api";
import { Link, useLocation, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { preloadRouteComponent } from "../../routes/lazyLoad";


const NoteCard = ({ note, locale, getNotes }) => {
    console.log('GGHGHG');
    const location = useLocation();

    const history = useHistory();

    const [error, setError] = useState();

    const [disableLink, setDisableLink] = useState(false);

    const { title, subtitle, colour, updated_at, id } = note;

    const edited = new Date(updated_at);

    const handleEditNote = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const { name } = e.target;
        history.push({pathname:`/edit/${name}`, state: {
            overlay: location,
            colour,
        }})
    };

    const handleDeleteNote = (e) => {
        e.stopPropagation();
        const { name } = e.target;
        api.deleteNote(name)
            .then((res) => {
                if (res.status === 202) {
                    getNotes();
                } else {
                    setError("An error occured");
                }
            })
            .catch((e) => {
                setError(`Error - ${e.message}`);
            });
    };

    return (
        <Link
            to={{
                pathname: disableLink ? `#` : `/note/${id}`,
                state: {
                    overlay: location,
                    colour,
                },
            }}
            onMouseEnter={()=>preloadRouteComponent(`/note/${id}`)}
            className="note note__card"
            style={{ backgroundColor: colour }}
        >
            <div className="note__content">
                <div className="note__actions">
                    <button
                        className="btn btn--action"
                        type="button"
                        onClick={(e) => handleEditNote(e)}
                        onMouseEnter={() => setDisableLink(true)}
                        onMouseLeave={() => setDisableLink(false)}
                    >
                        <img src="/images/edit.icon.svg" alt="edit note" name={id}/>
                    </button>
                    <button
                        type="button"
                        className={`btn btn--action`}
                        onClick={(e) => handleDeleteNote(e)}
                        onMouseEnter={() => setDisableLink(true)}
                        onMouseLeave={() => setDisableLink(false)}
                    >
                        <img
                            src="/images/delete.icon.svg"
                            name={id}
                            alt="edit note"
                        />
                    </button>
                </div>

                <h2 className={"note__text--title"}>{title}</h2>
                <h3 className={"note__text--subtitle"}>{subtitle}</h3>
                <p>
                    {edited.toLocaleDateString(locale, dateFormat)}
                </p>
                {error && <p>{error}</p>}
            </div>
        </Link>
    );
};

NoteCard.propTypes = {
    note:PropTypes.object.isRequired,
    locale:PropTypes.string.isRequired,
    getNotes:PropTypes.func.isRequired,
}


export default NoteCard;
