import React, { useEffect } from "react";
import "./NoteArea.styles.scss";
import AddNote from "../AddNote";
import NoteCard from "../NoteCard";
import PropTypes from "prop-types";
import SiteLoading from "../SiteLoading";

const NoteArea = ({ notes, __, loading }) => {
    const hasNotes = notes.length;
    return (
        <div className={`notes ${hasNotes ? "hasnotes" : "empty"}`}>
            <AddNote />
            {loading ? (
                <SiteLoading />
            ) : (
                <>
                    {notes.map((note) => (
                        <NoteCard key={note.id} note={note} />
                    ))}
                </>
            )}
            {!hasNotes && (
                <p className="notes__warning warning">
                    {__(`You don't have any notes`)}
                </p>
            )}
        </div>
    );
};

NoteArea.propTypes = {
    notes: PropTypes.array.isRequired,
    __: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default NoteArea;
