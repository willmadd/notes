import { connect } from "react-redux";
import NoteArea from "./NoteArea.component";
import { getNotes } from '../../store/notes/notes.actions';

const mapStateToProps = _state => {
    return {
        notes:_state.notesReducer.notes,
        loading: _state.notesReducer.loading,
    };
};

export default connect(mapStateToProps)(NoteArea);
